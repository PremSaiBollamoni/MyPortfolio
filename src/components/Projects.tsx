
import React, { useState } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Projects: React.FC = () => {
  const [containerRef, isContainerVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  
  const [filter, setFilter] = useState<string>('all');
  
  const projects = [
    {
      title: "GitFolio - AI-Powered GitHub Portfolio Generator",
      year: "2025",
      image: "laptop",
      category: "ai",
      technologies: ["React.js", "Node.js", "Gemini API", "GitHub API"],
      description: [
        "Architected full-stack application that auto-generates professional portfolios from GitHub profiles using Gemini API",
        "Implemented secure GitHub authentication system with optional PAT integration for enhanced repository access",
        "Developed comprehensive analytics dashboard visualizing repository metrics, language distribution, and contribution data"
      ],
      github: "https://github.com/PremSaiBollamoni/GitFolio",
      demo: "https://gitfoliobyprem.netlify.app"
    },
    {
      title: "Intellex - Multimodal AI Assistant",
      year: "2025",
      image: "desktop",
      category: "ai",
      technologies: ["Python", "TensorFlow", "Gemini API", "Flask"],
      description: [
        "Engineered unified AI chatbot integrating text, image, and speech processing capabilities",
        "Implemented Gemini 1.5 Flash, 2.0 Flash, and 2.5 Pro models for enhanced multimodal interactions",
        "Designed modular architecture enabling seamless scaling across different input modalities"
      ],
      github: "https://github.com/PremSaiBollamoni/Intellex",
      demo: "https://spontaneous-malabi-8ff709.netlify.app"
    },
    {
      title: "Smart Notes - AI-Powered Note-Taking App",
      year: "2024",
      image: "mobile",
      category: "mobile",
      technologies: ["Kotlin", "Android", "Gemini API", "Room DB"],
      description: [
        "Developed Kotlin-based Android application using Gemini API for image-to-text conversion with 95% accuracy",
        "Implemented smart categorization system that automatically classifies content into relevant categories"
      ],
      github: "https://github.com/PremSaiBollamoni/Smart-Notes-Android-Application",
      demo: "https://github.com/PremSaiBollamoni/Smart-Notes-Android-Application"
    },
    {
      title: "Nunito - Conversational Image Recognition Chatbot",
      year: "2024",
      image: "desktop",
      category: "ai",
      technologies: ["React.js", "TensorFlow.js", "Gemini API", "Firebase"],
      description: [
        "Engineered responsive chatbot using Gemini API, achieving 90% accuracy in image recognition tasks",
        "Integrated Computer Vision models enabling real-time classification of 25+ object categories",
        "Designed intuitive React.js front-end resulting in 3x faster user interaction"
      ],
      github: "https://github.com/PremSaiBollamoni/Nunito",
      demo: null
    },
    {
      title: "CenSkillConnect - AI-Driven Job Platform",
      year: "2024",
      image: "browser",
      category: "web",
      technologies: ["React.js", "Node.js", "Firebase", "TensorFlow.js"],
      description: [
        "Architected job recommendation system with 85% match accuracy between skills and job requirements",
        "Built full-stack web application using React.js, Node.js, and Firebase, supporting 500+ concurrent users"
      ],
      github: "https://github.com/PremSaiBollamoni/CenSkillConnect",
      demo: null
    }
  ];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const deviceMockupClasses = {
    laptop: "w-[80%] max-w-md mx-auto bg-gray-800 rounded-t-lg p-2 border border-gray-700",
    desktop: "w-[80%] max-w-md mx-auto bg-gray-800 rounded-lg border border-gray-700 overflow-hidden",
    mobile: "w-36 h-64 mx-auto bg-black rounded-xl p-1 border border-gray-700",
    browser: "w-[90%] max-w-md mx-auto bg-gray-800 rounded-lg overflow-hidden border border-gray-700",
  };

  const deviceScreenClasses = {
    laptop: "bg-gradient-to-br from-tech-primary/10 to-tech-accent/10 aspect-video rounded-t-sm p-2",
    desktop: "bg-gradient-to-br from-tech-primary/10 to-tech-accent/10 p-2 h-44",
    mobile: "w-full h-full bg-gradient-to-br from-tech-primary/10 to-tech-accent/10 rounded-lg",
    browser: "bg-gradient-to-br from-tech-primary/10 to-tech-accent/10 h-40 p-2",
  };

  return (
    <section id="projects" className="py-20 bg-tech-dark/30">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-tech-primary">Featured</span> Projects
          </h2>
          <div className="h-1 w-20 bg-tech-primary mx-auto mb-8"></div>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {['all', 'ai', 'web', 'mobile'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-md ${
                  filter === category 
                    ? 'bg-tech-primary text-white' 
                    : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                } transition-colors border border-gray-700`}
              >
                {category === 'all' ? 'All Projects' : 
                 category === 'ai' ? 'AI & ML' : 
                 category === 'web' ? 'Web Apps' : 'Mobile Apps'}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div 
              key={index}
              className={`glass rounded-lg border border-gray-700 overflow-hidden group transition-all hover:-translate-y-2 duration-300 ${
                isContainerVisible ? 'animate-zoom-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Preview */}
              <div className="p-4">
                <div className={deviceMockupClasses[project.image as keyof typeof deviceMockupClasses]}>
                  <div className={deviceScreenClasses[project.image as keyof typeof deviceScreenClasses]}>
                    {/* Technology icons */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <div key={i} className="px-2 py-1 text-xs bg-tech-primary/20 text-tech-primary rounded">
                          {tech}
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 space-y-1">
                      <div className="h-2 w-3/4 bg-white/10 rounded"></div>
                      <div className="h-2 w-1/2 bg-white/10 rounded"></div>
                      <div className="h-2 w-5/6 bg-white/10 rounded"></div>
                    </div>
                  </div>
                  
                  {project.image === 'laptop' && (
                    <div className="h-3 bg-gray-900 rounded-b-lg flex justify-center items-center">
                      <div className="w-16 h-1 bg-gray-700 rounded"></div>
                    </div>
                  )}
                  
                  {project.image === 'browser' && (
                    <div className="h-6 bg-gray-900 border-b border-gray-700 flex items-center px-2">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-red-500"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      </div>
                      <div className="h-4 w-32 mx-auto bg-gray-800 rounded-sm"></div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Project Info */}
              <div className="p-6 border-t border-gray-700">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <span className="text-sm text-tech-accent">{project.year}</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  {project.description.map((item, i) => (
                    <p key={i} className="text-sm text-gray-400 flex items-start">
                      <span className="text-tech-primary mr-2">▹</span>
                      <span>{item}</span>
                    </p>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-between pt-3 border-t border-gray-700/50">
                  {project.demo ? (
                    <a 
                      href={project.demo}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-tech-primary text-sm hover:text-tech-accent transition-colors"
                    >
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        Live Demo
                      </div>
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm">
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                          <line x1="8" y1="21" x2="16" y2="21"></line>
                          <line x1="12" y1="17" x2="12" y2="21"></line>
                        </svg>
                        Coming Soon
                      </div>
                    </span>
                  )}
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-tech-primary text-sm hover:text-tech-accent transition-colors"
                  >
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      Source Code
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
