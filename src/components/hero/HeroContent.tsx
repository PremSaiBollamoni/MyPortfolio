
import React, { useState, useEffect } from 'react';
import SocialFrame from '../SocialFrame';
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Moon, Sun, FileCode2 } from 'lucide-react';

const HeroContent: React.FC = () => {
  const [showEmail, setShowEmail] = useState(false);
  const [copied, setCopied] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  // Social frame state
  const [socialFrameOpen, setSocialFrameOpen] = useState(false);
  const [socialFrameUrl, setSocialFrameUrl] = useState('');
  
  // New Feature 1: Theme switcher
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  // New Feature 2: Resume link copy animation
  const [resumeCopied, setResumeCopied] = useState(false);
  
  // New Feature 3: Quick project viewer
  const [showProjectPreview, setShowProjectPreview] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  
  const projects = [
    {
      name: "AI Image Generator",
      description: "Generate stunning images using AI models with custom prompts and styles.",
      previewUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      techStack: ["React", "TensorFlow.js", "Node.js"]
    },
    {
      name: "E-Commerce Dashboard", 
      description: "Full-featured admin dashboard for online store management with analytics.",
      previewUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      techStack: ["React", "Redux", "MongoDB"]
    },
    {
      name: "Smart Home IoT App",
      description: "Control your smart home devices from anywhere with this responsive web application.",
      previewUrl: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      techStack: ["React Native", "Firebase", "IoT APIs"]
    }
  ];
  
  // Array of tech skills to cycle through
  const techTexts = [
    "Full Stack Web Developer",
    "AI & ML Specialist",
    "React Developer",
    "Python Enthusiast",
    "UI/UX Designer"
  ];
  
  // Typewriter effect
  useEffect(() => {
    const text = techTexts[textIndex];
    
    if (isTyping) {
      if (charIndex < text.length) {
        const timeout = setTimeout(() => {
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        // Pause at the end of typing before starting to erase
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        // Move to the next text
        const timeout = setTimeout(() => {
          setTextIndex((textIndex + 1) % techTexts.length);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, isTyping, textIndex, techTexts]);
  
  const copyEmail = () => {
    navigator.clipboard.writeText('prem.0820.04@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast({
      title: "Email copied to clipboard",
      description: "You can now paste it anywhere",
    });
  };
  
  const email = 'prem.0820.04@gmail.com';
  
  const openSocialFrame = (url: string) => {
    setSocialFrameUrl(url);
    setSocialFrameOpen(true);
  };

  // New Feature 2: Copy resume link
  const copyResumeLink = () => {
    navigator.clipboard.writeText('https://drive.google.com/file/d/1qSfs3aKn0DCEIVTCNov7qFOwe1I_-yfd/view?usp=sharing');
    setResumeCopied(true);
    setTimeout(() => setResumeCopied(false), 2000);
    toast({
      title: "Resume link copied",
      description: "Link copied to clipboard. You can share it now.",
    });
  };

  // New Feature 1: Theme toggle functionality
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // This would actually change the theme in a real implementation
    document.documentElement.classList.toggle('light-theme');
    toast({
      title: isDarkMode ? "Light theme activated" : "Dark theme activated",
      description: "Theme preference has been saved",
    });
  };

  // New Feature 3: Next project in preview
  const nextProject = () => {
    setSelectedProject((selectedProject + 1) % projects.length);
  };
  
  return (
    <div className="md:w-7/12 mb-12 md:mb-0">
      <div className="mb-2 inline-block">
        <span className="font-mono text-tech-primary">Hello World, I'm</span>
      </div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
        Bollamoni 
        <span className="text-tech-primary"> Prem Sai</span>
      </h1>
      <div className="h-1 w-20 bg-tech-primary mb-6"></div>
      <h2 className="text-xl sm:text-2xl text-gray-300 mb-6 font-light h-8">
        <span className="border-r-2 border-tech-primary pr-1 animate-pulse">
          {techTexts[textIndex].substring(0, charIndex)}
        </span>
      </h2>
      
      <p className="text-gray-400 mb-8 max-w-xl text-base sm:text-lg">
        Computer Science Engineering student specializing in AI & ML with industry experience. 
        Passionate about building innovative solutions that leverage cutting-edge technology.
      </p>
      
      <div className="flex flex-wrap gap-4 mb-8">
        <a 
          href="#contact" 
          className="px-6 py-3 bg-tech-primary text-white rounded-md hover:bg-tech-secondary transition-colors hover:scale-105 transform duration-300"
        >
          Contact Me
        </a>
        
        <div className="relative">
          <Button
            variant="outline"
            className="border border-tech-primary text-tech-primary hover:bg-tech-primary/10 transition-colors flex items-center hover:scale-105 transform duration-300"
            onClick={copyResumeLink}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <polyline points="7 10 12 15 17 10"></polyline>
              <line x1="12" y1="15" x2="12" y2="3"></line>
            </svg>
            {resumeCopied ? "Link Copied!" : "Copy Resume Link"}
          </Button>
        </div>
      </div>
      
      <div className="flex items-center space-x-6">
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
            <div className="absolute top-full left-0 mt-2 p-2 glass rounded shadow-lg animate-zoom-in z-10">
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
        
        <button
          onClick={() => openSocialFrame('https://www.linkedin.com/in/prem-sai-bollamoni-817a18348')}
          className="text-gray-300 hover:text-tech-primary transition-colors hover:scale-110 transform duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:animate-pulse-slow">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </button>
        
        <button
          onClick={() => openSocialFrame('https://github.com/PremSaiBollamoni')}
          className="text-gray-300 hover:text-tech-primary transition-colors hover:scale-110 transform duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="hover:animate-pulse-slow">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </button>
      </div>
      
      {/* Theme toggle and availability indicator */}
      <div className="mt-8 flex items-center space-x-4">
        <div className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs text-gray-300">Available for work</span>
        </div>
        
        {/* New Feature 1: Theme toggle button */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full bg-gray-800/50 text-gray-300 hover:text-tech-primary transition-colors"
          aria-label="Toggle theme"
        >
          {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
        
        {/* New Feature 3: Quick project preview button */}
        <button
          onClick={() => setShowProjectPreview(!showProjectPreview)}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-800/50 rounded-full text-gray-300 hover:text-tech-primary transition-colors"
        >
          <FileCode2 size={16} />
          <span className="text-xs">Quick Projects</span>
        </button>
      </div>
      
      {/* New Feature 3: Project Quick Preview */}
      {showProjectPreview && (
        <div className="mt-6 glass p-4 rounded-lg animate-fade-in max-w-md">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg text-tech-primary font-medium">{projects[selectedProject].name}</h3>
            <button 
              onClick={nextProject} 
              className="text-xs text-gray-400 hover:text-tech-primary px-2 py-1 rounded bg-gray-800/70"
            >
              Next Project
            </button>
          </div>
          
          <div className="aspect-video bg-gray-900 rounded overflow-hidden mb-3">
            <img 
              src={projects[selectedProject].previewUrl}
              alt={projects[selectedProject].name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <p className="text-sm text-gray-400 mb-3">{projects[selectedProject].description}</p>
          
          <div className="flex flex-wrap gap-2">
            {projects[selectedProject].techStack.map((tech, index) => (
              <span key={index} className="text-xs px-2 py-1 bg-gray-800 rounded-full text-tech-accent">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Social iframe modal */}
      <SocialFrame 
        isOpen={socialFrameOpen} 
        url={socialFrameUrl}
        onClose={() => setSocialFrameOpen(false)}
      />
    </div>
  );
};

export default HeroContent;
