
import React, { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Experience: React.FC = () => {
  const [containerRef, isContainerVisible] = useIntersectionObserver({
    threshold: 0.1,
  });
  
  const percentRef1 = useRef<HTMLDivElement>(null);
  const percentRef2 = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isContainerVisible) {
      if (percentRef1.current) {
        percentRef1.current.style.setProperty('--progress-width', '30%');
        percentRef1.current.classList.add('animate-fill-progress');
      }
      if (percentRef2.current) {
        percentRef2.current.style.setProperty('--progress-width', '25%');
        percentRef2.current.classList.add('animate-fill-progress');
      }
    }
  }, [isContainerVisible]);
  
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Work <span className="text-tech-primary">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-tech-primary mx-auto"></div>
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-tech-primary/20"></div>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Experience Item */}
            <div className={`flex flex-col md:flex-row items-center mb-16 ${isContainerVisible ? 'animate-zoom-in' : 'opacity-0'}`}>
              <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                <h3 className="text-xl font-semibold mb-1">Software Development Intern</h3>
                <h4 className="text-tech-primary mb-2">Bharat Heavy Electricals Limited (BHEL)</h4>
                <p className="text-gray-400 text-sm">April 2024 - August 2024</p>
              </div>
              
              <div className="hidden md:flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-tech-primary z-10 relative">
                  <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                  </span>
                </div>
              </div>
              
              <div className="md:w-1/2 md:pl-12 glass p-6 rounded-lg border border-gray-700">
                <ul className="space-y-3 text-sm sm:text-base">
                  <li className="flex items-start">
                    <span className="text-tech-primary mr-2">▹</span>
                    <span>Developed Pin Code Validator Android App using Kotlin, integrating third-party APIs for real-time validation</span>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="text-tech-primary mr-2">▹</span>
                    <span>Enhanced API efficiency by 30% through performance optimization using Postman & Firebase</span>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="text-tech-primary mr-2">▹</span>
                    <span>Improved app reliability by implementing automated error detection and responsive troubleshooting</span>
                  </li>
                  
                  <li className="flex items-start">
                    <span className="text-tech-primary mr-2">▹</span>
                    <span>Redesigned UI/UX elements based on user feedback, resulting in 25% improved user satisfaction scores</span>
                  </li>
                </ul>
                
                {/* Metrics Visualization */}
                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">API Efficiency</span>
                      <span className="text-sm text-tech-primary">30%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded">
                      <div ref={percentRef1} className="h-full bg-tech-primary rounded" style={{width: '0%'}}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">User Satisfaction</span>
                      <span className="text-sm text-tech-primary">25%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded">
                      <div ref={percentRef2} className="h-full bg-tech-primary rounded" style={{width: '0%'}}></div>
                    </div>
                  </div>
                </div>
                
                {/* Mobile App Simulation */}
                <div className="mt-6">
                  <div className="w-28 h-56 mx-auto bg-black rounded-xl p-1 border border-gray-700 relative">
                    <div className="w-full h-full bg-gray-800 rounded-lg overflow-hidden flex flex-col">
                      <div className="h-6 bg-tech-primary/20 flex items-center justify-center">
                        <div className="w-12 h-2 bg-gray-600 rounded"></div>
                      </div>
                      <div className="flex-1 p-1 flex flex-col items-center justify-center">
                        <div className="w-full h-6 bg-gray-700 rounded mb-2"></div>
                        <div className="w-3/4 h-3 bg-gray-700 rounded mb-4"></div>
                        <div className="w-full h-10 bg-tech-primary/30 rounded mb-2"></div>
                        <div className="w-1/2 h-3 bg-tech-accent/40 rounded"></div>
                      </div>
                      <div className="h-4 bg-gray-900 flex justify-center items-center">
                        <div className="w-10 h-2 bg-gray-700 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* About Section */}
        <div id="about" className={`max-w-4xl mx-auto mt-24 glass p-8 rounded-lg border border-gray-700 ${isContainerVisible ? 'animate-slide-up' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
          <h3 className="text-2xl font-bold mb-6">
            Professional <span className="text-tech-primary">Summary</span>
          </h3>
          
          <p className="text-gray-300 mb-6">
            Computer Science Engineering student with AI & ML specialization and 4+ months of software development internship experience. 
            Skilled in full-stack web development, mobile app creation, and AI integration. Passionate about leveraging machine learning 
            and computer vision for innovative solutions with measurable impact.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
              <div className="mb-3 text-tech-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 10-8 10s-8-4-8-10a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">Location</h4>
              <p className="text-gray-400">Kurnool, Andhra Pradesh, India</p>
            </div>
            
            <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
              <div className="mb-3 text-tech-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">Phone</h4>
              <p className="text-gray-400">8074850696</p>
            </div>
            
            <div className="p-4 bg-black/30 rounded-lg border border-gray-700">
              <div className="mb-3 text-tech-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <h4 className="text-lg font-medium mb-2">Email</h4>
              <p className="text-gray-400 break-all">prem.0820.04@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
