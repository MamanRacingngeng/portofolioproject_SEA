"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";
import { getPkmReActivities } from "@/data/activities";
import { useLanguage } from "@/components/providers/language-provider";
import { Badge } from "@/components/ui/badge";
import { RevealOnScroll } from "@/components/motion/animations";

export function PkmReSpotlight() {
  const { t } = useLanguage();
  const pkm = t.home.activities.pkmRe;
  const posters = getPkmReActivities(t);

  return (
    <RevealOnScroll className="mb-10">
      <div className="overflow-hidden rounded-lg border border-[#003049]/15 bg-white">
        <div className="band-mint px-5 py-6 sm:px-8 sm:py-8">
          <Badge variant="honey" className="mb-3 border-[#fdf0d5]/30 bg-[#669bbc]/30 text-[#fdf0d5]">
            {pkm.badge}
          </Badge>
          <h3 className="font-display text-2xl font-extrabold text-[#fdf0d5] sm:text-3xl">{pkm.title}</h3>
          <p className="mt-1 text-sm font-semibold text-[#669bbc] sm:text-base">{pkm.subtitle}</p>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#fdf0d5]/85">{pkm.description}</p>
          <a
            href="https://instagram.com/pkmre_atensi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#fdf0d5] hover:underline"
          >
            <Instagram className="h-4 w-4" />
            {pkm.socialLabel}: {pkm.socialHandle}
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 bg-[#fdf0d5] p-4 sm:grid-cols-3 sm:p-6">
          {posters.map((item, i) => (
            <figure
              key={item.id}
              className="overflow-hidden rounded-lg border border-[#003049]/10 bg-white"
            >
              <div className="relative aspect-[3/4] bg-[#fdf0d5]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-contain p-2"
                  priority={i === 0}
                />
              </div>
              <figcaption className="border-t border-[#003049]/10 p-4">
                <h4 className="font-display text-sm font-bold text-[#003049]">{item.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </RevealOnScroll>
  );
}
