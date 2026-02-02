/**
 * Button Component
 *
 * Versatile button component with multiple variants, sizes, and states.
 * Follows Vegerly design system specifications.
 */

import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-medium rounded-lg
      transition-all duration-200
      focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      active:scale-[0.98]
    `.replace(/\s+/g, ' ').trim();

    // Variant styles
    const variantStyles: Record<ButtonVariant, string> = {
      primary: `
        bg-primary-400 text-white
        hover:bg-primary-500 active:bg-primary-600
        focus-visible:ring-primary-400
      `,
      secondary: `
        bg-white border border-neutral-300 text-neutral-900
        hover:bg-neutral-50 hover:border-neutral-400
        focus-visible:ring-neutral-300
      `,
      ghost: `
        bg-transparent text-neutral-700
        hover:bg-neutral-100
        focus-visible:ring-neutral-300
      `,
      danger: `
        bg-error-500 text-white
        hover:bg-error-600 active:bg-error-700
        focus-visible:ring-error-500
      `,
    };

    // Size styles
    const sizeStyles: Record<ButtonSize, string> = {
      sm: 'h-9 px-4 text-sm',
      md: 'h-11 px-6 text-base',
      lg: 'h-12 px-8 text-lg',
    };

    // Width styles
    const widthStyles = fullWidth ? 'w-full' : '';

    // Loading spinner component
    const LoadingSpinner = () => (
      <svg
        className="animate-spin h-4 w-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    );

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={`
          ${baseStyles}
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${widthStyles}
          ${className}
        `.replace(/\s+/g, ' ').trim()}
        {...props}
      >
        {isLoading && <LoadingSpinner />}
        {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

// ============================================================
// USAGE EXAMPLES
// ============================================================

export function ButtonExamples() {
  return (
    <div className="space-y-8 p-8">
      {/* Variants */}
      <section>
        <h3 className="text-h4 font-semibold mb-4">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="danger">Danger Button</Button>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h3 className="text-h4 font-semibold mb-4">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* With Icons */}
      <section>
        <h3 className="text-h4 font-semibold mb-4">With Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Button leftIcon={<span>←</span>}>Back</Button>
          <Button rightIcon={<span>→</span>}>Next</Button>
          <Button leftIcon={<span>+</span>}>Add Item</Button>
        </div>
      </section>

      {/* States */}
      <section>
        <h3 className="text-h4 font-semibold mb-4">States</h3>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button isLoading>Loading</Button>
          <Button disabled>Disabled</Button>
        </div>
      </section>

      {/* Full Width */}
      <section>
        <h3 className="text-h4 font-semibold mb-4">Full Width</h3>
        <Button fullWidth>Full Width Button</Button>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-h4 font-semibold mb-4">Real-world Examples</h3>
        <div className="space-y-3">
          <Button variant="primary" size="lg" fullWidth>
            Get Started
          </Button>
          <div className="flex gap-3">
            <Button variant="secondary" className="flex-1">Cancel</Button>
            <Button variant="primary" className="flex-1">Confirm Order</Button>
          </div>
          <Button variant="primary" leftIcon={<span>🛒</span>}>
            Add to Cart
          </Button>
        </div>
      </section>
    </div>
  );
}
