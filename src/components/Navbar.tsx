
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-3 transition-all duration-300 ${
        scrolled ? 'glass shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="text-xl font-mono text-white flex items-center"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span className="text-tech-primary">&lt;</span>
          <span className="mx-1">prem.sai</span>
          <span className="text-tech-primary">/&gt;</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {['about', 'experience', 'education', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="text-gray-300 hover:text-tech-primary transition-colors capitalize"
            >
              {section}
            </button>
          ))}
          <a 
            href="#"
            className="text-tech-primary border border-tech-primary px-4 py-1 rounded hover:bg-tech-primary hover:text-white transition-colors"
            onClick={(e) => {
              e.preventDefault();
              alert('Resume download functionality would be implemented here');
            }}
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {mobileMenuOpen ? 
              <><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></> : 
              <><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="6" x2="20" y2="6"></line><line x1="4" y1="18" x2="20" y2="18"></line></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full glass border-t border-gray-800 py-4 shadow-lg animate-slide-up">
          <div className="container mx-auto px-6 flex flex-col space-y-4">
            {['about', 'experience', 'education', 'skills', 'projects', 'achievements', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-left text-gray-300 hover:text-tech-primary transition-colors py-2 capitalize"
              >
                {section}
              </button>
            ))}
            <a 
              href="#"
              className="text-tech-primary border border-tech-primary px-4 py-2 rounded text-center hover:bg-tech-primary hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                alert('Resume download functionality would be implemented here');
              }}
            >
              Download Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
