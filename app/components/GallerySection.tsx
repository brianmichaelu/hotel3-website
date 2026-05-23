'use client';

import Image from 'next/image';
import { useEffect,useState } from 'react';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (selectedImage === null) return;

    if (event.key === "ArrowRight") {
      setSelectedImage((prev) =>
        prev === null ? 0 : prev === images.length - 1 ? 0 : prev + 1
      );
    }

    if (event.key === "ArrowLeft") {
      setSelectedImage((prev) =>
        prev === null ? 0 : prev === 0 ? images.length - 1 : prev - 1
      );
    }

    if (event.key === "Escape") {
      setSelectedImage(null);
    }
  };

  window.addEventListener("keydown", handleKeyDown);

  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedImage]);

  const galleryimage = [
    { src: '/images/gallery-1.png', alt: 'Luxury Lobby' },
    { src: '/images/gallery-2.png', alt: 'Swimming Pool' },
    { src: '/images/gallery-3.png', alt: 'Restaurant' },
    { src: '/images/gallery-4.png', alt: 'Guest Room' },
  ];

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-brown mb-6">
            Gallery
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-8" />
          <p className="text-lg text-gray-700 font-light max-w-3xl mx-auto">
            Discover the beauty and elegance of our resort through our curated collection
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {galleryimage.map((image, idx) => (
            <div
              key={idx}
              className="relative h-64 sm:h-80 rounded-lg overflow-hidden cursor-pointer group"
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
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full max-h-[90vh]">
              <Image
                src={galleryimage[selectedImage].src}
                alt={galleryimage[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain"
              />
              <button
                className="absolute top-4 right-4 text-white text-3xl hover:text-gold transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
              <div className="flex justify-between mt-4">
                <button
                  className="text-white hover:text-gold transition-colors text-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage === 0 ? galleryimage.length - 1 : selectedImage - 1);
                  }}
                >
                  ← Previous
                </button>
                <button
                  className="text-white hover:text-gold transition-colors text-lg"
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(selectedImage === galleryimage.length - 1 ? 0 : selectedImage + 1);
                  }}
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
