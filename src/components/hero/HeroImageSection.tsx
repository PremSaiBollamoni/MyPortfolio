
import React from 'react';
import HeroImage from './HeroImage';
import FloatingIcons from './FloatingIcons';
import LiveStats from './LiveStats';

const HeroImageSection: React.FC = () => {
  return (
    <div className="md:w-5/12 relative">
      <HeroImage />
      
      {/* Positioned floating elements around the hero image */}
      <div className="absolute inset-0 w-full h-full">
        <FloatingIcons />
      </div>
      
      {/* Positioned absolute stats distributed around the hero */}
      <div className="absolute inset-0 w-full h-full">
        <LiveStats />
      </div>
    </div>
  );
};

export default HeroImageSection;
