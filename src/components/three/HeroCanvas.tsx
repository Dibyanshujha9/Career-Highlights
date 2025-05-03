'use client';

import * as THREE from 'three';
import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { cn } from '@/lib/utils';

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null!);
  const count = 5000; // Number of stars

  // Generate random spherical coordinates for stars
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const distance = THREE.MathUtils.randFloat(5, 15); // Random distance from center
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2); // Random angle around Y axis
      const phi = Math.acos(THREE.MathUtils.randFloat(-1, 1)); // Random angle from Y axis

      pos[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = distance * Math.cos(phi);
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 15;
    ref.current.rotation.y -= delta / 20;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
      <PointMaterial
        transparent
        color="#ffffff" // Star color
        size={0.01} // Star size
        sizeAttenuation={true}
        depthWrite={false}
      />
    </Points>
  );
}

export function HeroCanvas() {
  return (
    <div className={cn("absolute inset-0 z-0")}>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <Stars />
      </Canvas>
    </div>
  );
}
