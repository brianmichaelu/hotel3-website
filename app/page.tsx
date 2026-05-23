import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import VideoShowcase from './components/VideoShowcase';
import AboutSection from './components/AboutSection';
import RoomsSection from './components/RoomsSection';
import DiningSection from './components/DiningSection';
import FacilitiesSection from './components/FacilitiesSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export const metadata = {
  title: 'Dar Serenity Resort - Luxury Hotel in Dar es Salaam',
  description: 'Experience luxury hospitality at Dar Serenity Resort, a premium hotel in Dar es Salaam offering elegant rooms, fine dining, and world-class amenities.',
};

export default function Home() {
  return (
    <main className="bg-white overflow-hidden">
      <Navigation />
      <HeroSection />
      <VideoShowcase />
      <AboutSection />
      <RoomsSection />
      <DiningSection />
      <FacilitiesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
