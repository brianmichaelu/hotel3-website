export default function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-[#3B2416] mb-6">
            The Dar Serenity Experience
          </h2>
          <div className="h-1 w-24 bg-gold mx-auto mb-8" />
          <p className="text-lg text-gray-700 font-light max-w-3xl mx-auto">
            A sanctuary of luxury nestled in the vibrant heart of Dar es Salaam
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-4xl sm:text-5xl font-light text-[#3B2416] mb-6">Unparalleled Comfort</h3>
            <p className="text-gray-700 font-light leading-relaxed mb-4">
              Every room at Dar Serenity Resort is a masterpiece of design and comfort. From our Standard Rooms to our Executive Suites, each space is thoughtfully curated with premium furnishings, marble bathrooms, and breathtaking views.
            </p>
            <p className="text-gray-700 font-light leading-relaxed">
              Sink into Egyptian cotton linens, enjoy personalized service, and experience the pinnacle of hospitality.
            </p>
          </div>

          <div>
            <h3 className="text-4xl sm:text-5xl font-light text-[#3B2416] mb-6">Culinary Excellence</h3>
            <p className="text-gray-700 font-light leading-relaxed mb-4">
              Indulge in world-class dining experiences across our signature restaurants and lounges. Our award-winning chefs craft exquisite dishes using fresh local ingredients and international flavors.
            </p>
            <p className="text-gray-700 font-light leading-relaxed">
              From refined fine dining to casual elegance, every meal is a celebration of taste and hospitality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-4xl sm:text-5xl font-light text-[#3B2416] mb-6">Privacy & Serenity</h3>
            <p className="text-gray-700 font-light leading-relaxed mb-4">
              We understand the importance of privacy and tranquility. Our exclusive spaces, private gardens, and attentive staff ensure your stay is a serene retreat from the bustling city.
            </p>
            <p className="text-gray-700 font-light leading-relaxed">
              Whether you seek solitude or celebration, we provide the perfect canvas for your experience.
            </p>
          </div>

          <div>
            <h3 className="text-4xl sm:text-5xl font-light text-[#3B2416] mb-6">Strategic Location</h3>
            <p className="text-gray-700 font-light leading-relaxed mb-4">
              Located in the heart of Dar es Salaam, our resort offers seamless access to the city's vibrant culture, shopping, and entertainment while maintaining an atmosphere of peaceful luxury.
            </p>
            <p className="text-gray-700 font-light leading-relaxed">
              Our airport transfer service ensures a smooth arrival and departure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
