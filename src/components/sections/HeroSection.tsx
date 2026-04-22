'use client';

/**
 * IMAGINE DREAMS AFRICA — HERO SECTION
 * First impression with kinetic typography and African patterns
 * PRD Section 08: Hero Section Specifications
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';
import { kentePattern } from '@/lib/patterns';
import { HERO } from '@/lib/constants';
import { SplitTextReveal } from '@/components/animations/SplitTextReveal';
import { prefersReducedMotion, isTouchDevice } from '@/lib/utils';
import { AfricanContinentScene } from '@/components/3d/AfricanContinentScene';

export function HeroSection() {
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const locationDotRef = useRef<HTMLDivElement>(null);

  // Animate scroll indicator pulse
  useEffect(() => {
    if (prefersReducedMotion() || !scrollIndicatorRef.current) return;

    const timeline = gsap.timeline({ repeat: -1 });
    
    timeline
      .to(scrollIndicatorRef.current, {
        opacity: 0.3,
        duration: 1.2,
        ease: 'ease-in-out',
      })
      .to(scrollIndicatorRef.current, {
        opacity: 1,
        duration: 0.6,
        ease: 'ease-in-out',
      });

    return () => {
      timeline.kill();
    };
  }, []);

  // Animate location dot pulse
  useEffect(() => {
    if (prefersReducedMotion() || !locationDotRef.current) return;

    const timeline = gsap.timeline({ repeat: -1 });
    
    timeline
      .to(locationDotRef.current, {
        scale: 1.5,
        opacity: 0.3,
        duration: 1.5,
        ease: 'ease-out',
      })
      .to(locationDotRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.8,
        ease: 'ease-in',
      });

    return () => {
      timeline.kill();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pb-32 px-8 md:px-16 lg:px-24 overflow-hidden brutalist-section"
      style={{
        backgroundColor: 'var(--white)',
        backgroundImage: `url("${kentePattern}")`,
        backgroundSize: '80px 80px',
      }}
    >
      {/* 3D African Continent Particle Scene Background */}
    
      
      {/* Decorative rotated square top-right */}
      <div 
        className="absolute top-0 right-0 w-64 h-64 border border-[rgba(8,8,8,0.12)] rotate-45 translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      {/* Location badge */}
      <div className="absolute top-12 left-12 md:top-20 md:left-20 flex items-center gap-3">
        <div className="relative flex items-center gap-2 text-xs font-mono uppercase tracking-[0.15em] text-black/70">
          <span className="relative flex h-2 w-2">
            <span 
              ref={locationDotRef}
              className="absolute inline-flex h-full w-full rounded-full bg-[var(--black)] opacity-100"
            />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--black)]/20" />
          </span>
          {HERO.location}
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-[1600px] mx-auto w-full relative z-10">
        {/* Title - kinetic entry animation */}
        <h1 className="font-display font-bold mb-12">
          <div className="overflow-hidden">
            <SplitTextReveal 
              text={HERO.title[0]} 
              level="words"
              delay={0.8}
              className="text-[clamp(52px,_12vw,_160px)] leading-none"
            />
          </div>
          <div className="overflow-hidden">
            <SplitTextReveal 
              text={HERO.title[1]} 
              level="words"
              delay={0.22}
              className={cn(
                "text-[clamp(52px,_12vw,_160px)] leading-none",
                "text-transparent",
                "[text-shadow:_1px_1px_0_currentColor]"
              )}
              style={{ WebkitTextStroke: '1px var(--black)' }}
            />
          </div>
          <div className="overflow-hidden">
            <SplitTextReveal 
              text={HERO.title[2]} 
              level="words"
              delay={0.34}
              className="text-[clamp(52px,_12vw,_160px)] leading-none"
            />
          </div>
        </h1>

        {/* Tagline */}
        <p className="font-body italic text-xl md:text-2xl text-[var(--black)]/75 max-w-3xl mb-16">
          {HERO.tagline}
        </p>

        {/* Scroll indicator */}
        {!isTouchDevice() && (
          <div 
            ref={scrollIndicatorRef}
            className="flex flex-col items-center gap-4 mt-20"
          >
            <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-black/60">
              Scroll
            </span>
            <div className="w-px h-12 bg-gradient-to-b from-[var(--black)] to-transparent" />
          </div>
        )}
      </div>

      {/* Section counter */}
      <div className="absolute bottom-12 right-12 text-[8px] font-mono uppercase tracking-[0.2em] text-black/40">
        01 / 07
      </div>
    </section>
  );
}

