/**
 * Toast Notification Component
 *
 * Temporary notification messages for user feedback.
 * Supports success, error, warning, and info variants.
 */

import React, { useEffect, useState } from 'react';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  variant: ToastVariant;
  title: string;
  message?: string;
  duration?: number;
}

export interface ToastProps {
  variant: ToastVariant;
  title: string;
  message?: string;
  onClose: () => void;
  duration?: number;
}

const ToastItem = ({
  variant,
  title,
  message,
  onClose,
  duration = 5000,
}: ToastProps) => {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(onClose, duration);
      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const variantStyles = {
    success: {
      borderColor: 'border-success-500',
      iconBg: 'bg-success-100',
      iconColor: 'text-success-600',
      icon: '✓',
    },
    error: {
      borderColor: 'border-error-500',
      iconBg: 'bg-error-100',
      iconColor: 'text-error-600',
      icon: '✕',
    },
    warning: {
      borderColor: 'border-warning-500',
      iconBg: 'bg-warning-100',
      iconColor: 'text-warning-600',
      icon: '⚠',
    },
    info: {
      borderColor: 'border-info-500',
      iconBg: 'bg-info-100',
      iconColor: 'text-info-600',
      icon: 'i',
    },
  };

  const style = variantStyles[variant];

  return (
    <div
      className={`
        bg-white rounded-lg shadow-lg p-4 max-w-sm
        border-l-4 ${style.borderColor}
        flex items-start gap-3
        animate-slide-in-right
      `.replace(/\s+/g, ' ').trim()}
    >
      {/* Icon */}
      <div
        className={`
          flex-shrink-0 w-6 h-6 rounded-full
          flex items-center justify-center
          font-semibold text-sm
          ${style.iconBg} ${style.iconColor}
        `.replace(/\s+/g, ' ').trim()}
      >
        {style.icon}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-body-md font-semibold text-neutral-900 mb-1">
          {title}
        </h4>
        {message && (
          <p className="text-body-sm text-neutral-600">
            {message}
          </p>
        )}
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="flex-shrink-0 text-neutral-400 hover:text-neutral-600
          transition-colors p-1"
        aria-label="Close notification"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

// ============================================================
// TOAST CONTAINER
// ============================================================

export interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
  position?: 'top-right' | 'top-center' | 'bottom-right' | 'bottom-center';
}

export const ToastContainer = ({
  toasts,
  onRemove,
  position = 'top-right',
}: ToastContainerProps) => {
  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-center': 'top-4 left-1/2 -translate-x-1/2',
    'bottom-right': 'bottom-4 right-4',
    'bottom-center': 'bottom-4 left-1/2 -translate-x-1/2',
  };

  return (
    <div
      className={`
        fixed ${positionClasses[position]}
        z-tooltip flex flex-col gap-3
        pointer-events-none
      `.replace(/\s+/g, ' ').trim()}
    >
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <ToastItem
            variant={toast.variant}
            title={toast.title}
            message={toast.message}
            onClose={() => onRemove(toast.id)}
            duration={toast.duration}
          />
        </div>
      ))}
    </div>
  );
};

// ============================================================
// TOAST HOOK
// ============================================================

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (
    variant: ToastVariant,
    title: string,
    message?: string,
    duration?: number
  ) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = {
      id,
      variant,
      title,
      message,
      duration,
    };

    setToasts((prev) => [...prev, newToast]);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const success = (title: string, message?: string, duration?: number) => {
    addToast('success', title, message, duration);
  };

  const error = (title: string, message?: string, duration?: number) => {
    addToast('error', title, message, duration);
  };

  const warning = (title: string, message?: string, duration?: number) => {
    addToast('warning', title, message, duration);
  };

  const info = (title: string, message?: string, duration?: number) => {
    addToast('info', title, message, duration);
  };

  return {
    toasts,
    removeToast,
    success,
    error,
    warning,
    info,
  };
}

// ============================================================
// USAGE EXAMPLES
// ============================================================

export function ToastExamples() {
  const toast = useToast();

  return (
    <div className="space-y-8 p-8">
      <section>
        <h3 className="text-h3 font-semibold mb-6">Toast Notifications</h3>

        <div className="space-y-4">
          <div>
            <h4 className="text-h5 font-semibold mb-3">Variants</h4>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  toast.success(
                    'Order Confirmed',
                    'Your order has been placed successfully and will be delivered in 30 minutes.'
                  )
                }
                className="h-11 px-6 rounded-lg bg-success-500 text-white font-medium
                  hover:bg-success-600 transition-colors"
              >
                Show Success
              </button>

              <button
                onClick={() =>
                  toast.error(
                    'Payment Failed',
                    'There was an error processing your payment. Please try again.'
                  )
                }
                className="h-11 px-6 rounded-lg bg-error-500 text-white font-medium
                  hover:bg-error-600 transition-colors"
              >
                Show Error
              </button>

              <button
                onClick={() =>
                  toast.warning(
                    'Low Stock',
                    'Only 2 items remaining in stock. Order soon!'
                  )
                }
                className="h-11 px-6 rounded-lg bg-warning-500 text-white font-medium
                  hover:bg-warning-600 transition-colors"
              >
                Show Warning
              </button>

              <button
                onClick={() =>
                  toast.info(
                    'New Feature',
                    'Check out our new meal customization options!'
                  )
                }
                className="h-11 px-6 rounded-lg bg-info-500 text-white font-medium
                  hover:bg-info-600 transition-colors"
              >
                Show Info
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-h5 font-semibold mb-3">Different Durations</h4>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() =>
                  toast.success('Quick Message', 'This will disappear in 2 seconds', 2000)
                }
                className="h-11 px-6 rounded-lg border border-neutral-300
                  hover:bg-neutral-100 transition-colors"
              >
                2 Second Toast
              </button>

              <button
                onClick={() =>
                  toast.info('Normal Message', 'This will disappear in 5 seconds', 5000)
                }
                className="h-11 px-6 rounded-lg border border-neutral-300
                  hover:bg-neutral-100 transition-colors"
              >
                5 Second Toast
              </button>

              <button
                onClick={() =>
                  toast.warning('Long Message', 'This will stay for 10 seconds', 10000)
                }
                className="h-11 px-6 rounded-lg border border-neutral-300
                  hover:bg-neutral-100 transition-colors"
              >
                10 Second Toast
              </button>

              <button
                onClick={() =>
                  toast.info('Permanent Message', 'Close this manually', 0)
                }
                className="h-11 px-6 rounded-lg border border-neutral-300
                  hover:bg-neutral-100 transition-colors"
              >
                Permanent Toast
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-h5 font-semibold mb-3">Real-world Examples</h4>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => {
                  toast.success('Added to Cart', 'Green Salad has been added to your cart');
                }}
                className="h-11 px-6 rounded-lg bg-primary-400 text-white font-medium
                  hover:bg-primary-500 transition-colors"
              >
                Add to Cart
              </button>

              <button
                onClick={() => {
                  toast.info('Saving...', undefined, 2000);
                  setTimeout(() => {
                    toast.success('Saved!', 'Your preferences have been saved');
                  }, 2000);
                }}
                className="h-11 px-6 rounded-lg bg-primary-400 text-white font-medium
                  hover:bg-primary-500 transition-colors"
              >
                Save Preferences
              </button>

              <button
                onClick={() => {
                  toast.warning(
                    'Session Expiring',
                    'Your session will expire in 5 minutes. Please save your work.',
                    8000
                  );
                }}
                className="h-11 px-6 rounded-lg bg-warning-500 text-white font-medium
                  hover:bg-warning-600 transition-colors"
              >
                Session Warning
              </button>

              <button
                onClick={() => {
                  toast.error(
                    'Network Error',
                    'Unable to connect to the server. Please check your internet connection.',
                    0
                  );
                }}
                className="h-11 px-6 rounded-lg bg-error-500 text-white font-medium
                  hover:bg-error-600 transition-colors"
              >
                Trigger Error
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Area */}
      <section className="bg-neutral-100 rounded-xl p-8">
        <h4 className="text-h5 font-semibold mb-4">Preview Area</h4>
        <p className="text-body-md text-neutral-600 mb-6">
          Click the buttons above to see toast notifications appear in the top-right corner.
          They will automatically dismiss after their duration, or you can close them manually.
        </p>

        <div className="bg-white rounded-lg p-6 border-2 border-dashed border-neutral-300">
          <p className="text-body-sm text-neutral-500 text-center">
            Toasts will appear in the top-right corner of the screen
          </p>
        </div>
      </section>

      {/* Toast Container */}
      <ToastContainer toasts={toast.toasts} onRemove={toast.removeToast} />
    </div>
  );
}

export default ToastItem;
