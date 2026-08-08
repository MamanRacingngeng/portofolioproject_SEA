"use client";

interface MarqueeStripProps {
  items: string[];
}

export function MarqueeStrip({ items }: MarqueeStripProps) {
  const row = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-blue-900/20 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-3 text-white">
      <div className="animate-marquee-scroll flex w-max gap-10 whitespace-nowrap px-4">
        {row.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex items-center gap-10 text-sm font-semibold uppercase tracking-widest"
          >
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
