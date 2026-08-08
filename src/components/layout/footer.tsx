"use client";

import Link from "next/link";
import { Mail, MapPin, LinkedinIcon, FlaskConical } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getNavLinks } from "@/lib/i18n/content";
import { useLanguage } from "@/components/providers/language-provider";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  const { t } = useLanguage();
  const navLinks = getNavLinks(t);
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto overflow-hidden border-t border-fresh-100 bg-gradient-to-b from-cream-50 to-fresh-50/50">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 80%, rgba(34,197,94,0.15), transparent 50%), radial-gradient(circle at 80% 20%, rgba(249,115,22,0.1), transparent 50%)",
        }}
      />

      <div className="container-app relative mx-auto max-w-7xl py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Logo variant="nav" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.site.summary}
            </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-fresh-100/80 px-3 py-1.5 text-xs font-semibold text-fresh-700">
              <FlaskConical className="h-3.5 w-3.5" />
              Food Tech · Yogyakarta
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-fresh-600">
              {t.footer.navigation}
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-fresh-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-fresh-600">
              {t.common.contact}
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-fresh-500" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-citrus-500" />
                {siteConfig.location}
              </li>
              <li className="flex items-start gap-2">
                <LinkedinIcon className="mt-0.5 h-4 w-4 shrink-0 text-fresh-500" />
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-fresh-100/80 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. {t.footer.rights}
          </p>
          <p className="text-xs font-semibold text-fresh-600">Made with 🌱 & science</p>
        </div>
      </div>
    </footer>
  );
}
