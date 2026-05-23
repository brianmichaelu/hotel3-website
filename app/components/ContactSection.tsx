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

Message: ${formData.message}`;

    const encodedMessage = encodeURIComponent(messageText);
    window.open(`https://wa.me/255689824682?text=${encodedMessage}`, '_blank');

    // Reset form
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
    <section id="contact" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-brown mb-6">
            Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-8" />
          <p className="text-lg text-gray-700 font-semibold max-w-3xl mx-auto">
            Have questions or ready to book? We're here to help
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold text-brown mb-8">Contact Details</h3>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-brown mb-4">Mobile / WhatsApp</h4>
              <a
                href="https://wa.me/255689824682"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 mb-4"
              >
                <button className="px-6 py-3 bg-green-500 text-white font-semibold text-sm rounded hover:bg-green-600 transition-colors uppercase tracking-wider flex items-center gap-2 cursor-pointer">
                  💬 WhatsApp
                  <span className="font-semibold">+255 689 824 682</span>
                </button>
              </a>
              <p className="text-sm text-gray-600 font-semibold">
                Available 24/7 for inquiries and bookings
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-brown mb-4">Email</h4>
              <a
                href="mailto:lubrun.enterprises@gmail.com"
                className="flex items-center gap-3 mb-4"
              >
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold text-sm rounded hover:bg-blue-700 transition-colors uppercase tracking-wider flex items-center gap-2 cursor pointer">
                  ✉️ Email
                  <span className="font-semibold">Send Message</span>
                </button>
              </a>
              <p className="text-sm text-gray-600 font-semibold">
                lubrun.enterprises@gmail.com
              </p>
            </div>

            <div className="bg-cream p-8 rounded-lg">
              <h4 className="text-lg font-semibold text-brown mb-4">Quick Response</h4>
              <p className="text-sm text-gray-700 font-semibold leading-relaxed">
                We're committed to responding to all inquiries within 2 hours. For urgent matters, please use WhatsApp for immediate assistance.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-cream p-8 rounded-lg">
              <div className="mb-6">
                <label className="block text-sm font-semibold text-brown mb-2">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gold"
                  placeholder="Your Name"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-brown mb-2">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gold"
                  placeholder="+255 XXX XXX XXX"
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-brown mb-2">Check-in *</label>
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gold"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-brown mb-2">Check-out *</label>
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gold"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-brown mb-2">Room Type *</label>
                <select
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gold"
                >
                  <option>Standard Room</option>
                  <option>Deluxe Room</option>
                  <option>Executive Suite</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-brown mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-gold"
                  placeholder="Any special requests or inquiries..."
                />
              </div>

              <button
  type="submit"
  className="w-full bg-yellow-600 text-white py-4 px-6 rounded-full font-semibold tracking-wide hover:bg-yellow-700 transition-colors cursor-pointer"
>
  Send on WhatsApp
</button>

              <p className="text-xs text-gray-600 font-semibold mt-4 text-center">
                Your information will be sent directly to our team via WhatsApp
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
