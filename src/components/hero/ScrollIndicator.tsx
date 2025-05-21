
import React from 'react';

const ScrollIndicator: React.FC = () => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-float z-10">
      <span className="text-gray-400 mb-2 text-sm">Scroll Down</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-primary">
        <path d="M7 13l5 5 5-5"></path>
        <path d="M7 6l5 5 5-5"></path>
      </svg>
    </div>
  );
};

export default ScrollIndicator;
