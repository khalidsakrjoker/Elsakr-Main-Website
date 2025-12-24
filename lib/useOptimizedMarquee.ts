import { useRef, useEffect, useState, useCallback } from 'react';
import {
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  MotionValue,
  PanInfo
} from 'framer-motion';
import { wrap } from '@motionone/utils';

interface UseOptimizedMarqueeOptions {
  baseVelocity?: number;
  wrapRange?: [number, number];
  draggable?: boolean;
}

interface UseOptimizedMarqueeReturn {
  x: MotionValue<string>;
  containerRef: React.RefObject<HTMLDivElement>;
  isHovered: React.MutableRefObject<boolean>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  // Drag handlers
  isDraggable: boolean;
  onDragStart: () => void;
  onDrag: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
  onDragEnd: (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => void;
}

/**
 * Optimized marquee hook with:
 * - IntersectionObserver to pause when out of viewport
 * - Hover pause support
 * - Reduced CPU usage when not visible
 * - Optional drag support with momentum
 */
export function useOptimizedMarquee({
  baseVelocity = 50,
  wrapRange = [-25, -50],
  draggable = false
}: UseOptimizedMarqueeOptions = {}): UseOptimizedMarqueeReturn {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseX = useMotionValue(0);
  const [isVisible, setIsVisible] = useState(true);
  const isHovered = useRef(false);
  const isDragging = useRef(false);
  const directionFactor = useRef<number>(1);
  const dragMomentum = useRef(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(wrapRange[0], wrapRange[1], v)}%`);

  // IntersectionObserver to detect visibility
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '50px',
        threshold: 0
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  // Animation frame - handles auto-scroll and drag momentum
  useAnimationFrame((t, delta) => {
    if (!isVisible) return;
    
    // If dragging, skip auto-animation
    if (isDragging.current) return;

    // Apply drag momentum (decays over time)
    if (Math.abs(dragMomentum.current) > 0.01) {
      baseX.set(baseX.get() + dragMomentum.current);
      dragMomentum.current *= 0.95; // Friction decay
      return;
    }

    // Skip auto-scroll if hovered
    if (isHovered.current) return;

    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    const velocity = velocityFactor.get();
    if (velocity < 0) {
      directionFactor.current = -1;
    } else if (velocity > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocity;
    baseX.set(baseX.get() + moveBy);
  });

  const onMouseEnter = useCallback(() => {
    isHovered.current = true;
  }, []);

  const onMouseLeave = useCallback(() => {
    isHovered.current = false;
  }, []);

  // Drag handlers
  const onDragStart = useCallback(() => {
    isDragging.current = true;
    dragMomentum.current = 0;
  }, []);

  const onDrag = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // Convert pixel drag to percentage (approximate)
    const containerWidth = containerRef.current?.scrollWidth || 1000;
    const dragPercent = (info.delta.x / containerWidth) * 100;
    baseX.set(baseX.get() + dragPercent);
  }, [baseX]);

  const onDragEnd = useCallback((event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    isDragging.current = false;
    // Apply momentum based on velocity
    const containerWidth = containerRef.current?.scrollWidth || 1000;
    dragMomentum.current = (info.velocity.x / containerWidth) * 5;
  }, []);

  return {
    x,
    containerRef,
    isHovered,
    onMouseEnter,
    onMouseLeave,
    isDraggable: draggable,
    onDragStart,
    onDrag,
    onDragEnd
  };
}
