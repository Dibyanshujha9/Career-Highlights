// src/components/three/HeroCanvas.tsx
'use client';

import * as THREE from 'three';
import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { cn } from '@/lib/utils';

function Stars(props: any) {
  const ref = useRef<THREE.Points>(null!);
  const count = 7000; // Increased star count

  // State for mouse position, normalized (-1 to 1)
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  // Update mouse position on mouse move
  const handleMouseMove = (event: MouseEvent) => {
    // Normalize mouse coordinates
    const x = (event.clientX / window.innerWidth) * 2 - 1;
    const y = -(event.clientY / window.innerHeight) * 2 + 1;
    setMouse({ x, y });
  };

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  // Generate random spherical coordinates, sizes, and colors for stars
  const [positions, colors, sizes] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const siz = new Float32Array(count);
    const colorInside = new THREE.Color('hsl(var(--primary))'); // Use primary theme color
    const colorOutside = new THREE.Color(0xffffff); // White

    for (let i = 0; i < count; i++) {
      // Position
      const distance = THREE.MathUtils.randFloat(2, 10); // Adjusted distance range
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = Math.acos(THREE.MathUtils.randFloatSpread(2)); // More spread out vertically

      pos[i * 3] = distance * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = distance * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = distance * Math.cos(phi);

      // Color - Interpolate based on distance (subtle)
      const distRatio = Math.min(distance / 10, 1); // Normalize distance for color lerp
      const lerpedColor = colorInside.clone().lerp(colorOutside, distRatio * 0.5 + 0.3); // Adjust lerp factor
      col[i * 3] = lerpedColor.r;
      col[i * 3 + 1] = lerpedColor.g;
      col[i * 3 + 2] = lerpedColor.b;

      // Size - Random size
      siz[i] = THREE.MathUtils.randFloat(1.5, 4.0); // Adjusted size range and base size multiplier
    }
    return [pos, col, siz];
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
        // Gentle base rotation
        ref.current.rotation.x += delta * 0.02;
        ref.current.rotation.y += delta * 0.03;

        // Add rotation based on mouse position (subtle effect)
        ref.current.rotation.x += mouse.y * delta * 0.05;
        ref.current.rotation.y += mouse.x * delta * 0.05;
    }
  });


  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false} {...props}>
      <PointMaterial
        transparent
        vertexColors // Use vertex colors defined in the geometry
        size={0.02} // Base size, will be multiplied by size attribute
        sizeAttenuation={true}
        depthWrite={false}
        // Add blending for a softer look
        blending={THREE.AdditiveBlending}
        map={useMemo(() => { // Create a simple circular texture for softer points
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const context = canvas.getContext('2d')!;
            const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.2, 'rgba(255,255,255,0.8)');
            gradient.addColorStop(0.4, 'rgba(255,255,255,0.3)');
            gradient.addColorStop(1, 'rgba(255,255,255,0)');
            context.fillStyle = gradient;
            context.fillRect(0, 0, 64, 64);
            return new THREE.CanvasTexture(canvas);
        }, [])}
      />
       {/* Add attributes for size and color */}
      <bufferAttribute attach="geometry-attributes-color" args={[colors, 3]} />
      <bufferAttribute attach="geometry-attributes-size" args={[sizes, 1]} />
    </Points>
  );
}

export function HeroCanvas() {
  return (
    <div className={cn("absolute inset-0 z-0")}>
      <Canvas camera={{ position: [0, 0, 1.5], fov: 75 }}> {/* Adjusted camera */}
        {/* Removed ambient light as PointMaterial doesn't need it */}
        <Stars />
      </Canvas>
    </div>
  );
}
