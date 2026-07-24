'use client';
import { useEffect, useState } from 'react';

/**
 * 입력값이 변경되고 일정 시간(delay) 후에 디바운스된 값을 반환.
 *
 * @param {*} value - 디바운스할 값
 * @param {number} delay - 지연 시간 (ms)
 * @returns {*} 디바운스된 값
 */
const useDebounce = (value: string | number, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
