# Quick Start Guide

Get up and running with the Vegerly Design System in 5 minutes.

## 1. Installation

The design system is already included in your Next.js project. No additional packages needed!

## 2. Configure Tailwind CSS

Replace your root `tailwind.config.ts` with our customized version:

```bash
cp docs/design/tailwind.config.ts ./tailwind.config.ts
```

Or manually merge the configuration if you have existing customizations.

## 3. Update Global CSS

Update your `src/app/globals.css`:

```css
@import "tailwindcss";

:root {
  --background: #fafafa;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);

  /* Primary colors */
  --color-primary-50: #f0fdf4;
  --color-primary-100: #dcfce7;
  --color-primary-200: #bbf7d0;
  --color-primary-300: #86efac;
  --color-primary-400: #7cc84e;
  --color-primary-500: #6bb342;
  --color-primary-600: #16a34a;
  --color-primary-700: #15803d;
  --color-primary-800: #166534;
  --color-primary-900: #14532d;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-geist-sans), system-ui, sans-serif;
}
```

## 4. Use Components

### Option A: Copy Components to Your Project

Copy the component files you need to your `src/components` directory:

```bash
cp docs/design/component-examples/Button.tsx src/components/
cp docs/design/component-examples/Card.tsx src/components/
# ... and so on
```

Then import and use:

```tsx
import Button from '@/components/Button';

export default function Page() {
  return <Button variant="primary">Click me</Button>;
}
```

### Option B: Import Directly from Docs (Development Only)

```tsx
import { Button, ProductCard } from '@/docs/design/component-examples';

export default function Page() {
  return (
    <div>
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
    </div>
  );
}
```

## 5. Use Design Tokens

```tsx
import { colors, spacing, typography } from '@/docs/design/design-tokens';

// Use in inline styles
const styles = {
  color: colors.primary[400],
  padding: spacing[6],
  fontSize: typography.fontSize.h3,
};

// Or use Tailwind classes
<div className="bg-primary-400 p-6 text-h3">
  Hello World
</div>
```

## 6. Common Patterns

### Hero Section

```tsx
export default function Hero() {
  return (
    <section className="bg-neutral-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-display-lg font-bold text-neutral-900 mb-6">
          Healthy food to live a healthier life in the future
        </h1>
        <p className="text-body-lg text-neutral-600 mb-8 max-w-2xl">
          Enjoy a healthy life by eating healthy foods that have extraordinary
          flavors that make your life healthier for today and in the future
        </p>
        <Button variant="primary" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  );
}
```

### Product Grid

```tsx
import { ProductCard } from '@/docs/design/component-examples';

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          rating={product.rating}
        />
      ))}
    </div>
  );
}
```

### Form with Validation

```tsx
import { Input, Button } from '@/docs/design/component-examples';
import { useState } from 'react';

export default function ContactForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Please enter a valid email');
      return;
    }
    // Submit form
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={error}
        fullWidth
        required
      />
      <Button type="submit" variant="primary" fullWidth>
        Subscribe
      </Button>
    </form>
  );
}
```

## 7. Responsive Design

Use Tailwind's responsive prefixes:

```tsx
<div className="
  px-4 md:px-6 lg:px-8           // Responsive padding
  grid grid-cols-1               // 1 column on mobile
  md:grid-cols-2                 // 2 columns on tablet
  lg:grid-cols-3                 // 3 columns on desktop
  gap-4 md:gap-6                 // Responsive gap
">
  {/* Content */}
</div>
```

## 8. Dark Mode (Future)

The design system is prepared for dark mode. To enable:

1. Add dark variants to your Tailwind classes:
```tsx
<div className="bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
```

2. Add dark mode toggle to your layout

## 9. Accessibility Checklist

- ✅ All interactive elements have hover/focus states
- ✅ Color contrast meets WCAG AA standards
- ✅ Keyboard navigation works throughout
- ✅ ARIA labels on icon-only buttons
- ✅ Form inputs have proper labels
- ✅ Modals trap focus and close on Escape

## 10. Next Steps

- 📖 Read the [Complete Style Guide](./style-guide.md)
- 🎨 Review [Component Specifications](./components-spec.md)
- 💻 Explore [Component Examples](./component-examples/)
- 🎯 Check [Design Tokens](./design-tokens.ts)

## Common Issues

### Tailwind classes not working

Make sure you've:
1. Copied the tailwind.config.ts
2. Restarted your dev server
3. Cleared Next.js cache: `rm -rf .next`

### Fonts not loading

The Geist fonts are loaded in `src/app/layout.tsx`. Make sure:
```tsx
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
```

### Components not found

If importing from `@/docs/design/component-examples`, ensure your `tsconfig.json` has:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Support

For questions or issues, refer to:
- [Full Documentation](./README.md)
- [Style Guide](./style-guide.md)
- [Component Specs](./components-spec.md)

Happy building! 🚀
