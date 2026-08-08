"use client";

import { useCallback, useEffect, useState } from "react";

interface ParallaxPoint {
  x: number;
  y: number;
}

export function useParallax() {
  const [mouse, setMouse] = useState<ParallaxPoint>({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      setMouse({
        x: (event.clientX - centerX) / centerX,
        y: (event.clientY - centerY) / centerY,
      });
    };

    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("mousemove", handleMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTransform = useCallback(
    (depth: number, options?: { scrollFactor?: number; mouseX?: number; mouseY?: number }) => {
      const scrollFactor = options?.scrollFactor ?? 0.12;
      const mouseX = options?.mouseX ?? 1;
      const mouseY = options?.mouseY ?? 1;

      return {
        transform: `translate3d(${mouse.x * depth * 42 * mouseX}px, ${
          mouse.y * depth * 28 * mouseY + scrollY * depth * scrollFactor
        }px, 0)`,
      };
    },
    [mouse.x, mouse.y, scrollY]
  );

  const heroOpacity = Math.max(0, 1 - scrollY / 520);

  return { mouse, scrollY, getTransform, heroOpacity };
}
