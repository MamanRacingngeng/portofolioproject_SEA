"use client";

import { cn } from "@/lib/utils";
import { localeLabels, type Locale } from "@/lib/i18n/config";
import { useLanguage } from "@/components/providers/language-provider";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex overflow-hidden rounded-full border border-fresh-200/80 bg-white/70 p-0.5 shadow-sm backdrop-blur-sm",
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
            "min-w-[2.5rem] rounded-full px-2.5 py-1.5 text-xs font-semibold transition-all duration-300",
            locale === code
              ? "bg-gradient-to-r from-fresh-500 to-fresh-600 text-white shadow-sm"
              : "text-muted-foreground hover:text-fresh-600"
          )}
          aria-pressed={locale === code}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
