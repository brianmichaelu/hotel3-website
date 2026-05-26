'use client';

import Image from 'next/image';

export default function DiningSection() {
  const diningFeatures = [
    {
      icon: '🌅',
      title: 'Breakfast',
      desc: 'Fresh continental and cooked breakfast options served daily.',
    },
    {
      icon: '🍽️',
      title: 'Fine Dining',
      desc: 'Elegant meals prepared with care, using local and international flavors.',
    },
    {
      icon: '🌿',
      title: 'Local Cuisine',
      desc: 'Authentic Tanzanian dishes made with fresh regional ingredients.',
    },
    {
      icon: '🍷',
      title: 'Premium Beverages',
      desc: 'A curated selection of wines, cocktails, juices, and specialty coffees.',
    },
    {
      icon: '👥',
      title: 'Private Dining',
      desc: 'Comfortable spaces for special occasions, meetings, and private meals.',
    },
    {
      icon: '☕',
      title: 'Lounge & Bar',
      desc: 'A relaxed setting for evening drinks, coffee, and social moments.',
    },
  ];

  return (
    <section id="dining" className="scroll-mt-24 bg-[#F8F4EC] pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Dining Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Image */}
          <div className="relative h-[420px] sm:h-[520px] rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/images/dining.png"
              alt="Dar Serenity dining area"
              fill
              className="object-cover"
              priority={false}
            />
          </div>

          {/* Text Content */}
          <div className="max-w-xl">
            <h2 className="text-4xl sm:text-5xl font-light text-[#3B2416] mb-4">
              Culinary Excellence
            </h2>

            <div className="h-1 w-24 bg-[#C9A24D] mb-6" />

            <p className="text-lg text-gray-700 font-light mb-5 leading-relaxed">
              Our restaurants and lounges offer a refined dining experience where comfort,
              flavor, and warm hospitality come together.
            </p>

            <p className="text-lg text-gray-700 font-light mb-8 leading-relaxed">
              From fresh breakfasts to intimate dinners, every meal is designed to celebrate
              the rich taste of Tanzania with a touch of global inspiration.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center justify-center px-7 py-3 bg-[#C9A24D] text-white font-light text-sm rounded-full hover:bg-[#b8913f] transition-colors uppercase tracking-wider"
            >
              Reserve a Table
            </a>
          </div>
        </div>

        {/* Dining Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diningFeatures.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-7 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>

              <h3 className="text-xl font-light text-[#2B1A10] mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-700 font-light text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
