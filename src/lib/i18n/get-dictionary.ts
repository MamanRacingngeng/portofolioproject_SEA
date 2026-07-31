import type { Locale } from "./config";
import { en, type Dictionary } from "./locales/en";
import { id } from "./locales/id";

export type { Dictionary };

const dictionaries: Record<Locale, Dictionary> = {
  en,
  id,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
