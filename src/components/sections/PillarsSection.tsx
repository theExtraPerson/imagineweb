/* eslint-disable react-hooks/refs */
"use client";

import React, { useEffect, useRef, useCallback, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { pillarContent } from "@/lib/constants";

gsap.registerPlugin(ScrollTrigger);

const CARD_DISTANCE = 60;
const VERTICAL_DISTANCE = 70;
const ANIMATION_DURATION = 0.7;
const EASE_CURVE = "power3.inOut";
const PARALLAX_EASE = "none";
const SECTION_HEIGHT = 600; // Reduced from h-screen

export function PillarsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const bgRefs = useRef<HTMLDivElement[]>([]);
  const order = useRef<number[]>(pillarContent.map((_, i) => i));
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const stepRef = useRef(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const loadedImagesRef = useRef(new Set<string>());
  const bgParallaxRef = useRef<HTMLDivElement>(null);

  const setCardRef = (el: HTMLDivElement | null, i: number) => {
    if (el) cardsRef.current[i] = el;
  };

  const setBgRef = (el: HTMLDivElement | null, i: number) => {
    if (el) bgRefs.current[i] = el;
  };

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Preload images
  useEffect(() => {
    const loadImages = async () => {
      const allImages = [
        ...pillarContent.map((p) => p.image),
        "/images/knowledge.jpg"
      ];

      const imagePromises = allImages.map(
        (image) =>
          new Promise<void>((resolve) => {
            if (loadedImagesRef.current.has(image)) {
              resolve();
              return;
            }

            const img = new Image();
            img.onload = () => {
              loadedImagesRef.current.add(image);
              resolve();
            };
            img.onerror = () => resolve(); // Continue even if image fails
            img.src = image;
          })
      );

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  const makeSlot = (i: number, total: number) => ({
    x: i * CARD_DISTANCE,
    y: -i * VERTICAL_DISTANCE,
    z: -i * CARD_DISTANCE * 1.5,
    zIndex: total - i
  });

  const placeCards = useCallback(() => {
    const total = cardsRef.current.length;

    cardsRef.current.forEach((el, i) => {
      const slot = makeSlot(i, total);
      gsap.set(el, {
        x: slot.x,
        y: slot.y,
        z: slot.z,
        xPercent: -50,
        yPercent: -50,
        zIndex: slot.zIndex,
        willChange: "transform"
      });
    });
  }, []);

  const updateProgressUI = () => {
    const nodes = document.querySelectorAll(".pillar-progress-item");
    nodes.forEach((n, i) => {
      const isActive = i === stepRef.current;
      n.classList.toggle("opacity-100", isActive);
      n.classList.toggle("opacity-30", !isActive);
    });
    setCurrentStep(stepRef.current);
  };

  const swap = useCallback(
    (direction: "forward" | "backward" = "forward") => {
      const total = cardsRef.current.length;
      const duration = prefersReducedMotion ? 0.1 : ANIMATION_DURATION;
      const ease = prefersReducedMotion ? "none" : EASE_CURVE;

      if (timelineRef.current?.isActive()) {
        timelineRef.current.kill();
      }

      if (direction === "forward") {
        const [front, ...rest] = order.current;
        const frontEl = cardsRef.current[front];

        const tl = gsap.timeline();
        timelineRef.current = tl;

        // Exit animation
        tl.to(frontEl, { y: "+=500", opacity: 0, duration, ease }, 0);

        // Move other cards forward
        rest.forEach((idx, i) => {
          const el = cardsRef.current[idx];
          const slot = makeSlot(i, total);

          tl.to(
            el,
            { ...slot, duration, ease, overwrite: "auto" },
            "<"
          );
        });

        // Position exited card at back
        const backSlot = makeSlot(total - 1, total);
        tl.set(frontEl, { zIndex: backSlot.zIndex }, "<");
        tl.to(frontEl, { ...backSlot, opacity: 1, duration, ease });

        order.current = [...rest, front];
        stepRef.current = Math.min(stepRef.current + 1, total - 1);
      } else {
        const last = order.current[order.current.length - 1];
        const rest = order.current.slice(0, -1);

        order.current = [last, ...rest];
        stepRef.current = Math.max(stepRef.current - 1, 0);

        placeCards();
      }

      updateProgressUI();
    },
    [placeCards, prefersReducedMotion]
  );

  // Initial animation on load
  useEffect(() => {
    if (!imagesLoaded) return;

    const duration = prefersReducedMotion ? 0 : 0.8;
    const ease = prefersReducedMotion ? "none" : "power2.out";

    cardsRef.current.forEach((el, i) => {
      gsap.from(el, {
        opacity: 0,
        scale: 0.8,
        duration,
        delay: prefersReducedMotion ? 0 : i * 0.1,
        ease
      });
    });

    // Refresh scroll trigger after initial animation completes
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, duration * 1000 + 600);
  }, [imagesLoaded, prefersReducedMotion]);

  // Setup scroll trigger with scroll lock
  useEffect(() => {
    if (!imagesLoaded || cardsRef.current.length === 0) return;

    // Initial card placement
    placeCards();
    updateProgressUI();

    // Small delay to ensure DOM is ready and initial animations are done
    const timerId = setTimeout(() => {
      // Kill existing trigger if present
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
      }

      const scrollTrigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${pillarContent.length * 150}%`, // Increased scroll distance for better control
        pin: true,
        scrub: prefersReducedMotion ? 0 : 1.5, // Slightly looser for smoother feel
        snap: {
          snapTo: 1 / pillarContent.length,
          duration: prefersReducedMotion ? 0.1 : 0.6,
          delay: 0.05,
          ease: prefersReducedMotion ? "none" : "power2.inOut"
        },
        onUpdate: (self) => {
          const newStep = Math.floor(self.progress * pillarContent.length);

          if (newStep > stepRef.current) {
            swap("forward");
          }
          if (newStep < stepRef.current) {
            swap("backward");
          }

          // PARALLAX BACKGROUND
          if (bgParallaxRef.current && !prefersReducedMotion) {
            gsap.to(bgParallaxRef.current, {
              y: `${self.progress * 50}px`,
              ease: PARALLAX_EASE,
              overwrite: "auto"
            });
          }

          // CARD PARALLAX
          bgRefs.current.forEach((bg, i) => {
            if (!prefersReducedMotion) {
              gsap.to(bg, {
                y: `${self.progress * (i + 1) * 40}px`,
                scale: 1.1,
                ease: PARALLAX_EASE,
                overwrite: "auto"
              });
            }
          });
        }
      });

      scrollTriggerRef.current = scrollTrigger;
      ScrollTrigger.refresh();
    }, 1000); // Wait for initial animation to complete

    return () => {
      clearTimeout(timerId);
      scrollTriggerRef.current?.kill();
    };
  }, [imagesLoaded, placeCards, swap, prefersReducedMotion]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === " ") {
        e.preventDefault();
        swap("forward");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        swap("backward");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [swap]);

  // MOBILE SWIPE
  useEffect(() => {
    let startY = 0;
    let startX = 0;

    const onTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
      startX = e.touches[0].clientX;
    };

    const onTouchEnd = (e: TouchEvent) => {
      const deltaY = startY - e.changedTouches[0].clientY;
      const deltaX = startX - e.changedTouches[0].clientX;
      const threshold = 50;

      // Prefer vertical swipe, ignore small horizontal movements
      if (Math.abs(deltaY) > threshold && Math.abs(deltaY) > Math.abs(deltaX)) {
        if (deltaY > 0) swap("forward");
        else swap("backward");
      }
    };

    const node = containerRef.current;
    node?.addEventListener("touchstart", onTouchStart);
    node?.addEventListener("touchend", onTouchEnd);

    return () => {
      node?.removeEventListener("touchstart", onTouchStart);
      node?.removeEventListener("touchend", onTouchEnd);
    };
  }, [swap]);

  return (
    <section 
      className="relative w-full bg-[#f5f1eb] text-black overflow-hidden"
      style={{ height: `${SECTION_HEIGHT}px` }}
      role="region"
      aria-label="Strategic Pillars"
      aria-live="polite"
      aria-atomic="false"
    >
      {/* BACKGROUND PARALLAX LAYER */}
      <div
        ref={bgParallaxRef}
        className="absolute inset-0 will-change-transform z-0"
        style={{
          backgroundImage: "url(/images/knowledge.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        aria-hidden="true"
      >
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f1eb]/20 via-[#f5f1eb]/60 to-[#f5f1eb]/80" />
        
        {/* OUR PILLARS TEXT */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <h2 className="text-6xl md:text-8xl font-bold text-black/10 text-center leading-tight uppercase tracking-wider">
            Our Pillars
          </h2>
        </div>
      </div>

      {/* LOADING STATE */}
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-black/20 border-t-black rounded-full animate-spin" />
            <p className="text-sm text-black/60">Loading pillars...</p>
          </div>
        </div>
      )}

      {/* PROGRESS INDICATOR - AUTOMATIC ONLY */}
      <div 
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-2"
        role="progressbar"
        aria-valuenow={currentStep}
        aria-valuemin={0}
        aria-valuemax={pillarContent.length - 1}
        aria-label="Navigation progress"
      >
     
        {pillarContent.map((p, i) => (
          <div
            key={p.id}
            className={`pillar-progress-item transition-opacity duration-300 ${
              i === currentStep ? "opacity-100" : "opacity-30"
            }`}
            aria-current={i === currentStep ? "step" : undefined}
          >
            <span className="text-xs font-semibold text-black">{p.id}</span>
          </div>
        ))}
      </div>

      <div
        ref={containerRef}
        className="absolute inset-0 w-full h-full flex items-center justify-center perspective-[1200px] z-20"
        role="main"
      >
        {pillarContent.map((pillar, i) => {
          const cardClasses = isMobile 
            ? "w-[280px] h-[220px]" 
            : "w-[500px] h-[400px]";
          return (
            <div
              key={pillar.id}
              ref={(el) => setCardRef(el, i)}
              className={`absolute rounded-xl overflow-hidden border border-black/20 transition-all duration-300 shadow-lg ${cardClasses}`}
              role="article"
              aria-label={`${pillar.id}: ${pillar.title}`}
            >
              {/* PARALLAX BG */}
              <div
                ref={(el) => setBgRef(el, i)}
                className="absolute inset-0 bg-cover bg-center will-change-transform"
                style={{ backgroundImage: `url(${pillar.image})` }}
                aria-hidden="true"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 p-4 md:p-6 flex flex-col justify-end">
                <span className="text-xs md:text-sm opacity-70 font-mono" aria-hidden="true">{pillar.id}</span>
                <h3 className={`font-semibold mt-2 leading-tight ${
                  isMobile ? "text-lg" : "text-2xl"
                }`}>{pillar.title}</h3>
                <p className={`opacity-80 mt-2 leading-relaxed ${
                  isMobile ? "text-xs line-clamp-2" : "text-sm line-clamp-3"
                }`}>
                  {pillar.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* HINT TEXT */}
      <div className="absolute bottom-3 md:bottom-6 left-1/2 -translate-x-1/2 text-center text-xs text-black/40 pointer-events-none z-40">
        <p className="hidden md:block">Scroll • Swipe • Arrow Keys</p>
        <p className="md:hidden">Scroll or Swipe</p>
      </div>
    </section>
  );
};

export default PillarsSection;