
import React from 'react';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Terminal from '@/components/Terminal';
import Contact from '@/components/Contact';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-tech-darker text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      
      {/* Main Content */}
      <main>
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Terminal />
        <Contact />
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center text-gray-400 text-sm border-t border-gray-800">
        <div className="container mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} Bollamoni Prem Sai. All rights reserved.</p>
          <p className="mt-2">
            Full Stack Web Developer | AI & ML Specialist
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
