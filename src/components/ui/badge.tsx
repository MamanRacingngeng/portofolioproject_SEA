import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "citrus" | "berry" | "wheat" | "outline" | "published" | "submitted" | "in-progress";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-transform duration-200 hover:scale-105",
        variant === "default" && "bg-fresh-100 text-fresh-700",
        variant === "citrus" && "bg-citrus-100 text-citrus-600",
        variant === "berry" && "bg-pink-100 text-pink-600",
        variant === "wheat" && "bg-wheat-100 text-amber-700",
        variant === "outline" && "border border-fresh-200 bg-white/60 text-fresh-700",
        variant === "published" && "bg-emerald-100 text-emerald-700",
        variant === "submitted" && "bg-amber-100 text-amber-700",
        variant === "in-progress" && "bg-sky-100 text-sky-700",
        className
      )}
    >
      {children}
    </span>
  );
}
