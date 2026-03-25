'use client';

/**
 * IMAGINE DREAMS AFRICA — AFRICAN CONTINENT PARTICLES SCENE
 * Minimalist particle-based African continent representation
 * Uses tsParticles for performant, interactive particle system
 */

import { useCallback, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import type { Container } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';
import { useEffect } from 'react';

export function AfricanContinentScene() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Initialize tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
      setIsLoaded(true);
    });
  }, []);

  // Particles loaded callback
  const particlesLoaded = useCallback(async (container?: Container) => {
    console.log('African continent particles loaded successfully');
  }, []);

  if (!isLoaded) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <Particles
        id="african-continent"
        className="w-full h-full absolute inset-0"
        particlesLoaded={particlesLoaded}
        options={{
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse',
              },
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#F2EFE8',
            },
            links: {
              color: '#F2EFE8',
              distance: 80,
              enable: true,
              opacity: 0.08,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 0.3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 120,
            },
            opacity: {
              value: {
                min: 0.1,
                max: 0.4,
              },
              animation: {
                enable: true,
                speed: 0.5,
                sync: false,
              },
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: {
                min: 1,
                max: 3,
              },
              animation: {
                enable: true,
                speed: 1,
                sync: false,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
