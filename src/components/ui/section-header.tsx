interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
  light?: boolean;
}

export function SectionHeader({
  index,
  label,
  title,
  description,
  className,
  light = false,
}: SectionHeaderProps) {
  return (
    <header className={className}>
      <div className="flex items-center gap-3">
        <span
          className={`font-display text-4xl font-extrabold sm:text-5xl ${
            light ? "text-white/30" : "text-mint/25"
          }`}
        >
          {index}
        </span>
        <span className={light ? "section-label bg-white/20 text-white" : "section-label"}>
          {label}
        </span>
      </div>
      <h2
        className={`font-display mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.65rem] ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            light ? "text-white/85" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
