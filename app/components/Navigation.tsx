'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Rooms', id: 'rooms' },
    { label: 'Dining', id: 'dining' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-gold/20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center h-20">
      
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2 shrink-0">
        <div className="w-12 h-12 relative">
          <Image
            src="/images/logo.png"
            alt="Dar Serenity Resort"
            fill
            className="object-contain"
          />
        </div>
        <span className="text-xl font-light text-brown tracking-wide hidden sm:inline">
          Dar Serenity
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10 ml-20">
        <Link href="#home" className="text-brown hover:text-gold transition-colors uppercase tracking-wider text-sm">
          Home
        </Link>
        <Link href="#rooms" className="text-brown hover:text-gold transition-colors uppercase tracking-wider text-sm">
          Rooms
        </Link>
        <Link href="#dining" className="text-brown hover:text-gold transition-colors uppercase tracking-wider text-sm">
          Dining
        </Link>
        <Link href="#gallery" className="text-brown hover:text-gold transition-colors uppercase tracking-wider text-sm">
          Gallery
        </Link>
        <Link href="#about" className="text-brown hover:text-gold transition-colors uppercase tracking-wider text-sm">
          About
        </Link>
        <Link href="#contact" className="text-brown hover:text-gold transition-colors uppercase tracking-wider text-sm">
          Contact
        </Link>
      </div>

      {/* Book Button */}
      <div className="hidden md:flex ml-auto">
        <Link
          href="#contact"
          className="px-6 py-3 bg-gold text-white text-sm uppercase tracking-wider rounded hover:bg-gold/90 transition-colors"
        >
          Book Now
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden ml-auto flex items-center justify-center w-11 h-11 rounded-full border border-gold/40 text-brown"
        aria-label="Toggle menu"
      >
        ☰
      </button>
    </div>
  </div>
</nav>
  );
}
