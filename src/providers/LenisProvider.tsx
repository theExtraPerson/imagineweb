'use client';

/**
 * IMAGINE DREAMS AFRICA — LENIS SMOOTH SCROLL PROVIDER
 * Implements smooth scrolling with GSAP ScrollTrigger sync
 * PRD Section 07: Performance Targets
 */

import { useEffect, ReactNode } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isTouchDevice } from '@/lib/utils';

interface LenisProviderProps {
  children: ReactNode;
}

export function LenisProvider({ children }: LenisProviderProps) {
  useEffect(() => {
    // Disable Lenis on mobile/touch devices for better performance
    if (isTouchDevice()) {
      return;
    }

    // Initialize Lenis with PRD-specified settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    // Sync Lenis with GSAP ScrollTrigger - CRITICAL for scroll-driven animations
    lenis.on('scroll', ScrollTrigger.update);
    
    // Add Lenis to GSAP's ticker for frame-perfect sync
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });
    
    // Disable GSAP's built-in lag smoothing for tighter sync
    gsap.ticker.lagSmoothing(0);

    // Cleanup on unmount
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf.bind(lenis));
    };
  }, []);

  return <>{children}</>;
}
