
import React from 'react';

const TechBadges: React.FC = () => {
  const techStack = [
    { name: 'React', color: 'from-blue-500 to-blue-600' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-700' },
    { name: 'Node.js', color: 'from-green-500 to-green-600' },
    { name: 'Python', color: 'from-blue-400 to-yellow-500' },
    { name: 'TensorFlow', color: 'from-orange-500 to-orange-600' },
    { name: 'MongoDB', color: 'from-green-600 to-green-700' },
  ];

  return (
    <div className="w-full">
      <h3 className="text-center text-gray-300 mb-4 text-sm uppercase tracking-widest">Tech Stack</h3>
      <div className="flex flex-wrap justify-center gap-3">
        {techStack.map((tech, index) => (
          <div 
            key={index}
            className={`px-4 py-2 rounded-full bg-gradient-to-r ${tech.color} text-white text-sm font-medium animate-fade-in`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {tech.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechBadges;
