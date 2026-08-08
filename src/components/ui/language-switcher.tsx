"use client";

import { cn } from "@/lib/utils";
import { localeLabels, type Locale } from "@/lib/i18n/config";
import { useLanguage } from "@/components/providers/language-provider";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex border-2 border-ink bg-white shadow-[3px_3px_0_#0e0e0e]",
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
            "label-font min-w-[2.5rem] px-2.5 py-1.5 text-[10px] font-bold tracking-wider transition-colors",
            locale === code ? "bg-v26yellow text-ink" : "text-ink/60 hover:bg-ink/5"
          )}
          aria-pressed={locale === code}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
