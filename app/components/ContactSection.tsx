'use client';

import { useState } from 'react';

interface FormData {
  name: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: 'Standard Room',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const messageText = `*Booking Inquiry - Dar Serenity Resort*

Name: ${formData.name}
Phone: ${formData.phone}
Check-in: ${formData.checkIn}
Check-out: ${formData.checkOut}
Room Type: ${formData.roomType}

Message: ${formData.message || 'No extra message provided.'}`;

    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/255689824682?text=${encodedMessage}`, '_blank');

    setFormData({
      name: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      roomType: 'Standard Room',
      message: '',
    });
  };

  return (
    <section id="contact" className="scroll-mt-24 bg-white pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-light text-[#3B2416] mb-4">
            Get In Touch
          </h2>

          <div className="h-1 w-24 bg-[#C9A24D] mx-auto mb-4" />

          <p className="text-lg text-gray-700 font-light max-w-3xl mx-auto">
            Have questions or ready to book? Our team is here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Contact Info */}
          <div className="bg-[#F8F4EC] rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl sm:text-3xl font-light text-[#3B2416] mb-8">
              Contact Details
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-[#3B2416] mb-3">
                  Mobile / WhatsApp
                </h4>

                <a
                  href="https://wa.me/255689824682"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold text-sm rounded-full hover:bg-green-600 transition-colors uppercase tracking-wider"
                >
                  💬 WhatsApp
                  <span>+255 689 824 682</span>
                </a>

                <p className="text-sm text-gray-600 mt-3">
                  Available for inquiries and booking requests.
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-[#3B2416] mb-3">
                  Email
                </h4>

                <a
                  href="mailto:lubrun.enterprises@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3B2416] text-white font-semibold text-sm rounded-full hover:bg-[#2B1A10] transition-colors uppercase tracking-wider"
                >
                  ✉️ Send Email
                </a>

                <p className="text-sm text-gray-600 mt-3">
                  lubrun.enterprises@gmail.com
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-[#3B2416] mb-3">
                  Quick Response
                </h4>

                <p className="text-sm text-gray-700 leading-relaxed">
                  For urgent booking questions, WhatsApp is the fastest way to reach us.
                  You can also use the form to send your booking details directly.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-[#F8F4EC] p-8 rounded-xl shadow-sm">
              <div className="mb-5">
                <label className="block text-sm font-semibold text-[#3B2416] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A24D]"
                  placeholder="Your name"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-semibold text-[#3B2416] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A24D]"
                  placeholder="+255 XXX XXX XXX"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                <div>
                  <label className="block text-sm font-semibold text-[#3B2416] mb-2">
                    Check-in *
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A24D]"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#3B2416] mb-2">
                    Check-out *
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A24D]"
                  />
                </div>
              </div>

              <div className="mb-5">
                <label className="block text-sm font-semibold text-[#3B2416] mb-2">
                  Room Type *
                </label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A24D]"
                >
                  <option>Standard Room</option>
                  <option>Deluxe Room</option>
                  <option>Executive Suite</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-[#3B2416] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C9A24D]"
                  placeholder="Any special requests or inquiries..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#C9A24D] text-white py-4 px-6 rounded-full font-semibold tracking-wide hover:bg-[#b8913f] transition-colors cursor-pointer uppercase"
              >
                Send on WhatsApp
              </button>

              <p className="text-xs text-gray-600 mt-4 text-center">
                Your booking details will open in WhatsApp before sending.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
