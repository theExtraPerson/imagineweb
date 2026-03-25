'use client';

/**
 * IMAGINE DREAMS AFRICA — PAGE INDICATOR
 * Fixed right edge section dots showing current scroll position
 * PRD Section 08: Page Specifications
 */

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'pillars', label: 'Pillars' },
  { id: 'ventures', label: 'Ventures' },
  { id: 'vision', label: 'Vision' },
  { id: 'people', label: 'People' },
  { id: 'contact', label: 'Contact' },
];

export function PageIndicator() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = SECTIONS.findIndex((s) => s.id === entry.target.id);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className="fixed right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-6 z-40"
      aria-label="Page sections"
    >
      {SECTIONS.map((section, index) => (
        <button
          key={section.id}
          onClick={() => scrollToSection(section.id)}
          className="group flex items-center gap-4 flex-row-reverse"
          aria-label={`Scroll to ${section.label}`}
        >
          {/* Active indicator line */}
          <span
            className={cn(
              'h-px w-0 group-hover:w-10 transition-all duration-300',
              activeSection === index ? 'w-10 bg-white' : 'bg-white/30'
            )}
          />
          
          {/* Dot indicator */}
          <div
            className={cn(
              'w-2 h-2 rounded-full transition-all duration-300',
              activeSection === index 
                ? 'scale-150 bg-white' 
                : 'bg-white/30 hover:bg-white/70'
            )}
          />
        </button>
      ))}
    </nav>
  );
}
