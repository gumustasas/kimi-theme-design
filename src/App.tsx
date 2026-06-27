import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import TrustBar from './sections/TrustBar';
import CategoryGrid from './sections/CategoryGrid';
import FeaturedProducts from './sections/FeaturedProducts';
import TechnologyFlow from './sections/TechnologyFlow';
import WaterIntelligence from './sections/WaterIntelligence';
import WhyBuzsu from './sections/WhyBuzsu';
import SocialProof from './sections/SocialProof';
import FilterReminder from './sections/FilterReminder';
import Footer from './sections/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.defaults({
      start: 'top 80%',
      toggleActions: 'play none none none',
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-inter">
      <Navigation />
      <Hero />
      <TrustBar />
      <CategoryGrid />
      <FeaturedProducts />
      <TechnologyFlow />
      <WaterIntelligence />
      <WhyBuzsu />
      <SocialProof />
      <FilterReminder />
      <Footer />
    </div>
  );
}

export default App;
