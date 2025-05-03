// src/components/sections/hero.tsx
'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import Image from 'next/image';
import { HeroCanvas } from '@/components/three/HeroCanvas'; // Import the 3D canvas

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      {/* 3D Background Canvas */}
      <HeroCanvas />

      {/* Foreground Content */}
      <div className="relative z-10 p-4 flex flex-col items-center scroll-animate">
         <Image
          src="https://picsum.photos/150/150"
          alt="Dibyanshu Jha"
          width={150}
          height={150}
          className="rounded-full mb-6 border-4 border-primary shadow-lg"
          data-ai-hint="professional developer portrait"
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-pink-500 animate-gradient-x">
          Dibyanshu Jha
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl">
          Full Stack Developer | Building Scalable & Efficient Web Applications
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>
        <Link href="#about" className="absolute bottom-10 animate-bounce scroll-smooth">
           <ArrowDown className="h-8 w-8 text-primary" />
        </Link>
      </div>

      {/* Basic CSS animation for gradient */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 5s ease infinite;
        }
      `}</style>
    </section>
  );
}
