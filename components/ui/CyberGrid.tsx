import React, { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../lib/ThemeContext';

/**
 * ✨ STELLAR CONSTELLATION ✨
 * 
 * A mesmerizing cosmic background with LIGHT and DARK mode support.
 * 
 * DARK MODE: Deep space with glowing stars, shooting stars, constellation lines
 * LIGHT MODE: Soft floating particles with subtle connections, like sunlit dust
 * 
 * Only active in Hero section, completely unmounts when scrolled away.
 */
export const CyberGrid: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isInHero, setIsInHero] = useState(true);
  const animationRef = useRef<number>(0);
  const { theme } = useTheme();

  // Check if we're in Hero section
  useEffect(() => {
    const checkHeroVisibility = () => {
      const heroThreshold = window.innerHeight * 0.85;
      setIsInHero(window.scrollY < heroThreshold && !document.hidden);
    };

    window.addEventListener('scroll', checkHeroVisibility, { passive: true });
    document.addEventListener('visibilitychange', checkHeroVisibility);
    checkHeroVisibility();

    return () => {
      window.removeEventListener('scroll', checkHeroVisibility);
      document.removeEventListener('visibilitychange', checkHeroVisibility);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    if (!isInHero) {
      cancelAnimationFrame(animationRef.current);
      return;
    }

    const isDark = theme === 'dark';
    let lastFrameTime = 0;
    const FRAME_INTERVAL = 1000 / 30;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const pointer = { x: width / 2, y: height / 2, radius: 180 };
    
    interface Particle {
      x: number;
      y: number;
      originX: number;
      originY: number;
      vx: number;
      vy: number;
      size: number;
      brightness: number;
      pulseSpeed: number;
      pulsePhase: number;
      color: { r: number; g: number; b: number };
      orbit: number;
      orbitSpeed: number;
    }

    interface ShootingStar {
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
      maxLife: number;
      size: number;
    }

    const particles: Particle[] = [];
    const shootingStars: ShootingStar[] = [];
    let nextShootingStarTime = 0;

    // Color palettes
    const darkColors = [
      { r: 255, g: 255, b: 255 },
      { r: 200, g: 220, b: 255 },
      { r: 180, g: 200, b: 255 },
      { r: 255, g: 220, b: 180 },
      { r: 220, g: 180, b: 255 },
      { r: 150, g: 200, b: 255 },
    ];

    const lightColors = [
      { r: 59, g: 130, b: 246 },   // Blue
      { r: 99, g: 102, b: 241 },   // Indigo
      { r: 139, g: 92, b: 246 },   // Purple
      { r: 14, g: 165, b: 233 },   // Sky
      { r: 79, g: 70, b: 229 },    // Violet
      { r: 168, g: 85, b: 247 },   // Fuchsia-ish
    ];

    const colors = isDark ? darkColors : lightColors;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      particles.length = 0;

      const starCount = Math.floor((width * height) / 10000); // Same density for both modes
      
      for (let i = 0; i < starCount; i++) {
        const isBright = Math.random() < 0.15;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          originX: Math.random() * width,
          originY: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          size: isBright ? 2 + Math.random() * 2 : 0.5 + Math.random() * 1.5,
          brightness: isBright ? 0.8 + Math.random() * 0.2 : 0.3 + Math.random() * 0.4,
          pulseSpeed: 0.5 + Math.random() * 2,
          pulsePhase: Math.random() * Math.PI * 2,
          color,
          orbit: Math.random() * Math.PI * 2,
          orbitSpeed: (Math.random() - 0.5) * 0.02,
        });
      }
    };

    const spawnShootingStar = () => {
      if (!isDark) return; // No shooting stars in light mode
      const startX = Math.random() * width;
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.5;
      const speed = 15 + Math.random() * 10;
      
      shootingStars.push({
        x: startX,
        y: -20,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 1,
        maxLife: 1,
        size: 2 + Math.random() * 2,
      });
    };

    const animate = (currentTime: number) => {
      if (currentTime - lastFrameTime < FRAME_INTERVAL) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
      lastFrameTime = currentTime;

      const time = currentTime * 0.001;

      // Background
      if (isDark) {
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#0a0a1a');
        gradient.addColorStop(0.5, '#0d1025');
        gradient.addColorStop(1, '#080812');
        ctx.fillStyle = gradient;
      } else {
        // Light mode: Soft warm gradient
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#f8fafc');
        gradient.addColorStop(0.5, '#f1f5f9');
        gradient.addColorStop(1, '#e2e8f0');
        ctx.fillStyle = gradient;
      }
      ctx.fillRect(0, 0, width, height);

      // Shooting stars (dark mode only)
      if (isDark) {
        if (currentTime > nextShootingStarTime) {
          spawnShootingStar();
          nextShootingStarTime = currentTime + 3000 + Math.random() * 5000;
        }

        for (let i = shootingStars.length - 1; i >= 0; i--) {
          const ss = shootingStars[i];
          ss.x += ss.vx;
          ss.y += ss.vy;
          ss.life -= 0.015;

          if (ss.life <= 0 || ss.x > width + 50 || ss.y > height + 50) {
            shootingStars.splice(i, 1);
            continue;
          }

          const trailGradient = ctx.createLinearGradient(
            ss.x, ss.y, ss.x - ss.vx * 3, ss.y - ss.vy * 3
          );
          trailGradient.addColorStop(0, `rgba(255, 255, 255, ${ss.life * 0.9})`);
          trailGradient.addColorStop(0.3, `rgba(200, 220, 255, ${ss.life * 0.5})`);
          trailGradient.addColorStop(1, 'rgba(100, 150, 255, 0)');

          ctx.beginPath();
          ctx.strokeStyle = trailGradient;
          ctx.lineWidth = ss.size * ss.life;
          ctx.lineCap = 'round';
          ctx.moveTo(ss.x, ss.y);
          ctx.lineTo(ss.x - ss.vx * 3, ss.y - ss.vy * 3);
          ctx.stroke();

          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${ss.life})`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#fff';
          ctx.arc(ss.x, ss.y, ss.size * ss.life * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      // Update particles
      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;

        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < pointer.radius) {
          const force = (pointer.radius - dist) / pointer.radius;
          particle.orbit += particle.orbitSpeed * (1 + force * 2);
          
          const orbitRadius = 30 + dist * 0.3;
          const targetX = pointer.x + Math.cos(particle.orbit) * orbitRadius;
          const targetY = pointer.y + Math.sin(particle.orbit) * orbitRadius;
          
          particle.x += (targetX - particle.x) * 0.03;
          particle.y += (targetY - particle.y) * 0.03;
        }
      });

      // Draw constellation lines
      ctx.lineWidth = 0.5;
      for (let i = 0; i < particles.length; i++) {
        const s1 = particles[i];
        
        for (let j = i + 1; j < Math.min(i + 30, particles.length); j++) {
          const s2 = particles[j];
          const dx = s1.x - s2.x;
          const dy = s1.y - s2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 120;
          if (dist < maxDist) {
            const midX = (s1.x + s2.x) / 2;
            const midY = (s1.y + s2.y) / 2;
            const mouseDistToLine = Math.sqrt((pointer.x - midX) ** 2 + (pointer.y - midY) ** 2);
            
            let opacity = (isDark ? 0.15 : 0.1) * (1 - dist / maxDist);
            let lineColor: string;
            
            if (mouseDistToLine < pointer.radius) {
              const glow = 1 - mouseDistToLine / pointer.radius;
              opacity = ((isDark ? 0.2 : 0.15) + glow * 0.4) * (1 - dist / maxDist);
              
              if (isDark) {
                const r = Math.round(100 + glow * 100);
                const g = Math.round(150 + glow * 80);
                lineColor = `rgba(${r}, ${g}, 255, ${opacity})`;
              } else {
                lineColor = `rgba(99, 102, 241, ${opacity * 1.5})`;
              }
              ctx.lineWidth = 0.5 + glow;
            } else {
              lineColor = isDark 
                ? `rgba(100, 120, 180, ${opacity})`
                : `rgba(99, 102, 241, ${opacity})`;
              ctx.lineWidth = 0.5;
            }

            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.moveTo(s1.x, s1.y);
            ctx.lineTo(s2.x, s2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(particle => {
        const pulse = Math.sin(time * particle.pulseSpeed + particle.pulsePhase) * 0.3 + 0.7;
        const currentBrightness = particle.brightness * pulse;
        
        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const isNearMouse = dist < pointer.radius;
        const mouseInfluence = isNearMouse ? (1 - dist / pointer.radius) : 0;

        const { r, g, b } = particle.color;

        // Outer glow
        if (particle.size > 2 || isNearMouse) {
          ctx.beginPath();
          const glowSize = particle.size * (2 + mouseInfluence * 2);
          const glowOpacity = isDark 
            ? (currentBrightness * 0.3 + mouseInfluence * 0.4)
            : (currentBrightness * 0.2 + mouseInfluence * 0.3);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${glowOpacity})`;
          ctx.arc(particle.x, particle.y, glowSize, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core particle
        ctx.beginPath();
        const finalSize = particle.size * (1 + mouseInfluence * 0.5);
        const coreOpacity = isDark 
          ? (currentBrightness + mouseInfluence * 0.3)
          : (currentBrightness * 0.8 + mouseInfluence * 0.3);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${coreOpacity})`;
        ctx.arc(particle.x, particle.y, finalSize, 0, Math.PI * 2);
        ctx.fill();

        // Bright center for large particles
        if (particle.size > 2 && isDark) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${currentBrightness * 0.8})`;
          ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    let resizeTimeout: number;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = window.setTimeout(init, 200);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        pointer.x = e.touches[0].clientX;
        pointer.y = e.touches[0].clientY;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchstart', handleTouchMove, { passive: true });

    init();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchMove);
    };
  }, [isInHero, theme]);

  if (!isInHero) return null;

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ willChange: 'transform' }}
    />
  );
};