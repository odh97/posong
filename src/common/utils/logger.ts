/**
 * 개발 환경에서만 로그를 출력하는 기능을 제공합니다.
 */
const loggerFactory = () => {
  const isDev = process.env.NEXT_PUBLIC_MODE === 'dev';

  if (!isDev) {
    const noop = () => {};
    return {
      log: noop,
      info: noop,
      debug: noop,
      warn: noop,
      error: noop,
    };
  }

  return {
    log: console.log.bind(console),
    info: console.info.bind(console),
    debug: console.debug.bind(console),
    warn: console.warn.bind(console),
    error: console.error.bind(console),
  };

  // return {
  //   log: () => {},
  //   info: () => {},
  //   debug: () => {},
  //   warn: () => {},
  //   error: () => {},
  // };
};

export const Logger = loggerFactory();
