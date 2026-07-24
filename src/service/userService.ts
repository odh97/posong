// userService
import { requestApi } from '@/common/lib/axios';
import { LoginRequest } from '@/service/userService.type';

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
