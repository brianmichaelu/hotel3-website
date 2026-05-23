export default function FacilitiesSection() {
  const facilities = [
    {
      icon: '🏊',
      title: 'Swimming Pool',
      description: 'Olympic-size heated pool with sun deck and poolside bar for relaxation and recreation',
    },
    {
      icon: '🌳',
      title: 'Garden Area',
      description: 'Lush tropical gardens with walking paths, meditation spaces, and scenic viewpoints',
    },
    {
      icon: '🍽️',
      title: 'Fine Dining Restaurant',
      description: 'Award-winning restaurant offering local and international cuisine with elegant ambiance',
    },
    {
      icon: '📶',
      title: 'High-Speed WiFi',
      description: 'Complimentary high-speed internet throughout the resort for connectivity and convenience',
    },
    {
      icon: '🅿️',
      title: 'Secure Parking',
      description: 'Covered and secure parking facilities with 24/7 surveillance and valet service',
    },
    {
      icon: '🛎️',
      title: '24/7 Reception',
      description: 'Dedicated concierge service available round-the-clock for all guest needs and inquiries',
    },
    {
      icon: '🚗',
      title: 'Airport Transfer',
      description: 'Convenient airport shuttle service available on request for your arrival and departure',
    },
    {
      icon: '💆',
      title: 'Spa & Wellness',
      description: 'Full-service spa offering rejuvenating treatments and wellness programs',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-brown mb-6">
            World-Class Facilities
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-8" />
          <p className="text-lg text-gray-700 font-light max-w-3xl mx-auto">
            Everything you need for a luxurious and comfortable stay
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, idx) => (
            <div
              key={idx}
              className="bg-cream p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{facility.icon}</div>
              <h3 className="text-lg font-light text-brown mb-3">{facility.title}</h3>
              <p className="text-sm text-gray-700 font-light leading-relaxed">
                {facility.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
