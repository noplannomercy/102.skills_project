# Stitch → Next.js 변환 워크플로우

## 개요

Google Stitch MCP로 생성한 UI 디자인을 Next.js 프로젝트로 변환하는 워크플로우.

---

## 사전 준비

### 1. Next.js 프로젝트 생성

```bash
npx create-next-app@latest my-app --typescript --tailwind --app --src-dir
cd my-app
```

### 2. MCP 설정 파일 복사

프로젝트 루트에 `.mcp.json` 생성:

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

### 3. Claude Code 실행

```bash
claude
```

`/mcp`로 stitch 연결 확인

---

## 워크플로우

### Step 1: 디자인 생성

```
@stitch 피트니스 앱 홈 대시보드 만들어줘. 다크모드에 코랄 오렌지 포인트 컬러로.
```

### Step 2: 디자인 DNA 추출 (선택)

일관된 스타일로 여러 화면 만들 때:

```
@stitch 방금 만든 화면에서 디자인 컨텍스트 추출해서 DESIGN.md 작성해줘
```

### Step 3: 코드 추출 + Next.js 변환

**방법 A: 한 번에 요청**
```
@stitch 대시보드 코드 가져와서 src/components/Dashboard.tsx로 변환해줘. 
Next.js App Router, TypeScript, Tailwind CSS 사용.
```

**방법 B: 단계별 요청**
```
# 1. 코드 추출
@stitch 대시보드 HTML 코드 가져와줘

# 2. 변환 요청
이 HTML을 Next.js App Router 컴포넌트로 변환해줘.
- TypeScript 사용
- Tailwind CSS 유지
- src/components/Dashboard.tsx로 저장
```

### Step 4: 페이지 연결

```
src/app/page.tsx에서 Dashboard 컴포넌트 import해서 렌더링해줘
```

또는 별도 라우트:

```
src/app/dashboard/page.tsx 만들어서 Dashboard 컴포넌트 렌더링해줘
```

### Step 5: 실행 확인

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 확인

---

## 실전 예시: 피트니스 앱

### 1. 대시보드 화면

```
@stitch 피트니스 앱 홈 대시보드 만들어줘.
- 다크모드, 코랄 오렌지(#fb7051) 포인트
- 프로그레스 링으로 일일 목표 표시
- 걸음수, 칼로리, 운동시간 카드
- 하단 네비게이션
```

```
@stitch 대시보드 코드 가져와서 src/components/Dashboard.tsx로 변환해줘
```

### 2. 워크아웃 상세 화면

```
@stitch DESIGN.md 컨텍스트 사용해서 운동 기록 상세 화면 만들어줘
```

```
@stitch 워크아웃 상세 코드 가져와서 src/components/WorkoutDetail.tsx로 변환해줘
```

```
src/app/workout/page.tsx 만들어서 WorkoutDetail 컴포넌트 렌더링해줘
```

### 3. 추가 화면들

같은 패턴으로:
- 프로필 설정: `src/components/Profile.tsx` → `src/app/profile/page.tsx`
- 운동 목록: `src/components/WorkoutList.tsx` → `src/app/workouts/page.tsx`
- 통계: `src/components/Stats.tsx` → `src/app/stats/page.tsx`

---

## 프로젝트 구조

```
my-app/
├── src/
│   ├── app/
│   │   ├── page.tsx              # 홈 (Dashboard)
│   │   ├── layout.tsx            # 루트 레이아웃
│   │   ├── globals.css           # 글로벌 스타일
│   │   ├── workout/
│   │   │   └── page.tsx          # 워크아웃 상세
│   │   ├── profile/
│   │   │   └── page.tsx          # 프로필
│   │   └── stats/
│   │       └── page.tsx          # 통계
│   └── components/
│       ├── Dashboard.tsx
│       ├── WorkoutDetail.tsx
│       ├── Profile.tsx
│       └── Stats.tsx
├── .mcp.json                      # Stitch MCP 설정
├── DESIGN.md                      # 디자인 시스템 (선택)
└── package.json
```

---

## 팁

### 1. 디자인 일관성 유지

첫 화면 만든 후 반드시 DESIGN.md 추출:
```
@stitch 디자인 컨텍스트 추출해서 DESIGN.md 작성해줘
```

이후 화면들은 이 컨텍스트 기반으로 생성.

### 2. 컴포넌트 분리

큰 화면은 서브 컴포넌트로 분리 요청:
```
Dashboard를 Header, StatsCard, QuickActions, BottomNav 컴포넌트로 분리해줘
```

### 3. 인터랙션 추가

Stitch 코드는 정적 UI만 제공. 상태 관리 추가 요청:
```
Dashboard에 useState로 걸음수 업데이트 기능 추가해줘
```

### 4. 반응형 처리

모바일 우선으로 만들어지므로 데스크톱 대응 추가:
```
Dashboard를 데스크톱에서 2컬럼 레이아웃으로 조정해줘
```

---

## 문제 해결

### MCP 연결 안 됨

```bash
# 연결 상태 확인
/mcp

# 재연결
claude mcp remove stitch -s project
# .mcp.json 확인 후 다시 시도
```

### 스타일 깨짐

Tailwind 설정 확인:
```js
// tailwind.config.ts
content: [
  './src/**/*.{js,ts,jsx,tsx,mdx}',
]
```

### 아이콘 안 보임

Material Symbols 폰트 추가:
```tsx
// src/app/layout.tsx
import '@fontsource/material-symbols-outlined';
```

또는 CDN:
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet" />
```

---

## 요약

```
1. @stitch [디자인 요청]           → 디자인 생성
2. @stitch 디자인 컨텍스트 추출     → DESIGN.md
3. @stitch 코드 가져와서 변환      → TSX 컴포넌트
4. 페이지 연결                     → app/[route]/page.tsx
5. npm run dev                    → 실행 확인
```

**핵심:** Stitch로 디자인 → Claude Code로 Next.js 변환 → 바로 개발!