import React, { useEffect, useRef } from 'react';

const PsychedelicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let time = 0;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', resize);
    resize();

    // Wave parameters
    const lines = 30;
    const step = 15;
    
    const draw = () => {
      // Create a trailing effect by filling with semi-transparent black
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)';
      ctx.fillRect(0, 0, width, height);

      time += 0.005;

      ctx.lineWidth = 2;

      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        // Calculate dynamic color for this line based on time and index
        const hue = (time * 50 + i * 10) % 360;
        ctx.strokeStyle = `hsla(${hue}, 70%, 50%, 0.5)`;
        
        for (let x = 0; x < width; x += step) {
          // Create a complex wave function
          const yOffset = height / 2;
          const amplitude = 100 + i * 5;
          const frequency = 0.002 + i * 0.0001;
          const movement = time * (1 + i * 0.1);
          
          const y = yOffset + 
                    Math.sin(x * frequency + movement) * amplitude * Math.sin(time * 0.5) +
                    Math.cos(x * 0.005 + time) * 50;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      // Add some "floating spirits" or particles
      for (let j = 0; j < 5; j++) {
        const px = (Math.sin(time * 0.5 + j) * 0.4 + 0.5) * width;
        const py = (Math.cos(time * 0.3 + j) * 0.4 + 0.5) * height;
        const gradient = ctx.createRadialGradient(px, py, 0, px, py, 100);
        gradient.addColorStop(0, `hsla(${(time * 100 + j * 60) % 360}, 100%, 70%, 0.2)`);
        gradient.addColorStop(1, 'rgba(0,0,0,0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(px, py, 100, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
};

export default PsychedelicBackground;