import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import prettierConfig from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...tseslint.configs.recommended,
  {
    plugins: {
      unicorn,
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }], // console.warn과 console.error는 허용, 나머지는 경고로 설정
      eqeqeq: 'error', // 엄격한 동등 비교를 강제하여 예기치 않은 타입 변환을 방지 (== 금지)

      '@typescript-eslint/no-explicit-any': 'warn', // any 사용을 경고로 설정
      '@typescript-eslint/no-unused-vars': 'warn', // 사용하지 않는 변수에 대한 경고 설정

      'simple-import-sort/imports': 'error', // import 정렬 규칙을 오류로 설정
      'simple-import-sort/exports': 'error', // export 정렬 규칙을 오류로 설정

      'no-else-return': 'error', // else 블록 없이 return을 사용하도록 권장
      'max-depth': ['error', 3], // 최대 블록 깊이를 2로 제한하여 코드의 복잡성을 줄임

      'unicorn/no-for-loop': 'error', // for 루프 대신 랙(for-of, for-in, forEach 등)을 사용하도록 권장

      // const item = arr.filter(x => x.id === id)[0] ❌
      // const item = arr.find(x => x.id === id) ✅
      'unicorn/prefer-array-find': 'error',

      // arr.reduce((acc, x) => acc.concat(x.items), []) ❌
      // arr.flatMap(x => x.items) ✅
      'unicorn/prefer-array-flat-map': 'error',

      // arr.filter(x => x.active).length > 0 ❌
      // arr.some(x => x.active) ✅
      'unicorn/prefer-array-some': 'error',

      // arr.indexOf(item) !== -1 ❌
      // arr.includes(item) ✅
      'unicorn/prefer-includes': 'error',

      // /^https/.test(url) ❌
      // url.startsWith('https') ✅
      'unicorn/prefer-string-starts-ends-with': 'error',

      // const value = foo ? foo : bar ❌
      // const value = foo || bar ✅
      'unicorn/prefer-logical-operator-over-ternary': 'error',

      // const value = condition ? true : false ❌
      // const value = !!condition ✅
      'unicorn/prefer-ternary': 'error',

      'unicorn/no-null': 'error', // null 대신 undefined 사용을 권장

      // Next.js에서 끄는게 필수
      'unicorn/prevent-abbreviations': 'off', // react / next.js에서는 관용어로 사용되는 약어들이 많아서 끄는게 좋음
      'unicorn/filename-case': 'off', // Next.js에서는 파일명에 대문자도 많이 사용하기 때문에 끄는게 좋음
    },
  },
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts', 'commitlint.config.mjs']),
  prettierConfig,
]);

export default eslintConfig;
