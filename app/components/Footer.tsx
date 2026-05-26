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
    <footer className="bg-[#0F1726] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        
        {/* Footer Main */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          
          {/* About */}
          <div>
            <h3 className="text-xl font-light mb-4">
              Dar Serenity Resort
            </h3>

            <p className="text-white/75 font-light text-sm leading-relaxed max-w-sm">
              Luxury hospitality in the heart of Dar es Salaam. Experience elegance,
              comfort, and warm world-class service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-light mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/75 hover:text-[#C9A24D] transition-colors font-light text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-light mb-4">
              Contact Us
            </h4>

            <div className="space-y-4 text-sm font-light">
              <div>
                <p className="text-white/75 mb-1">Mobile / WhatsApp:</p>
                <a
                  href="https://wa.me/255689824682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C9A24D] hover:text-[#b8913f] transition-colors"
                >
                  +255 689 824 682
                </a>
              </div>

              <div>
                <p className="text-white/75 mb-1">Email:</p>
                <a
                  href="mailto:lubrun.enterprises@gmail.com"
                  className="text-[#C9A24D] hover:text-[#b8913f] transition-colors break-words"
                >
                  lubrun.enterprises@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h4 className="text-lg font-light mb-4">
              Premium Amenities
            </h4>

            <ul className="space-y-2 text-sm font-light text-white/75">
              <li>✓ Luxury Suites</li>
              <li>✓ Fine Dining</li>
              <li>✓ Swimming Pool</li>
              <li>✓ Spa & Wellness</li>
              <li>✓ 24/7 Service</li>
              <li>✓ Free WiFi</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/15 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-white/65 font-light text-sm text-center sm:text-left">
              © {currentYear} Dar Serenity Resort. All rights reserved.
            </p>

            <a
              href="#gallery"
              aria-label="View the resort gallery"
              className="inline-flex items-center justify-center px-6 py-3 border border-[#C9A24D] text-[#C9A24D] font-semibold text-sm rounded-full hover:bg-[#C9A24D] hover:text-[#0F1726] transition-colors uppercase tracking-wider"
            >
              View Gallery
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
