
import React, { useState, useEffect } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { Card, CardContent } from "@/components/ui/card";
import { Award, FileCode2, Rocket, BarChart } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  delay: number;
  increment?: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, label, delay, increment = false }) => {
  const [ref, isInView] = useIntersectionObserver({
    threshold: 0.1,
  });
  
  const [currentValue, setCurrentValue] = useState(0);
  const [isLive, setIsLive] = useState(false);

  // Counter animation effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (isInView && currentValue < value) {
      timeout = setTimeout(() => {
        setCurrentValue(prev => Math.min(prev + 1, value));
      }, 100);
    }
    
    return () => clearTimeout(timeout);
  }, [isInView, currentValue, value]);
  
  // Live increment effect (for projects deployed stat)
  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (increment && isInView) {
      // Start the live updates after the initial count is complete
      if (currentValue === value) {
        setIsLive(true);
        
        // Random increment every 20-40 seconds
        interval = setInterval(() => {
          setCurrentValue(prev => {
            const newValue = prev + 1;
            toast({
              title: `${label} Updated!`,
              description: `New total: ${newValue}`,
              duration: 3000,
            });
            return newValue;
          });
        }, Math.random() * 20000 + 20000);
      }
    }
    
    return () => clearInterval(interval);
  }, [increment, isInView, currentValue, value, label]);

  return (
    <Card className="bg-tech-darker border border-gray-800 relative overflow-hidden">
      <CardContent className="p-4 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-tech-primary/10 flex items-center justify-center text-tech-primary">
          {icon}
        </div>
        <div>
          <h4 className="text-2xl font-bold text-white">
            <span className="counter" ref={ref}>
              {currentValue}
            </span>
            {isLive && (
              <span className="ml-2 text-xs text-tech-primary animate-pulse">
                LIVE
              </span>
            )}
          </h4>
          <p className="text-gray-400">{label}</p>
        </div>
      </CardContent>
      {isLive && (
        <div className="absolute bottom-0 left-0 h-1 bg-tech-primary animate-pulse" style={{ width: '100%' }}></div>
      )}
    </Card>
  );
};

const StatsCounter: React.FC = () => {
  const stats = [
    { icon: <FileCode2 size={24} />, value: 8, label: "Projects Completed", delay: 0 },
    { icon: <Rocket size={24} />, value: 6, label: "Projects Deployed", delay: 0.2, increment: true },
    { icon: <Award size={24} />, value: 3, label: "Certifications", delay: 0.4 },
    { icon: <BarChart size={24} />, value: 4, label: "Skills Mastered", delay: 0.6 }
  ];

  return (
    <div className="w-full">
      <h3 className="text-center text-gray-300 mb-4 text-sm uppercase tracking-widest">Achievements</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <StatItem
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
            delay={stat.delay}
            increment={stat.increment}
          />
        ))}
      </div>
    </div>
  );
};

export default StatsCounter;
