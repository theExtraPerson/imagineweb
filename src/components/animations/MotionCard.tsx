'use client';

/**
 * IMAGINE DREAMS AFRICA — MOTION CARD
 * Framer Motion wrapper for hover states and entrance animations
 * PRD Section 03: Motion & Kinetic Design Principles
 */

import { motion, Transition } from 'motion/react';
import { ReactNode } from 'react';

interface MotionCardProps {
  children: ReactNode;
  className?: string;
  initial?: { opacity: number; y: number };
  whileInView?: { opacity: number; y: number };
  whileHover?: Record<string, string | number>;
  transition?: Transition;
  viewport?: { once?: boolean; margin?: string };
}

export function MotionCard({
  children,
  className = '',
  initial = { opacity: 0, y: 32 },
  whileInView = { opacity: 1, y: 0 },
  whileHover,
  transition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  viewport = { once: true, margin: '-10%' },
}: MotionCardProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      whileInView={whileInView}
      whileHover={whileHover}
      transition={transition}
      viewport={viewport}
    >
      {children}
    </motion.div>
  );
}
