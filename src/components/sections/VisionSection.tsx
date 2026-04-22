'use client';

import { useState, useRef, useEffect } from 'react';
import { useScroll, useTransform, motion, useInView } from 'motion/react';
import gsap from 'gsap'; // Imported for specialized noise & hover flicker
import { RevealOnScroll } from '@/components/animations/RevealOnScroll';
// import FaultyTerminal from '@/components/animations/FaultyTerminal';

// Define the official vision statement with the section to be redacted
const PRIMARY_VISION = {
  stableStart: "A ",
  redactedPart: "DIGITALLY SOVEREIGN AFRICA",
  stableEnd: " THAT LEVERAGES TECHNOLOGY TO PRESERVE ITS HERITAGE, DRIVE INNOVATION, AND ENSURE SUSTAINABLE DEVELOPMENT."
};

const SECONDARY_VISION = "“We envision an Africa where technology serves the people, not the other way around—where our data, our innovations, and our digital future belong to us.”";

export function VisionSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  
  // 1. SCROLL-BASED BLUR & OPACITY (Overall Section Reveal)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const blurValue = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [15, 0, 0, 15]);
  const opacityValue = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // 2. APPLY PERMANENT PHYSICAL PAPER TEXTURE OVERLAY
  useEffect(() => {
    const grainRef = sectionRef.current?.querySelector('.paper-grain');
    if (grainRef) {
      gsap.to(grainRef, {
        duration: 0.05,
        repeat: -1,
        yoyo: true,
        backgroundPosition: () => `${gsap.utils.random(0, 200)}% ${gsap.utils.random(0, 200)}%`,
        ease: 'none',
      });
    }
  }, []);

  return (
    <section 
      id="vision" 
      ref={sectionRef} 
      className="relative min-h-[160vh] bg-[var(--white)] py-32 overflow-hidden flex flex-col justify-center border-t border-[var(--black)]/10 font-mono"
    >
      {/* BACKGROUND LAYER 1: GSAP PAPER TEXTURE OVERLAY */}
      <div 
        className="paper-grain absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          // Subtly layered noise pattern
          backgroundImage: `
            linear-gradient(rgba(8,8,8,0.05) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(8,8,8,0.05) 1px, transparent 1px),
            url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAAUVBMVEVMaXltbm5zc3N3d3d6enp+fn6AgICA... (REPLACED WITH YOUR SMALL TEXTURE URL OR GENERATED GRAIN)')`,
          backgroundSize: '40px 40px, 40px 40px, 128px 128px',
          backgroundRepeat: 'repeat',
          mixBlendMode: 'multiply'
        }}
      />

      {/* BACKGROUND LAYER 2: FAINT BLACK TERMINAL MARKER (WebGL) */}
      {/* <div className="absolute inset-0 z-1 pointer-events-none opacity-[0.06] flex items-center justify-center">
        <div className="w-[80vw] h-[80vw]">
          <FaultyTerminal
            scale={2.0}
            gridMul={[3, 2]}
            digitSize={0.6}
            timeScale={0.1}
            tint="#080808" // Pure Black ink
            brightness={0.8}
            opacity={0.1}
          />
        </div>
      </div> */}

      <div className="brutalist-container max-w-[1500px] mx-auto relative z-10 px-6">
        
        {/* HUD HEADER (Blueprint Data) */}
        <div className="mb-24 flex items-end justify-between border-b-2 border-[var(--black)]/5 pb-6">
          <div className="border-l border-[var(--black)]/20 pl-4">
            <p className="text-[10px] uppercase tracking-[0.5em] text-[var(--black)] font-bold">
              [ TRANSMISSION_SOURCE: IDA_CORE // DECRYPT_ZONE ]
            </p>
            <h2 className="text-[9px] uppercase text-[var(--black)]/40 mt-1">
              Uganda_Sector: Central_HQ / Dossier_08-A
            </h2>
          </div>
          <div className="hidden md:block text-[8px] text-[var(--black)]/20 text-right uppercase tracking-[0.3em]">
            Protocol: 08-B / Alpha_Clearance<br />
            Status:リンク_最適化 [OK]
          </div>
        </div>

        {/* 3. PRIMARY VISION with Redaction Flickermicro-interaction */}
        <motion.div 
          style={{ 
            filter: useTransform(blurValue, (v) => `blur(${v}px)`),
            opacity: opacityValue 
          }}
          className="max-w-5xl mb-24 cursor-crosshair"
        >
          <h2 className="font-display text-[clamp(44px,9vw,80px)] leading-[0.85] text-[var(--black)] uppercase tracking-tighter">
            {PRIMARY_VISION.stableStart}
            
            {/* REDACTION COMPONENT */}
            <FlickerRedactedText word={PRIMARY_VISION.redactedPart} isInView={isInView} />
            
            {PRIMARY_VISION.stableEnd}
          </h2>
        </motion.div>

        {/* SECONDARY VISION (envision text) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-t border-[var(--black)]/5 pt-12">
          <div className="md:col-start-4 md:col-span-9 border-l border-[var(--black)]/20 pl-8 md:pl-16">
            <RevealOnScroll direction="up" delay={0.4}>
              <p className="font-body italic text-[clamp(22px,3.5vw,36px)] leading-tight text-[var(--black)]/80">
                {SECONDARY_VISION}
              </p>
              
              {/* Signed Metadata */}
              <div className="mt-16 pt-8 border-t border-[var(--black)]/5 flex items-center justify-between gap-6">
                 <div className="flex items-center gap-4">
                    <div className="h-px w-24 bg-[var(--black)]" />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--black)]/40">
                       IDA_Core_Signature
                    </span>
                 </div>
                 
                 <div className="font-mono text-[9px] text-red-600 font-bold uppercase animate-pulse">
                    [ decryption_complete / link_optimal ]
                 </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>

        {/* FOOTER NODE GRID */}
        <div className="mt-48 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 border-t border-[var(--black)]/5 pt-10">
           {['Heritage_Data', 'Innovation_Cycles', 'Sustainable_Dev', 'Data_Sovereignty', 'System_Integrity'].map((item, i) => (
             <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + (i * 0.1) }}
              key={item}
              className="flex flex-col gap-1 border-r border-[var(--black)]/5 pr-4 group cursor-help"
            >
               <span className="text-[10px] text-red-600 font-bold group-hover:scale-110 transition-transform">Nodes // Sector_{i+1}</span>
               <span className="text-[11px] text-[var(--black)]/30 uppercase tracking-[0.15em] group-hover:text-[var(--black)] transition-colors">
                  {item}
               </span>
               {/* Small 'data' code beneath Node title */}
               <span className="text-[7px] font-mono text-[var(--black)]/15 leading-none mt-1">IDA_OS_MODULE_v4.2</span>
             </motion.div>
           ))}
        </div>

      </div>
    </section>
  );
}

/**
 * ENHANCED FLICKER REDACTED TEXT component (Using GSAP)
 * Integrates high-frequency flicker override onto the "ink-on-paper" look.
 */
function FlickerRedactedText({ word, isInView }: { word: string, isInView: boolean }) {
  const [revealed, setRevealed] = useState(false);
  const textRef = useRef<HTMLSpanElement>(null);
  const flickerTimeline = useRef<GSAPTimeline | null>(null);
  const delay = 0.5; // Slight initial delay for the redaction block appearance

  // Setup chaotic flicker animation on mount
  useEffect(() => {
    if (!textRef.current) return;

    // Create a high-frequency, randomized flicker timeline
    flickerTimeline.current = gsap.timeline({ paused: true, repeat: -1 });
    
    // Animate opacity and blur randomly
    flickerTimeline.current.to(textRef.current, {
      duration: 0.04, // Ultra-fast
      opacity: () => gsap.utils.random(0.3, 1),
      filter: () => `blur(${gsap.utils.random(0, 2)}px)`,
      ease: "power2.inOut"
    }).to(textRef.current, {
      duration: 0.04,
      opacity: 1,
      filter: 'blur(0px)',
      ease: "none"
    });

    return () => {
      flickerTimeline.current?.kill(); // Clean up on unmount
    };
  }, []);

  const handleMouseEnter = () => {
    setRevealed(true);
    flickerTimeline.current?.play(); // Initialize security bypass
  };

  const handleMouseLeave = () => {
    setRevealed(false);
    flickerTimeline.current?.pause(0); // Stable state reset
  };

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay: delay, duration: 0.5 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative inline-block px-2 group" // Increased padding for impact
    >
      {/* 1. TEXT LAYER (Stable in default state, Flickers on hover) */}
      <span 
        ref={textRef}
        className={`transition-all duration-100 font-bold px-1 ${
          revealed ? 'text-[var(--white)] bg-[var(--black)] rounded-[2px] shadow-[var(--ink-glow)] blur-none' : 'text-transparent blur-[3px]'
        }`}
      >
        {word}
      </span>
      
      {/* 2. REDACTION BLOCK LAYER (Fills on enter, disappears on hover) */}
      {!revealed && (
        <motion.span 
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ delay: delay + 0.2, duration: 0.3 }}
          className="absolute inset-0 bg-[var(--black)] origin-left mix-blend-multiply" 
        />
      )}
    </motion.span>
  );
}
