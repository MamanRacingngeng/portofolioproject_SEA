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
    <footer className="border-t border-border bg-muted/40">
      <div className="container-app mx-auto max-w-7xl py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Logo variant="nav" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.site.summary}
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.footer.navigation}
            </p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              {t.common.contact}
            </p>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {siteConfig.location}
              </li>
              <li className="flex items-start gap-2">
                <LinkedinIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
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

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.name}. {t.footer.rights}
          </p>
          <p className="text-xs font-medium text-primary">PORTFOLIO {year}</p>
        </div>
      </div>
    </footer>
  );
}
