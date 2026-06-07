'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useMemo } from 'react';

import { childrenType } from '@/common/type/common';

export const QueryProvider = ({ children }: { children: childrenType }) => {
  const queryClient = useMemo(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: (failureCount: number) => failureCount < 2,
            refetchOnWindowFocus: false,
          },
          mutations: {
            retry: (failureCount: number) => failureCount < 2,
          },
        },
      }),
    []
  );

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
