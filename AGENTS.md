## 공용 에이전트 지침

- 작업을 시작하기 전에 `C:\project\ai-agents\jobs\my\AGENTS.md`를 읽고 개인 작업 공간 지침을 따른다.
- 코드 또는 실행 설정 작업은 `C:\project\ai-agents\jobs\my\02_standards\task-routing.md`에서 변경 유형에 해당하는 표준을 선택해 확인한다. 작업과 직접 관련된 스킬이 `C:\project\ai-agents\jobs\my\03_skills\`에 있으면 해당 절차를 확인한다.
- 공용 지침과 이 프로젝트의 규칙이 충돌하면 이 `AGENTS.md`의 프로젝트 전용 규칙을 우선한다.
- 필수 공용 문서를 읽을 수 없으면 경로와 적용하지 못한 규칙을 보고하고, 읽은 것으로 간주하지 않는다.
- 공용 표준의 프로젝트별 예외와 적용 범위: 없음

## 자체 검증

- 코드 또는 실행 설정을 변경하면 Claude 검수 전에 프로젝트 루트에서 `pnpm lint`와 `pnpm exec tsc --noEmit`을 실행한다.
- 라우트·레이아웃·서버 코드, 빌드 설정 또는 의존성을 변경하면 `pnpm build`도 실행한다. 빌드는 기본 정적 검사를 대체하지 않는다.
- 화면이나 사용자 흐름을 변경하면 개발 서버에서 해당 화면과 변경한 동작을 확인한다. 반응형이나 테마를 변경한 경우 해당 화면 크기와 지원 테마도 확인한다.
- 변경과 관련된 기존 자동 테스트가 있으면 해당 테스트를 실행한다. 존재하지 않는 테스트 명령을 추측하지 않는다.
- 완료 보고에는 실행한 명령과 결과, 동작 확인 내용, 실패하거나 실행하지 못한 검증과 그 사유를 포함한다. 필수 검증에 실패하거나 실행하지 못한 경우 검증 완료로 보고하지 않는다.
- 문서만 변경한 경우 애플리케이션 검사와 테스트는 생략하고 문서의 링크와 참조 경로를 확인한다.

## Git Worktree 작업

- 사용자가 코드 변경 작업을 Git worktree로 생성하거나 분리해 달라고 요청하면 `C:\project\ai-agents\jobs\my\03_skills\git-worktree-task\SKILL.md`를 먼저 읽고 해당 절차를 따른다.
- worktree 생성에는 위 스킬과 함께 제공되는 `scripts/new-worktree.ps1`을 사용한다.
- 중앙 스킬 경로를 읽을 수 없으면 임의로 대체 절차를 실행하지 말고 사용자에게 알린다.

## 통합 허브 동기화 명령

- 사용자가 `허브 동기화`라고 입력하면 현재 작업을 잠시 중단하고 다음 절차를 수행한다.
  1. 현재 프로젝트의 `AGENTS.md`와 현재 작업에 관련된 프로젝트 문서를 다시 읽는다.
  2. `C:\project\ai-agents\jobs\my\AGENTS.md`, `C:\project\ai-agents\README.md`와 현재 작업에 관련된 허브 문서를 다시 읽는다.
  3. 기존 대화에서 기억하거나 요약한 내용보다 현재 파일시스템의 내용을 우선한다.
  4. 다시 읽은 문서 사이의 충돌과 현재 작업에 미치는 영향을 점검한다.
  5. 충돌이 있으면 충돌 내용과 영향을 사용자에게 설명하고 적용 기준을 확인한다.
  6. 충돌이 없으면 다시 읽은 문서와 변경된 주요 기준을 간단히 보고하고 최신 기준으로 작업을 계속한다.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know (https://nextjs.org/blog/next-16-2-ai)

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->
