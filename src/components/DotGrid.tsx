// DotGrid.tsx
import React, { useEffect, useRef } from "react";

interface DotGridProps {
  dotSize: number;
  gap: number;
  baseColor: string;
  activeColor: string;
  proximity: number;
  shockStrength: number;
  resistance: number;
  style?: React.CSSProperties;
}

type Dot = {
  x: number;
  y: number;
  offsetX: number;
  offsetY: number;
};

const DotGrid: React.FC<DotGridProps> = ({
  dotSize,
  gap,
  baseColor,
  activeColor,
  proximity,
  shockStrength,
  resistance,
  style = {},
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouse = useRef<{ x: number; y: number }>({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const dots: Dot[] = [];

    for (let y = gap / 2; y < canvas.height; y += gap) {
      for (let x = gap / 2; x < canvas.width; x += gap) {
        dots.push({ x, y, offsetX: 0, offsetY: 0 });
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const dot of dots) {
        const dx = mouse.current.x - (dot.x + dot.offsetX);
        const dy = mouse.current.y - (dot.y + dot.offsetY);
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < proximity) {
          const angle = Math.atan2(dy, dx);
          const force = (1 - dist / proximity) * shockStrength;
          dot.offsetX -= Math.cos(angle) * force * gap;
          dot.offsetY -= Math.sin(angle) * force * gap;
        }

        // Apply resistance
        dot.offsetX *= resistance;
        dot.offsetY *= resistance;

        const renderX = dot.x + dot.offsetX;
        const renderY = dot.y + dot.offsetY;

        ctx.beginPath();
        ctx.arc(renderX, renderY, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = dist < proximity ? activeColor : baseColor;
        ctx.fill();
        ctx.closePath();
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [dotSize, gap, baseColor, activeColor, proximity, shockStrength, resistance]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: "none",
        ...style,
      }}
    />
  );
};

export default DotGrid;
