/**
 * IMAGINE DREAMS AFRICA — FOOTER
 * Brutalist beige theme with ink-style accents
 */

"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight, InstagramLogo, TwitterLogo, LinkedinLogo } from "@phosphor-icons/react";
import { FOOTER } from "@/lib/constants";
import Magnetic from "@/components/layout/Magnetic";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full bg-[var(--white)] text-[var(--black)] pt-32 pb-12 px-6 md:px-12 overflow-hidden border-t border-[rgba(8,8,8,0.08)]">
      <div className="max-w-[1800px] mx-auto">
        {/* Top: Call to Action */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h2 className="text-5xl md:text-7xl font-light tracking-tight leading-none mb-6">
              evolve <span className="italic font-serif opacity-60">with</span> us
            </h2>
          </motion.div>

          <div className="flex flex-col items-start md:items-end gap-6">
            <Magnetic>
              <Link
                href="mailto:hello@imaginedreams.africa"
                className="group relative flex items-center gap-4 text-xl md:text-2xl p-4 -m-4"
              >
                <span>Get in touch</span>
                <div className="w-12 h-12 rounded-full border border-[rgba(8,8,8,0.18)] flex items-center justify-center group-hover:bg-[var(--black)] group-hover:text-[var(--white)] transition-all duration-500 shadow-[var(--ink-glow)]">
                  <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                </div>
              </Link>
            </Magnetic>
          </div>
        </div>

        {/* Center: Brand Anchor */}
        <div className="relative mb-24 pointer-events-none select-none">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col font-black uppercase tracking-tighter"
          >
            <h3 className="text-[15vw] leading-[0.75]">imagine</h3>
            <h3 className="text-[15vw] leading-[0.75] text-right">dreams</h3>
            <h3 className="text-[15vw] leading-[0.75] text-center outline-text text-transparent">africa</h3>
          </motion.div>
        </div>

        {/* Bottom Bar: Navigation & Socials */}
        <div className="flex flex-col lg:flex-row justify-between items-center pt-10 border-t border-[rgba(8,8,8,0.08)] gap-8">
          {/* Copyright & Location */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-[10px] tracking-widest uppercase text-black/60">
            <p>© {year} {FOOTER.copyright}</p>
            <span className="hidden sm:inline opacity-20">/</span>
            <p>Kampala, Uganda → 00° 18&apos; N 32° 34&apos; E</p>
          </div>

          {/* Socials with Magnetic Pull */}
          <div className="flex items-center gap-8 text-[var(--black)]">
            <Magnetic>
              <a href="#" className="p-2 opacity-60 hover:opacity-100 transition-opacity">
                <InstagramLogo size={24} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="p-2 opacity-60 hover:opacity-100 transition-opacity">
                <TwitterLogo size={24} />
              </a>
            </Magnetic>
            <Magnetic>
              <a href="#" className="p-2 opacity-60 hover:opacity-100 transition-opacity">
                <LinkedinLogo size={24} />
              </a>
            </Magnetic>
          </div>

          {/* Legal Links */}
          <nav className="flex gap-8">
            {FOOTER.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[10px] uppercase tracking-widest text-black/60 hover:text-[var(--black)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}

