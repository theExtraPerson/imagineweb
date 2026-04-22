import { forwardRef, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'active' | 'pipeline' | 'planning' | 'outline';
  children: React.ReactNode;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-[rgba(8,8,8,0.05)] text-[var(--black)]/70',
      active: 'bg-[#4a8b5c]/20 text-[#4a8b5c]',
      pipeline: 'bg-[#8b6b4a]/20 text-[#8b6b4a]',
      planning: 'bg-[#8b4a6b]/20 text-[#8b4a6b]',
      outline: 'border border-[rgba(8,8,8,0.25)] text-red-600 bg-transparent',
    };

    return (
      <span
        className={cn(
          'inline-flex items-center px-3 py-1 text-[8px] uppercase tracking-[0.15em]',
          variants[variant],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';
