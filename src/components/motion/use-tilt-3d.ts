"use client";

import { RefObject, useEffect, useRef } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

interface UseTilt3DOptions {
  intensity?: number;
  spring?: { stiffness?: number; damping?: number };
}

export function useTilt3D(
  ref: RefObject<HTMLElement | null>,
  { intensity = 14, spring = { stiffness: 180, damping: 22 } }: UseTilt3DOptions = {}
) {
  const reduceMotion = useReducedMotion();
  const isHovering = useRef(false);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(
    useTransform(pointerY, [-0.5, 0.5], [intensity, -intensity]),
    spring
  );
  const rotateY = useSpring(
    useTransform(pointerX, [-0.5, 0.5], [-intensity, intensity]),
    spring
  );

  const glareX = useSpring(useTransform(pointerX, [-0.5, 0.5], [20, 80]), spring);
  const glareY = useSpring(useTransform(pointerY, [-0.5, 0.5], [20, 80]), spring);

  useEffect(() => {
    if (reduceMotion) return;

    const el = ref.current;
    if (!el) return;

    const setFromEvent = (clientX: number, clientY: number) => {
      const rect = el.getBoundingClientRect();
      pointerX.set((clientX - rect.left) / rect.width - 0.5);
      pointerY.set((clientY - rect.top) / rect.height - 0.5);
    };

    const onMouseMove = (e: MouseEvent) => {
      isHovering.current = true;
      setFromEvent(e.clientX, e.clientY);
    };

    const onMouseLeave = () => {
      isHovering.current = false;
      pointerX.set(0);
      pointerY.set(0);
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      isHovering.current = true;
      setFromEvent(e.touches[0].clientX, e.touches[0].clientY);
    };

    const onTouchEnd = () => {
      isHovering.current = false;
      pointerX.set(0);
      pointerY.set(0);
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("touchmove", onTouchMove, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [ref, reduceMotion, pointerX, pointerY]);

  useEffect(() => {
    if (reduceMotion) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      if (!isHovering.current) {
        const t = (now - start) / 1000;
        pointerX.set(Math.sin(t * 0.55) * 0.1);
        pointerY.set(Math.cos(t * 0.45) * 0.08);
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [reduceMotion, pointerX, pointerY]);

  return { rotateX, rotateY, pointerX, pointerY, glareX, glareY, reduceMotion };
}

export function useParallaxLayer(
  pointerX: MotionValue<number>,
  pointerY: MotionValue<number>,
  depth: number
) {
  const x = useTransform(pointerX, [-0.5, 0.5], [-depth, depth]);
  const y = useTransform(pointerY, [-0.5, 0.5], [-depth * 0.6, depth * 0.6]);
  return { x, y };
}
