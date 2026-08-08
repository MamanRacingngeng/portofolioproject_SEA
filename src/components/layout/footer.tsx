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
    <footer className="band-mint mt-auto border-t border-[#669bbc]/30 text-[#fdf0d5]">
      <div className="container-app mx-auto max-w-7xl py-12 sm:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          <div>
            <Logo variant="footer" light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#669bbc]">{t.site.summary}</p>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#669bbc]">{t.footer.navigation}</p>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-[#fdf0d5]/85 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-[#669bbc]">{t.common.contact}</p>
            <ul className="space-y-3 text-sm text-[#fdf0d5]/85">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#c1121f]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#c1121f]" />
                {siteConfig.location}
              </li>
              <li className="flex items-start gap-2">
                <LinkedinIcon className="mt-0.5 h-4 w-4 shrink-0 text-[#c1121f]" />
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

        <div className="mt-10 border-t border-[#669bbc]/25 pt-6 text-xs text-[#669bbc]">
          © {year} {siteConfig.name}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
