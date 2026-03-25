'use client';

/**
 * IMAGINE DREAMS AFRICA — CUSTOM CURSOR
 * Desktop-only cursor with lerp animation
 * Based on reference HTML implementation
 */

import { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    // Only show custom cursor on desktop (non-touch devices)
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;

    // Linear interpolation helper
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    // Mouse move handler - dot follows instantly
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      if (dot) {
        dot.style.left = `${e.clientX}px`;
        dot.style.top = `${e.clientY}px`;
      }
    };

    // Animation loop for ring with lerp
    const animateCursor = () => {
      if (ring) {
        // Lerp factor: 0.1 = smooth delay, 1.0 = instant
        ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.1);
        ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.1);
        
        ring.style.left = `${ringPos.current.x}px`;
        ring.style.top = `${ringPos.current.y}px`;
      }
      
      animationFrameRef.current = requestAnimationFrame(animateCursor);
    };

    // Start animation loop
    animateCursor();

    // Scale ring on hover over interactive elements
    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .pillar-card, .venture-card, .person-card, [data-cursor="hover"]')) {
        if (ring) {
          ring.style.width = '64px';
          ring.style.height = '64px';
        }
        if (dot) {
          dot.style.transform = 'translate(-50%, -50%) scale(0.4)';
        }
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .pillar-card, .venture-card, .person-card, [data-cursor="hover"]')) {
        if (ring) {
          ring.style.width = '40px';
          ring.style.height = '40px';
        }
        if (dot) {
          dot.style.transform = 'translate(-50%, -50%) scale(1)';
        }
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseEnter);
    document.addEventListener('mouseout', handleMouseLeave);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseEnter);
      document.removeEventListener('mouseout', handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Cursor dot - follows instantly */}
      <div
        ref={dotRef}
        id="cursor-dot"
        className={cn(
          'fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]',
          'transition-transform duration-75 ease-out'
        )}
        style={{
          mixBlendMode: 'difference',
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Cursor ring - follows with lerp */}
      <div
        ref={ringRef}
        id="cursor-ring"
        className={cn(
          'fixed top-0 left-0 w-10 h-10 border border-white/50 rounded-full pointer-events-none z-[9998]',
          'transition-all duration-150 ease-out'
        )}
        style={{
          transform: 'translate(-50%, -50%)',
        }}
      />
    </>
  );
}
