'use client';

/**
 * IMAGINE DREAMS AFRICA — CONTACT SECTION
 * Multi-pathway contact: form + email + social
 * PRD Section 08: Contact Section Specifications
 */

import { useState } from 'react';
import { CONTACT } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';

export function ContactSection() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setFormState('success');
        e.currentTarget.reset();
      } else {
        setFormState('error');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setFormState('error');
    }
  }

  return (
    <section id="contact" className="brutalist-section bg-[var(--black)]">
      <div className="brutalist-container max-w-[1600px] mx-auto">
        {/* Section label */}
        <RevealOnScroll direction="up">
          <p className="text-[8px] font-mono uppercase tracking-[0.35em] text-white/50 mb-16">
            07 · Find Us
          </p>
        </RevealOnScroll>

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-20">
          <RevealOnScroll direction="left">
            <h2 className="font-display font-bold text-[clamp(32px,_6vw,_64px)] leading-none">
              {CONTACT.heading[0]}<br />
              <span 
                className="text-transparent"
                style={{ WebkitTextStroke: '1px rgba(240,237,228,0.35)' }}
              >
                {CONTACT.heading[1]}
              </span>
              <br />
              {CONTACT.heading[2]}
            </h2>
          </RevealOnScroll>

          <RevealOnScroll direction="right">
            <div>
              <p className="font-body text-xl text-white/70 leading-relaxed mb-10">
                {CONTACT.sub}
              </p>

              {/* Direct contact */}
              <div className="space-y-4">
                <div>
                  <a 
                    href={`mailto:${CONTACT.email}`}
                    className="font-body text-2xl italic hover:opacity-70 transition-opacity"
                  >
                    {CONTACT.email}
                  </a>
                </div>

                <div className="text-sm font-mono uppercase tracking-[0.1em] text-white/50">
                  {CONTACT.location}
                </div>

                {/* Social links */}
                <div className="flex gap-6 pt-6">
                  {CONTACT.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-mono uppercase tracking-[0.1em] text-white/50 hover:text-white transition-colors"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Contact form */}
        <RevealOnScroll direction="up">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-8">
              {CONTACT.formFields.map((field) => (
                <div key={field.name}>
                  <label 
                    htmlFor={field.name}
                    className="block text-xs font-mono uppercase tracking-[0.15em] mb-3"
                  >
                    {field.label}
                  </label>
                  
                  {field.type === 'textarea' ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows={5}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-transparent border border-white/20 px-5 py-4 text-sm font-mono focus:outline-none focus:border-white transition-colors resize-none"
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      required
                      className="w-full bg-transparent border border-white/20 px-5 py-4 text-sm font-mono focus:outline-none focus:border-white transition-colors"
                    />
                  )}
                </div>
              ))}

              <Button 
                type="submit" 
                variant="primary" 
                size="lg"
                disabled={formState === 'submitting'}
                className="w-full"
              >
                {formState === 'submitting' ? 'Sending...' : CONTACT.submitLabel}
              </Button>

              {/* Trust line */}
              <p className="text-xs font-mono text-white/50 text-center mt-6">
                {CONTACT.trustLine}
              </p>
            </form>

            {/* Success/Error states */}
            <div className="hidden md:flex items-center justify-center">
              {formState === 'success' && (
                <div className="text-center p-8 border border-white/20">
                  <h3 className="font-display font-bold text-2xl mb-4">Message Sent</h3>
                  <p className="font-body text-white/70">
                    We&apos;ll get back to you within 48 hours.
                  </p>
                </div>
              )}

              {formState === 'error' && (
                <div className="text-center p-8 border border-red-500/20">
                  <h3 className="font-display font-bold text-2xl mb-4 text-red-400">Error</h3>
                  <p className="font-body text-white/70">
                    Please try again or email us directly.
                  </p>
                </div>
              )}

              {formState === 'idle' && (
                <div className="text-center p-8 opacity-30">
                  <p className="font-mono text-xs uppercase tracking-[0.2em]">
                    Ready to Connect
                  </p>
                </div>
              )}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
