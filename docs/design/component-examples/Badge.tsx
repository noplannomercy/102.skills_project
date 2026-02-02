/**
 * Badge Component
 *
 * Small labels for status, categories, counts, and tags.
 * Supports multiple variants and sizes.
 */

import React from 'react';

export type BadgeVariant = 'solid' | 'soft' | 'outlined';
export type BadgeColor = 'primary' | 'success' | 'warning' | 'error' | 'neutral';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  variant?: BadgeVariant;
  color?: BadgeColor;
  size?: BadgeSize;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Badge = ({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  icon,
  children,
  className = '',
}: BadgeProps) => {
  // Base styles
  const baseStyles = `
    inline-flex items-center gap-1.5 rounded-full font-medium
    transition-colors duration-200
  `.replace(/\s+/g, ' ').trim();

  // Size styles
  const sizeStyles: Record<BadgeSize, string> = {
    sm: 'px-2 py-0.5 text-xs',      // 12px text
    md: 'px-3 py-1 text-sm',        // 14px text
    lg: 'px-4 py-1.5 text-base',    // 16px text
  };

  // Color styles for each variant
  const colorStyles: Record<BadgeVariant, Record<BadgeColor, string>> = {
    solid: {
      primary: 'bg-primary-400 text-white',
      success: 'bg-success-500 text-white',
      warning: 'bg-warning-500 text-white',
      error: 'bg-error-500 text-white',
      neutral: 'bg-neutral-700 text-white',
    },
    soft: {
      primary: 'bg-primary-100 text-primary-700',
      success: 'bg-green-100 text-green-700',
      warning: 'bg-orange-100 text-orange-700',
      error: 'bg-red-100 text-red-700',
      neutral: 'bg-neutral-100 text-neutral-700',
    },
    outlined: {
      primary: 'border border-primary-400 text-primary-700 bg-transparent',
      success: 'border border-success-500 text-success-700 bg-transparent',
      warning: 'border border-warning-500 text-warning-700 bg-transparent',
      error: 'border border-error-500 text-error-700 bg-transparent',
      neutral: 'border border-neutral-300 text-neutral-700 bg-transparent',
    },
  };

  return (
    <span
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${colorStyles[variant][color]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

// ============================================================
// DOT BADGE (for notifications, status indicators)
// ============================================================

export interface DotBadgeProps {
  color?: BadgeColor;
  pulse?: boolean;
  children?: React.ReactNode;
  className?: string;
}

export const DotBadge = ({
  color = 'primary',
  pulse = false,
  children,
  className = '',
}: DotBadgeProps) => {
  const colorClasses: Record<BadgeColor, string> = {
    primary: 'bg-primary-400',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
    neutral: 'bg-neutral-400',
  };

  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <span className="relative flex h-2 w-2">
        {pulse && (
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${colorClasses[color]}`}
          />
        )}
        <span className={`relative inline-flex rounded-full h-2 w-2 ${colorClasses[color]}`} />
      </span>
      {children && <span className="text-sm text-neutral-700">{children}</span>}
    </span>
  );
};

// ============================================================
// COUNT BADGE (for notification counts, cart items)
// ============================================================

export interface CountBadgeProps {
  count: number;
  max?: number;
  color?: BadgeColor;
  className?: string;
}

export const CountBadge = ({
  count,
  max = 99,
  color = 'error',
  className = '',
}: CountBadgeProps) => {
  const displayCount = count > max ? `${max}+` : count.toString();

  const colorClasses: Record<BadgeColor, string> = {
    primary: 'bg-primary-400',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
    neutral: 'bg-neutral-700',
  };

  return (
    <span
      className={`
        inline-flex items-center justify-center
        min-w-[20px] h-5 px-1.5 rounded-full
        ${colorClasses[color]} text-white text-xs font-semibold
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {displayCount}
    </span>
  );
};

// ============================================================
// USAGE EXAMPLES
// ============================================================

export function BadgeExamples() {
  return (
    <div className="space-y-12 p-8">
      {/* Variants */}
      <section>
        <h3 className="text-h4 font-semibold mb-6">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Badge variant="solid" color="primary">Solid</Badge>
          <Badge variant="soft" color="primary">Soft</Badge>
          <Badge variant="outlined" color="primary">Outlined</Badge>
        </div>
      </section>

      {/* Colors */}
      <section>
        <h3 className="text-h4 font-semibold mb-6">Colors</h3>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-3">
            <Badge color="primary">Primary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="error">Error</Badge>
            <Badge color="neutral">Neutral</Badge>
          </div>
          <div className="flex flex-wrap gap-3">
            <Badge variant="soft" color="primary">Primary</Badge>
            <Badge variant="soft" color="success">Success</Badge>
            <Badge variant="soft" color="warning">Warning</Badge>
            <Badge variant="soft" color="error">Error</Badge>
            <Badge variant="soft" color="neutral">Neutral</Badge>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h3 className="text-h4 font-semibold mb-6">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Badge size="sm">Small</Badge>
          <Badge size="md">Medium</Badge>
          <Badge size="lg">Large</Badge>
        </div>
      </section>

      {/* With Icons */}
      <section>
        <h3 className="text-h4 font-semibold mb-6">With Icons</h3>
        <div className="flex flex-wrap gap-3">
          <Badge icon={<span>✓</span>} color="success">Verified</Badge>
          <Badge icon={<span>★</span>} color="warning">Featured</Badge>
          <Badge icon={<span>🔥</span>} color="error">Hot</Badge>
          <Badge icon={<span>🆕</span>} color="primary">New</Badge>
        </div>
      </section>

      {/* Dot Badges */}
      <section>
        <h3 className="text-h4 font-semibold mb-6">Dot Badges</h3>
        <div className="space-y-3">
          <div className="flex flex-wrap gap-4">
            <DotBadge color="success">Online</DotBadge>
            <DotBadge color="warning">Away</DotBadge>
            <DotBadge color="error">Busy</DotBadge>
            <DotBadge color="neutral">Offline</DotBadge>
          </div>
          <div className="flex flex-wrap gap-4">
            <DotBadge color="success" pulse>Live</DotBadge>
            <DotBadge color="error" pulse>Recording</DotBadge>
          </div>
        </div>
      </section>

      {/* Count Badges */}
      <section>
        <h3 className="text-h4 font-semibold mb-6">Count Badges</h3>
        <div className="flex flex-wrap items-center gap-6">
          <div className="relative inline-flex">
            <button className="h-11 px-6 rounded-lg border border-neutral-300">
              Notifications
            </button>
            <CountBadge count={5} className="absolute -top-2 -right-2" />
          </div>

          <div className="relative inline-flex">
            <button className="h-11 px-6 rounded-lg border border-neutral-300">
              Messages
            </button>
            <CountBadge count={125} max={99} className="absolute -top-2 -right-2" />
          </div>

          <div className="relative inline-flex">
            <span className="text-2xl">🛒</span>
            <CountBadge count={3} className="absolute -top-1 -right-1" />
          </div>
        </div>
      </section>

      {/* Real-world Examples */}
      <section>
        <h3 className="text-h4 font-semibold mb-6">Real-world Examples</h3>

        {/* Product Card with Badges */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden max-w-sm">
          <div className="relative">
            <div className="aspect-square bg-neutral-200" />
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              <Badge icon={<span>🆕</span>} color="primary">New</Badge>
              <Badge variant="soft" color="error">-20% OFF</Badge>
            </div>
            <div className="absolute top-3 right-3">
              <Badge variant="soft" color="success" icon={<span>✓</span>}>
                In Stock
              </Badge>
            </div>
          </div>
          <div className="p-6">
            <h4 className="text-h4 font-semibold mb-2">Premium Salad Box</h4>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="outlined" size="sm" color="neutral">Organic</Badge>
              <Badge variant="outlined" size="sm" color="neutral">Vegan</Badge>
              <Badge variant="outlined" size="sm" color="neutral">Gluten-Free</Badge>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-h4 font-bold text-primary-600">$12.99</span>
              <DotBadge color="success">Available Now</DotBadge>
            </div>
          </div>
        </div>
      </section>

      {/* Status List */}
      <section className="mt-8">
        <h3 className="text-h4 font-semibold mb-6">Status List</h3>
        <div className="bg-white rounded-xl p-6 space-y-3 max-w-md">
          <div className="flex items-center justify-between">
            <span className="text-body-md">Order #1234</span>
            <Badge variant="soft" color="success">Delivered</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-body-md">Order #1235</span>
            <Badge variant="soft" color="warning">In Transit</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-body-md">Order #1236</span>
            <Badge variant="soft" color="primary">Processing</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-body-md">Order #1237</span>
            <Badge variant="soft" color="error">Cancelled</Badge>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Badge;
