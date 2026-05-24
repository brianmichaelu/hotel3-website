'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Rooms', id: 'rooms' },
    { label: 'Dining', id: 'dining' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (!section) return;

    const navbarOffset = 80;
    const targetPosition =
      section.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500;
    let startTime: number | null = null;

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const ease =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 border-b border-[#C8A45D]/20">
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

            <span className="text-xl font-light text-[#2B1A10] tracking-wide hidden sm:inline">
              Dar Serenity
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 ml-20">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className="text-[#2B1A10] hover:text-[#C8A45D] transition-colors uppercase tracking-wider text-sm cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop Book Button */}
          <button
            type="button"
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex ml-auto items-center justify-center px-6 py-3 rounded-full bg-[#C8A45D] text-[#2B1A10] font-medium text-sm uppercase tracking-wider border border-[#C8A45D] hover:bg-[#2B1A10] hover:text-white transition-all duration-300 cursor-pointer"
          >
            Book Now
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden ml-auto flex items-center justify-center w-11 h-11 rounded-full bg-[#2B1A10] text-[#C8A45D] border border-[#C8A45D] hover:bg-[#C8A45D] hover:text-[#2B1A10] transition-all duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            <span className="text-2xl leading-none">☰</span>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-white border-t border-[#C8A45D]/30 shadow-lg z-50">
            <div className="flex flex-col px-6 py-6 space-y-5">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-[#2B1A10] hover:text-[#C8A45D] uppercase tracking-wider text-sm cursor-pointer"
                >
                  {link.label}
                </button>
              ))}

              <button
                type="button"
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-[#C8A45D] text-[#2B1A10] font-medium text-sm uppercase tracking-wider border border-[#C8A45D] cursor-pointer"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
