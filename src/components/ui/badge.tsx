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
        variant === "mint" && "bg-blue-100 text-blue-800",
        variant === "honey" && "bg-cyan-100 text-cyan-900",
        variant === "coral" && "bg-indigo-100 text-indigo-800",
        variant === "violet" && "bg-violet-100 text-violet-800",
        variant === "muted" && "bg-muted text-muted-foreground",
        variant === "outline" && "border-2 border-blue-200 bg-white text-blue-800",
        variant === "published" && "bg-sky-100 text-sky-800",
        variant === "submitted" && "bg-blue-100 text-blue-800",
        variant === "in-progress" && "bg-indigo-100 text-indigo-800",
        className
      )}
    >
      {children}
    </span>
  );
}
