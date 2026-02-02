# Vegerly Design System

A comprehensive design system for the Vegerly healthy food delivery platform, built for Next.js, React, TypeScript, and Tailwind CSS 4.

![Design System Version](https://img.shields.io/badge/version-1.0.0-brightgreen)
![React](https://img.shields.io/badge/React-19.2.3-blue)
![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)

---

## 📚 Overview

The Vegerly Design System provides a complete foundation for building consistent, accessible, and beautiful user interfaces. It embodies our brand values of **freshness, health, and natural vitality** through thoughtfully crafted components and design tokens.

### Design Philosophy

- **Fresh & Organic** - Rounded corners, soft shadows, organic shapes
- **Clean & Minimal** - Generous whitespace, focused content, clear hierarchy
- **Vibrant & Alive** - Bold green accents, high-quality imagery, dynamic compositions
- **Trustworthy & Professional** - Consistent typography, accessible contrast, refined details

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Configure Tailwind CSS

Copy the Tailwind configuration to your project root:

```bash
cp docs/design/tailwind.config.ts ./tailwind.config.ts
```

### 3. Import Design Tokens

```typescript
import { colors, spacing, typography } from '@/docs/design/design-tokens';
```

### 4. Use Components

```tsx
import Button from '@/docs/design/component-examples/Button';
import { ProductCard } from '@/docs/design/component-examples/Card';

function MyPage() {
  return (
    <>
      <Button variant="primary" size="lg">
        Get Started
      </Button>

      <ProductCard
        image="/salad.jpg"
        title="Green Salad"
        description="Fresh and healthy"
        price={10.50}
        rating={4.5}
      />
    </>
  );
}
```

---

## 📖 Documentation

### Core Documentation

- **[Style Guide](./style-guide.md)** - Complete visual design specifications
  - Color palette and usage guidelines
  - Typography scales and font pairings
  - Spacing system (8px grid)
  - Border radius, shadows, and animations
  - Accessibility standards
  - Grid system and breakpoints

- **[Design Tokens](./design-tokens.ts)** - Token definitions in TypeScript
  - Colors, spacing, typography
  - Shadows, animations, breakpoints
  - Helper utilities and type exports

- **[Tailwind Config](./tailwind.config.ts)** - Tailwind CSS configuration
  - Custom theme extensions
  - Animation keyframes
  - Plugin configurations

- **[Component Specs](./components-spec.md)** - Detailed component specifications
  - Design patterns and variants
  - Usage guidelines
  - Accessibility requirements
  - Code examples

### Component Library

All components are production-ready React + TypeScript implementations:

- **[Button](./component-examples/Button.tsx)** - Primary interactive elements
- **[Card](./component-examples/Card.tsx)** - Content containers with variants
- **[Input](./component-examples/Input.tsx)** - Form inputs and textareas
- **[Badge](./component-examples/Badge.tsx)** - Labels, tags, and status indicators
- **[Modal](./component-examples/Modal.tsx)** - Dialog overlays

---

## 🎨 Design Tokens

### Colors

```typescript
import { colors } from '@/docs/design/design-tokens';

// Primary green
colors.primary[400]  // #7cc84e - Brand Green
colors.primary[500]  // #6bb342 - Hover state
colors.primary[600]  // #16a34a - Active state

// Neutrals
colors.neutral[900]  // #171717 - Headings
colors.neutral[600]  // #525252 - Body text
colors.neutral[50]   // #fafafa - Backgrounds

// Semantic
colors.success[500]  // Success green
colors.warning[500]  // Warning orange
colors.error[500]    // Error red
```

### Typography

```typescript
import { typography } from '@/docs/design/design-tokens';

// Font families
typography.fontFamily.display  // Headings (Geist Sans)
typography.fontFamily.body     // Body text (Geist Sans)
typography.fontFamily.mono     // Code (Geist Mono)

// Font sizes
typography.fontSize.h1         // 2.5rem (40px)
typography.fontSize['body-md'] // 1rem (16px)
```

### Spacing

```typescript
import { spacing } from '@/docs/design/design-tokens';

spacing[4]   // 1rem (16px)
spacing[6]   // 1.5rem (24px)
spacing[12]  // 3rem (48px)
```

---

## 🧩 Component Examples

### Button

```tsx
import Button from '@/docs/design/component-examples/Button';

<Button variant="primary" size="lg">
  Get Started
</Button>

<Button variant="secondary" leftIcon={<Icon />}>
  Learn More
</Button>

<Button variant="danger" isLoading>
  Delete
</Button>
```

### Product Card

```tsx
import { ProductCard } from '@/docs/design/component-examples/Card';

<ProductCard
  image="/salad.jpg"
  title="Green Salad"
  description="Fresh mixed greens with premium ingredients"
  price={10.50}
  originalPrice={12.99}
  rating={4.5}
  badge="Popular"
  onClick={() => console.log('Clicked!')}
/>
```

### Input

```tsx
import Input, { SearchInput } from '@/docs/design/component-examples/Input';

<Input
  label="Email Address"
  type="email"
  placeholder="you@example.com"
  helperText="We'll never share your email"
  required
  fullWidth
/>

<SearchInput
  placeholder="Search for meals..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  onClear={() => setSearchTerm('')}
/>
```

### Badge

```tsx
import Badge, { DotBadge, CountBadge } from '@/docs/design/component-examples/Badge';

<Badge variant="solid" color="primary">New</Badge>
<Badge variant="soft" color="success" icon={<>✓</>}>Verified</Badge>
<DotBadge color="success" pulse>Live</DotBadge>
<CountBadge count={12} color="error" />
```

### Modal

```tsx
import Modal, { ConfirmationModal } from '@/docs/design/component-examples/Modal';

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Welcome"
  footer={<Button onClick={() => setIsOpen(false)}>Close</Button>}
>
  <p>Modal content here</p>
</Modal>

<ConfirmationModal
  isOpen={confirmOpen}
  onClose={() => setConfirmOpen(false)}
  onConfirm={handleConfirm}
  title="Confirm Order"
  message="Are you sure you want to place this order?"
/>
```

---

## 🎯 Design Principles

### 1. Consistency

- Always use design tokens instead of hardcoded values
- Follow the 8px spacing grid
- Use consistent border radius (default: 12px)
- Maintain visual hierarchy with typography scales

### 2. Accessibility

- **Color Contrast**: All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text)
- **Keyboard Navigation**: All interactive elements support keyboard access
- **Focus Indicators**: Visible focus rings on all focusable elements
- **ARIA Labels**: Proper semantic HTML and ARIA attributes
- **Motion Preferences**: Respects `prefers-reduced-motion`

### 3. Responsiveness

- Mobile-first approach
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Flexible layouts using CSS Grid and Flexbox
- Touch-friendly interaction targets (min 44px)

### 4. Performance

- CSS transitions over JavaScript animations
- Lazy load heavy components
- Optimize images (WebP format, proper sizing)
- Minimize re-renders with proper React patterns

---

## 🖼️ Reference Materials

The design system is based on the visual references in `docs/design/references/`:

- **1.png** - Homepage hero section with rounded cards and organic shapes
- **2.png** - Product cards with ratings, prices, and photography style

These references establish our:
- Color palette (vibrant greens, clean neutrals)
- Typography hierarchy and spacing
- Photography style (natural light, high saturation, clean composition)
- Component patterns (rounded corners, soft shadows, card layouts)

---

## 🔧 Customization

### Extending Colors

```typescript
// In your tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#8b5cf6',
          // Add custom colors
        },
      },
    },
  },
};
```

### Adding Components

Create new components following the established patterns:

1. Use TypeScript for type safety
2. Support all common props (className, disabled, etc.)
3. Use forwardRef for ref support
4. Include accessibility features
5. Provide usage examples
6. Document in components-spec.md

---

## 📦 Project Structure

```
docs/design/
├── README.md                    # This file
├── style-guide.md              # Visual design specifications
├── design-tokens.ts            # Token definitions
├── tailwind.config.ts          # Tailwind configuration
├── components-spec.md          # Component specifications
├── component-examples/         # React components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Badge.tsx
│   └── Modal.tsx
└── references/                 # Design references
    ├── 1.png
    └── 2.png
```

---

## 🤝 Contributing

When adding to the design system:

1. **Follow existing patterns** - Maintain consistency with current components
2. **Use design tokens** - Never hardcode colors, spacing, etc.
3. **Document thoroughly** - Update style-guide.md and components-spec.md
4. **Include examples** - Add usage examples to component files
5. **Test accessibility** - Verify keyboard navigation and screen reader support
6. **Check responsiveness** - Test on multiple screen sizes

---

## 📝 Best Practices

### Do's ✅

- Use rounded corners generously (12px default)
- Maintain generous whitespace between sections
- Use primary green sparingly for maximum impact
- Ensure all images are high-quality and vibrant
- Keep typography hierarchy clear and consistent
- Use subtle shadows for depth perception

### Don'ts ❌

- Avoid sharp corners (except for accent lines)
- Don't overcrowd layouts with too many elements
- Don't overuse the bright green (dilutes brand impact)
- Avoid low-quality or dull imagery
- Don't use too many font weights in one design
- Avoid heavy, dark shadows

---

## 🔄 Changelog

### Version 1.0.0 (2026-02-02)

- Initial design system release
- Core design tokens (colors, typography, spacing)
- Style guide and documentation
- Base component library (Button, Card, Input, Badge, Modal)
- Tailwind CSS 4 configuration
- TypeScript support
- Accessibility features

---

## 📄 License

This design system is part of the Vegerly project and follows the project's licensing terms.

---

## 🆘 Support

For questions or issues:

1. Check the [Style Guide](./style-guide.md) for design questions
2. Review [Component Specs](./components-spec.md) for implementation details
3. See component examples in `component-examples/` for code patterns
4. Consult the project team for design decisions

---

**Made with 💚 by the Vegerly team**

*Last updated: 2026-02-02*
