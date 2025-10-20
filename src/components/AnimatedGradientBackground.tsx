
import { useEffect, useRef } from 'react';

const AnimatedGradientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      time += 0.005;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create multiple gradient layers
      const gradients = [
        {
          x: Math.sin(time) * 200 + canvas.width * 0.3,
          y: Math.cos(time * 0.8) * 150 + canvas.height * 0.4,
          radius: 300 + Math.sin(time * 2) * 100,
          colors: ['rgba(14, 165, 233, 0.6)', 'rgba(6, 255, 165, 0.4)', 'transparent']
        },
        {
          x: Math.cos(time * 1.2) * 250 + canvas.width * 0.7,
          y: Math.sin(time * 0.6) * 200 + canvas.height * 0.6,
          radius: 400 + Math.cos(time * 1.5) * 120,
          colors: ['rgba(168, 85, 247, 0.5)', 'rgba(14, 165, 233, 0.3)', 'transparent']
        },
        {
          x: Math.sin(time * 0.7) * 180 + canvas.width * 0.5,
          y: Math.cos(time * 1.1) * 160 + canvas.height * 0.3,
          radius: 250 + Math.sin(time * 3) * 80,
          colors: ['rgba(6, 255, 165, 0.4)', 'rgba(168, 85, 247, 0.2)', 'transparent']
        }
      ];

      // Draw each gradient blob
      gradients.forEach(gradient => {
        const radialGradient = ctx.createRadialGradient(
          gradient.x, gradient.y, 0,
          gradient.x, gradient.y, gradient.radius
        );

        gradient.colors.forEach((color, index) => {
          radialGradient.addColorStop(index / (gradient.colors.length - 1), color);
        });

        ctx.fillStyle = radialGradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Add subtle moving shapes
      const shapeCount = 5;
      for (let i = 0; i < shapeCount; i++) {
        const angle = (time + i * Math.PI * 2 / shapeCount) * 0.5;
        const x = Math.sin(angle) * 100 + canvas.width * 0.5;
        const y = Math.cos(angle * 1.3) * 80 + canvas.height * 0.5;
        const size = 20 + Math.sin(time * 2 + i) * 10;

        const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, size);
        circleGradient.addColorStop(0, `rgba(255, 255, 255, ${0.1 + Math.sin(time + i) * 0.05})`);
        circleGradient.addColorStop(1, 'transparent');

        ctx.fillStyle = circleGradient;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };

    const init = () => {
      resizeCanvas();
      animate();
    };

    init();

    const handleResize = () => {
      resizeCanvas();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%)'
      }}
    />
  );
};

export default AnimatedGradientBackground;
