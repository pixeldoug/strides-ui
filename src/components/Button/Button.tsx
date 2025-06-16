import React from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
  /**
   * The size of the button
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Whether the button should take up the full width of its container
   */
  fullWidth?: boolean;
  /**
   * Optional loading state
   */
  loading?: boolean;
  /**
   * Icon to display before the button text
   */
  startIcon?: React.ReactNode;
  /**
   * Icon to display after the button text
   */
  endIcon?: React.ReactNode;
}

const buttonVariants = {
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/80',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/70',
  outline: 'border border-border bg-background text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/80',
  ghost: 'text-foreground hover:bg-accent hover:text-accent-foreground active:bg-accent/80',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 active:bg-destructive/80',
  link: 'text-foreground hover:underline underline-offset-4 hover:bg-transparent'
};

const buttonSizes = {
  sm: 'px-3 py-2 text-sm leading-5 h-9 rounded-2xl',
  md: 'px-4 py-2 text-sm leading-5 h-10 rounded-2xl', 
  lg: 'px-6 py-3 text-base leading-6 h-12 rounded-xl'
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    fullWidth = false,
    loading = false,
    startIcon,
    endIcon,
    children, 
    disabled,
    type,
    'aria-label': ariaLabel,
    title,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading;
    const isIconOnly = !children && (startIcon || endIcon);

    // Warn in dev if icon-only button has no accessible label
    if (process.env.NODE_ENV !== 'production' && isIconOnly && !ariaLabel && !title) {
      // eslint-disable-next-line no-console
      console.warn(
        'Button: Icon-only buttons must have an accessible label via aria-label or title.'
      );
    }

    return (
      <button
        className={cn(
          'btn-base',
          buttonSizes[size],
          buttonVariants[variant],
          fullWidth && 'w-full',
          'gap-2',
          className
        )}
        ref={ref}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-busy={loading || undefined}
        type={type || 'button'}
        aria-label={ariaLabel}
        title={title}
        {...props}
      >
        {loading && (
          <>
            <svg 
              className={cn(
                'animate-spin',
                size === 'lg' ? 'h-5 w-5' : 'h-4 w-4'
              )}
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
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
            {/* Visually hidden loading text for screen readers */}
            <span className="sr-only">Loading...</span>
          </>
        )}
        {!loading && startIcon && (
          <span className={cn(
            size === 'lg' ? 'h-5 w-5' : 'h-4 w-4',
            'flex items-center justify-center shrink-0'
          )}>
            {startIcon}
          </span>
        )}
        {children && (
          <span className="block whitespace-nowrap" aria-live={loading ? 'polite' : undefined}>
            {children}
          </span>
        )}
        {!loading && endIcon && (
          <span className={cn(
            size === 'lg' ? 'h-5 w-5' : 'h-4 w-4',
            'flex items-center justify-center shrink-0'
          )}>
            {endIcon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button'; 