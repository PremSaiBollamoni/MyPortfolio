
import React, { useRef, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Education: React.FC = () => {
  const [containerRef, isContainerVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  
  const gpaRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  
  useEffect(() => {
    if (isContainerVisible) {
      if (gpaRefs[0].current) {
        gpaRefs[0].current.style.setProperty('--progress-width', '91%');
        gpaRefs[0].current.classList.add('animate-fill-progress');
      }
      if (gpaRefs[1].current) {
        gpaRefs[1].current.style.setProperty('--progress-width', '78%');
        gpaRefs[1].current.classList.add('animate-fill-progress');
      }
      if (gpaRefs[2].current) {
        gpaRefs[2].current.style.setProperty('--progress-width', '100%');
        gpaRefs[2].current.classList.add('animate-fill-progress');
      }
    }
  }, [isContainerVisible]);

  const educationData = [
    {
      degree: "B.Tech in Computer Science & Engineering (AI & ML Specialization)",
      institution: "Centurion University of Technology & Management",
      period: "2022 - Present",
      score: "GPA: 9.1/10",
      percent: 91,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
    },
    {
      degree: "Intermediate Education (MPC Stream)",
      institution: "Sri Gayatri Junior College",
      period: "2020 - 2022",
      score: "78%",
      percent: 78,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
      ),
    },
    {
      degree: "Secondary Education (SSC)",
      institution: "Little Hearts English Medium High School",
      period: "2019 - 2020",
      score: "GPA: 10/10",
      percent: 100,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section id="education" className="py-20 bg-tech-dark/30 relative">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-tech-primary">Educational</span> Journey
          </h2>
          <div className="h-1 w-20 bg-tech-primary mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-16 top-0 h-full w-1 bg-tech-primary/20 ml-0.5"></div>
            
            {/* Education Items */}
            <div className="space-y-16">
              {educationData.map((edu, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col md:flex-row ${
                    isContainerVisible ? 'animate-slide-right' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="md:w-32 flex-shrink-0 mb-4 md:mb-0 flex md:justify-center">
                    <div className="w-10 h-10 rounded-full bg-tech-primary/20 flex items-center justify-center z-10 relative border border-tech-primary/30">
                      <span className="text-tech-primary">{edu.icon}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 glass p-6 rounded-lg border border-gray-700 ml-0 md:-ml-6">
                    <h3 className="text-xl font-semibold mb-1">{edu.degree}</h3>
                    <h4 className="text-tech-primary mb-2">{edu.institution}</h4>
                    <div className="flex justify-between items-center mb-4">
                      <p className="text-gray-400 text-sm">{edu.period}</p>
                      <p className="text-tech-accent font-medium">{edu.score}</p>
                    </div>
                    
                    {/* Score Progress Bar */}
                    <div>
                      <div className="h-2 bg-gray-700 rounded overflow-hidden">
                        <div 
                          ref={gpaRefs[index]}
                          className="h-full bg-gradient-to-r from-tech-primary to-tech-accent rounded"
                          style={{ width: '0%' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
