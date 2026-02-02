# Google Stitch MCP 설정 가이드

## 1. Google Cloud 프로젝트 설정

1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 새 프로젝트 만들기
   - 이름: `stitch-mcp` (아무거나)
   - 프로젝트 ID 복사해두기 (예: `stitch-mcp-485600`)

---

## 2. gcloud CLI 인증

```powershell
# 로그인
gcloud auth login

# 프로젝트 설정
gcloud config set project YOUR_PROJECT_ID

# Application Default Credentials 로그인
gcloud auth application-default login

# quota 프로젝트 설정
gcloud auth application-default set-quota-project YOUR_PROJECT_ID

# beta 컴포넌트 설치
gcloud components install beta

# Stitch API 활성화
gcloud beta services mcp enable stitch.googleapis.com --project=YOUR_PROJECT_ID
```

---

## 3. 프로젝트에 MCP 설정 (권장)

프로젝트 루트에 `.mcp.json` 파일 생성:

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

> **Note**: `stitch-mcp`는 비공식 패키지지만 토큰 자동 갱신 지원하고 기능이 더 많음
> - GitHub: https://github.com/Kargatharaakash/stitch-mcp

---

## 4. 연결 확인

```bash
claude
```

Claude Code 실행 후:

```
/mcp
```

`stitch · ✔ connected` 확인!

---

## 🛠️ 사용 가능한 도구

| Tool | 기능 |
|------|------|
| `extract_design_context` | 🧠 디자인 DNA 추출 (폰트, 색상, 레이아웃) |
| `fetch_screen_code` | 💾 HTML/CSS 코드 다운로드 |
| `fetch_screen_image` | 🖼️ 스크린샷 다운로드 |
| `generate_screen_from_text` | ✨ 새 화면 생성 |
| `list_projects` | 📋 프로젝트 목록 |
| `list_screens` | 📱 화면 목록 |

---

## 💡 핵심 사용법: Designer Flow

### 1단계: 디자인 DNA 추출
```
@stitch 홈 화면에서 디자인 컨텍스트 추출해서 DESIGN.md 작성해줘
```

### 2단계: 같은 스타일로 새 화면 생성
```
@stitch DESIGN.md 컨텍스트 사용해서 프로필 설정 화면 만들어줘
```

→ **기존 디자인과 일관된 스타일**로 새 화면 생성!

---

## 사용 예시

```
@stitch 피트니스 앱 홈 화면 만들어줘. 다크모드에 코랄 오렌지 포인트 컬러로.
```

```
@stitch 방금 만든 대시보드에서 디자인 컨텍스트 추출해줘
```

```
@stitch 이 디자인 시스템으로 운동 기록 상세 화면 만들어줘
```

---

## ⚠️ 주의사항

- 공식 MCP(`@_davideast/stitch-mcp`)는 토큰 만료 시 매번 재발급 필요
- 비공식 `stitch-mcp` 패키지가 토큰 자동 갱신 지원하므로 권장
- `.mcp.json`은 프로젝트별로 설정 (전역 설정보다 안정적)