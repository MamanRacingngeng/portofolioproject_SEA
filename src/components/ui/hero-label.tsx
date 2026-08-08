import { cn } from "@/lib/utils";

interface HeroLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroLabel({ children, className }: HeroLabelProps) {
  return (
    <span
      className={cn(
        "mb-4 inline-block border border-[#669bbc]/60 bg-[#003049]/40 px-3 py-1.5",
        "text-[10px] font-bold uppercase tracking-[0.2em] text-[#fdf0d5] sm:text-[11px]",
        className
      )}
    >
      {children}
    </span>
  );
}
