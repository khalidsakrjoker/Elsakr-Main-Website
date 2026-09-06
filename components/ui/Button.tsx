import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide rounded-md transition-colors duration-200 outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary:
      'bg-[var(--color-accent)] text-white dark:text-[#12100e] hover:bg-[var(--color-accent-hover)]',
    secondary:
      'bg-[var(--color-surface-muted)] text-[var(--color-ink)] border border-[var(--color-border)] hover:border-[var(--color-accent)]',
    outline:
      'bg-transparent text-[var(--color-ink)] border border-[var(--color-border)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
