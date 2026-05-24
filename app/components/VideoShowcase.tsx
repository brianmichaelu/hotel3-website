'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function VideoShowcase() {
  const [videoError, setVideoError] = useState(false);

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video */}
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <div className="aspect-video relative bg-cream">
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
                  alt="Hotel Experience"
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <h2 className="text-4xl sm:text-5xl font-light text-[#3B2416] mb-6">
              Your Sanctuary Awaits
            </h2>
            <p className="text-gray-700 text-lg font-light mb-6 leading-relaxed">
              Step into a world of refined elegance and unparalleled comfort. At Dar Serenity Resort, we have meticulously designed every detail to provide you with an extraordinary escape from the everyday.
            </p>
            <p className="text-gray-700 text-lg font-light mb-8 leading-relaxed">
              Our luxury accommodations, world-class amenities, and warm hospitality create the perfect setting for an unforgettable experience in beautiful Dar es Salaam.
            </p>
           
            <div className="flex flex-col sm:flex-row gap-4">
  <a
  href="#rooms"
  aria-label="Discover more about our rooms"
  className="inline-flex items-center justify-center px-6 py-3 bg-[#8B5E24] text-white font-semibold text-sm rounded hover:bg-[#6F4818] transition-colors uppercase tracking-wider cursor-pointer"
>
  Discover More
</a>

  <span className="sr-only"> </span>

  <a
  href="#gallery"
  aria-label="View the resort gallery"
  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#8B5E24] text-[#2B1A10] font-semibold text-sm rounded hover:bg-[#8B5E24] hover:text-white transition-colors uppercase tracking-wider cursor-pointer"
>
  View Gallery
</a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
