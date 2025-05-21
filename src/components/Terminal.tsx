
import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Terminal: React.FC = () => {
  const [containerRef, isContainerVisible] = useIntersectionObserver({
    threshold: 0.1,
  });

  const [command, setCommand] = useState('');
  const [history, setHistory] = useState<{ type: string; text: string }[]>([
    { type: 'system', text: 'Welcome to Prem Sai\'s interactive terminal. Type "help" for a list of commands.' }
  ]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (isContainerVisible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isContainerVisible]);

  const processCommand = (cmd: string) => {
    const lowerCmd = cmd.toLowerCase().trim();
    
    // Add command to history
    setHistory(prev => [...prev, { type: 'command', text: `> ${cmd}` }]);
    
    // Process command
    setTimeout(() => {
      let response: string;
      
      switch (lowerCmd) {
        case 'help':
          response = `
Available commands:
- about: Display information about Prem Sai
- skills: List technical skills
- projects: Show major projects
- experience: Show work experience
- education: Show educational background
- contact: Display contact information
- clear: Clear the terminal
- help: Show this help message
          `.trim();
          break;
          
        case 'about':
          response = `
Bollamoni Prem Sai is a Computer Science Engineering student specializing in AI & ML.
With software development internship experience at BHEL, he's skilled in full-stack web
development, mobile app creation, and AI integration. Passionate about leveraging machine
learning and computer vision for innovative solutions.
          `.trim();
          break;
          
        case 'skills':
          response = `
Technical Skills:
- Python (90%)
- JavaScript (85%)
- Kotlin (80%)
- React.js (85%)
- Node.js (75%)
- Firebase (80%)
- REST APIs (85%)
- Android Development (75%)

AI & ML Skills:
- TensorFlow (80%)
- NLP (70%)
- Computer Vision (75%)
- Data Analysis (85%)
- Gemini API Integration (90%)
          `.trim();
          break;
          
        case 'projects':
          response = `
Major Projects:
- GitFolio: AI-Powered GitHub Portfolio Generator (2025)
- Intellex: Multimodal AI Assistant (2025)
- Smart Notes: AI-Powered Note-Taking App (2024)
- Nunito: Conversational Image Recognition Chatbot (2024)
- CenSkillConnect: AI-Driven Job Platform (2024)

Type "project [name]" for more details (e.g., "project gitfolio")
          `.trim();
          break;
          
        case 'experience':
          response = `
Work Experience:
- Software Development Intern at BHEL (April 2024 - August 2024)
  * Developed Pin Code Validator Android App using Kotlin
  * Enhanced API efficiency by 30% through performance optimization
  * Improved app reliability with automated error detection
  * Redesigned UI/UX based on user feedback, 25% improved satisfaction
          `.trim();
          break;
          
        case 'education':
          response = `
Education:
- B.Tech in Computer Science & Engineering (AI & ML Specialization)
  Centurion University of Technology & Management | GPA: 9.1/10 | 2022 - Present

- Intermediate Education (MPC Stream)
  Sri Gayatri Junior College | 78% | 2020 - 2022

- Secondary Education (SSC)
  Little Hearts English Medium High School | GPA: 10/10 | 2019 - 2020
          `.trim();
          break;
          
        case 'contact':
          response = `
Contact Information:
- Phone: 8074850696
- Email: prem.0820.04@gmail.com
- LinkedIn: linkedin.com/in/premsai
- GitHub: github.com/premsai
- Portfolio: https://premsai-portfolio.dev
          `.trim();
          break;
          
        case 'clear':
          setHistory([{ type: 'system', text: 'Terminal cleared. Type "help" for commands.' }]);
          return;
          
        default:
          // Check if command is asking for project details
          if (lowerCmd.startsWith('project ')) {
            const projectName = lowerCmd.substring(8).trim();
            
            if (projectName === 'gitfolio' || projectName === 'git') {
              response = `
Project: GitFolio - AI-Powered GitHub Portfolio Generator (2025)
- Architected full-stack application that auto-generates professional portfolios from GitHub profiles using Gemini API
- Implemented secure GitHub authentication system with optional PAT integration for enhanced repository access
- Developed comprehensive analytics dashboard visualizing repository metrics, language distribution, and contribution data
- Technologies: React.js, Node.js, Gemini API, GitHub API
              `.trim();
            } else if (projectName === 'intellex' || projectName === 'intel') {
              response = `
Project: Intellex - Multimodal AI Assistant (2025)
- Engineered unified AI chatbot integrating text, image, and speech processing capabilities
- Implemented Gemini 1.5 Flash, 2.0 Flash, and 2.5 Pro models for enhanced multimodal interactions
- Designed modular architecture enabling seamless scaling across different input modalities
- Technologies: Python, TensorFlow, Gemini API, Flask
              `.trim();
            } else if (projectName === 'smart notes' || projectName === 'notes') {
              response = `
Project: Smart Notes - AI-Powered Note-Taking App (2024)
- Developed Kotlin-based Android application using Gemini API for image-to-text conversion with 95% accuracy
- Implemented smart categorization system that automatically classifies content into relevant categories
- Technologies: Kotlin, Android, Gemini API, Room DB
              `.trim();
            } else if (projectName === 'nunito') {
              response = `
Project: Nunito - Conversational Image Recognition Chatbot (2024)
- Engineered responsive chatbot using Gemini API, achieving 90% accuracy in image recognition tasks
- Integrated Computer Vision models enabling real-time classification of 25+ object categories
- Designed intuitive React.js front-end resulting in 3x faster user interaction
- Technologies: React.js, TensorFlow.js, Gemini API, Firebase
              `.trim();
            } else if (projectName === 'censkillconnect' || projectName === 'job') {
              response = `
Project: CenSkillConnect - AI-Driven Job Platform (2024)
- Architected job recommendation system with 85% match accuracy between skills and job requirements
- Built full-stack web application using React.js, Node.js, and Firebase, supporting 500+ concurrent users
- Technologies: React.js, Node.js, Firebase, TensorFlow.js
              `.trim();
            } else {
              response = `Project "${projectName}" not found. Type "projects" to see available projects.`;
            }
          } else {
            response = `Command not recognized: "${cmd}". Type "help" for available commands.`;
          }
      }
      
      setHistory(prev => [...prev, { type: 'response', text: response }]);
    }, 200);
    
    setCommand('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.trim()) {
      processCommand(command);
    }
  };

  return (
    <section className="py-20 bg-tech-dark/30" ref={containerRef}>
      <div className="container mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-tech-primary">Interactive</span> Terminal
          </h2>
          <div className="h-1 w-20 bg-tech-primary mx-auto"></div>
        </div>
        
        <div 
          className={`max-w-3xl mx-auto glass p-2 rounded-lg border border-gray-700 ${
            isContainerVisible ? 'animate-zoom-in' : 'opacity-0'
          }`}
        >
          <div className="bg-black rounded-md overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-gray-900 py-2 px-4 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex space-x-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                </div>
              </div>
              <div className="text-gray-400 text-xs">prem@portfolio:~</div>
              <div className="w-5"></div>
            </div>
            
            {/* Terminal Body */}
            <div 
              className="p-4 h-64 md:h-80 overflow-y-auto scrollbar-thin terminal-text"
              ref={terminalRef}
            >
              {history.map((item, index) => (
                <div key={index} className={`mb-2 ${item.type === 'command' ? 'text-tech-primary' : ''}`}>
                  <pre className={item.type === 'command' ? 'terminal-prompt' : ''}>
                    {item.type === 'command' ? item.text : item.text}
                  </pre>
                </div>
              ))}
            </div>
            
            {/* Terminal Input */}
            <form onSubmit={handleSubmit} className="bg-gray-900 p-2 flex items-center">
              <span className="text-tech-accent mr-2">$</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none terminal-text coding-animation"
                placeholder="Type a command..."
                ref={inputRef}
              />
            </form>
          </div>
          
          <div className="mt-3 text-xs text-center text-gray-400">
            Type "help" to see available commands. Try commands like "about", "skills", or "projects".
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;
