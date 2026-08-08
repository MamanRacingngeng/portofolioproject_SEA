"use client";

import Link from "next/link";
import { Mail, MapPin, LinkedinIcon } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getNavLinks } from "@/lib/i18n/content";
import { useLanguage } from "@/components/providers/language-provider";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  const { t } = useLanguage();
  const navLinks = getNavLinks(t);
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink bg-ink text-white">
      <div className="container-app mx-auto max-w-7xl py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <p className="label-font mb-3 text-xs font-bold tracking-[0.2em] text-v26yellow">
              {t.footer.navigation}
            </p>
            <Logo variant="nav" className="[&_span]:text-white [&_span:last-child]:text-white/60" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/65">
              {t.site.summary}
            </p>
          </div>

          <div>
            <p className="label-font mb-4 text-xs font-bold tracking-[0.2em] text-v26yellow">
              {t.footer.navigation}
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/75 transition-colors hover:text-v26yellow"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-font mb-4 text-xs font-bold tracking-[0.2em] text-v26yellow">
              {t.common.contact}
            </p>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-v26yellow" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-v26yellow" />
                {siteConfig.location}
              </li>
              <li className="flex items-start gap-2">
                <LinkedinIcon className="mt-0.5 h-4 w-4 shrink-0 text-v26yellow" />
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="label-font text-[10px] tracking-[0.16em] text-white/45">
            © {year} {siteConfig.name}. {t.footer.rights}
          </p>
          <p className="label-font text-[10px] tracking-[0.16em] text-v26yellow">
            PORTFOLIO {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
