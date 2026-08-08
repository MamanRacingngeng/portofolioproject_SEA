import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";

interface HeroNameDisplayProps {
  className?: string;
}

export function HeroNameDisplay({ className }: HeroNameDisplayProps) {
  const { nameLines } = siteConfig.brand;
  const plainLines = nameLines.filter((line) => line.variant === "plain");
  const blockLines = nameLines.filter((line) => line.variant === "block");

  return (
    <h1
      className={cn(
        "font-display text-[2.75rem] font-extrabold leading-[0.85] xs:text-6xl sm:text-7xl lg:text-[5.25rem]",
        className
      )}
    >
      {plainLines.map((line) => (
        <span key={line.text} className="block text-white">
          {line.text}
        </span>
      ))}

      {blockLines.length > 0 && (
        <span className="name-block-label mt-1 inline-block max-w-full">
          {blockLines.map((line) => (
            <span key={line.text} className="block text-neutral-950">
              {line.text}
            </span>
          ))}
        </span>
      )}
    </h1>
  );
}
