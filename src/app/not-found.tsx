"use client";

import Link from "next/link";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const { t } = useLanguage();
  const page = t.pages.notFound;

  return (
    <div className="flex min-h-[60vh] items-center justify-center border-b-2 border-ink bg-paper px-6">
      <div className="v26-card max-w-md bg-white p-8 text-center sm:p-12">
        <p className="display-font text-6xl text-v26coral sm:text-7xl">404</p>
        <h1 className="display-font mt-4 text-2xl sm:text-3xl">{page.title}</h1>
        <p className="mt-3 text-sm text-ink/70 sm:text-base">{page.description}</p>
        <Link href="/" className="mt-8 inline-block">
          <Button size="lg">{page.returnHome}</Button>
        </Link>
      </div>
    </div>
  );
}
