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
        "font-display text-[2.6rem] font-extrabold uppercase leading-[0.88] xs:text-[3.1rem] sm:text-7xl lg:text-[4.75rem]",
        className
      )}
    >
      {plainLines.map((line) => (
        <span key={line.text} className="block text-[#fdf0d5]">
          {line.text}
        </span>
      ))}

      {blockLines.length > 0 && (
        <span className="name-block-label mt-2 inline-block max-w-full">
          {blockLines.map((line) => (
            <span key={line.text} className="block text-[#fdf0d5]">
              {line.text}
            </span>
          ))}
        </span>
      )}
    </h1>
  );
}
