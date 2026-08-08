import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "muted" | "outline" | "published" | "submitted" | "in-progress";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center border px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide",
        variant === "default" && "border-forest/20 bg-forest-light text-forest",
        variant === "muted" && "border-border bg-secondary text-muted-foreground",
        variant === "outline" && "border-border bg-card text-foreground",
        variant === "published" && "border-emerald-200 bg-emerald-50 text-emerald-800",
        variant === "submitted" && "border-amber-200 bg-amber-50 text-amber-800",
        variant === "in-progress" && "border-sky-200 bg-sky-50 text-sky-800",
        className
      )}
    >
      {children}
    </span>
  );
}
