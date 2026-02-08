import { LucideIcon } from 'lucide-react';

export interface PillarProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}

export interface Particle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  hue: number;
}
