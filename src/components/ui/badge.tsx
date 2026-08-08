import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "mint" | "honey" | "coral" | "violet" | "muted" | "outline" | "published" | "submitted" | "in-progress";
  className?: string;
}

export function Badge({ children, variant = "mint", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide",
        variant === "mint" && "bg-[#003049]/10 text-[#003049]",
        variant === "honey" && "bg-[#669bbc]/20 text-[#003049]",
        variant === "coral" && "bg-[#c1121f]/10 text-[#780000]",
        variant === "violet" && "bg-[#669bbc]/15 text-[#003049]",
        variant === "muted" && "bg-muted text-muted-foreground",
        variant === "outline" && "border border-[#003049]/20 bg-white text-[#003049]",
        variant === "published" && "bg-[#669bbc]/20 text-[#003049]",
        variant === "submitted" && "bg-[#fdf0d5] text-[#003049] border border-[#003049]/15",
        variant === "in-progress" && "bg-[#c1121f]/10 text-[#780000]",
        className
      )}
    >
      {children}
    </span>
  );
}
