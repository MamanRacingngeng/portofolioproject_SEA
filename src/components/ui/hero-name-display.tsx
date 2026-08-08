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
        "font-display text-[2.65rem] font-extrabold leading-[0.88] xs:text-[3.25rem] sm:text-7xl lg:text-[5rem]",
        className
      )}
    >
      {plainLines.map((line) => (
        <span key={line.text} className="block text-white drop-shadow-sm">
          {line.text}
        </span>
      ))}

      {blockLines.length > 0 && (
        <span className="name-block-label mt-2 inline-block max-w-full">
          {blockLines.map((line) => (
            <span key={line.text} className="block text-white">
              {line.text}
            </span>
          ))}
        </span>
      )}
    </h1>
  );
}
