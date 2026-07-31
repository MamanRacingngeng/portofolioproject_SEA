"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";

export default function NotFound() {
  const { t } = useLanguage();
  const page = t.pages.notFound;

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="mb-4 font-display text-6xl font-semibold text-fresh-200">
          404
        </p>
        <h1 className="mb-2 font-display text-2xl font-semibold text-earth-700">
          {page.title}
        </h1>
        <p className="mb-6 text-earth-500">{page.description}</p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full bg-fresh-600 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-fresh-700"
        >
          {page.returnHome}
        </Link>
      </div>
    </div>
  );
}
