import type { Metadata } from "next";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { CareerPageContent } from "@/components/pages/career-page-content";

const t = getDictionary("en");

export const metadata: Metadata = {
  title: t.nav.career,
  description: t.pages.career.metaDescription,
};

export default function CareerPage() {
  return <CareerPageContent />;
}
