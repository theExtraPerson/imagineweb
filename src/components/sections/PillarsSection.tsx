'use client';

/**
 * IMAGINE DREAMS AFRICA — PILLARS SECTION
 * Six strategic pillars presented as a system
 * PRD Section 08: Pillars Section Specifications
 */

import { PILLARS } from '@/lib/constants';
import { Badge } from '@/components/ui/Badge';
import { MotionCard } from '@/components/animations/MotionCard';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export function PillarsSection() {
  return (
    <section id="pillars" className="brutalist-section bg-[var(--black)]">
      <div className="brutalist-container max-w-[1600px] mx-auto">
        {/* Section label */}
        <RevealOnScroll direction="up">
          <p className="text-[8px] font-mono uppercase tracking-[0.35em] text-white/50 mb-16">
            03 · The Architecture
          </p>
        </RevealOnScroll>

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-20">
          <RevealOnScroll direction="left">
            <h2 className="font-display font-bold text-[clamp(32px,_6vw,_64px)] leading-none mb-6">
              SIX PILLARS.<br />ONE SYSTEM.
            </h2>
          </RevealOnScroll>
          
          <RevealOnScroll direction="right">
            <p className="font-body text-xl text-white/70 italic leading-relaxed">
              Every pillar reinforces the others. Together, they form the complete infrastructure Africa needs.
            </p>
          </RevealOnScroll>
        </div>

        {/* Pillar grid with 1px borders */}
        <RevealOnScroll direction="up">
          <div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--border)] border border-[var(--border)]"
            style={{ backgroundColor: 'var(--border)' }}
          >
            {PILLARS.map((pillar, index) => (
              <MotionCard
                key={pillar.num}
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{
                  backgroundColor: 'var(--white)',
                  color: 'var(--black)',
                }}
                className="bg-[var(--black)] p-12 md:p-16 relative group min-h-[400px] flex flex-col justify-between"
              >
                {/* Ghost number background */}
                <span 
                  className="absolute top-4 right-6 font-display font-bold text-[72px] leading-none opacity-10 select-none"
                  aria-hidden="true"
                >
                  {pillar.num}
                </span>

                {/* Content */}
                <div>
                  {/* Accent line */}
                  <div className="w-px h-8 bg-current mb-6 opacity-30" />

                  {/* Title */}
                  <h3 className="font-display font-bold text-2xl mb-4">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body text-sm leading-relaxed opacity-80 mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Status badge */}
                <div>
                  <Badge 
                    variant={
                      pillar.status.includes('Active') ? 'active' :
                      pillar.status === 'Pipeline' ? 'pipeline' :
                      pillar.status === 'Planning' ? 'planning' :
                      'default'
                    }
                  >
                    {pillar.status}
                  </Badge>
                </div>
              </MotionCard>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
