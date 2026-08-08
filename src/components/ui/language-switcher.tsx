"use client";

import { cn } from "@/lib/utils";
import { localeLabels, type Locale } from "@/lib/i18n/config";
import { useLanguage } from "@/components/providers/language-provider";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn("inline-flex overflow-hidden rounded-md border border-[#003049]/15 bg-white p-0.5", className)}
      role="group"
      aria-label="Language"
    >
      {(["en", "id"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            "min-w-[2.25rem] rounded px-2.5 py-1.5 text-xs font-bold transition-colors",
            locale === code
              ? "bg-[#003049] text-[#fdf0d5]"
              : "text-[#003049] hover:bg-[#fdf0d5]"
          )}
          aria-pressed={locale === code}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
