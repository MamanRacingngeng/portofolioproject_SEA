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
        "label-font inline-flex items-center border-2 border-ink px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider",
        variant === "default" && "bg-v26yellow text-ink",
        variant === "secondary" && "bg-v26sky text-ink",
        variant === "outline" && "bg-white text-ink",
        variant === "published" && "bg-v26mint text-ink",
        variant === "submitted" && "bg-v26yellow text-ink",
        variant === "in-progress" && "bg-v26coral text-white",
        className
      )}
    >
      {children}
    </span>
  );
}
