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
            light ? "text-[#fdf0d5]/25" : "text-[#669bbc]/30"
          }`}
        >
          {index}
        </span>
        <span className={light ? "section-label border-[#fdf0d5]/30 bg-white/10 text-[#fdf0d5]" : "section-label"}>
          {label}
        </span>
      </div>
      <h2
        className={`font-display mt-4 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl ${
          light ? "text-[#fdf0d5]" : "text-[#003049]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed sm:text-lg ${
            light ? "text-[#fdf0d5]/85" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
