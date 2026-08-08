"use client";

import { cn } from "@/lib/utils";
import { localeLabels, type Locale } from "@/lib/i18n/config";
import { useLanguage } from "@/components/providers/language-provider";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn("inline-flex overflow-hidden rounded-xl bg-blue-100 p-1", className)}
      role="group"
      aria-label="Language"
    >
      {(["en", "id"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            "min-w-[2.25rem] rounded-lg px-2.5 py-1.5 text-xs font-bold transition-all",
            locale === code
              ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-sm"
              : "text-blue-800 hover:bg-white/60"
          )}
          aria-pressed={locale === code}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
