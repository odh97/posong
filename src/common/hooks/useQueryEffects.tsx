import type { UseQueryResult } from '@tanstack/react-query';
import { useEffect, useRef } from 'react';

/**
 * 쿼리 결과에 따른 사이드 이펙트를 관리하는 커스텀 훅
 * @param query - React Query의 useQuery 결과
 * @param options - 쿼리 상태에 반응할 콜백 함수들
 * @returns 원본 쿼리 객체를 그대로 반환
 */

interface PrevStateType<TData, TError> {
  isSuccess: boolean;
  isError: boolean;
  data: TData | undefined;
  error: TError | null;
}

interface UseQueryEffectsOptions<TData, TError> {
  onSuccess?: (data: TData) => void;
  onError?: (error: TError) => void;
  onSettled?: (data: TData | undefined, error: TError | null) => void;
  onFirstFetch?: (data: TData) => void;
  onUpdateFetch?: (data: TData) => void;
}

export const useQueryEffects = <TData, TError = Error>(
  query: UseQueryResult<TData, TError>,
  options: UseQueryEffectsOptions<TData, TError>
) => {
  const { isSuccess, isError, data, error, dataUpdatedAt } = query;
  const { onSuccess, onError, onSettled, onFirstFetch, onUpdateFetch } = options;

  // 이전 상태를 추적하기 위한 ref
  const prevStateRef = useRef<PrevStateType<TData, TError>>({ isSuccess: false, isError: false, data: undefined, error: null });
  const prevDataAtRef = useRef(0);

  useEffect(() => {
    const prevState = prevStateRef.current;

    // 성공 상태 확인 및 콜백 실행 (새로운 성공 상태일 때만)
    if (isSuccess && onSuccess && !prevState.isSuccess) {
      // console.log('onSuccess');
      onSuccess(data);
    }

    // 에러 상태 확인 및 콜백 실행 (새로운 에러 상태일 때만)
    if (isError && onError && !prevState.isError) {
      // console.log('onError');
      onError(error);
    }

    // 완료 상태(성공 또는 에러) 확인 및 콜백 실행 (새로운 완료 상태일 때만)
    if ((isSuccess || isError) && onSettled && !(prevState.isSuccess || prevState.isError)) {
      // console.log('onSettled');
      onSettled(data, error);
    }

    // 현재 상태 저장
    prevStateRef.current = { isSuccess, isError, data, error };
  }, [isSuccess, isError, data, error, onSuccess, onError, onSettled, onFirstFetch, onUpdateFetch]);

  // 데이터 업데이트 시점에 따른 콜백 실행
  useEffect(() => {
    // 최초 데이터가 fetch되지 않았거나, 이전 데이터와 동일한 경우에는 아무 작업도 수행하지 않음
    if (dataUpdatedAt === 0 || dataUpdatedAt === prevDataAtRef.current) {
      return;
    }

    // 최초 데이터 fetch 시점에 대한 콜백
    if (isSuccess && onFirstFetch && prevDataAtRef.current === 0) {
      // console.log('onFirstFetch');
      onFirstFetch(data);
    }

    // 데이터 업데이트 시점에 대한 콜백
    if (isSuccess && onUpdateFetch && prevDataAtRef.current !== 0) {
      // console.log('onUpdateFetch');
      onUpdateFetch(data);
    }

    prevDataAtRef.current = dataUpdatedAt;
  }, [isSuccess, dataUpdatedAt, data, onFirstFetch, onUpdateFetch]);
};
