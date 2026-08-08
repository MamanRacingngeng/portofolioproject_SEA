interface SectionHeaderProps {
  index: string;
  label: string;
  title: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  index,
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <header className={className}>
      <span className="section-tag">
        <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-fresh-500" />
        {index} · {label}
      </span>
      <h2 className="font-display mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </header>
  );
}
