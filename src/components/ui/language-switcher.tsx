"use client";

import { cn } from "@/lib/utils";
import { localeLabels, type Locale } from "@/lib/i18n/config";
import { useLanguage } from "@/components/providers/language-provider";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex overflow-hidden rounded-md border border-border bg-background",
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
            "min-w-[2.5rem] px-2.5 py-1.5 text-xs font-medium transition-colors",
            locale === code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:bg-muted"
          )}
          aria-pressed={locale === code}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
