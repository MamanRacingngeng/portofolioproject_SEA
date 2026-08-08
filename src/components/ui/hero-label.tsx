import { cn } from "@/lib/utils";

interface HeroLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function HeroLabel({ children, className }: HeroLabelProps) {
  return (
    <span
      className={cn(
        "mb-4 inline-flex w-fit items-center rounded-full border border-white/25 bg-black/10 px-4 py-1.5",
        "text-[10px] font-bold uppercase tracking-[0.22em] text-white/95 backdrop-blur-sm sm:text-[11px]",
        className
      )}
    >
      {children}
    </span>
  );
}
