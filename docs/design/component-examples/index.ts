/**
 * Component Examples - Index
 *
 * Central export file for all Vegerly design system components.
 * Import components from this file for convenience.
 *
 * @example
 * import { Button, Card, Input } from '@/docs/design/component-examples';
 */

// Button
export { default as Button } from './Button';
export type { ButtonProps } from './Button';

// Card
export { default as Card, ProductCard, FeatureCard, TestimonialCard } from './Card';
export type { CardProps, ProductCardProps, FeatureCardProps, TestimonialCardProps } from './Card';

// Input
export { default as Input, Textarea, SearchInput } from './Input';
export type { InputProps, TextareaProps, SearchInputProps } from './Input';

// Badge
export { default as Badge, DotBadge, CountBadge } from './Badge';
export type { BadgeProps, DotBadgeProps, CountBadgeProps } from './Badge';

// Modal
export { default as Modal, ConfirmationModal, FormModal } from './Modal';
export type { ModalProps, ConfirmationModalProps, FormModalProps } from './Modal';

// Toast
export { default as Toast, ToastContainer, useToast } from './Toast';
export type { ToastProps, ToastContainerProps } from './Toast';

// Re-export design tokens for convenience
export * from '../design-tokens';
