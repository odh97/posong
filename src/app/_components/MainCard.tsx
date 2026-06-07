'use client';

import { Logger } from '@/common/utile/logger';

export function MainCard() {
  Logger.log(`MainCard - ${process.env.NEXT_PUBLIC_MODE}`);

  return <div>MainCard</div>;
}
