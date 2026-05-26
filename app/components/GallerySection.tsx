'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const galleryImages = [
    { src: '/images/gallery-1.png', alt: 'Dar Serenity resort exterior' },
    { src: '/images/gallery-2.png', alt: 'Dar Serenity garden and palm view' },
    { src: '/images/gallery-3.png', alt: 'Dar Serenity guest room interior' },
    { src: '/images/gallery-4.png', alt: 'Dar Serenity lounge and bar area' },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;

      if (event.key === 'ArrowRight') {
        setSelectedImage((prev) =>
          prev === null ? 0 : prev === galleryImages.length - 1 ? 0 : prev + 1
        );
      }

      if (event.key === 'ArrowLeft') {
        setSelectedImage((prev) =>
          prev === null ? 0 : prev === 0 ? galleryImages.length - 1 : prev - 1
        );
      }

      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImage, galleryImages.length]);

  return (
    <section id="gallery" className="scroll-mt-24 bg-[#F8F4EC] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-light text-[#3B2416] mb-4">
            Gallery
          </h2>

          <div className="h-1 w-24 bg-[#C9A24D] mx-auto mb-4" />

          <p className="text-lg text-gray-700 font-light max-w-3xl mx-auto">
            Discover the beauty and elegance of our resort through our curated collection.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {galleryImages.map((image, idx) => (
            <button
              key={image.src}
              type="button"
              aria-label={`Open gallery image ${idx + 1}`}
              className="relative h-72 sm:h-80 rounded-xl overflow-hidden cursor-pointer group shadow-sm"
              onClick={() => setSelectedImage(idx)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">
                  🔍
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative w-full h-[75vh]">
                <Image
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  fill
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                aria-label="Close gallery image"
                className="absolute -top-12 right-0 text-white text-3xl hover:text-[#C9A24D] transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>

              <div className="flex justify-between items-center mt-4">
                <button
                  type="button"
                  className="text-white hover:text-[#C9A24D] transition-colors text-base sm:text-lg"
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1
                    )
                  }
                >
                  ← Previous
                </button>

                <button
                  type="button"
                  className="text-white hover:text-[#C9A24D] transition-colors text-base sm:text-lg"
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1
                    )
                  }
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
