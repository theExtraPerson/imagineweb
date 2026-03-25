import { forwardRef, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, asChild, ...props }, ref) => {
    // Variant styles
    const variants = {
      primary: 'bg-white text-black hover:bg-white/90',
      secondary: 'border border-white text-white hover:bg-white/10',
      tertiary: 'text-white hover:text-white/70 underline-offset-4 hover:underline',
    };

    // Size styles
    const sizes = {
      sm: 'px-4 py-2 text-xs',
      md: 'px-6 py-3 text-xs',
      lg: 'px-8 py-4 text-sm',
    };

    // If asChild is true, clone the child element with appropriate props
    if (asChild && typeof children === 'object' && children !== null) {
      const child = Array.isArray(children) ? children[0] : children;
      // Check if child is an anchor element
      if ('type' in child && child.type === 'a') {
        return (
          <a
            className={cn(
              'inline-flex items-center justify-center font-mono uppercase tracking-[0.2em] transition-all duration-300',
              variants[variant],
              sizes[size],
              className
            )}
            ref={ref as React.Ref<HTMLAnchorElement>}
            {...child.props}
          >
            {child.props.children}
          </a>
        );
      }
    }

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center font-mono uppercase tracking-[0.2em] transition-all duration-300',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
