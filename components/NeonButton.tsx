import React from 'react';
import { LucideIcon } from 'lucide-react';

interface NeonButtonProps {
  label: string;
  href: string;
  Icon: LucideIcon;
  primaryColor: string; // Tailwind color class mostly or hex
  glowColor: string; // hex for shadow
}

const NeonButton: React.FC<NeonButtonProps> = ({ label, href, Icon, primaryColor, glowColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-300 ease-out border-2 rounded-full overflow-hidden"
      style={{
        borderColor: glowColor,
        boxShadow: `0 0 10px ${glowColor}, inset 0 0 5px ${glowColor}`
      }}
    >
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-black"></span>
      <span 
        className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 group-hover:opacity-20"
        style={{ backgroundColor: glowColor }}
      ></span>
      
      {/* Icon and Text */}
      <span className="relative flex items-center gap-3 text-lg tracking-widest uppercase heading-font">
        <Icon className="w-6 h-6 animate-pulse" />
        {label}
      </span>
    </a>
  );
};

export default NeonButton;