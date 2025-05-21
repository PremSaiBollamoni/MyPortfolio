
import React from 'react';

const FloatingIcons: React.FC = () => {
  return (
    <>
      {/* Improved floating tech icons with better positioning to avoid collisions */}
      <div className="absolute top-20 right-16 md:right-28 w-16 h-16 glass rounded-full flex items-center justify-center animate-float" style={{animationDelay: '0.5s', animationDuration: '4.5s', zIndex: 1}}>
        <img 
          src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
          alt="Code on screen"
          className="w-12 h-12 object-cover rounded-full opacity-70 hover:opacity-100 transition-opacity"
        />
      </div>
      <div className="absolute bottom-36 right-10 md:right-20 w-14 h-14 glass rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1.2s', animationDuration: '3.8s', zIndex: 1}}>
        <img 
          src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
          alt="React"
          className="w-10 h-10 object-cover rounded-full opacity-70 hover:opacity-100 transition-opacity"
        />
      </div>
      <div className="absolute top-40 left-10 md:left-20 w-12 h-12 glass rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1.7s', animationDuration: '4.2s', zIndex: 1}}>
        <img 
          src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
          alt="Circuit board"
          className="w-8 h-8 object-cover rounded-full opacity-70 hover:opacity-100 transition-opacity"
        />
      </div>
    </>
  );
};

export default FloatingIcons;
