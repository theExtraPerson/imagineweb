'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import * as THREE from 'three';
import { Badge } from '@/components/ui/Badge';
import { AfricaGlobe } from '@/components/animations/AfricaGlobe';

gsap.registerPlugin(ScrollTrigger);

const PILLARS_DATA = [
  { num: '01', title: 'Digital Health', status: 'Active', coords: '0.3476° N, 32.5825° E', desc: "Connecting Uganda's 84% rural population to quality care person centred care.", rotation: { y: 0.5, x: 0 } },
  { num: '02', title: 'ICT Infrastructure', status: 'Foundation', coords: '1.2921° S, 36.8219° E', desc: 'The backbone every other pillar runs on. Localised cloud and literacy pipelines.', rotation: { y: -0.8, x: 0.2 } },
  { num: '03', title: 'Indigenous Knowledge', status: 'Active', coords: '33.9249° S, 18.4241° E', desc: "Digitising and monetising Africa's cultural heritage as a modern economic asset.", rotation: { y: 1.2, x: -0.1 } },
  { num: '04', title: 'Energy & Environment', status: 'Pipeline', coords: '6.5244° N, 3.3792° E', desc: 'Solar micro-grids and environmental data platforms powering the continent sustainably.', rotation: { y: 2.5, x: 0.3 } },
  { num: '05', title: 'Innovation Hubs', status: 'Planning', coords: '30.0619° N, 31.2480° E', desc: 'Physical and digital co-creation spaces for the next generation of African devs.', rotation: { y: -1.5, x: -0.4 } },
  { num: '06', title: 'Data Sovereignty', status: 'Core', coords: ' Kampala_HQ', desc: "African-owned infrastructure and AI governance. Africa's data. Africa's future.", rotation: { y: 0, x: 0 } },
];

export function PillarsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftVisualRef = useRef<HTMLDivElement>(null);
  const threeGroupRef = useRef<THREE.Group>(null);
  
  // Smaller header height for a "Tactical Tab" look
  const HEADER_HEIGHT = 48; 

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. PIN THE VISUAL SIDE
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftVisualRef.current,
        pinSpacing: false,
      });

      // 2. STACKING & REVEAL ANIMATION
      PILLARS_DATA.forEach((pillar, i) => {
        const selector = `.pillar-card-${i}`;
        const stackTop = i * HEADER_HEIGHT;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: selector,
            start: `top ${stackTop}px`, // Stops exactly at the stack point
            end: "bottom top",
            scrub: true,
          }
        });

        // "Target Lock" Scan Line Animation
        tl.fromTo(`.scan-line-${i}`, 
          { scaleX: 0, backgroundColor: '#F90000' }, 
          { scaleX: 1, backgroundColor: '#ffffff', duration: 0.4 }
        );

        // Content Fade/Scale (creates the "sliding under" feel)
        tl.to(`.content-inner-${i}`, {
          opacity: 0,
          scale: 0.95,
          y: -20,
          duration: 1
        });

        // Sync Globe Rotation
        if (threeGroupRef.current) {
          tl.to(threeGroupRef.current.rotation, {
            y: pillar.rotation.y,
            x: pillar.rotation.x,
            ease: "power1.inOut"
          }, 0);
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-black min-h-screen font-mono">
      <div className="flex flex-col lg:flex-row">
        
        {/* LEFT: TACTICAL HUD & 3D GLOBE */}
        <div ref={leftVisualRef} className="hidden lg:flex w-1/2 h-screen items-center justify-center border-r border-white/10 relative bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 z-10 opacity-40">
            <AfricaGlobe globeRef={threeGroupRef} />
          </div>
          
          {/* Tactical HUD Overlays */}
          <div className="absolute top-8 left-8 z-20 space-y-1">
            <div className="text-[10px] text-red-600 animate-pulse">● SIGNAL_STRENGTH: NOMINAL</div>
            <div className="text-[9px] text-white/30 uppercase tracking-[0.2em]">Deployment_Zone: Sub-Saharan_Sector</div>
          </div>
          
          <div className="absolute bottom-8 left-8 z-20">
             <div className="h-16 w-px bg-gradient-to-t from-red-600 to-transparent" />
             <div className="text-[9px] text-white/40 mt-2">IDA_OS v4.0.2</div>
          </div>
        </div>

        {/* RIGHT: STACKING PILLAR CARDS */}
        <div className="w-full lg:w-1/2 relative bg-black">
          {PILLARS_DATA.map((pillar, i) => (
            <div 
              key={pillar.num} 
              className={`pillar-card-${i} sticky min-h-screen flex flex-col bg-black border-t border-white/5`}
              style={{ top: `${i * HEADER_HEIGHT}px` }}
            >
              {/* SLIM TACTICAL HEADER */}
              <div className="h-[48px] flex items-center justify-between px-6 bg-black/90 backdrop-blur-sm border-b border-white/5">
                <div className="flex items-center gap-6">
                  <span className="text-[10px] text-red-600 font-bold">0{i+1}</span>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/90">{pillar.title}</h3>
                </div>
                
                <div className="flex items-center gap-6">
                   <div className="hidden md:block text-[9px] text-white/30 tracking-tighter">
                      LOC: {pillar.coords}
                   </div>
                   <Badge variant="outline" className="h-5 text-[8px] border-red-900/50 text-red-500 rounded-none bg-red-950/10">
                      {pillar.status}
                   </Badge>
                </div>
              </div>

              {/* SCANNING PROGRESS BAR */}
              <div className="relative h-[2px] w-full bg-white/5">
                <div className={`scan-line-${i} absolute inset-y-0 left-0 w-full origin-left bg-red-600`} />
              </div>

              {/* MAIN CONTENT AREA */}
              <div className={`content-inner-${i} flex-1 flex flex-col justify-center px-8 md:px-20 py-12`}>
                <div className="max-w-xl space-y-8">
                  <h4 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter leading-[0.9]">
                    {pillar.title.split(' ')[0]}<br/>
                    <span className="text-red-600">{pillar.title.split(' ')[1] || ''}</span>
                  </h4>
                  
                  <p className="text-lg md:text-xl font-body text-white/50 leading-relaxed italic">
                    {pillar.desc}
                  </p>

                  <div className="pt-12 flex items-center gap-4">
                     <div className="flex-1 h-px bg-white/10" />
                     <button className="text-[10px] text-red-600 border border-red-600/30 px-4 py-2 hover:bg-red-600 hover:text-white transition-colors uppercase tracking-widest">
                        Initialize_Module
                     </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Spacer to allow the final stack to settle */}
          <div className="h-[40vh] bg-black" />
        </div>
      </div>
    </section>
  );
}