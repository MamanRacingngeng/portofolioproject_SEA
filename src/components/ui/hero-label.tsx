import { cn } from "@/lib/utils";

interface HeroLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroLabel({ children, className }: HeroLabelProps) {
  return (
    <span
      className={cn(
        "relative z-10 mb-4 inline-flex w-fit max-w-full items-center rounded-lg",
        "border border-white/30 bg-white/15 px-4 py-2 backdrop-blur-md",
        "text-[11px] font-bold uppercase leading-tight tracking-[0.18em] text-white sm:text-xs",
        className
      )}
    >
      {children}
    </span>
  );
}
