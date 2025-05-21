
import React from 'react';
import { Award, Rocket, FileCode2, TrendingUp } from 'lucide-react';

type StatProps = {
  icon: React.ReactNode;
  value: number;
  label: string;
  delay: number;
  className?: string;
}

const Stat: React.FC<StatProps> = ({ icon, value, label, delay, className }) => {
  return (
    <div 
      className={`glass px-4 py-3 rounded-lg flex items-center space-x-3 animate-float absolute ${className}`}
      style={{ animationDelay: `${delay}s`, animationDuration: '4s' }}
    >
      <span className="text-tech-primary text-lg">{icon}</span>
      <div>
        <div className="flex items-center">
          <span className="text-xl font-bold text-white">{value}</span>
          <span className="text-xs text-gray-300 ml-1">{label}</span>
        </div>
      </div>
    </div>
  );
};

const LiveStats: React.FC = () => {
  return (
    <div className="relative w-full h-full">
      <Stat 
        icon={<FileCode2 size={22} />} 
        value={8} 
        label="Projects" 
        delay={0.3}
        className="top-4 left-0 md:left-16"
      />
      
      <Stat 
        icon={<Rocket size={22} />} 
        value={6} 
        label="Deployed" 
        delay={0.6}
        className="top-24 right-2 md:right-10"
      />
      
      <Stat 
        icon={<Award size={22} />} 
        value={3} 
        label="Certifications" 
        delay={0.9}
        className="bottom-16 left-10 md:left-24"
      />
      
      <Stat 
        icon={<TrendingUp size={22} />} 
        value={3} 
        label="Awards" 
        delay={1.2}
        className="bottom-4 right-8"
      />
    </div>
  );
};

export default LiveStats;
