'use client';

import Image from 'next/image';

export default function DiningSection() {
  const diningFeatures = [
    { icon: '🌅', title: 'Breakfast', desc: 'Continental and full cooked breakfast with local and international options' },
    { icon: '🍽️', title: 'Fine Dining', desc: 'Exquisite culinary experiences prepared by award-winning chefs' },
    { icon: '🌿', title: 'Local Cuisine', desc: 'Authentic Tanzanian dishes featuring fresh, regional ingredients' },
    { icon: '🍷', title: 'Premium Beverages', desc: 'Curated wine selection, craft cocktails, and specialty coffees' },
    { icon: '👥', title: 'Private Dining', desc: 'Intimate spaces for special occasions and business functions' },
    { icon: '☕', title: 'Lounge & Bar', desc: 'Sophisticated setting for evening cocktails and social gatherings' },
  ];

  return (
    <section id="dining" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative h-96 sm:h-[500px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/dining.png"
              alt="Fine Dining Experience"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-light text-[#2B1A10] mb-6">
              Culinary Excellence
            </h2>
            <div className="h-1 w-24 bg-gold mb-8" />
            <p className="text-lg text-gray-700 font-light mb-6 leading-relaxed">
              Our restaurants and lounges showcase the finest culinary artistry, where tradition meets innovation.
            </p>
            <p className="text-lg text-gray-700 font-light mb-8 leading-relaxed">
              From sumptuous buffet breakfasts to intimate à la carte dinners, every meal celebrates the rich flavors of Tanzania and global gastronomy.
            </p>
            <button className="px-6 py-3 bg-gold text-white font-light text-sm rounded hover:bg-gold/90 transition-colors uppercase tracking-wider">
              Reserve a Table
            </button>
          </div>
        </div>

        {/* Dining Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {diningFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-light text-[#2B1A10] mb-2">{feature.title}</h3>
              <p className="text-gray-700 font-light text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
