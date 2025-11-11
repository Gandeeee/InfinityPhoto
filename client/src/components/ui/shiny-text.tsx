import React from 'react';
import { cn } from '@/lib/utils'; 

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  className?: string;
  [key: string]: any; 
}

const ShinyText: React.FC<ShinyTextProps> = ({ text, disabled = false, speed = 5, className = '', ...props }) => {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={cn(
        className, 
        'bg-clip-text text-transparent',
        disabled ? '' : 'animate-shine'
      )}
      style={{
        backgroundImage:
          'linear-gradient(120deg, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0.4) 70%)',
        
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animationDuration: animationDuration,
      }}
      {...props} 
    >
      {text}
    </div>
  );
};

export default ShinyText;