/**
 * Modal Component
 *
 * Overlay dialog for focused interactions.
 * Includes accessibility features like focus trapping and escape key handling.
 */

import React, { useEffect, useRef } from 'react';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlayClick = true,
  showCloseButton = true,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Focus trap (simplified)
  useEffect(() => {
    if (isOpen && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      firstElement?.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    <div
      className="fixed inset-0 z-modal flex items-center justify-center p-4
        bg-black/40 backdrop-blur-sm animate-fade-in"
      onClick={closeOnOverlayClick ? onClose : undefined}
    >
      <div
        ref={modalRef}
        className={`
          bg-white rounded-2xl shadow-2xl w-full
          animate-scale-in
          ${sizeClasses[size]}
        `.replace(/\s+/g, ' ').trim()}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        {(title || showCloseButton) && (
          <div className="p-6 border-b border-neutral-200">
            <div className="flex items-center justify-between">
              {title && (
                <h2 className="text-h3 font-semibold text-neutral-900">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="ml-auto text-neutral-400 hover:text-neutral-600
                    transition-colors p-1 rounded-lg hover:bg-neutral-100"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Body */}
        <div className="p-6">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="p-6 border-t border-neutral-200">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

// ============================================================
// CONFIRMATION MODAL
// ============================================================

export interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  variant?: 'danger' | 'primary';
  isLoading?: boolean;
}

export const ConfirmationModal = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'primary',
  isLoading = false,
}: ConfirmationModalProps) => {
  const confirmButtonClass = variant === 'danger'
    ? 'bg-error-500 hover:bg-error-600'
    : 'bg-primary-400 hover:bg-primary-500';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="sm"
      footer={
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={isLoading}
            className="h-11 px-6 rounded-lg border border-neutral-300
              hover:bg-neutral-100 transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            disabled={isLoading}
            className={`
              h-11 px-6 rounded-lg text-white font-medium
              transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed
              ${confirmButtonClass}
            `.replace(/\s+/g, ' ').trim()}
          >
            {isLoading ? 'Processing...' : confirmText}
          </button>
        </div>
      }
    >
      <p className="text-body-md text-neutral-600">
        {message}
      </p>
    </Modal>
  );
};

// ============================================================
// FORM MODAL
// ============================================================

export interface FormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (e: React.FormEvent) => void;
  title: string;
  children: React.ReactNode;
  submitText?: string;
  cancelText?: string;
  isLoading?: boolean;
}

export const FormModal = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  children,
  submitText = 'Submit',
  cancelText = 'Cancel',
  isLoading = false,
}: FormModalProps) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="md"
    >
      <form onSubmit={onSubmit} className="space-y-4">
        {children}

        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onClose}
            disabled={isLoading}
            className="h-11 px-6 rounded-lg border border-neutral-300
              hover:bg-neutral-100 transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {cancelText}
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="h-11 px-6 rounded-lg bg-primary-400 text-white font-medium
              hover:bg-primary-500 transition-colors
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Submitting...' : submitText}
          </button>
        </div>
      </form>
    </Modal>
  );
};

// ============================================================
// USAGE EXAMPLES
// ============================================================

export function ModalExamples() {
  const [basicModalOpen, setBasicModalOpen] = React.useState(false);
  const [confirmModalOpen, setConfirmModalOpen] = React.useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = React.useState(false);
  const [formModalOpen, setFormModalOpen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const handleConfirm = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setConfirmModalOpen(false);
      alert('Order confirmed!');
    }, 2000);
  };

  const handleDelete = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setDeleteModalOpen(false);
      alert('Item deleted!');
    }, 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFormModalOpen(false);
      alert('Form submitted!');
    }, 2000);
  };

  return (
    <div className="space-y-8 p-8">
      <section>
        <h3 className="text-h3 font-semibold mb-6">Modal Examples</h3>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => setBasicModalOpen(true)}
            className="h-11 px-6 rounded-lg bg-primary-400 text-white font-medium
              hover:bg-primary-500 transition-colors"
          >
            Basic Modal
          </button>

          <button
            onClick={() => setConfirmModalOpen(true)}
            className="h-11 px-6 rounded-lg bg-primary-400 text-white font-medium
              hover:bg-primary-500 transition-colors"
          >
            Confirmation Modal
          </button>

          <button
            onClick={() => setDeleteModalOpen(true)}
            className="h-11 px-6 rounded-lg bg-error-500 text-white font-medium
              hover:bg-error-600 transition-colors"
          >
            Delete Modal
          </button>

          <button
            onClick={() => setFormModalOpen(true)}
            className="h-11 px-6 rounded-lg bg-primary-400 text-white font-medium
              hover:bg-primary-500 transition-colors"
          >
            Form Modal
          </button>
        </div>
      </section>

      {/* Basic Modal */}
      <Modal
        isOpen={basicModalOpen}
        onClose={() => setBasicModalOpen(false)}
        title="Welcome to Vegerly"
        footer={
          <div className="flex justify-end">
            <button
              onClick={() => setBasicModalOpen(false)}
              className="h-11 px-6 rounded-lg bg-primary-400 text-white font-medium
                hover:bg-primary-500 transition-colors"
            >
              Got it!
            </button>
          </div>
        }
      >
        <div className="space-y-4">
          <p className="text-body-md text-neutral-600">
            We're excited to have you here! Browse our selection of fresh,
            healthy meals delivered right to your door.
          </p>
          <ul className="space-y-2 text-body-md text-neutral-600">
            <li className="flex items-start gap-2">
              <span className="text-primary-400 mt-1">✓</span>
              <span>100% organic ingredients</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-400 mt-1">✓</span>
              <span>Delivered in 30 minutes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary-400 mt-1">✓</span>
              <span>Satisfaction guaranteed</span>
            </li>
          </ul>
        </div>
      </Modal>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={confirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        onConfirm={handleConfirm}
        title="Confirm Your Order"
        message="Are you sure you want to place this order? Your items will be prepared and delivered within 30 minutes."
        confirmText="Place Order"
        isLoading={isLoading}
      />

      {/* Delete Confirmation Modal */}
      <ConfirmationModal
        isOpen={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        title="Delete Item"
        message="Are you sure you want to delete this item? This action cannot be undone."
        confirmText="Delete"
        cancelText="Cancel"
        variant="danger"
        isLoading={isLoading}
      />

      {/* Form Modal */}
      <FormModal
        isOpen={formModalOpen}
        onClose={() => setFormModalOpen(false)}
        onSubmit={handleFormSubmit}
        title="Contact Us"
        isLoading={isLoading}
      >
        <div className="space-y-4">
          <div>
            <label className="block text-body-sm font-medium text-neutral-700 mb-2">
              Name
            </label>
            <input
              type="text"
              required
              className="w-full h-11 px-4 rounded-lg border border-neutral-300
                focus:outline-none focus:border-primary-400 focus:ring-3
                focus:ring-primary-400 focus:ring-offset-2
                transition-all duration-200"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-body-sm font-medium text-neutral-700 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full h-11 px-4 rounded-lg border border-neutral-300
                focus:outline-none focus:border-primary-400 focus:ring-3
                focus:ring-primary-400 focus:ring-offset-2
                transition-all duration-200"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-body-sm font-medium text-neutral-700 mb-2">
              Message
            </label>
            <textarea
              required
              rows={4}
              className="w-full p-4 rounded-lg border border-neutral-300
                focus:outline-none focus:border-primary-400 focus:ring-3
                focus:ring-primary-400 focus:ring-offset-2
                transition-all duration-200 resize-none"
              placeholder="How can we help you?"
            />
          </div>
        </div>
      </FormModal>
    </div>
  );
}

export default Modal;
