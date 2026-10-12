## 공용 에이전트 지침

- 작업을 시작하기 전에 `C:\project\ai-agents\AGENTS.md`를 먼저 읽고 공용 에이전트 지침을 따른다.
- 작업과 직접 관련된 표준이나 스킬이 `C:\project\ai-agents\jobs\my\`에 있으면 해당 문서를 확인한 뒤 작업한다.
- 공용 지침과 이 프로젝트의 규칙이 충돌하면 이 `AGENTS.md`의 프로젝트 전용 규칙을 우선한다.

## Git Worktree 작업

- 사용자가 코드 변경 작업을 Git worktree로 생성하거나 분리해 달라고 요청하면 `C:\project\ai-agents\jobs\my\03_skills\git-worktree-task\SKILL.md`를 먼저 읽고 해당 절차를 따른다.
- worktree 생성에는 위 스킬과 함께 제공되는 `scripts/new-worktree.ps1`을 사용한다.
- 중앙 스킬 경로를 읽을 수 없으면 임의로 대체 절차를 실행하지 말고 사용자에게 알린다.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know (https://nextjs.org/blog/next-16-2-ai)

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

<!-- END:nextjs-agent-rules -->
