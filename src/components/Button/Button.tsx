import React from 'react';
import { cn } from '../../utils/cn';
import { cva } from 'class-variance-authority';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The visual style variant of the button
   */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
  /**
   * The size of the button
   */
  size?: 'sm' | 'md' | 'lg' | 'icon';
  /**
   * Whether the button should take the full width of its container
   */
  fullWidth?: boolean;
  /**
   * Whether the button is in a loading state
   */
  loading?: boolean;
  /**
   * Icon to display in the button (optional)
   */
  icon?: React.ReactNode;
}

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-border bg-background shadow-sm hover:bg-secondary hover:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-secondary hover:text-foreground",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        md: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'md', 
    fullWidth = false,
    loading = false,
    icon,
    children, 
    disabled,
    type,
    'aria-label': ariaLabel,
    title,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading;
    const isIconOnly = size === 'icon' || (!children && icon);

    // Warn in dev if icon-only button has no accessible label
    if (process.env.NODE_ENV !== 'production' && isIconOnly && !ariaLabel && !title) {
      // eslint-disable-next-line no-console
      console.warn(
        'Button: Icon-only buttons must have an accessible label via aria-label or title.'
      );
    }

    const iconSize = size === 'lg' ? 'h-4 w-4' : size === 'sm' ? 'h-3 w-3' : 'h-4 w-4';

    return (
      <button
        className={cn(
          buttonVariants({ variant, size }),
          fullWidth && 'w-full',
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
              className={cn('animate-spin', iconSize)}
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
        {!loading && icon && (
          <span className={cn('flex items-center justify-center shrink-0', iconSize)}>
            {icon}
          </span>
        )}
        {children && !isIconOnly && (
          <span className="block" aria-live={loading ? 'polite' : undefined}>
            {children}
          </span>
        )}
        {!loading && isIconOnly && (icon) && (
          <span className={cn('flex items-center justify-center shrink-0', iconSize)}>
            {icon}
          </span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button'; 