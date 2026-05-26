'use client';

import Image from 'next/image';

interface Room {
  id: string;
  name: string;
  image: string;
  price: string;
  description: string;
  features: string[];
}

const rooms: Room[] = [
  {
    id: '1',
    name: 'Standard Room',
    image: '/images/room-standard.png',
    price: 'From TZS 45,000 / night',
    description:
      'Elegantly appointed with contemporary furnishings and premium amenities. Perfect for business travelers and leisure guests.',
    features: ['King or Twin Bed', 'Marble Bathroom', 'High-Speed WiFi', 'City or Garden View', 'Rainfall Shower'],
  },
  {
    id: '2',
    name: 'Deluxe Room',
    image: '/images/room-deluxe.png',
    price: 'From TZS 65,000 / night',
    description:
      'Spacious and luxurious with enhanced amenities. Features a separate seating area and premium bedding for ultimate comfort.',
    features: [
      'King Bed',
      'Separate Sitting Area',
      'Spa Bathroom',
      'Private Balcony',
      'Premium Toiletries',
      'Nespresso Machine',
    ],
  },
  {
    id: '3',
    name: 'Executive Suite',
    image: '/images/room-executive.png',
    price: 'From TZS 95,000 / night',
    description:
      'The epitome of luxury with stunning views, exquisite furnishings, and exclusive perks. Your personal sanctuary in the city.',
    features: [
      'King Suite',
      'Separate Living Area',
      'Marble Spa',
      'Panoramic Terrace',
      'Concierge Service',
      'Welcome Amenities',
      'Premium Minibar',
    ],
  },
];
export default function RoomsSection() {
  const handleWhatsAppInquiry = (roomName: string) => {
    const message = `Hello! I'm interested in the ${roomName} at Dar Serenity Resort. Could you provide more information and availability?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/255689824682?text=${encodedMessage}`, '_blank');
  };

  return (
    <section id="rooms" className="scroll-mt-24 pt-12 pb-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-light text-[#3B2416] mb-6">
            Our Suites
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-8" />
          <p className="text-lg text-gray-700 font-light max-w-3xl mx-auto">
            Each room is a sanctuary of comfort and elegance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Room Image */}
              <div className="relative h-64 sm:h-80 overflow-hidden bg-cream">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Room Info */}
              <div className="bg-white p-6 sm:p-8">
  <h3 className="text-2xl sm:text-3xl font-semibold text-[#2B1A10] mb-3">
  {room.name}
</h3>

<p className="text-lg sm:text-xl font-bold text-[#9A6A2F] mb-4">
  {room.price}
</p>

  <p className="text-gray-700 text-sm font-light mb-6 leading-relaxed">
    {room.description}
  </p>

  {/* Features */}
  <ul className="space-y-2 mb-8">
    {room.features.map((feature, idx) => (
      <li key={idx} className="flex items-start">
        <span className="text-gold mr-3 font-light">✓</span>
        <span className="text-sm text-gray-600 font-light">{feature}</span>
      </li>
    ))}
  </ul>


                {/* WhatsApp Button */}
                <button
                  onClick={() => handleWhatsAppInquiry(room.name)}
                  className="w-full py-3 bg-gold text-white font-light text-sm rounded hover:bg-gold/90 transition-colors uppercase tracking-wider"
                >
                  Inquire on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
