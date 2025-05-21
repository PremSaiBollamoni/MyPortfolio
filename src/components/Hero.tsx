
import React from 'react';
import HeroContent from './hero/HeroContent';
import HeroImageSection from './hero/HeroImageSection';
import TechBadges from './hero/TechBadges';
import StatsCounter from './hero/StatsCounter';
import { Toaster } from "@/components/ui/toaster";

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen pt-20 flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 py-16 z-10">
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          <HeroContent />
          <HeroImageSection />
        </div>
        
        {/* Tech stack badges */}
        <div className="mt-12 md:mt-16">
          <TechBadges />
        </div>
        
        {/* Stats counter with more spacing */}
        <div className="mt-16 mb-16">
          <StatsCounter />
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default Hero;
