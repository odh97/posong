// userService
import { LoginRequest } from '@/common/types/service/userService.type';
import { requestApi } from '@/lib/axios';

// 로그인 API 요청
export const login = async (data: LoginRequest) => {
  return requestApi({
    url: '/api/users/login',
    method: 'POST',
    data,
  });
};

// User profile API 요청
export const getUserProfile = async () => {
  return requestApi({
    url: '/user/profile',
    method: 'GET',
  });
};
