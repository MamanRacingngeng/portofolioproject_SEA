"use client";

import { cn } from "@/lib/utils";
import { localeLabels, type Locale } from "@/lib/i18n/config";
import { useLanguage } from "@/components/providers/language-provider";

export function LanguageSwitcher({
  className,
  theme = "light",
}: {
  className?: string;
  theme?: "light" | "dark" | "origin";
}) {
  const { locale, setLocale } = useLanguage();

  if (theme === "origin") {
    return (
      <div
        className={cn("inline-flex items-center gap-1.5", className)}
        role="group"
        aria-label="Language"
      >
        {(["en", "id"] as Locale[]).map((code, index) => (
          <span key={code} className="inline-flex items-center gap-1.5">
            {index > 0 && <span className="text-white/35">/</span>}
            <button
              type="button"
              onClick={() => setLocale(code)}
              className={cn(
                "origin-nav-link px-1 py-0.5 transition-opacity hover:opacity-100",
                locale === code ? "opacity-100" : "opacity-55"
              )}
              aria-pressed={locale === code}
            >
              {localeLabels[code]}
            </button>
          </span>
        ))}
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div
      className={cn(
        "inline-flex rounded-md border p-0.5",
        isDark
          ? "border-white/25 bg-white/10 backdrop-blur-sm"
          : "border-earth-200/80 bg-white",
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
              ? isDark
                ? "bg-wheat-500 text-white"
                : "bg-fresh-600 text-white"
              : isDark
                ? "text-white/75 hover:bg-white/10 hover:text-white"
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
