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
      <p className="text-xs font-semibold uppercase tracking-wider text-primary">
        {index} — {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </header>
  );
}
