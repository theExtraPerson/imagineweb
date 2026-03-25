"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: React.ReactElement;
}

export default function Magnetic({ children }: MagneticProps) {
  const magneticRef = useRef<HTMLDivElement>(null);
  const gsapInstancesRef = useRef<{ xTo?: ReturnType<typeof gsap.quickTo>; yTo?: ReturnType<typeof gsap.quickTo> } | null>(null);

  useEffect(() => {
    if (!magneticRef.current) return;
    
    const xTo = gsap.quickTo(magneticRef.current, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(magneticRef.current, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });
    gsapInstancesRef.current = { xTo, yTo };

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = magneticRef.current!.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.35); // Strength of the pull
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    const currentRef = magneticRef.current;
    currentRef?.addEventListener("mousemove", handleMouseMove);
    currentRef?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      currentRef?.removeEventListener("mousemove", handleMouseMove);
      currentRef?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Clone the child element and attach the ref
  // Note: Passing ref object (not reading .current) is safe during render
  return React.cloneElement(
    children,
    // eslint-disable-next-line react-hooks/refs
    { ref: magneticRef } as React.Attributes & { ref: React.RefObject<HTMLDivElement> }
  );
}