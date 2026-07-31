import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        variant === "default" && "bg-fresh-100 text-fresh-700",
        variant === "secondary" && "bg-cream-200 text-earth-600",
        variant === "outline" && "border border-fresh-200 text-fresh-600",
        className
      )}
    >
      {children}
    </span>
  );
}
