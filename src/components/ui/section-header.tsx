import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  index,
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <header
      className={cn(
        align === "center" && "text-center",
        className
      )}
    >
      <div
        className={cn(
          "mb-4 flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="font-mono text-xs font-medium text-wheat-600">
          {index}
        </span>
        <span className="h-px w-8 bg-earth-300/60" />
        <span className="font-mono text-[11px] font-medium uppercase tracking-[0.15em] text-fresh-700">
          {label}
        </span>
      </div>
      <h2 className="section-title mb-3 max-w-3xl">{title}</h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed text-earth-600/90",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </header>
  );
}
