"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, LinkedinIcon, Leaf } from "lucide-react";
import { siteConfig } from "@/data/site";
import { getNavLinks } from "@/lib/i18n/content";
import { useLanguage } from "@/components/providers/language-provider";
import { Logo } from "@/components/layout/logo";

export function Footer() {
  const { t } = useLanguage();
  const navLinks = getNavLinks(t);

  return (
    <footer className="bg-earth-700 text-cream-100">
      <div className="container-app mx-auto max-w-7xl py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="mb-5 flex flex-col gap-4">
              <Logo variant="footer" theme="dark" showTagline />
              <div>
                <p className="font-display text-lg font-semibold text-white sm:text-xl">
                  {siteConfig.name}
                </p>
                <p className="text-xs text-cream-300 sm:text-sm">
                  {t.site.degree}
                </p>
              </div>
            </div>
            <p className="mb-6 max-w-md text-sm leading-relaxed text-cream-300">
              {t.site.summary.slice(0, 180)}...
            </p>
            <div className="flex flex-col gap-2 text-sm text-cream-300">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 transition-colors hover:text-fresh-300"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 transition-colors hover:text-fresh-300"
              >
                <Phone className="h-4 w-4" />
                {siteConfig.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {siteConfig.location}
              </span>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-white">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-300 transition-colors hover:text-fresh-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-lg font-semibold text-white">
              {t.footer.expertise}
            </h3>
            <ul className="space-y-2 text-sm text-cream-300">
              {t.footer.expertiseItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Leaf className="h-3 w-3 text-fresh-400" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-cream-300 transition-colors hover:text-fresh-300"
            >
              <LinkedinIcon className="h-4 w-4" />
              {t.footer.linkedin}
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-earth-600 pt-8 sm:flex-row">
          <p className="text-xs text-cream-400">
            © {new Date().getFullYear()} {siteConfig.name}. {t.footer.rights}
          </p>
          <p className="flex items-center gap-1 text-xs text-cream-400">
            {t.footer.crafted}
            <Leaf className="h-3 w-3" />
          </p>
        </div>
      </div>
    </footer>
  );
}
