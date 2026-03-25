'use client';

/**
 * IMAGINE DREAMS AFRICA — REVEAL ON SCROLL
 * GSAP ScrollTrigger wrapper for section reveals
 * PRD Section 03: Motion & Kinetic Design Principles
 */

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '@/lib/utils';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  start?: string;
  stagger?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export function RevealOnScroll({
  children,
  className = '',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  threshold = 0.1,
  start = 'top 85%',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  stagger = 0.1,
  delay = 0,
  direction = 'up',
}: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Memoize delay to prevent dependency array size changes
  const delayRef = useRef(delay);
  
  useEffect(() => {
    delayRef.current = delay;
  }, [delay]);

  useEffect(() => {
    if (!ref.current || prefersReducedMotion()) return;

    const element = ref.current;
    
    // Direction vectors
    const directionMap = {
      up: { y: 48, x: 0 },
      down: { y: -48, x: 0 },
      left: { y: 0, x: 48 },
      right: { y: 0, x: -48 },
    };

    const { y, x } = directionMap[direction];

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        y,
        x,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.7,
        delay: delayRef.current,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start,
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animation.kill();
    };
  }, [direction, start]);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </div>
  );
}
