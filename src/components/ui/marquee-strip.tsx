"use client";

interface MarqueeStripProps {
  items: string[];
}

export function MarqueeStrip({ items }: MarqueeStripProps) {
  const row = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-[#003049]/20 bg-[#780000] py-3 text-[#fdf0d5]">
      <div className="animate-marquee-scroll flex w-max gap-10 whitespace-nowrap px-4">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-semibold uppercase tracking-widest"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-[#669bbc]" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
