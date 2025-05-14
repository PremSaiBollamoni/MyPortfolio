
import React from 'react';

const FloatingIcons: React.FC = () => {
  return (
    <>
      {/* Floating tech icons with better positioning and quality */}
      <div className="absolute top-10 right-16 md:right-24 w-20 h-20 glass rounded-full flex items-center justify-center animate-float" style={{animationDelay: '0.5s'}}>
        <img 
          src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=200&q=80" 
          alt="Code on screen"
          className="w-16 h-16 object-cover rounded-full"
        />
      </div>
      <div className="absolute bottom-16 right-10 md:right-20 w-18 h-18 glass rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s', animationDuration: '4s'}}>
        <img 
          src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&w=200&q=80" 
          alt="React"
          className="w-14 h-14 object-cover rounded-full"
        />
      </div>
      <div className="absolute top-28 left-8 md:left-16 w-16 h-16 glass rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1.5s', animationDuration: '3.5s'}}>
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=200&q=80" 
          alt="Circuit board"
          className="w-12 h-12 object-cover rounded-full"
        />
      </div>
      <div className="absolute bottom-36 left-16 md:left-28 w-14 h-14 glass rounded-full flex items-center justify-center animate-float" style={{animationDelay: '2s', animationDuration: '4.2s'}}>
        <img 
          src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?auto=format&fit=crop&w=200&q=80" 
          alt="Laptop"
          className="w-10 h-10 object-cover rounded-full"
        />
      </div>
    </>
  );
};

export default FloatingIcons;
