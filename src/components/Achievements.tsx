
import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Achievements: React.FC = () => {
  const [containerRef, isContainerVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const achievements = [
    {
      title: "2nd Prize at IEEE Young Professionals Rapid Innovation Challenge 2024",
      description: "Competed against 50+ teams nationwide with an AI-powered accessibility solution.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 8c-2.8 0-5 2.2-5 5 0 2.8 2.2 5 5 5 2.8 0 5-2.2 5-5 0-2.8-2.2-5-5-5Z"></path>
          <path d="M12 8V3"></path>
          <path d="M9 6L6 3"></path>
          <path d="M14 6l4-3"></path>
          <path d="M12 18v3"></path>
          <path d="M14 18l4 3"></path>
          <path d="M9 18l-4 3"></path>
        </svg>
      ),
      color: "from-yellow-500 to-amber-600"
    },
    {
      title: "Selected participant at National Cybersecurity Hackathon at VIT Vijayawada (2025)",
      description: "Developed security solutions for encrypted data protection in cloud environments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
        </svg>
      ),
      color: "from-tech-primary to-indigo-600"
    },
    {
      title: "Completed exclusive Entrepreneurship Workshop at IIT Hyderabad (2024)",
      description: "Selected among top students for intensive startup development program.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
          <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
        </svg>
      ),
      color: "from-tech-accent to-emerald-600"
    }
  ];

  const certifications = [
    {
      title: "Android App Development with Kotlin",
      issuer: "Meta / Coursera",
      date: "2024",
      verifyUrl: "https://drive.google.com/file/d/1oMhUcYoo9D_6WPbxgRpTNmuxaNs4Ovh7/view?usp=sharing"
    },
    {
      title: "Machine Learning Operations (MLOps) with Vertex AI: Model Evaluation",
      issuer: "Google Cloud Skills Boost",
      date: "2023",
      verifyUrl: "https://www.cloudskillsboost.google/public_profiles/03c589a1-1294-4fb8-b7cc-03ceb925c493/badges/13657560"
    },
    {
      title: "Kotlin for Android App Development",
      issuer: "Cursa",
      date: "2023",
      verifyUrl: "https://cursa.app/en/my-certificate/certeb87533bc190ab2c99cad03f6155ba58"
    }
  ];

  const languages = [
    { name: "English", level: "Proficient", percent: 90 },
    { name: "Telugu", level: "Native", percent: 100 },
    { name: "Hindi", level: "Intermediate", percent: 65 }
  ];

  const interests = ["AI Research", "Competitive Coding", "Open-Source Contributions", "Cricket", "Kabaddi"];

  return (
    <section id="achievements" className="py-20 relative">
      <div className="container mx-auto px-6" ref={containerRef}>
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-tech-primary">Achievements</span> & More
          </h2>
          <div className="h-1 w-20 bg-tech-primary mx-auto"></div>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Achievements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`glass p-6 rounded-lg border border-gray-700 flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 ${
                  isContainerVisible ? 'animate-zoom-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={`w-16 h-16 flex items-center justify-center rounded-full mb-4 bg-gradient-to-br ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white">{achievement.icon}</span>
                </div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-400 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Certifications */}
            <div 
              className={`glass p-6 rounded-lg border border-gray-700 ${
                isContainerVisible ? 'animate-slide-right' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-primary mr-3">
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h16a2 2 0 0 1 1.2.4"></path>
                  <path d="M2 10h20"></path>
                  <path d="M12 14v6"></path>
                  <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
                  <path d="M13.41 8H7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1"></path>
                </svg>
                <h3 className="text-xl font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="p-4 bg-black/30 rounded-lg border border-gray-700 group hover:border-tech-primary transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold">{cert.title}</h4>
                      <span className="text-sm text-tech-accent">{cert.date}</span>
                    </div>
                    <p className="text-sm text-gray-400 mb-2">Issuer: {cert.issuer}</p>
                    <div className="text-right">
                      <a 
                        href={cert.verifyUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1 bg-tech-primary/20 text-tech-primary rounded-full hover:bg-tech-primary/30 transition-colors inline-flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                          <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                        </svg>
                        Verify
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Languages */}
            <div 
              className={`glass p-6 rounded-lg border border-gray-700 ${
                isContainerVisible ? 'animate-slide-right' : 'opacity-0'
              }`}
              style={{ animationDelay: '0.5s' }}
            >
              <div className="flex items-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-primary mr-3">
                  <path d="M2 12h5M9 18l3-12 3 12M16 6h6M16 12h5M16 18h6"></path>
                </svg>
                <h3 className="text-xl font-bold">Languages</h3>
              </div>
              <div className="space-y-4">
                {languages.map((language, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm">
                        {language.name} <span className="text-gray-400">({language.level})</span>
                      </span>
                      <span className="text-sm text-tech-accent">{language.percent}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress"
                        style={{ 
                          width: isContainerVisible ? `${language.percent}%` : '0%', 
                          transition: 'width 1s ease-out',
                          transitionDelay: `${index * 0.2 + 0.5}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Interests */}
          <div 
            className={`glass p-6 rounded-lg border border-gray-700 ${
              isContainerVisible ? 'animate-slide-up' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.7s' }}
          >
            <div className="flex items-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-primary mr-3">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                <path d="M2 12h20"></path>
              </svg>
              <h3 className="text-xl font-bold">Interests</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, index) => (
                <div 
                  key={index} 
                  className={`px-4 py-2 bg-tech-primary/10 text-tech-primary border border-tech-primary/20 rounded-full hover:bg-tech-primary/20 transition-colors cursor-default animate-float`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {interest}
                </div>
              ))}
            </div>
          </div>
          
          {/* Portfolio Link */}
          <div 
            className={`mt-12 text-center ${isContainerVisible ? 'animate-slide-up' : 'opacity-0'}`}
            style={{ animationDelay: '0.8s' }}
          >
            <p className="text-gray-400 mb-2">GitHub Profile</p>
            <a 
              href="https://github.com/PremSaiBollamoni" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-tech-primary hover:text-tech-accent transition-colors text-lg"
            >
              github.com/PremSaiBollamoni
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
