"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ActivityCardProps {
  image: string;
  title: string;
  caption: string;
  category: string;
  layout?: "poster" | "photo";
  span?: "large" | "medium" | "small";
  badgeVariant: "mint" | "honey" | "coral" | "violet";
}

export function ActivityCard({
  image,
  title,
  caption,
  category,
  layout = "photo",
  span = "medium",
  badgeVariant,
}: ActivityCardProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.figure
      className="group relative h-full"
      whileHover={reduceMotion ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 380, damping: 26 }}
    >
      <div
        className="absolute inset-0 translate-x-1.5 translate-y-1.5 rounded-xl bg-[#003049]/10 transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
        aria-hidden="true"
      />
      <div className="relative flex h-full flex-col overflow-hidden rounded-xl border border-[#003049]/12 bg-white shadow-sm transition-shadow duration-300 group-hover:shadow-lift">
        <div
          className={cn(
            "relative overflow-hidden bg-[#fdf0d5]",
            layout === "poster"
              ? "aspect-[3/4]"
              : span === "large"
                ? "aspect-[16/10]"
                : "aspect-[4/3]"
          )}
        >
          <motion.div
            className="absolute inset-0"
            whileHover={reduceMotion ? undefined : { scale: 1.06 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className={cn(
                layout === "poster" ? "object-contain p-2" : "object-cover"
              )}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#003049]/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
            <p className="line-clamp-2 text-xs font-medium text-white/95">{caption}</p>
          </div>
        </div>
        <figcaption className="relative p-4 sm:p-5">
          <Badge variant={badgeVariant} className="mb-2">
            {category}
          </Badge>
          <h3 className="font-display font-bold text-[#003049]">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground group-hover:opacity-70">
            {caption}
          </p>
        </figcaption>
      </div>
    </motion.figure>
  );
}
