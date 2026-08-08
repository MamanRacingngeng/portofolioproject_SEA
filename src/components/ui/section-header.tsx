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
      <div className="flex items-baseline gap-4 border-b border-border pb-4">
        <span className="font-serif text-4xl leading-none text-border sm:text-5xl">{index}</span>
        <span className="section-eyebrow">{label}</span>
      </div>
      <h2 className="font-serif mt-6 max-w-3xl text-3xl leading-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-[17px]">
          {description}
        </p>
      )}
    </header>
  );
}
