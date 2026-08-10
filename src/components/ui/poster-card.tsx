"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { FloatingElement } from "@/components/motion/floating";

interface PosterCardProps {
  image: string;
  title: string;
  caption: string;
  index: number;
  priority?: boolean;
  className?: string;
}

const rotations = [-5, 0, 5] as const;
const lifts = [0, -16, 0] as const;

export function PosterCard({
  image,
  title,
  caption,
  index,
  priority,
  className,
}: PosterCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <FloatingElement
      delay={index * 0.55}
      duration={5.5 + index * 0.9}
      y={12 + index * 3}
      x={index === 0 ? 4 : index === 2 ? -4 : 0}
      className={cn("relative", index === 1 && "sm:-mt-8", className)}
    >
      <motion.figure
        initial={{ opacity: 0, y: 48, rotate: rotations[index] }}
        whileInView={{
          opacity: 1,
          y: lifts[index],
          rotate: rotations[index],
        }}
        viewport={{ once: true, margin: "-40px" }}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: lifts[index] - 10,
                rotate: 0,
                scale: 1.04,
              }
        }
        transition={{ type: "spring", stiffness: 260, damping: 22 }}
        className="group relative z-[1] hover:z-10"
      >
        <div
          className={cn(
            "absolute inset-0 rounded-2xl transition-transform duration-300",
            index === 1 ? "bg-[#c1121f]" : "bg-[#780000]",
            "translate-x-2 translate-y-2 group-hover:translate-x-2.5 group-hover:translate-y-2.5"
          )}
          aria-hidden="true"
        />
        <div className="relative overflow-hidden rounded-2xl border-2 border-[#003049]/20 bg-white shadow-lg">
          <div className="relative aspect-[3/4] overflow-hidden bg-[#fdf0d5]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#003049]/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-105"
              priority={priority}
            />
            <span className="absolute left-3 top-3 rounded-md bg-[#003049]/90 px-2 py-1 font-display text-[10px] font-bold uppercase tracking-wider text-[#fdf0d5] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              PKM-RE
            </span>
          </div>
          <figcaption className="border-t border-[#003049]/10 bg-white p-4">
            <h4 className="font-display text-sm font-bold text-[#003049]">{title}</h4>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{caption}</p>
          </figcaption>
        </div>
      </motion.figure>
    </FloatingElement>
  );
}
