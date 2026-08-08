"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { t } = useLanguage();
  const page = t.pages.notFound;

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-cream px-6">
      <div className="surface-card max-w-md p-8 text-center sm:p-12">
        <p className="font-display text-7xl font-extrabold text-[#003049] sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-[#003049] sm:text-3xl">{page.title}</h1>
        <p className="mt-3 text-sm text-muted-foreground sm:text-base">{page.description}</p>
        <Link href="/" className="mt-8 inline-block">
          <Button variant="coral" size="lg">{page.returnHome}</Button>
        </Link>
      </div>
    </div>
  );
}
