import { useRef, useEffect, useState, useCallback } from 'react';

interface UseMarqueeOptions {
  /** Speed in pixels per second */
  speed?: number;
  /** Direction: -1 for left, 1 for right */
  direction?: -1 | 1;
  /** Enable drag interaction */
  draggable?: boolean;
  /** Pause on hover */
  pauseOnHover?: boolean;
}

interface UseMarqueeReturn {
  containerRef: React.RefObject<HTMLDivElement>;
  trackRef: React.RefObject<HTMLDivElement>;
  offset: number;
  isDragging: boolean;
}

/**
 * Lightweight marquee hook using CSS transforms + vanilla JS
 * No heavy libraries - just requestAnimationFrame and touch/mouse events
 */
export function useLightMarquee({
  speed = 50,
  direction = -1,
  draggable = false,
  pauseOnHover = true
}: UseMarqueeOptions = {}): UseMarqueeReturn {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  
  const [offset, setOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  
  // Animation state refs (to avoid re-renders)
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const offsetRef = useRef(0);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const momentumRef = useRef(0);
  const isVisibleRef = useRef(true);
  
  // Drag state
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);

  // Get track width for wrap calculation
  const getTrackWidth = useCallback(() => {
    if (!trackRef.current) return 1000;
    // Each child is duplicated 4x, so real content is 1/4 of track
    return trackRef.current.scrollWidth / 4;
  }, []);

  // Main animation loop
  useEffect(() => {
    const animate = (currentTime: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = currentTime;
      const delta = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      // Skip if not visible
      if (!isVisibleRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      // Apply momentum (with decay)
      if (Math.abs(momentumRef.current) > 0.5) {
        offsetRef.current += momentumRef.current;
        momentumRef.current *= 0.92; // Friction
      } else if (!isDraggingRef.current && !isPausedRef.current) {
        // Normal auto-scroll
        const moveAmount = (speed * delta) / 1000 * direction;
        offsetRef.current += moveAmount;
      }

      // Wrap offset to prevent infinite growth
      const trackWidth = getTrackWidth();
      if (Math.abs(offsetRef.current) > trackWidth) {
        offsetRef.current = offsetRef.current % trackWidth;
      }

      // Apply transform directly (no React state for performance)
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, [speed, direction, getTrackWidth]);

  // Intersection Observer for visibility
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { rootMargin: '50px', threshold: 0 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Hover handlers
  useEffect(() => {
    if (!pauseOnHover) return;
    const container = containerRef.current;
    if (!container) return;

    const handleMouseEnter = () => { isPausedRef.current = true; };
    const handleMouseLeave = () => { isPausedRef.current = false; };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pauseOnHover]);

  // Drag handlers
  useEffect(() => {
    if (!draggable) return;
    const container = containerRef.current;
    if (!container) return;

    const handleStart = (clientX: number) => {
      isDraggingRef.current = true;
      setIsDragging(true);
      dragStartXRef.current = clientX;
      dragStartOffsetRef.current = offsetRef.current;
      momentumRef.current = 0;
    };

    const handleMove = (clientX: number) => {
      if (!isDraggingRef.current) return;
      const delta = clientX - dragStartXRef.current;
      offsetRef.current = dragStartOffsetRef.current + delta;
    };

    const handleEnd = (velocityX: number) => {
      if (!isDraggingRef.current) return;
      isDraggingRef.current = false;
      setIsDragging(false);
      // Apply momentum based on drag velocity
      momentumRef.current = velocityX * 0.1;
    };

    // Mouse events
    let lastMouseX = 0;
    let lastMouseTime = 0;
    
    const onMouseDown = (e: MouseEvent) => {
      handleStart(e.clientX);
      lastMouseX = e.clientX;
      lastMouseTime = Date.now();
    };
    
    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      handleMove(e.clientX);
      lastMouseX = e.clientX;
    };
    
    const onMouseUp = (e: MouseEvent) => {
      const timeDelta = Date.now() - lastMouseTime;
      const velocity = (e.clientX - lastMouseX) / Math.max(timeDelta, 1) * 16;
      handleEnd(velocity);
    };

    // Touch events
    let lastTouchX = 0;
    let lastTouchTime = 0;
    
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return;
      handleStart(e.touches[0].clientX);
      lastTouchX = e.touches[0].clientX;
      lastTouchTime = Date.now();
    };
    
    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      handleMove(e.touches[0].clientX);
      lastTouchX = e.touches[0].clientX;
      e.preventDefault(); // Prevent scroll while dragging
    };
    
    const onTouchEnd = (e: TouchEvent) => {
      const touch = e.changedTouches[0];
      const timeDelta = Date.now() - lastTouchTime;
      const velocity = (touch.clientX - lastTouchX) / Math.max(timeDelta, 1) * 16;
      handleEnd(velocity);
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    container.addEventListener('touchstart', onTouchStart, { passive: false });
    container.addEventListener('touchmove', onTouchMove, { passive: false });
    container.addEventListener('touchend', onTouchEnd);

    return () => {
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);
    };
  }, [draggable]);

  return {
    containerRef,
    trackRef,
    offset,
    isDragging
  };
}
