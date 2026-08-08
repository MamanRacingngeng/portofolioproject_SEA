import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline" | "published" | "submitted" | "in-progress";
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
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
        variant === "default" && "border-transparent bg-primary/10 text-primary",
        variant === "secondary" && "border-transparent bg-secondary text-secondary-foreground",
        variant === "outline" && "text-foreground",
        variant === "published" && "border-transparent bg-emerald-100 text-emerald-700",
        variant === "submitted" && "border-transparent bg-amber-100 text-amber-700",
        variant === "in-progress" && "border-transparent bg-sky-100 text-sky-700",
        className
      )}
    >
      {children}
    </span>
  );
}
