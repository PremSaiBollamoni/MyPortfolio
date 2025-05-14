
import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroImageSection from './hero/HeroImageSection';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <HeroContent />
          <HeroImageSection />
        </div>
      </div>
      
      <ScrollIndicator />
    </section>
  );
};

export default Hero;
