'use client';

/**
 * IMAGINE DREAMS AFRICA — MARQUEE TEXT
 * Infinite scrolling marquee for pillar names and decorative text
 * PRD Section 03: Motion & Kinetic Design Principles
 */

import { cn } from '@/lib/utils';

interface MarqueeTextProps {
  items: string[];
  className?: string;
  speed?: number; // seconds per loop
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
}

export function MarqueeText({
  items,
  className = '',
  speed = 28,
  direction = 'left',
  pauseOnHover = false,
}: MarqueeTextProps) {
  return (
    <div 
      className={cn(
        'relative overflow-hidden whitespace-nowrap',
        className
      )}
      data-cursor="hover"
    >
      <div
        className={cn(
          'flex items-center gap-8',
          direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'
        )}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: pauseOnHover ? 'paused' : 'running',
        }}
        onMouseEnter={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = 'paused';
          }
        }}
        onMouseLeave={(e) => {
          if (pauseOnHover) {
            e.currentTarget.style.animationPlayState = 'running';
          }
        }}
      >
        {/* Render items twice for seamless loop */}
        {[...items, ...items].map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-sm font-mono uppercase tracking-[0.2em] text-white/70"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
