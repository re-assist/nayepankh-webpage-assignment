import  { useEffect, useRef } from 'react';

export default function AmbientBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId;
    const ctx = canvas.getContext('2d');
    
    if (ctx) {
      let time = 0;
      const resize = () => {
        canvas.width = canvas.clientWidth || window.innerWidth;
        canvas.height = canvas.clientHeight || window.innerHeight;
      };
      
      resize();
      window.addEventListener('resize', resize);

      const render2D = () => {
        time += 0.005;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Deep Obsidian Slate base
        ctx.fillStyle = '#0a0a0a';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Golden glowing amber aura (slowly pulse & shift)
        const centerX = canvas.width / 2 + Math.sin(time) * 100;
        const centerY = canvas.height * 0.4 + Math.cos(time * 0.8) * 50;
        const radius = Math.max(canvas.width, canvas.height) * 0.65;
        
        const grad = ctx.createRadialGradient(
          centerX, centerY, 10,
          centerX, centerY, radius
        );
        grad.addColorStop(0, 'rgba(242, 202, 80, 0.05)');
        grad.addColorStop(0.4, 'rgba(255, 183, 124, 0.015)');
        grad.addColorStop(1, '#0a0a0a');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Slow animated floating golden embers
        ctx.fillStyle = 'rgba(242, 202, 80, 0.03)';
        for (let i = 0; i < 4; i++) {
          const x = canvas.width * (0.3 + 0.4 * Math.sin(time * 0.4 + i * 2));
          const y = canvas.height * (0.2 + 0.6 * Math.cos(time * 0.3 - i * 1.5));
          ctx.beginPath();
          ctx.arc(x, y, 150 + 80 * Math.sin(time + i), 0, Math.PI * 2);
          ctx.fill();
        }

        animationFrameId = requestAnimationFrame(render2D);
      };
      render2D();

      return () => {
        window.removeEventListener('resize', resize);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return (
    <>
      <div className="fixed inset-0 w-full h-full -z-10 bg-[#0a0a0a]" id="ambient-container">
        <canvas
          ref={canvasRef}
          className="block w-full h-full opacity-80 pointer-events-none"
          id="ambient-canvas"
        />
        <div className="film-grain absolute inset-0 mix-blend-overlay pointer-events-none" />
      </div>
    </>
  );
}
