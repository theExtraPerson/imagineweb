'use client';

/**
 * IMAGINE DREAMS AFRICA — VISION SECTION
 * The 2035 glimpse - inspire without exposing the full blueprint
 * PRD Section 08: Vision Section Specifications
 */

import { useState } from 'react';
import { VISION } from '@/lib/constants';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export function VisionSection() {
  return (
    <section id="vision" className="brutalist-section bg-[var(--black)] relative overflow-hidden">
      <div className="brutalist-container max-w-[1600px] mx-auto">
        {/* Ghosted 2035 background */}
        <div 
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span 
            className="font-display font-bold text-[clamp(120px,_25vw,_240px)] leading-none opacity-[0.03]"
          >
            2035
          </span>
        </div>

        {/* Section label */}
        <RevealOnScroll direction="up">
          <p className="text-[8px] font-mono uppercase tracking-[0.35em] text-white/50 mb-16">
            {VISION.label.split('·')[0]}· A Glimpse. Not the Blueprint.
          </p>
        </RevealOnScroll>

        {/* Main manifesto text with redactions */}
        <RevealOnScroll direction="up" start="top 75%">
          <div className="max-w-3xl">
            <p className="font-body italic text-[clamp(22px,_3vw,_32px)] leading-relaxed text-white/90">
              {VISION.manifesto.split(' ').map((word, index) => {
                const cleanWord = word.replace(/[.,]/g, '');
                const isRedacted = VISION.redactedPhrases.some(
                  phrase => phrase.toLowerCase().includes(cleanWord.toLowerCase())
                );

                return (
                  <span key={index} className="inline mr-2">
                    {isRedacted ? (
                      <RedactedText>{word}</RedactedText>
                    ) : (
                      <span>{word}</span>
                    )}
                  </span>
                );
              })}
            </p>
          </div>
        </RevealOnScroll>

        {/* Pillar dots row */}
        <RevealOnScroll direction="up" delay={0.3}>
          <div className="mt-20 flex flex-wrap gap-6">
            {VISION.pillarDots.map((pillar) => (
              <div 
                key={pillar}
                className="flex items-center gap-2 text-[8px] font-mono uppercase tracking-[0.15em] text-white/50"
              >
                <span className="w-1 h-1 bg-current rounded-full" />
                <span>{pillar}</span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

/**
 * Redacted text component - reveals on hover
 */
function RedactedText({ children }: { children: string }) {
  const [revealed, setRevealed] = useState(false);

  return (
    <span
      onMouseEnter={() => setRevealed(true)}
      onMouseLeave={() => setRevealed(false)}
      title="hover to peek"
      className="inline-block transition-all duration-300 cursor-help px-1"
      style={{
        backgroundColor: revealed ? 'rgba(240,237,228,0.1)' : '#F2EFE8',
        color: revealed ? 'rgba(8,8,8,0.6)' : '#F2EFE8',
      }}
    >
      {children}
    </span>
  );
}
