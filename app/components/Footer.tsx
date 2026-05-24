export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Rooms', href: '#rooms' },
    { label: 'Dining', href: '#dining' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-6 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-light mb-4">Dar Serenity Resort</h3>
            <p className="text-white/80 font-light text-sm leading-relaxed">
              Luxury hospitality in the heart of Dar es Salaam. Experience elegance, comfort, and world-class service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-[#C8A45D] transition-colors font-light text-sm cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-light mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm font-light">
              <div>
                <p className="text-white/80">Mobile / WhatsApp:</p>
                <a
                  href="https://wa.me/255689824682"
                  className="text-gold hover:text-[#C8A45D]/80 transition-colors cursor-pointer"
                >
                  +255 689 824 682
                </a>
              </div>
              <div>
                <p className="text-white/80">Email:</p>
                <a
                  href="mailto:lubrun.enterprises@gmail.com"
                  className="text-gold hover:text-[#C8A45D]/80 transition-colors cursor-pointer"
                >
                  lubrun.enterprises@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h4 className="text-lg font-light mb-4">Premium Amenities</h4>
            <ul className="space-y-2 text-sm font-light text-white/80">
              <li>✓ Luxury Suites</li>
              <li>✓ Fine Dining</li>
              <li>✓ Swimming Pool</li>
              <li>✓ Spa & Wellness</li>
              <li>✓ 24/7 Service</li>
              <li>✓ Free WiFi</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-white/70 font-light text-sm mb-4 sm:mb-0">
              © {currentYear} Dar Serenity Resort. All rights reserved.
            </p>
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
    </footer>
  );
}
