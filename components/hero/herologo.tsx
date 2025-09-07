'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import gsap from 'gsap';

const HeroLogo: React.FC = () => {
  useEffect(() => {
    gsap.fromTo(
      '.hero-image',
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power2.out' }
    );
    gsap.fromTo(
      '.hero-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.5 }
    );
    gsap.fromTo(
      '.hero-text span',
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, stagger: 0.03, delay: 1, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen px-4">
      <div className="relative w-full max-w-[300px] sm:max-w-[400px] aspect-square">
        <Image
          className="hero-image rounded-full shadow-lg object-cover"
          src="/hero-banner.jpg"
          alt="Logo"
          fill
          sizes="(max-width: 640px) 100vw, 400px"
          priority
        />
      </div>

      <div className="hero-text mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground tracking-wider text-center">
        {"MrghtChannel".split('').map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </div>
    </div>
  );
};

export default HeroLogo;