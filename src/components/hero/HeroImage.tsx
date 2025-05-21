
import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";

const HeroImage: React.FC = () => {
  return (
    <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-tech-primary via-tech-secondary to-tech-accent p-1 animate-float mx-auto">
      <div className="w-full h-full rounded-full bg-tech-darker flex items-center justify-center overflow-hidden">
        <AspectRatio ratio={1/1} className="w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Programming workspace with clean code editor"
            className="w-full h-full object-cover rounded-full"
          />
        </AspectRatio>
      </div>
    </div>
  );
};

export default HeroImage;
