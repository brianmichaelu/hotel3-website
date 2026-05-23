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
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-sm text-gray-700 hover:text-gold transition-colors font-light tracking-wide cursor pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Book Now Button */}
          <button
            onClick={() => scrollToSection('contact')}
            className="hidden lg:block px-6 py-2 bg-gold text-white text-sm font-light rounded hover:bg-gold/90 transition-colors"
          >
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-6 h-6 flex flex-col justify-center items-center space-y-1.5"
          >
            <span
              className={`w-6 h-0.5 bg-brown transition-all ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-brown transition-all ${
                isOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`w-6 h-0.5 bg-brown transition-all ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-6 border-t border-gold/10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-cream transition-colors font-light"
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full mx-4 mt-4 px-6 py-2 bg-gold text-white text-sm font-light rounded hover:bg-gold/90 transition-colors"
            >
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
