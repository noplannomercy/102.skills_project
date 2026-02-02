/**
 * Vegerly Design System - Design Tokens
 *
 * Central source of truth for all design values.
 * Import these tokens in components for consistent styling.
 *
 * @example
 * import { colors, spacing, typography } from '@/design/design-tokens'
 */

export const colors = {
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#7cc84e', // Brand Green
    500: '#6bb342',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  success: {
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
  },
  warning: {
    400: '#fbbf24',
    500: '#f59e0b',
    600: '#d97706',
  },
  error: {
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
  },
  info: {
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
  },
} as const;

export const spacing = {
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
} as const;

export const typography = {
  fontFamily: {
    display: 'var(--font-geist-sans)',
    body: 'var(--font-geist-sans)',
    mono: 'var(--font-geist-mono)',
  },
  fontSize: {
    // Display sizes
    'display-xl': ['4.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],  // 72px
    'display-lg': ['3.75rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }], // 60px
    'display-md': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],    // 48px

    // Heading sizes
    h1: ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],  // 40px
    h2: ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],    // 32px
    h3: ['1.5rem', { lineHeight: '1.4', letterSpacing: '0' }],        // 24px
    h4: ['1.25rem', { lineHeight: '1.4', letterSpacing: '0' }],       // 20px
    h5: ['1.125rem', { lineHeight: '1.4', letterSpacing: '0' }],      // 18px

    // Body sizes
    'body-lg': ['1.125rem', { lineHeight: '1.75' }],  // 18px
    'body-md': ['1rem', { lineHeight: '1.6' }],       // 16px
    'body-sm': ['0.875rem', { lineHeight: '1.6' }],   // 14px
    'body-xs': ['0.75rem', { lineHeight: '1.5' }],    // 12px
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  lineHeight: {
    tight: '1.2',
    snug: '1.4',
    normal: '1.6',
    relaxed: '1.75',
  },
  letterSpacing: {
    tight: '-0.02em',
    normal: '0',
    wide: '0.02em',
  },
} as const;

export const borderRadius = {
  sm: '0.375rem',   // 6px
  md: '0.5rem',     // 8px
  lg: '0.75rem',    // 12px
  xl: '1rem',       // 16px
  '2xl': '1.5rem',  // 24px
  full: '9999px',
} as const;

export const shadows = {
  xs: '0 1px 2px rgba(0, 0, 0, 0.04)',
  sm: '0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)',
  md: '0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.03)',
  lg: '0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.04)',
  xl: '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px rgba(0, 0, 0, 0.15)',
  none: 'none',
} as const;

export const animation = {
  duration: {
    fast: '150ms',
    base: '200ms',
    slow: '300ms',
    slower: '500ms',
  },
  easing: {
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    inOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

export const container = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
} as const;

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  modal: 30,
  popover: 40,
  tooltip: 50,
} as const;

export const iconSizes = {
  xs: '12px',
  sm: '16px',
  md: '20px',
  lg: '24px',
  xl: '32px',
} as const;

export const avatarSizes = {
  sm: '32px',
  md: '48px',
  lg: '64px',
  xl: '96px',
} as const;

// Commonly used color combinations
export const semanticColors = {
  background: {
    page: colors.neutral[50],
    surface: '#ffffff',
    surfaceHover: colors.neutral[100],
    overlay: 'rgba(0, 0, 0, 0.4)',
  },
  text: {
    primary: colors.neutral[900],
    secondary: colors.neutral[600],
    tertiary: colors.neutral[400],
    inverse: '#ffffff',
    link: colors.primary[600],
    linkHover: colors.primary[700],
  },
  border: {
    default: colors.neutral[200],
    hover: colors.neutral[300],
    focus: colors.primary[400],
  },
  interactive: {
    primary: colors.primary[400],
    primaryHover: colors.primary[500],
    primaryActive: colors.primary[600],
  },
} as const;

// CSS-in-JS helper utilities
export const cssVars = {
  // Convert colors to CSS variables
  toCSSVar: (value: string, name: string) => ({
    [`--${name}`]: value,
  }),

  // Generate all CSS custom properties
  generateCSSVars: () => {
    const vars: Record<string, string> = {};

    // Colors
    Object.entries(colors).forEach(([colorName, shades]) => {
      Object.entries(shades).forEach(([shade, value]) => {
        vars[`--color-${colorName}-${shade}`] = value;
      });
    });

    // Spacing
    Object.entries(spacing).forEach(([size, value]) => {
      vars[`--space-${size}`] = value;
    });

    // Shadows
    Object.entries(shadows).forEach(([size, value]) => {
      vars[`--shadow-${size}`] = value;
    });

    // Border radius
    Object.entries(borderRadius).forEach(([size, value]) => {
      vars[`--radius-${size}`] = value;
    });

    return vars;
  },
};

// Type exports for TypeScript
export type ColorScale = keyof typeof colors;
export type ColorShade = keyof typeof colors.primary;
export type SpacingSize = keyof typeof spacing;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type BorderRadiusSize = keyof typeof borderRadius;
export type ShadowSize = keyof typeof shadows;
export type Breakpoint = keyof typeof breakpoints;
