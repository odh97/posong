export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'chore', // 작업 자체에 영향을 주지 않는 변경사항 (패키지 업데이트, 빌드 스크립트 변경 등)
        'feat', // 새로운 기능 추가
        'fix', // 버그 수정
        'refactor', // 코드 리팩토링
        'docs', // 문서 수정
        'style', // ui 스타일 변경 (코드 변경 없이 스타일만 변경)
        'test', // 테스트 추가 또는 수정
        'ci', // GitHub Actions, Jenkins, GitLab CI 등 CI/CD 설정 변경
        'perf', // 성능 개선
        'build', // Next.js, Webpack, Vite, Babel 등 빌드 설정 변경
      ],
    ],
  },
};
