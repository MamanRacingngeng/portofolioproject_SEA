"use client";

import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";
import { FoodTechBg } from "@/components/decorations/food-tech-bg";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

export function PageShell({ children, className }: PageShellProps) {
  return (
    <div className={cn("min-h-screen bg-background pt-[calc(var(--header-height)+1rem)]", className)}>
      {children}
    </div>
  );
}

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}

const maxWidth = {
  default: "max-w-7xl",
  narrow: "max-w-4xl",
  wide: "max-w-6xl",
};

export function PageContainer({
  children,
  className,
  size = "default",
}: PageContainerProps) {
  return (
    <div className={cn("container-app mx-auto w-full", maxWidth[size], className)}>
      {children}
    </div>
  );
}

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
}

export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="mesh-section relative overflow-hidden border-b border-fresh-100 py-12 sm:py-16">
      <FoodTechBg variant="section" />
      <PageContainer className="relative z-10">
        <SectionHeader index="—" label={label} title={title} description={description} />
      </PageContainer>
    </section>
  );
}

export function StickyBar({ children }: { children: React.ReactNode }) {
  return (
    <section className="sticky-bar sticky z-40 border-b border-fresh-100/80 bg-white/80 py-3 backdrop-blur-xl">
      <PageContainer>{children}</PageContainer>
    </section>
  );
}
