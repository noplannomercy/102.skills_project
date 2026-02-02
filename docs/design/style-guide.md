# Vegerly Design System - Style Guide

## Design Philosophy

Our design system embodies **freshness, health, and natural vitality**. Inspired by the vibrant greens of fresh produce and the clean simplicity of modern wellness brands, every element reflects our commitment to healthy living.

### Core Principles

1. **Fresh & Organic** - Rounded corners, soft shadows, and organic shapes
2. **Clean & Minimal** - Generous whitespace, focused content, clear hierarchy
3. **Vibrant & Alive** - Bold green accents, high-quality imagery, dynamic compositions
4. **Trustworthy & Professional** - Consistent typography, accessible contrast, refined details

---

## Color System

### Primary Colors

Our primary green represents freshness, health, and growth.

```css
--color-primary-50:  #f0fdf4
--color-primary-100: #dcfce7
--color-primary-200: #bbf7d0
--color-primary-300: #86efac
--color-primary-400: #7cc84e  /* Brand Green */
--color-primary-500: #6bb342
--color-primary-600: #16a34a
--color-primary-700: #15803d
--color-primary-800: #166534
--color-primary-900: #14532d
```

**Usage:**
- `primary-400` - Primary CTA buttons, icons, badges
- `primary-500` - Hover states, active states
- `primary-600` - Links, accent text
- `primary-50/100` - Subtle backgrounds, highlights

### Neutral Colors

Our neutrals provide calm, sophisticated foundations.

```css
--color-neutral-50:  #fafafa
--color-neutral-100: #f5f5f5
--color-neutral-200: #e5e5e5
--color-neutral-300: #d4d4d4
--color-neutral-400: #a3a3a3
--color-neutral-500: #737373
--color-neutral-600: #525252
--color-neutral-700: #404040
--color-neutral-800: #262626
--color-neutral-900: #171717
--color-neutral-950: #0a0a0a
```

**Usage:**
- `neutral-900/950` - Headings, primary text
- `neutral-600/700` - Body text
- `neutral-400/500` - Secondary text, placeholders
- `neutral-50/100` - Backgrounds, cards

### Semantic Colors

```css
/* Success */
--color-success-400: #4ade80
--color-success-500: #22c55e
--color-success-600: #16a34a

/* Warning */
--color-warning-400: #fbbf24
--color-warning-500: #f59e0b
--color-warning-600: #d97706

/* Error */
--color-error-400: #f87171
--color-error-500: #ef4444
--color-error-600: #dc2626

/* Info */
--color-info-400: #60a5fa
--color-info-500: #3b82f6
--color-info-600: #2563eb
```

### Background System

```css
--bg-page: #fafafa          /* Page background */
--bg-surface: #ffffff       /* Card/panel background */
--bg-surface-hover: #f5f5f5 /* Hover state */
--bg-overlay: rgba(0, 0, 0, 0.4) /* Modal overlays */
```

---

## Typography

### Font Families

```css
--font-display: var(--font-geist-sans)  /* Headings, hero text */
--font-body: var(--font-geist-sans)     /* Body text, UI */
--font-mono: var(--font-geist-mono)     /* Code, numbers */
```

**Geist Sans** provides exceptional readability with a modern, clean aesthetic perfect for our wellness-focused brand.

### Type Scale

Based on a 1.25 ratio (Major Third) for harmonious scaling:

```css
/* Display */
--text-display-xl: 4.5rem (72px)    /* Hero headlines */
--text-display-lg: 3.75rem (60px)   /* Page titles */
--text-display-md: 3rem (48px)      /* Section headers */

/* Headings */
--text-h1: 2.5rem (40px)
--text-h2: 2rem (32px)
--text-h3: 1.5rem (24px)
--text-h4: 1.25rem (20px)
--text-h5: 1.125rem (18px)

/* Body */
--text-body-lg: 1.125rem (18px)     /* Large body, intro text */
--text-body-md: 1rem (16px)         /* Default body text */
--text-body-sm: 0.875rem (14px)     /* Small text, captions */
--text-body-xs: 0.75rem (12px)      /* Labels, meta */
```

### Font Weights

```css
--font-normal: 400      /* Body text */
--font-medium: 500      /* Emphasis, buttons */
--font-semibold: 600    /* Subheadings, strong emphasis */
--font-bold: 700        /* Headings */
```

### Line Heights

```css
--leading-tight: 1.2    /* Headings */
--leading-snug: 1.4     /* Subheadings */
--leading-normal: 1.6   /* Body text */
--leading-relaxed: 1.75 /* Long-form content */
```

### Letter Spacing

```css
--tracking-tight: -0.02em   /* Large headings */
--tracking-normal: 0        /* Body text */
--tracking-wide: 0.02em     /* Small caps, labels */
```

---

## Spacing System

8px base unit for consistent, rhythmic spacing:

```css
--space-1: 0.25rem (4px)
--space-2: 0.5rem (8px)
--space-3: 0.75rem (12px)
--space-4: 1rem (16px)
--space-5: 1.25rem (20px)
--space-6: 1.5rem (24px)
--space-8: 2rem (32px)
--space-10: 2.5rem (40px)
--space-12: 3rem (48px)
--space-16: 4rem (64px)
--space-20: 5rem (80px)
--space-24: 6rem (96px)
--space-32: 8rem (128px)
```

**Usage Guidelines:**
- Component padding: `4-6` (16-24px)
- Vertical rhythm: `6-8` (24-32px)
- Section spacing: `12-20` (48-80px)
- Page margins: `16-32` (64-128px)

---

## Border Radius

Soft, organic curves throughout:

```css
--radius-sm: 0.375rem (6px)     /* Small elements, badges */
--radius-md: 0.5rem (8px)       /* Buttons, inputs */
--radius-lg: 0.75rem (12px)     /* Cards, panels */
--radius-xl: 1rem (16px)        /* Feature cards */
--radius-2xl: 1.5rem (24px)     /* Hero sections */
--radius-full: 9999px           /* Pills, avatars */
```

**Default:** Most components use `radius-lg` (12px) for cohesive roundness.

---

## Shadows

Layered shadows for depth and elevation:

```css
/* Subtle elevation */
--shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.04)

/* Default cards */
--shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.06),
             0 1px 2px rgba(0, 0, 0, 0.04)

/* Hover states */
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.05),
             0 2px 4px rgba(0, 0, 0, 0.03)

/* Elevated panels */
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.08),
             0 4px 6px rgba(0, 0, 0, 0.04)

/* Modals, popovers */
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1),
             0 10px 10px rgba(0, 0, 0, 0.04)

/* Maximum elevation */
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.15)
```

**Usage:**
- Cards: `shadow-sm` default, `shadow-md` on hover
- Dropdowns: `shadow-lg`
- Modals: `shadow-xl`

---

## Animation & Motion

### Duration

```css
--duration-fast: 150ms      /* Micro-interactions */
--duration-base: 200ms      /* Default transitions */
--duration-slow: 300ms      /* Page transitions */
--duration-slower: 500ms    /* Complex animations */
```

### Easing

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

**Default:** Use `ease-out` for most transitions - it feels more responsive.

### Common Transitions

```css
/* Hover effects */
transition: all 200ms cubic-bezier(0, 0, 0.2, 1);

/* Color changes */
transition: color 150ms ease-out, background-color 150ms ease-out;

/* Transform effects */
transition: transform 200ms ease-out;

/* Opacity fades */
transition: opacity 200ms ease-out;
```

---

## Breakpoints

Mobile-first responsive design:

```css
--screen-sm: 640px      /* Small tablets */
--screen-md: 768px      /* Tablets */
--screen-lg: 1024px     /* Laptops */
--screen-xl: 1280px     /* Desktops */
--screen-2xl: 1536px    /* Large desktops */
```

**Container Max Widths:**
```css
--container-sm: 640px
--container-md: 768px
--container-lg: 1024px
--container-xl: 1280px
```

---

## Accessibility

### Contrast Ratios

All text meets WCAG AA standards:
- Normal text: 4.5:1 minimum
- Large text (18px+): 3:1 minimum
- UI components: 3:1 minimum

### Focus States

```css
/* Keyboard focus ring */
--ring-width: 3px
--ring-offset: 2px
--ring-color: var(--color-primary-400)

focus-visible:outline-none
focus-visible:ring-3
focus-visible:ring-primary-400
focus-visible:ring-offset-2
```

### Motion Preferences

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Grid System

12-column flexible grid:

```css
--grid-columns: 12
--grid-gap: 1.5rem (24px)
--grid-gap-sm: 1rem (16px)
```

**Common Layouts:**
- 2 columns: `grid-cols-1 md:grid-cols-2`
- 3 columns: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- 4 columns: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4`

---

## Imagery

### Photo Style

- **Natural lighting** - Bright, fresh, daylight
- **High saturation** - Vibrant greens, rich colors
- **Shallow depth** - Focus on food, soft backgrounds
- **Clean composition** - Minimal props, centered subjects

### Image Sizes

```css
--img-avatar-sm: 32px
--img-avatar-md: 48px
--img-avatar-lg: 64px

--img-thumbnail: 120px
--img-card: 320px
--img-hero: 100vw
```

### Aspect Ratios

```css
--aspect-square: 1/1        /* Product images */
--aspect-portrait: 3/4      /* Featured items */
--aspect-landscape: 4/3     /* Cards */
--aspect-wide: 16/9         /* Banners */
--aspect-ultra: 21/9        /* Hero sections */
```

---

## Iconography

### Size Scale

```css
--icon-xs: 12px
--icon-sm: 16px
--icon-md: 20px
--icon-lg: 24px
--icon-xl: 32px
```

### Style Guidelines

- Line icons for UI (2px stroke)
- Filled icons for active states
- Rounded line caps
- Consistent visual weight

---

## Best Practices

### Do's ✓

- Use rounded corners generously (12px+)
- Maintain generous whitespace
- Use primary green sparingly for impact
- Ensure images are high-quality and vibrant
- Keep type hierarchy clear
- Use subtle shadows for depth

### Don'ts ✗

- Avoid sharp corners (except accent lines)
- Don't overcrowd layouts
- Don't overuse bright green (dilutes impact)
- Avoid low-quality or dull imagery
- Don't use too many font weights
- Avoid heavy, dark shadows

---

## Component Consistency

Every component should:
1. Use design tokens (no hardcoded values)
2. Support hover/focus/active states
3. Be keyboard accessible
4. Include proper ARIA labels
5. Respond to motion preferences
6. Work in light/dark themes (future)

---

*Last updated: 2026-02-02*
