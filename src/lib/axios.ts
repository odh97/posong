import axios from 'axios';

import { Logger } from '@/common/utile/logger';

export const requestApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8;',
    'Access-Control-Allow-Origin': '*',
  },
  withCredentials: true,
  timeout: 20000,
});

// 요청 인터셉터 설정
requestApi.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// 응답 인터셉터 설정
requestApi.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      Logger.log('axios error', error);
    }
    return Promise.reject(error);
  }
);
