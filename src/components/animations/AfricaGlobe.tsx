'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

// Optional: If you have a GeoJSON or GLTF of Africa, load it here.
// For now, we will simulate it with a highly stylized, low-poly sphere section.
function AfricaMesh() {
  const meshRef = useRef<THREE.Mesh>(null);

  // Create a low-poly, irregular geometry to represent the continent "abstractly"
  const geometry = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2.2, 1); // Low detail for "abstract" feel
    return geo;
  }, []);

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow>
      <meshStandardMaterial 
        color="#F90000" // Tactical Red
        wireframe={true} 
        transparent={true}
        opacity={0.3}
        emissive="#F90000"
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

function TacticalHUD() {
  return (
    <group>
      {/* 1. Main Globe Sphere (Subtle wireframe) */}
      <Sphere args={[2, 32, 32]}>
        <meshStandardMaterial 
          color="#ffffff" 
          wireframe={true} 
          transparent={true} 
          opacity={0.03} 
        />
      </Sphere>

      {/* 2. The Abstract Africa Wireframe */}
      <AfricaMesh />

      {/* 3. The "Target Lock" Dot (representing Uganda/Kampala) */}
      {/* Positioned approximately on the globe surface */}
      <mesh position={[1.8, 0.3, 0.8]}> 
        <sphereGeometry args={[0.06, 16, 16]} />
        <meshBasicMaterial color="#F90000" />
      </mesh>
      
      {/* Target Crosshair Visual */}
      <mesh position={[1.8, 0.3, 0.8]} rotation={[0, Math.PI / 4, 0]}>
         <ringGeometry args={[0.1, 0.11, 4]} />
         <meshBasicMaterial color="#F90000" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

interface AfricaGlobeProps {
  globeRef: React.RefObject<THREE.Group>;
}

export function AfricaGlobe({ globeRef }: AfricaGlobeProps) {
  return (
    <Canvas 
      camera={{ position: [0, 0, 6], fov: 45 }} 
      dpr={[1, 2]} // optimization for high-res screens
      gl={{ antialias: true, alpha: true }}
    >
      {/* Scene Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#F90000" />

      {/* The Central Object Group (This is what GSAP will rotate) */}
      <group ref={globeRef}>
        <TacticalHUD />
      </group>

      {/* Optional: Allow manual rotation for testing, remove for final */}
      {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
    </Canvas>
  );
}