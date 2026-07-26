// queryKey factory — invalidation의 단일 진실 공급원

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { fetchGetUserProfile, fetchPostLogin } from '@/service/userService';
import { LoginRequest } from '@/service/userService.type';

// useQuery key 정리
// queryKey - 캐시를 관리하는 key로 배열로 정의
// queryFn - 데이터를 가져오는 함수
// staleTime - 데이터가 신선한 상태로 간주되는 시간(ms), 이 시간 동안은 캐시된 데이터를 사용
// enabled - 쿼리 활성화 여부, false면 쿼리 실행 안함
// select - 쿼리 결과를 변환하는 함수, 데이터를 가공할 때 사용
//

// // 조회 훅
// export const useLessonList = params => {
//   return useQuery({
//     queryKey: lessonKeys.list(params),
//     queryFn: () => lessonApi.fetchList(params),
//     staleTime: 60_000,
//   });
// };

// export const useLessonDetail = id => {
//   return useQuery({
//     queryKey: lessonKeys.detail(id),
//     queryFn: () => lessonApi.fetchDetail(id),
//     enabled: !!id,
//   });
// };

// // 변경 훅 — invalidation까지 훅 안에서 책임짐
// export const useUpdateLesson = () => {
//   const queryClient = useQueryClient();

//   return useMutation({
//     mutationFn: lessonApi.update,
//     onSuccess: (_, variables) => {
//       queryClient.invalidateQueries({ queryKey: lessonKeys.detail(variables.id) });
//       queryClient.invalidateQueries({ queryKey: lessonKeys.lists() });
//     },
//   });
// };

export const usePostLogin = (data: LoginRequest) => {
  return useMutation({
    mutationFn: () => fetchPostLogin(data),
  });
};

export const useGetUserProfile = () => {
  return useQuery({
    queryKey: ['user-profile'],
    queryFn: () => fetchGetUserProfile(),
  });
};
