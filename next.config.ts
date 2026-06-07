import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 로그 설정 - 브라우저에서 터미널로 로그를 전송하도록 설정(16.2 최신 버전 반영 / 구버전은 안될 수도 있음)
  logging: {
    browserToTerminal: true,
  },
};

export default nextConfig;
