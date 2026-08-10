"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FloatingShape } from "@/components/motion/floating";

interface Hero3DBackgroundProps {
  variant: "navy" | "sand";
}

export function Hero3DBackground({ variant }: Hero3DBackgroundProps) {
  const reduceMotion = useReducedMotion();
  const isNavy = variant === "navy";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {isNavy ? (
        <>
          <div className="hero-3d-grid absolute bottom-0 left-[-10%] right-[-10%] h-[55%] opacity-[0.22]" />
          <div className="hero-3d-glow absolute left-[20%] top-[15%] h-64 w-64 rounded-full bg-[#669bbc]/20 blur-3xl" />
          <div className="hero-3d-glow absolute bottom-[20%] right-[10%] h-48 w-48 rounded-full bg-[#c1121f]/15 blur-3xl" />
          {!reduceMotion && (
            <>
              <FloatingShape
                className="left-[8%] top-[22%] h-20 w-20 rounded-2xl border border-[#669bbc]/30 bg-[#669bbc]/10"
                duration={8}
                y={16}
                rotate={8}
              />
              <FloatingShape
                className="right-[12%] top-[35%] h-14 w-14 rounded-full border border-[#fdf0d5]/20 bg-[#fdf0d5]/5"
                delay={0.6}
                duration={6}
                y={12}
              />
              <motion.div
                className="absolute left-[15%] top-[60%] h-px w-32 bg-gradient-to-r from-transparent via-[#669bbc] to-transparent"
                animate={{ opacity: [0.2, 0.7, 0.2], scaleX: [0.8, 1.1, 0.8] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              />
            </>
          )}
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(102,155,188,0.15),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(193,18,31,0.08),transparent_45%)]" />
          {!reduceMotion && (
            <>
              <FloatingShape
                className="right-[8%] top-[12%] h-24 w-24 rounded-full bg-[#669bbc]/12 blur-[1px]"
                duration={7}
                y={18}
              />
              <FloatingShape
                className="left-[10%] bottom-[18%] h-16 w-16 rounded-3xl bg-[#780000]/10"
                delay={1}
                duration={5.5}
                y={10}
                rotate={10}
              />
            </>
          )}
        </>
      )}
    </div>
  );
}
