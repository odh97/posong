'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useMemo } from 'react';

import { ChildrenType } from '@/common/types/common';

export const QueryProvider = ({ children }: { children: ChildrenType }) => {
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
