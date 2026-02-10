import React from 'react';
import { PillarProps } from '../types';

const PillarCard: React.FC<PillarProps> = ({ title, description, Icon, color }) => {
  return (
    <div 
      className="group glass-panel p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 hover:bg-white/5 border-t border-white/10 relative overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div 
        className="absolute -inset-1 opacity-0 group-hover:opacity-30 blur-2xl transition-opacity duration-500"
        style={{ background: color }}
      ></div>

      <div className="relative z-10 flex flex-col items-center text-center h-full">
        <div 
          className="mb-6 p-4 rounded-full bg-black/40 border border-white/10 group-hover:scale-110 transition-transform duration-500"
          style={{ boxShadow: `0 0 15px ${color}` }}
        >
          <Icon size={40} style={{ color: color }} />
        </div>
        <h3 className="text-2xl font-bold mb-4 text-white tracking-wider heading-font">{title}</h3>
        <p className="text-gray-200 font-normal leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default PillarCard;