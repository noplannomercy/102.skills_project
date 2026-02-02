import React from 'react';
import Link from 'next/link';
import { images } from '@/data/images';
import Button from '../Button';

const HeroSection = ({ onReserveClick }: { onReserveClick: () => void }) => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${images.hero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          The Oak & Barrel
        </h1>
        <p className="text-xl md:text-2xl text-neutral-100 mb-8 drop-shadow-md">
          Premium Steaks, Fresh Sushi, Craft Beer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/menu">
            <Button variant="primary" size="lg">
              View Menu
            </Button>
          </Link>
          <Button variant="secondary" size="lg" onClick={onReserveClick}>
            Make a Reservation
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
