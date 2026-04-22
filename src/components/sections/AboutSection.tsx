'use client';

/**
 * IMAGINE DREAMS AFRICA — ABOUT SECTION
 * Mission statement and credibility stats
 * PRD Section 08: About Section Specifications
 */

import { ABOUT } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { MotionCard } from '@/components/animations/MotionCard';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export function AboutSection() {
  return (
    <section id="about" className="brutalist-section bg-[var(--black)]">
      <div className="brutalist-container max-w-[1600px] mx-auto">
        {/* Section label */}
        <RevealOnScroll direction="up">
          <p className="text-[8px] font-mono uppercase tracking-[0.35em] text-white/50 mb-16">
            02 · What We Are
          </p>
        </RevealOnScroll>

        {/* Split layout: heading left, content right */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-20">
          {/* Heading */}
          <RevealOnScroll direction="left">
            <h2 className="font-display font-bold text-[clamp(32px,_6vw,_64px)] leading-none">
              <span className="block">{ABOUT.heading[0]}</span>
              <span 
                className="block text-transparent"
                style={{ WebkitTextStroke: '1px rgba(240,237,228,0.35)' }}
              >
                {ABOUT.heading[1]}
              </span>
              <span className="block">{ABOUT.heading[2]}</span>
            </h2>
          </RevealOnScroll>

          {/* Body paragraphs */}
          <RevealOnScroll direction="right">
            <div className="space-y-8">
              {ABOUT.paragraphs.map((paragraph, index) => (
                <MotionCard
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="font-body text-xl text-white/90 leading-relaxed">
                    {paragraph}
                  </p>
                </MotionCard>
              ))}
            </div>
          </RevealOnScroll>
        </div>

        {/* Stats grid */}
        <RevealOnScroll direction="up" start="top 80%">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 mb-20">
            {ABOUT.stats.map((stat, index) => (
              <MotionCard
                key={stat.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[var(--black)] p-12 flex flex-col items-center justify-center aspect-square"
              >
                <span className="font-display text-white/50 font-bold text-6xl md:text-7xl mb-3">
                  {stat.value}
                </span>
                <span className="text-[8px] font-mono uppercase tracking-[0.2em] text-white/50 text-center leading-relaxed">
                  {stat.label}
                </span>
              </MotionCard>
            ))}
          </div>
        </RevealOnScroll>

        {/* CTAs */}
        <RevealOnScroll direction="up">
          <div className="flex flex-wrap gap-6">
            <Button variant="primary" size="lg" asChild>
              <a href={ABOUT.ctaPrimary.href}>{ABOUT.ctaPrimary.label}</a>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a href={ABOUT.ctaSecondary.href}>{ABOUT.ctaSecondary.label}</a>
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
