/**
 * Input Component
 *
 * Form input fields with labels, validation, and helper text.
 * Supports text, email, password, number, and textarea variants.
 */

import React, { forwardRef } from 'react';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  helperText?: string;
  error?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      required,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    // Input styles
    const baseStyles = `
      h-11 px-4 rounded-lg border
      text-base text-neutral-900 placeholder:text-neutral-400
      transition-all duration-200
      focus:outline-none focus:ring-3 focus:ring-offset-2
      disabled:bg-neutral-100 disabled:cursor-not-allowed
    `.replace(/\s+/g, ' ').trim();

    const stateStyles = hasError
      ? 'border-error-500 focus:border-error-500 focus:ring-error-500'
      : 'border-neutral-300 hover:border-neutral-400 focus:border-primary-400 focus:ring-primary-400';

    const iconPadding = leftIcon ? 'pl-10' : rightIcon ? 'pr-10' : '';
    const widthStyles = fullWidth ? 'w-full' : '';

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {/* Label */}
        {label && (
          <label
            htmlFor={inputId}
            className="block text-body-sm font-medium text-neutral-700 mb-2"
          >
            {label}
            {required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}

        {/* Input Container */}
        <div className="relative">
          {/* Left Icon */}
          {leftIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {leftIcon}
            </div>
          )}

          {/* Input */}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            required={required}
            className={`
              ${baseStyles}
              ${stateStyles}
              ${iconPadding}
              ${widthStyles}
              ${className}
            `.replace(/\s+/g, ' ').trim()}
            {...props}
          />

          {/* Right Icon */}
          {rightIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400">
              {rightIcon}
            </div>
          )}
        </div>

        {/* Helper Text or Error */}
        {(helperText || error) && (
          <p className={`mt-2 text-body-xs ${
            hasError ? 'text-error-600' : 'text-neutral-600'
          }`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// ============================================================
// TEXTAREA
// ============================================================

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  helperText?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      helperText,
      error,
      fullWidth = false,
      disabled,
      required,
      className = '',
      id,
      ...props
    },
    ref
  ) => {
    const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`;
    const hasError = !!error;

    const baseStyles = `
      min-h-[120px] p-4 rounded-lg border
      text-base text-neutral-900 placeholder:text-neutral-400
      transition-all duration-200 resize-y
      focus:outline-none focus:ring-3 focus:ring-offset-2
      disabled:bg-neutral-100 disabled:cursor-not-allowed
    `.replace(/\s+/g, ' ').trim();

    const stateStyles = hasError
      ? 'border-error-500 focus:border-error-500 focus:ring-error-500'
      : 'border-neutral-300 hover:border-neutral-400 focus:border-primary-400 focus:ring-primary-400';

    const widthStyles = fullWidth ? 'w-full' : '';

    return (
      <div className={fullWidth ? 'w-full' : ''}>
        {label && (
          <label
            htmlFor={textareaId}
            className="block text-body-sm font-medium text-neutral-700 mb-2"
          >
            {label}
            {required && <span className="text-error-500 ml-1">*</span>}
          </label>
        )}

        <textarea
          ref={ref}
          id={textareaId}
          disabled={disabled}
          required={required}
          className={`
            ${baseStyles}
            ${stateStyles}
            ${widthStyles}
            ${className}
          `.replace(/\s+/g, ' ').trim()}
          {...props}
        />

        {(helperText || error) && (
          <p className={`mt-2 text-body-xs ${
            hasError ? 'text-error-600' : 'text-neutral-600'
          }`}>
            {error || helperText}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';

// ============================================================
// SEARCH INPUT
// ============================================================

export interface SearchInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  onClear?: () => void;
  fullWidth?: boolean;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ onClear, value, fullWidth = false, className = '', ...props }, ref) => {
    return (
      <div className={`relative ${fullWidth ? 'w-full' : ''}`}>
        {/* Search Icon */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>

        <input
          ref={ref}
          type="search"
          value={value}
          className={`
            h-11 pl-10 pr-10 rounded-lg border border-neutral-300
            text-base text-neutral-900 placeholder:text-neutral-400
            hover:border-neutral-400
            focus:outline-none focus:border-primary-400 focus:ring-3
            focus:ring-primary-400 focus:ring-offset-2
            transition-all duration-200
            ${fullWidth ? 'w-full' : ''}
            ${className}
          `.replace(/\s+/g, ' ').trim()}
          {...props}
        />

        {/* Clear Button */}
        {value && onClear && (
          <button
            type="button"
            onClick={onClear}
            className="absolute right-3 top-1/2 -translate-y-1/2
              text-neutral-400 hover:text-neutral-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

// ============================================================
// USAGE EXAMPLES
// ============================================================

export function InputExamples() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="max-w-2xl space-y-12 p-8">
      {/* Basic Input */}
      <section>
        <h3 className="text-h4 font-semibold mb-6">Basic Input</h3>
        <div className="space-y-4">
          <Input
            label="Email Address"
            type="email"
            placeholder="you@example.com"
            helperText="We'll never share your email."
            fullWidth
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            required
            fullWidth
          />
        </div>
      </section>

      {/* With Icons */}
      <section>
        <h3 className="text-h4 font-semibold mb-6">With Icons</h3>
        <div className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            leftIcon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            fullWidth
          />
          <Input
            label="Phone Number"
            type="tel"
            placeholder="+1 (555) 123-4567"
            leftIcon={
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
            fullWidth
          />
        </div>
      </section>

      {/* States */}
      <section>
        <h3 className="text-h4 font-semibold mb-6">States</h3>
        <div className="space-y-4">
          <Input
            label="Default"
            placeholder="Normal input"
            fullWidth
          />
          <Input
            label="With Error"
            placeholder="Invalid input"
            error="This field is required"
            fullWidth
          />
          <Input
            label="Disabled"
            placeholder="Cannot edit"
            disabled
            fullWidth
          />
        </div>
      </section>

      {/* Search Input */}
      <section>
        <h3 className="text-h4 font-semibold mb-6">Search Input</h3>
        <SearchInput
          placeholder="Search for healthy meals..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onClear={() => setSearchValue('')}
          fullWidth
        />
      </section>

      {/* Textarea */}
      <section>
        <h3 className="text-h4 font-semibold mb-6">Textarea</h3>
        <Textarea
          label="Additional Notes"
          placeholder="Add any special instructions for your order..."
          helperText="Max 500 characters"
          fullWidth
        />
      </section>

      {/* Form Example */}
      <section>
        <h3 className="text-h4 font-semibold mb-6">Complete Form</h3>
        <form className="space-y-4">
          <Input
            label="Full Name"
            placeholder="John Doe"
            required
            fullWidth
          />
          <Input
            label="Email"
            type="email"
            placeholder="john@example.com"
            required
            fullWidth
          />
          <Input
            label="Phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            fullWidth
          />
          <Textarea
            label="Delivery Instructions"
            placeholder="e.g., Leave at front door, Ring doorbell..."
            fullWidth
          />
          <button
            type="submit"
            className="h-11 px-6 rounded-lg bg-primary-400 text-white font-medium
              hover:bg-primary-500 transition-colors"
          >
            Submit Order
          </button>
        </form>
      </section>
    </div>
  );
}

export default Input;
