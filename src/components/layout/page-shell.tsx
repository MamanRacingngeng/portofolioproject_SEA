"use client";

import { cn } from "@/lib/utils";
import { SectionHeader } from "@/components/ui/section-header";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

/** Wrapper with correct top offset for fixed navigation on all devices */
export function PageShell({ children, className }: PageShellProps) {
  return (
    <div className={cn("min-h-screen pt-[var(--header-height)]", className)}>
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

/** Consistent horizontal padding & max-width across all pages */
export function PageContainer({
  children,
  className,
  size = "default",
}: PageContainerProps) {
  return (
    <div
      className={cn(
        "container-app mx-auto w-full",
        maxWidth[size],
        className
      )}
    >
      {children}
    </div>
  );
}

interface PageHeroProps {
  label: string;
  title: string;
  description: string;
}

/** Responsive page header used on inner pages */
export function PageHero({ label, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-earth-200/60 bg-cream-50 py-12 sm:py-16">
      <PageContainer>
        <SectionHeader
          index="—"
          label={label}
          title={title}
          description={description}
        />
      </PageContainer>
    </section>
  );
}

/** Sticky filter/tab bar below navigation */
export function StickyBar({ children }: { children: React.ReactNode }) {
  return (
    <section className="sticky-bar sticky z-40 border-b border-cream-200 bg-white/95 py-3 backdrop-blur-md sm:py-4">
      <PageContainer>{children}</PageContainer>
    </section>
  );
}
