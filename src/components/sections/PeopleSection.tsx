'use client';

/**
 * IMAGINE DREAMS AFRICA — PEOPLE SECTION
 * The builders - team and recruitment
 */

import { PEOPLE } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { MotionCard } from '@/components/animations/MotionCard';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export function PeopleSection() {
  return (
    <section id="people" className="brutalist-section bg-[var(--white)] text-[var(--black)]">
      <div className="brutalist-container max-w-[1600px] mx-auto">
        {/* Section label */}
        <RevealOnScroll direction="up">
          <p className="text-[8px] font-mono uppercase tracking-[0.35em] text-black/60 mb-16">
            06 · The Builders
          </p>
        </RevealOnScroll>

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-20">
          <RevealOnScroll direction="left">
            <h2 className="font-display font-bold text-[clamp(32px,_6vw,_64px)] leading-none">
              {PEOPLE.heading[0]}<br />
              <span 
                className="text-transparent"
                style={{ WebkitTextStroke: '1px rgba(8,8,8,0.25)' }}
              >
                {PEOPLE.heading[1]}
              </span>
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <p className="font-body text-xl text-[var(--black)]/75 leading-relaxed">
              {PEOPLE.invitation}
            </p>
          </RevealOnScroll>
        </div>

        {/* People grid */}
        <RevealOnScroll direction="up">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {PEOPLE.roles.map((role, index) => (
              <MotionCard
                key={role.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`p-12 flex flex-col items-center justify-center aspect-square text-center ${
                  role.filled 
                    ? 'bg-[var(--black)] text-[var(--white)] shadow-[var(--ink-glow)]'
                    : 'border border-dashed border-[rgba(8,8,8,0.25)] bg-[var(--white)]'
                }`}
              >
                <span className="font-display font-bold text-2xl mb-3">
                  {role.title}
                </span>
                
                {role.filled ? (
                  <span className="text-xs font-mono uppercase tracking-[0.1em] opacity-80">
                    {role.name}
                  </span>
                ) : (
                  <span className="text-xs font-mono uppercase tracking-[0.1em] opacity-70 mt-2 text-[var(--black)]">
                    {role.question}
                  </span>
                )}
              </MotionCard>
            ))}
          </div>
        </RevealOnScroll>

        {/* CTA Band */}
        <RevealOnScroll direction="up">
          <div className="bg-[var(--white)] text-[var(--black)] py-16 px-12 md:px-16 border border-[rgba(8,8,8,0.12)]">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <h3 className="font-display font-bold text-3xl md:text-4xl mb-3">
                  {PEOPLE.ctaBand.heading}
                </h3>
                <p className="font-body text-base italic text-[var(--black)]/70">
                  Join us in building Africa&apos;s digital future
                </p>
              </div>
              
              <div className="flex flex-wrap gap-6">
                <Button variant="primary" size="lg" asChild>
                  <a href={PEOPLE.ctaBand.primary.href}>
                    {PEOPLE.ctaBand.primary.label}
                  </a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href={PEOPLE.ctaBand.secondary.href}>
                    {PEOPLE.ctaBand.secondary.label}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

