"use client";

import { cn } from "@/lib/utils";
import { localeLabels, type Locale } from "@/lib/i18n/config";
import { useLanguage } from "@/components/providers/language-provider";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex rounded-md border border-earth-200/80 bg-white p-0.5",
        className
      )}
      role="group"
      aria-label="Language"
    >
      {(["en", "id"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            "min-w-[2.25rem] rounded px-2 py-1 font-mono text-[10px] uppercase tracking-wider transition-colors sm:text-xs",
            locale === code
              ? "bg-fresh-600 text-white"
              : "text-earth-600 hover:bg-cream-100 hover:text-fresh-700"
          )}
          aria-pressed={locale === code}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
