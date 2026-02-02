# Fitness Dashboard Design System

## Overview
피트니스 앱 홈 대시보드를 위한 디자인 시스템 문서입니다.

---

## Theme

| 속성 | 값 |
|------|-----|
| Mode | Dark |
| Device | Mobile |
| Roundness | 8px (Round) |

---

## Color Palette

### Primary Colors
| 이름 | HEX | 용도 |
|------|-----|------|
| Primary (Coral Orange) | `#fb7051` | 액센트, 버튼, 프로그레스, 활성 상태 |
| Background Dark | `#23130f` | 다크모드 배경 |
| Background Light | `#f8f6f5` | 라이트모드 배경 |

### Semantic Colors
| 이름 | 값 | 용도 |
|------|-----|------|
| Text Primary | `white` | 주요 텍스트 |
| Text Secondary | `white/60` | 보조 텍스트 |
| Text Muted | `white/40` | 비활성 텍스트 |
| Surface | `white/5` | 카드 배경 |
| Border | `white/10` | 카드 테두리 |
| Primary Muted | `primary/10` | 프로그레스 배경 |
| Primary Accent | `primary/20` | 그라데이션, 하이라이트 |

---

## Typography

### Font Family
- **Primary:** Lexend (Google Fonts)
- **Fallback:** Noto Sans

### Font Sizes
| 용도 | 크기 | 굵기 | 스타일 |
|------|------|------|--------|
| Hero Number | `text-4xl` | Bold | - |
| Heading | `text-2xl` | Bold | tracking-tight |
| Section Title | `text-xl` | Bold | - |
| Body | `text-lg` | Bold | - |
| Label | `text-sm` | Medium | - |
| Caption | `text-xs` | Medium | uppercase, tracking-widest |
| Micro | `text-[10px]` | Bold | uppercase |

---

## Spacing

### Padding
| 용도 | 값 |
|------|-----|
| Page Horizontal | `px-6` (24px) |
| Card Internal | `p-4` ~ `p-5` |
| Section Vertical | `py-4` ~ `py-8` |

### Gap
| 용도 | 값 |
|------|-----|
| Grid Items | `gap-3` (12px) |
| Inline Elements | `gap-2` (8px) |
| Card Content | `gap-4` (16px) |

---

## Border Radius

| 용도 | 값 |
|------|-----|
| Default | `0.25rem` (4px) |
| Large | `0.5rem` (8px) |
| XL | `0.75rem` (12px) |
| Cards | `rounded-xl` |
| Buttons | `rounded-xl` |
| Avatar | `rounded-full` |
| FAB | `rounded-full` |

---

## Components

### Progress Ring
```css
- Size: 192x192px (w-48 h-48)
- Stroke Width: 12px
- Radius: 80px
- Animation: stroke-dashoffset 0.35s
- Transform: rotate(-90deg)
```

### Stat Card
```
- Background: white/5
- Border: 1px solid white/10
- Padding: 16px
- Border Radius: xl
- Layout: flex-col, items-center
- Icon: Material Symbols, text-2xl, text-primary
```

### Action Button
```
- Background: primary/5
- Border: 1px solid primary
- Text: primary
- Padding: px-4 py-3
- Border Radius: xl
- Icon: Material Symbols, text-xl
```

### Workout Card
```
- Background: gradient (from-primary/20 to-transparent)
- Border: 1px solid primary/20
- Padding: 20px
- Border Radius: 2xl
- Icon Container: bg-primary, size-12, rounded-xl
```

### Bottom Navigation
```
- Background: background-dark/80
- Backdrop: blur-lg
- Border Top: 1px solid white/5
- Padding: px-8 py-4
- FAB: size-14, -mt-10, shadow-lg shadow-primary/40
```

---

## Icons

### Library
- **Material Symbols Outlined**
- Weight: 100-700
- Fill: 0-1

### Used Icons
| 아이콘 | 용도 |
|--------|------|
| `directions_run` | 걸음수 |
| `local_fire_department` | 칼로리 |
| `timer` | 활동 시간 |
| `fitness_center` | 운동 시작 |
| `restaurant_menu` | 식사 기록 |
| `water_drop` | 물 섭취 |
| `bolt` | HIIT 운동 |
| `chevron_right` | 더보기 |
| `home` | 홈 (활성) |
| `analytics` | 통계 |
| `add` | 추가 (FAB) |
| `notifications` | 알림 |
| `settings` | 설정 |

---

## Layout

### Screen Structure
```
1. Header (sticky, z-10)
   - Greeting + User Avatar

2. Progress Section
   - Circular Progress Ring
   - Motivational Text

3. Stats Grid (3 columns)
   - Steps / Calories / Minutes

4. Quick Actions (horizontal scroll)
   - Start Workout / Log Meal / Track Water

5. Weekly Activity
   - Section Header + Chart

6. Upcoming Workout Card
   - Workout Info + CTA

7. Bottom Navigation (fixed)
   - 5 items with center FAB
```

### Grid System
- Max Width: `max-w-md` (448px)
- Stats: `grid-cols-3`
- Chart: `grid-cols-7`

---

## Effects

### Shadows
| 용도 | 값 |
|------|-----|
| FAB | `shadow-lg shadow-primary/40` |

### Backdrop
| 용도 | 값 |
|------|-----|
| Navigation | `backdrop-blur-lg` |

### Transitions
| 용도 | 값 |
|------|-----|
| Progress Ring | `stroke-dashoffset 0.35s` |
| Buttons | `transition-colors` |

### Gradients
| 용도 | 값 |
|------|-----|
| Workout Card | `bg-gradient-to-br from-primary/20 to-transparent` |

---

## Tailwind Config

```javascript
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#fb7051",
        "background-light": "#f8f6f5",
        "background-dark": "#23130f",
      },
      fontFamily: {
        "display": ["Lexend"]
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
    },
  },
}
```

---

## Resources

- **Fonts:** [Google Fonts - Lexend](https://fonts.google.com/specimen/Lexend)
- **Icons:** [Material Symbols](https://fonts.google.com/icons)
- **CSS Framework:** [Tailwind CSS](https://tailwindcss.com)
