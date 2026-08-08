"use client";

import { useLanguage } from "@/components/providers/language-provider";
import { Marquee } from "@/components/ui/marquee";

export function HomeMarquee() {
  const { t } = useLanguage();
  return (
    <div className="relative z-10 bg-[#061428]">
      <Marquee items={t.site.roles} className="border-y border-white/10 bg-[#081a38]" />
    </div>
  );
}
