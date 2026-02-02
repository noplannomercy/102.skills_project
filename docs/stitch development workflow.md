# Stitch 통합 개발 워크플로우

## 개요

Stitch를 실제 Next.js 프로젝트 개발에 통합하는 워크플로우.

**핵심 원칙:**
- 디자인 반복 작업 → Stitch 웹
- 문서/코드 추출 → Claude Code + MCP

---

## 워크플로우

### 1. 환경설정

```bash
# Next.js + shadcn 설치
npx create-next-app@latest my-app --typescript --tailwind --app --src-dir
cd my-app
npx shadcn@latest init
```

`.mcp.json` 추가:
```json
{
  "mcpServers": {
    "stitch": {
      "command": "npx",
      "args": ["-y", "stitch-mcp"],
      "env": {
        "GOOGLE_CLOUD_PROJECT": "YOUR_PROJECT_ID"
      }
    }
  }
}
```

---

### 2. SRS 분석

Claude Code에서:
- 요구사항 분석
- 화면 목록 도출

**산출물:**
- 기능 목록
- 필요한 화면 리스트

---

### 3. 디자인 (Stitch 웹)

**stitch.withgoogle.com 에서 작업**

- 화면별 프로토타입 생성
- 반복 수정 → 확정
- 모든 화면 완성될 때까지 반복

**주의:**
- 여기서는 디자인만 (반복 작업)
- 코드 추출은 아직 안 함

---

### 4. 문서 작성 (Claude Code + MCP)

확정된 디자인 기반으로:

```bash
claude
```

**4-1. DESIGN.md 추출**
```
@stitch 메인 화면에서 디자인 컨텍스트 추출해서 DESIGN.md 작성해줘
```

**4-2. 화면설계서 작성**
```
@stitch 전체 화면 스크린샷 가져와서 화면설계서 만들어줘
```

**4-3. implementation.md 작성**

implementation.md에 명시:
```markdown
## UI 구현 방법

1. MCP로 Stitch 코드 fetch
   - @stitch fetch_screen_code [화면명]

2. Next.js 컴포넌트로 변환
   - TypeScript + Tailwind CSS
   - src/components/[화면명].tsx

3. 페이지 연결
   - src/app/[route]/page.tsx
```

**산출물:**
- DESIGN.md (디자인 시스템)
- 화면설계서 (스크린샷 + 설명)
- implementation.md (구현 가이드)

---

### 5. 구현 (Claude Code + MCP)

implementation.md 따라서:

**5-1. 코드 가져오기**
```
@stitch [화면명] 코드 가져와줘
```

**5-2. Next.js 변환**
```
이 코드 src/components/[화면명].tsx로 변환해줘
Next.js App Router, TypeScript, Tailwind CSS 사용
```

**5-3. 페이지 연결**
```
src/app/[route]/page.tsx 만들어서 [화면명] 컴포넌트 렌더링해줘
```

**5-4. 로직 추가**
- 상태 관리
- API 연결
- 이벤트 핸들러

---

## 요약

| 단계 | 작업 | 도구 |
|------|------|------|
| 1. 환경설정 | Next.js + shadcn + MCP | 터미널 |
| 2. SRS 분석 | 요구사항, 화면 목록 | Claude Code |
| 3. 디자인 | 프로토타입, 반복 수정 | **Stitch 웹** |
| 4. 문서 작성 | DESIGN.md, 화면설계서 | Claude Code + **MCP** |
| 5. 구현 | 코드 fetch, 변환 | Claude Code + **MCP** |

---

## 핵심 포인트

1. **디자인은 Stitch 웹에서** - 반복 수정이 필요하니까
2. **MCP는 fetch 용도** - 확정된 디자인 가져다 쓰기
3. **문서 작성 시 MCP 활용** - DESIGN.md, 화면설계서 자동 추출
4. **구현은 implementation.md 따라** - 일관된 방식으로