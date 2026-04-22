'use client';

/**
 * IMAGINE DREAMS AFRICA — SPLIT TEXT REVEAL
 * Character/word splitting with GSAP for kinetic typography
 * PRD Section 03: Typography System + Motion & Kinetic Design
 */

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SplitType from 'split-type';

interface SplitTextRevealProps {
  text: string;
  className?: string;
  level?: 'chars' | 'words' | 'lines';
  delay?: number;
  style?: React.CSSProperties;
}

export function SplitTextReveal({
  text,
  className = '',
  level = 'words',
  delay = 0,
  style,
}: SplitTextRevealProps) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const split = new SplitType(ref.current, { types: level });

    // Animate based on split level
    const targets = level === 'chars' 
      ? split.chars 
      : level === 'words' 
        ? split.words 
        : split.lines;

    gsap.fromTo(targets, {
      x: '-110%',
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
      stagger: level === 'chars' ? 0.03 : 0.08,
      delay,
    }, {
      x: '0%',
      opacity: 1,
      duration: 1,
      delay: 1,
      ease: 'elastic.out(1, 0.75)',
      stagger: level === 'chars' ? 0.03 : 0.08,
    });



    return () => {
      split.revert();
    };
  }, [level, delay]);

  return (
    <h2
      ref={ref}
      className={`${className} overflow-hidden`}
      style={{ display: 'block', ...style }}
    >
      {text}
    </h2>
  );
}
