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
        "inline-flex items-center rounded-lg px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide",
        variant === "mint" && "bg-mint-light text-mint-dark",
        variant === "honey" && "bg-honey-light text-amber-900",
        variant === "coral" && "bg-coral-light text-orange-900",
        variant === "violet" && "bg-violet-100 text-violet-800",
        variant === "muted" && "bg-muted text-muted-foreground",
        variant === "outline" && "border-2 border-border bg-white text-foreground",
        variant === "published" && "bg-emerald-100 text-emerald-800",
        variant === "submitted" && "bg-amber-100 text-amber-800",
        variant === "in-progress" && "bg-sky-100 text-sky-800",
        className
      )}
    >
      {children}
    </span>
  );
}
