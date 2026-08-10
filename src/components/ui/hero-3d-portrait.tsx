"use client";

import { useRef } from "react";
import { motion, useMotionTemplate, useTransform } from "framer-motion";
import { siteConfig } from "@/data/site";
import { PortraitImage } from "@/components/ui/portrait-image";
import { useParallaxLayer, useTilt3D } from "@/components/motion/use-tilt-3d";

interface Hero3DPortraitProps {
  portraitAlt: string;
  hint: string;
  ariaSuffix: string;
  patentStamp: string;
}

export function Hero3DPortrait({
  portraitAlt,
  hint,
  ariaSuffix,
  patentStamp,
}: Hero3DPortraitProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { rotateX, rotateY, pointerX, pointerY, glareX, glareY, reduceMotion } = useTilt3D(ref, {
    intensity: 16,
  });

  const shadowShift = useParallaxLayer(pointerX, pointerY, 22);
  const ringShift = useParallaxLayer(pointerX, pointerY, 14);
  const badgeShift = useParallaxLayer(pointerX, pointerY, 32);
  const portraitZ = useTransform(pointerY, [-0.5, 0.5], [12, -12]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.42) 0%, transparent 52%)`;

  return (
    <div ref={ref} className="hero-perspective mx-auto w-full max-w-sm py-4">
      <motion.div
        className="preserve-3d relative aspect-[4/5] w-full"
        style={
          reduceMotion
            ? undefined
            : {
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
      >
        {/* Depth ring */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-[-8%] rounded-[2rem] border-2 border-[#669bbc]/30 bg-[#669bbc]/5"
          style={
            reduceMotion
              ? undefined
              : {
                  z: -50,
                  x: ringShift.x,
                  y: ringShift.y,
                  transformStyle: "preserve-3d",
                }
          }
        />

        {/* Red shadow plate */}
        <motion.div
          aria-hidden="true"
          className="absolute inset-0 rounded-2xl bg-[#c1121f]"
          style={
            reduceMotion
              ? undefined
              : {
                  z: -36,
                  x: shadowShift.x,
                  y: shadowShift.y,
                  transformStyle: "preserve-3d",
                }
          }
        />

        {/* Portrait frame */}
        <motion.div
          className="absolute inset-0 overflow-hidden rounded-2xl border-2 border-[#003049] bg-white shadow-2xl"
          style={
            reduceMotion
              ? undefined
              : {
                  z: portraitZ,
                  transformStyle: "preserve-3d",
                }
          }
        >
          <PortraitImage
            src="/images/portrait.png"
            alt={`${siteConfig.name} - ${portraitAlt}`}
            hint={hint}
            ariaSuffix={ariaSuffix}
            priority
          />

          {/* Glare sweep */}
          {!reduceMotion && (
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 mix-blend-overlay"
              style={{ background: glare }}
            />
          )}
        </motion.div>

        {/* Floating orbit dots */}
        {!reduceMotion && (
          <>
            <motion.span
              aria-hidden="true"
              className="absolute -right-3 top-[18%] h-4 w-4 rounded-full bg-[#669bbc] shadow-lg"
              style={{ z: 48, transformStyle: "preserve-3d" }}
              animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.span
              aria-hidden="true"
              className="absolute -left-2 top-[55%] h-3 w-3 rounded-full bg-[#c1121f]"
              style={{ z: 36, transformStyle: "preserve-3d" }}
              animate={{ y: [0, 8, 0], x: [0, 4, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            />
          </>
        )}

        {/* Patent stamp badge */}
        <motion.div
          className="absolute -bottom-4 -left-3 border border-[#003049]/15 bg-white px-4 py-3 shadow-lift sm:-left-5"
          style={
            reduceMotion
              ? undefined
              : {
                  z: 56,
                  x: badgeShift.x,
                  y: badgeShift.y,
                  transformStyle: "preserve-3d",
                }
          }
          whileHover={{ scale: 1.04, z: 64 }}
        >
          <p className="font-display text-xl font-bold text-[#003049]">{patentStamp}</p>
          <p className="text-xs text-muted-foreground">Sacha Inchi Natto</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
