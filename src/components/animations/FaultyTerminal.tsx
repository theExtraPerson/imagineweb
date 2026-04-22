// app/components/sections/PillarsSection.tsx
'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const PILLARS_DATA = [
  { num: '01', title: 'Digital Health', status: 'Active', coords: "0.3476° N, 32.5825° E", desc: "Leveraging technology to increase access to care...", image: '/images/pillar-1.jpg', color: "#F90000" },
  { num: '02', title: 'ICT Infrastructure', status: 'Foundation', coords: "1.2921° S, 36.8219° E", desc: 'Empowering businesses with robust infrastructure.', image: '/images/pillar-2.jpg', color: "#ff3300" },
  { num: '03', title: 'Indigenous Knowledge', status: 'Active', coords: "33.9249° S, 18.4241° E", desc: "Protecting and promoting African knowledge systems.", image: '/images/pillar-3.jpg', color: "#ff5500" },
  { num: '04', title: 'Energy & Environment', status: 'Pipeline', coords: "6.5244° N, 3.3792° E", desc: 'Harnessing technology for climate-smart agriculture.', image: '/images/pillar-4.jpg', color: "#ff7700" },
  { num: '05', title: 'ImagineDreams Labs', status: 'Planning', coords: "30.0619° N, 31.2480° E", desc: 'Where African talent meets opportunity.', image: '/images/pillar-5.jpg', color: "#ff9900" },
  { num: '06', title: 'Data Sovereignty', status: 'Core', coords: "Kampala_HQ", desc: "Protecting African data and digital destiny.", image: '/images/pillar-6.jpg', color: "#ffcc00" },
];

export function PillarsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftVisualRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pin the left visual container
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: leftVisualRef.current,
      });

      // Trigger index change on scroll
      PILLARS_DATA.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `.pillar-card-${i}`,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(i),
          onEnterBack: () => setActiveIndex(i),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Handle image crossfade
  useEffect(() => {
    gsap.to(imageRefs.current, {
      opacity: 0,
      duration: 0.5,
      ease: "power2.inOut"
    });
    gsap.to(imageRefs.current[activeIndex], {
      opacity: 1,
      duration: 0.5,
      ease: "power2.inOut"
    });
  }, [activeIndex]);

  return (
    <section ref={containerRef} className="relative bg-white text-black min-h-screen font-mono overflow-hidden">
      <div className="flex flex-col lg:flex-row">
        
        {/* LEFT: IMAGE CAROUSEL */}
        <div 
          ref={leftVisualRef} 
          className="hidden lg:flex w-1/2 h-screen items-center justify-center bg-gray-100 relative overflow-hidden"
        >
          {PILLARS_DATA.map((pillar, i) => (
            <div 
              key={pillar.num}
              ref={el => imageRefs.current[i] = el}
              className="absolute inset-0 w-full h-full opacity-0"
            >
              <Image 
                src={pillar.image} 
                alt={pillar.title} 
                fill 
                className="object-cover"
                priority={i === 0}
              />
              <div className="absolute inset-0 bg-black/20" /> {/* Overlay for text readability */}
            </div>
          ))}
        </div>

        {/* RIGHT: STACKING PILLAR CARDS */}
        <div className="w-full lg:w-1/2 relative z-20">
          {PILLARS_DATA.map((pillar, i) => (
            <div 
              key={pillar.num} 
              className={cn(
                `pillar-card-${i} min-h-screen flex flex-col justify-center px-12 border-b border-black/10 bg-white`
              )}
            >
              <div className="space-y-4">
                <Badge variant="outline" className="text-[10px] text-red-600 border-red-600">
                  {pillar.status}
                </Badge>
                <h2 className="text-6xl font-bold uppercase tracking-tighter">{pillar.title}</h2>
                <p className="text-lg text-black/60 max-w-md">{pillar.desc}</p>
                <div className="text-[10px] text-black/40">LAT: {pillar.coords}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}