import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../lib/ThemeContext';
import { prefersReducedMotion } from '../../lib/motion';

/**
 * FalconField — calm atmospheric field for the hero.
 * Alternative to the old CyberGrid: soft nodes + faint links, accent-tinted, no neon spam.
 * Pauses when the hero is off-screen or reduced-motion is preferred.
 */
export const FalconField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();
  const [active, setActive] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setActive(window.scrollY < window.innerHeight * 0.9 && !document.hidden);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('visibilitychange', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('visibilitychange', onScroll);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;
    let width = 0;
    let height = 0;
    const reduce = prefersReducedMotion();
    const isDark = theme === 'dark';

    type Node = { x: number; y: number; vx: number; vy: number; r: number; phase: number };

    let nodes: Node[] = [];

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(48, Math.floor((width * height) / 28000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: 1 + Math.random() * 1.6,
        phase: Math.random() * Math.PI * 2,
      }));
    };

    resize();
    window.addEventListener('resize', resize);

    const accent = isDark ? { r: 232, g: 160, b: 74 } : { r: 180, g: 83, b: 9 };
    const ink = isDark ? { r: 18, g: 16, b: 14 } : { r: 247, g: 244, b: 239 };

    const drawStatic = () => {
      ctx.fillStyle = `rgb(${ink.r},${ink.g},${ink.b})`;
      ctx.fillRect(0, 0, width, height);
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent.r},${accent.g},${accent.b},0.35)`;
        ctx.fill();
      }
    };

    const tick = () => {
      if (!active) {
        raf = requestAnimationFrame(tick);
        return;
      }

      ctx.fillStyle = `rgb(${ink.r},${ink.g},${ink.b})`;
      ctx.fillRect(0, 0, width, height);

      for (const n of nodes) {
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
          n.phase += 0.01;
          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
        }
      }

      const linkDist = Math.min(140, width * 0.12);
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < linkDist) {
            const alpha = (1 - d / linkDist) * (isDark ? 0.18 : 0.12);
            ctx.strokeStyle = `rgba(${accent.r},${accent.g},${accent.b},${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const pulse = reduce ? 1 : 0.75 + Math.sin(n.phase) * 0.25;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${accent.r},${accent.g},${accent.b},${isDark ? 0.55 : 0.4})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    };

    if (reduce) {
      drawStatic();
    } else {
      raf = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, [theme, active]);

  return (
    <canvas
      ref={canvasRef}
      data-testid="falcon-field"
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden
    />
  );
};
