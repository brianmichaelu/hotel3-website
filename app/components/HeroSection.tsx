'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });

    const [isMenuOpen, setIsMenuOpen] = useState(false);
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden pt-20">
      {/* Background Video or Image */}
      <div className="absolute inset-0 w-full h-full">
        {!videoError ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            onError={() => setVideoError(true)}
          >
            <source src="/videos/hotel-video.mp4" type="video/mp4" />
          </video>
        ) : (
          <Image
            src="/images/hero.png"
            alt="Luxury Hotel"
            fill
            className="object-cover"
            priority
          />
        )}
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center z-10">
        <div className="max-w-3xl px-6 sm:px-8">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-white mb-6 leading-tight tracking-wide">
            Dar Serenity Resort
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-8 font-light">
            Where elegance meets tranquility in the heart of Dar es Salaam
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('rooms')}
              className="px-8 py-3 bg-gold text-white font-light text-base rounded hover:bg-gold/90 transition-all duration-300 uppercase tracking-wider cursor-pointer"
            >
              Explore Rooms
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-white text-white font-light text-base rounded hover:bg-white/10 transition-all duration-300 uppercase tracking-wider cursor-pointer"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
