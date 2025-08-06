import React, { useEffect, useRef } from 'react';

interface DotGridProps {
  dotSize?: number;
  gap?: number;
  baseColor?: string;
  activeColor?: string;
  hoverRadius?: number;
  scrollWaveHeight?: number;
  style?: React.CSSProperties;
}

const DotGrid: React.FC<DotGridProps> = ({
  dotSize = 1.5,
  gap = 25,
  baseColor = 'rgba(150, 150, 255, 0.15)',
  activeColor = 'rgba(255, 255, 255, 0.8)',
  hoverRadius = 60,
  style = {},
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const dotsRef = useRef<Array<{ x: number; y: number }>>([]);
  const animationFrame = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight; 
      initializeDots();
    };

    const initializeDots = () => {
      dotsRef.current = [];
      if (!canvas) return;

      for (let y = gap / 2; y < canvas.height; y += gap) {
        for (let x = gap / 2; x < canvas.width; x += gap) {
          dotsRef.current.push({ x, y });
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    resizeCanvas();

    const animate = () => {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mouse = mousePos.current;

      dotsRef.current.forEach(dot => {
        const dx = mouse.x - dot.x;
        const dy = mouse.y - dot.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);

        let hoverEffect = 0;
        if (distToMouse < hoverRadius) {
          hoverEffect = Math.pow(1 - distToMouse / hoverRadius, 2);
        }

        const size = dotSize + hoverEffect * dotSize * 1.5;
        
        // Draw the dot
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, size, 0, Math.PI * 1);
        
        // Color interpolation
        if (hoverEffect > 0) {
          const alpha = 0.15 + hoverEffect * 0.15;
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        } else {
          ctx.fillStyle = baseColor;
        }
        
        ctx.fill();
      });

      animationFrame.current = requestAnimationFrame(animate);
    };

    animationFrame.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrame.current);
    };
  }, [dotSize, gap, baseColor, activeColor, hoverRadius]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', // Changed from fixed to absolute would also work
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
        ...style,
      }}
    />
  );
};

export default DotGrid;