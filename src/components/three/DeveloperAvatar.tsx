'use client';

import * as THREE from 'three';
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere } from '@react-three/drei';
import { cn } from '@/lib/utils';

function RotatingSphere() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5; // Rotate the sphere
      meshRef.current.rotation.x += delta * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 32, 32]}>
      <meshStandardMaterial
        color="hsl(var(--primary))"
        metalness={0.3}
        roughness={0.6}
        wireframe={false} // Set to true for a wireframe look
      />
    </Sphere>
  );
}

export function DeveloperAvatar() {
  return (
    <div className={cn("w-full h-full min-h-[250px]")}> {/* Ensure container has height */}
      <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }}>
        <ambientLight intensity={1.5} />
        <pointLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-3, -3, 2]} intensity={0.5} />
        <RotatingSphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.5}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}
