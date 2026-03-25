'use client';

/**
 * IMAGINE DREAMS AFRICA — NAVIGATION BAR
 * Fixed top navigation with mix-blend-mode: difference
 * PRD Section 04: Navigation Architecture
 */

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NAVIGATION } from '@/lib/constants';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll state for styling changes
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'py-4' : 'py-6'
      )}
      style={{
        mixBlendMode: 'difference',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-8 md:px-16 lg:px-24">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="#home" 
            className="font-display font-bold text-2xl tracking-tight hover:opacity-70 transition-opacity"
          >
            IDA
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {NAVIGATION.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
              >
                {item.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="#contact"
              className="px-6 py-3 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium hover:opacity-70 transition-opacity"
            >
              Connect
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={cn(
              'w-6 h-px bg-current transition-transform',
              mobileMenuOpen && 'rotate-45 translate-y-2'
            )} />
            <span className={cn(
              'w-6 h-px bg-current transition-opacity',
              mobileMenuOpen && 'opacity-0'
            )} />
            <span className={cn(
              'w-6 h-px bg-current transition-transform',
              mobileMenuOpen && '-rotate-45 -translate-y-2'
            )} />
          </button>
        </nav>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg border-t border-white/10 py-10 px-8 md:px-16">
            <div className="flex flex-col gap-8">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm uppercase tracking-[0.2em] hover:opacity-70 transition-opacity"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <Link
                href="#contact"
                className="mt-6 px-6 py-4 bg-white text-black text-xs uppercase tracking-[0.2em] font-medium text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Connect
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
