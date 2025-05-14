
import React, { useState } from 'react';

const HeroContent: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const copyEmail = () => {
    navigator.clipboard.writeText('prem.0820.04@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const phoneNumber = '8074850696';
  const email = 'prem.0820.04@gmail.com';
  
  return (
    <div className="md:w-7/12 mb-12 md:mb-0">
      <div className="mb-2 inline-block">
        <span className="typewriter font-mono text-tech-primary">Hello World, I'm</span>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
        Bollamoni 
        <span className="text-tech-primary"> Prem Sai</span>
      </h1>
      <div className="h-1 w-20 bg-tech-primary mb-6"></div>
      <h2 className="text-xl sm:text-2xl text-gray-300 mb-6 font-light">
        Full Stack Web Developer & AI Specialist
      </h2>
      
      <p className="text-gray-400 mb-8 max-w-xl text-base sm:text-lg">
        Computer Science Engineering student specializing in AI & ML with industry experience. 
        Passionate about building innovative solutions that leverage cutting-edge technology.
      </p>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <a 
          href="#contact" 
          className="px-6 py-3 bg-tech-primary text-white rounded-md hover:bg-tech-secondary transition-colors"
        >
          Contact Me
        </a>
        <a 
          href="https://drive.google.com/file/d/1qSfs3aKn0DCEIVTCNov7qFOwe1I_-yfd/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-transparent border border-tech-primary text-tech-primary rounded-md hover:bg-tech-primary/10 transition-colors flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
            <polyline points="7 10 12 15 17 10"></polyline>
            <line x1="12" y1="15" x2="12" y2="3"></line>
          </svg>
          Download Resume
        </a>
      </div>
      
      <div className="flex items-center space-x-6">
        <a 
          href="https://wa.me/8074850696"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-300 hover:text-tech-primary transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:animate-pulse-slow">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          {phoneNumber}
        </a>
        
        <div className="relative">
          <button 
            onClick={() => setShowEmail(!showEmail)}
            className="flex items-center text-gray-300 hover:text-tech-primary transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:animate-pulse-slow">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            Email Me
          </button>
          
          {showEmail && (
            <div className="absolute top-full left-0 mt-2 p-2 glass rounded shadow-lg animate-zoom-in">
              <div className="flex items-center">
                <span className="text-sm text-gray-300 mr-2">{email}</span>
                <button 
                  onClick={copyEmail}
                  className="text-tech-accent text-sm hover:text-tech-primary transition-colors"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          )}
        </div>
        
        <a
          href="https://www.linkedin.com/in/prem-sai-bollamoni-817a18348"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-tech-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:animate-pulse-slow">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
        
        <a
          href="https://github.com/PremSaiBollamoni"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-tech-primary transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:animate-pulse-slow">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroContent;
