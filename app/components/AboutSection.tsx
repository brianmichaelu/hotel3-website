export default function AboutSection() {
  const aboutItems = [
    {
      title: 'Unparalleled Comfort',
      text: 'Every room at Dar Serenity Resort is designed for rest, privacy, and comfort. From our standard rooms to executive suites, each space is thoughtfully prepared with elegant finishes and warm hospitality.',
    },
    {
      title: 'Culinary Excellence',
      text: 'Enjoy refined dining experiences inspired by fresh local ingredients and international flavors. From breakfast to evening meals, every dish is prepared with care.',
    },
    {
      title: 'Privacy & Serenity',
      text: 'Our peaceful spaces, private gardens, and attentive service create a calm retreat from the busy city, whether you are visiting for leisure, business, or celebration.',
    },
    {
      title: 'Strategic Location',
      text: 'Located in Dar es Salaam, Dar Serenity offers convenient access to the city while maintaining a quiet and comfortable atmosphere for guests.',
    },
  ];

  return (
    <section id="about" className="scroll-mt-24 bg-white pt-10 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-light text-[#3B2416] mb-4">
            The Dar Serenity Experience
          </h2>

          <div className="h-1 w-24 bg-[#C9A24D] mx-auto mb-4" />

          <p className="text-lg text-gray-700 font-light max-w-3xl mx-auto">
            A peaceful luxury escape in the vibrant heart of Dar es Salaam.
          </p>
        </div>

        {/* About Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {aboutItems.map((item) => (
            <div
              key={item.title}
              className="bg-[#F8F4EC] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-2xl sm:text-3xl font-light text-[#3B2416] mb-4">
                {item.title}
              </h3>

              <p className="text-gray-700 font-light leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
