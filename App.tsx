import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Brain, 
  Users, 
  ShieldCheck, 
  Share2, 
  Puzzle,
  KeyRound, 
  Mail, 
  Disc, 
  ChevronDown 
} from 'lucide-react';
import PsychedelicBackground from './components/PsychedelicBackground';
import NeonButton from './components/NeonButton';
import PillarCard from './components/PillarCard';
import { PillarProps } from './types';

const pillars: PillarProps[] = [
  {
    title: "Study Ayahuasca",
    description: "Dive into the history, botany, and pharmacology of the Sacred Medicine.",
    Icon: Brain,
    color: "#d946ef" // Fuchsia
  },
  {
    title: "Connect",
    description: "Find your tribe. Join a network of AyaPeople walking the same path.",
    Icon: Users,
    color: "#06b6d4" // Cyan
  },
  {
    title: "Drink Safely",
    description: "Technical instructions on experiencing, set, setting, and contraindications.",
    Icon: ShieldCheck,
    color: "#22c55e" // Green
  },
  {
    title: "Understand",
    description: "Integrate the information. Make sense of the visions, feelings and thoughts.",
    Icon: Puzzle,
    color: "#8b5cf6" // Violet
  },
  {
    title: "Share Experiences",
    description: "A safe space to chat, recount your journeys and be heard without judgment.",
    Icon: Share2,
    color: "#f59e0b" // Amber
  },
{
  title: "Take Mentorship",
  description: "Dedicated orientation from passionate practitioners with more than 33 years of Ayahuasca experience.",
  Icon: KeyRound,
  color: "#ef4444" // Red
}
];

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative text-white selection:bg-fuchsia-500 selection:text-white">
      <PsychedelicBackground />
      
      {/* Navigation / Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'py-8 bg-transparent'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-3xl font-bold tracking-tighter heading-font bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-400 to-emerald-400 animate-pulse">
            AYALOVE.ORG
          </div>
          <div className="hidden md:flex gap-6 text-sm font-semibold tracking-widest uppercase">
            <a href="#about" className="hover:text-fuchsia-400 transition-colors">Experience</a>
            <a href="#pillars" className="hover:text-cyan-400 transition-colors">Path</a>
            <a href="#connect" className="hover:text-emerald-400 transition-colors">Connect</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto space-y-8 z-10 p-10 glass-panel rounded-3xl border-t border-white/20 shadow-[0_0_100px_rgba(139,92,246,0.3)]">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-2">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 via-purple-300 to-indigo-300 drop-shadow-[0_0_15px_rgba(216,180,254,0.5)]">
              Elevate Your
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-300 to-green-300 drop-shadow-[0_0_15px_rgba(110,231,183,0.5)]">
              Ayahuasca Experience
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Deepen your understanding, connect with communities and access one of the purest Ayahuascas on Earth.
          </p>

          <div className="pt-8">
            <a href="#pillars" className="inline-block animate-bounce text-white/70 hover:text-white transition-colors">
              <ChevronDown size={40} />
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="about" className="py-24 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-panel p-12 rounded-[3rem] max-w-5xl mx-auto border border-fuchsia-500/30 shadow-[0_0_50px_rgba(217,70,239,0.1)]">
            <h2 className="text-3xl md:text-5xl font-bold mb-8 heading-font">
              Integration Point
            </h2>
            <p className="text-2xl md:text-3xl font-light italic text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-purple-200 to-indigo-200 mb-6">
              "Consecrating Ayahuasca of the future, honoring courage of elders."
            </p>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
              We offer 100% dedicated mentorship and the opportunity to participate in unique English ceremonies in Rio de Janeiro. 
              Bridging the gap between ancient wisdom and modern life.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Grid */}
      <section id="pillars" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text-shadow heading-font text-white">
            The Path of AyaLove
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pillars.map((pillar, index) => (
              <PillarCard key={index} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* Connect / CTA Section */}
      <section id="connect" className="py-32 relative z-10 flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black pointer-events-none"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold mb-12 text-white heading-font">
            Join the Momentum
          </h2>
          <p className="text-xl text-gray-300 mb-16 max-w-2xl mx-auto">
            Ready to continue? Connect directly through Email.<br /> 
            Join Discord to chat and find more information.<br /><br />
            We are here to support you.
          </p>
          
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <NeonButton 
              label="Email Us" 
              href="mailto:portal@ayalove.org" 
              Icon={Mail}
              primaryColor="#EA4335"
              glowColor="#EA4335"
            />
            <NeonButton 
              label="Join Discord" 
              href="https://discord.com/invite/bnn5HksBPK" 
              Icon={Disc} // Using Disc as a placeholder for Discord-like icon if generic
              primaryColor="#5865F2"
              glowColor="#5865F2"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 bg-black/80 backdrop-blur-lg relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} AyaLove.org
          </p>
          <div className="mt-4 flex justify-center gap-4 text-gray-300 text-xs uppercase tracking-widest">
            <span>Love</span> • <span>Light</span> • <span>Liberty</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
