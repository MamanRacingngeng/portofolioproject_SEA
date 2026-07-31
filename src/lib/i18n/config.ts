export type Locale = "en" | "id";

export const locales: Locale[] = ["en", "id"];
export const defaultLocale: Locale = "en";

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  id: "ID",
};

export const localeNames: Record<Locale, string> = {
  en: "English",
  id: "Indonesia",
};
