'use client';

/**
 * IMAGINE DREAMS AFRICA — VENTURES SECTION
 * Active ventures proving the system works
 */

import { VENTURES } from '@/lib/constants';
import { MotionCard } from '@/components/animations/MotionCard';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export function VenturesSection() {
  return (
    <section id="ventures" className="brutalist-section bg-[var(--white)] text-[var(--black)]">
      <div className="brutalist-container max-w-[1600px] mx-auto">
        {/* Section label */}
        <RevealOnScroll direction="up">
          <p className="text-[8px] font-mono uppercase tracking-[0.35em] text-black/60 mb-16">
            04 · Active Experiments
          </p>
        </RevealOnScroll>

        {/* Heading */}
        <RevealOnScroll direction="left">
          <h2 className="font-display font-bold text-[clamp(32px,_6vw,_64px)] leading-none mb-20">
            VENTURES.<br />
            <span 
              className="text-transparent"
              style={{ WebkitTextStroke: '1px rgba(8,8,8,0.25)' }}
            >
              PROOF OF SYSTEM.
            </span>
          </h2>
        </RevealOnScroll>

        {/* Venture cards */}
        <div className="grid md:grid-cols-3 gap-12">
          {VENTURES.map((venture, index) => (
            <MotionCard
              key={venture.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <a 
                href={venture.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-12 border border-[rgba(8,8,8,0.12)] hover:border-[rgba(8,8,8,0.3)] transition-colors bg-[var(--white)]"
              >
                {/* Large outlined letter */}
                <div className="mb-10">
                  <span 
                    className="font-display font-bold text-[80px] leading-none block transition-all duration-300 group-hover:text-[var(--black)]/20"
                    style={{ 
                      WebkitTextStroke: '1px rgba(8,8,8,0.2)',
                    }}
                  >
                    {venture.letter}
                  </span>
                </div>

                {/* Venture name */}
                <h3 className="font-display font-bold text-3xl mb-3">
                  {venture.name}
                </h3>

                {/* Pillar tag */}
                <p className="text-[8px] font-mono uppercase tracking-[0.2em] text-black/60 mb-6">
                  {venture.tag}
                </p>

                {/* Description */}
                <p className="font-body text-base leading-relaxed text-[var(--black)]/75 mb-8">
                  {venture.desc}
                </p>

                {/* CTA link */}
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.1em] group-hover:gap-4 transition-all">
                  <span>Explore</span>
                  <span>→</span>
                </div>
              </a>
            </MotionCard>
          ))}
        </div>
      </div>
    </section>
  );
}

