import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  LinkedinIcon,
  Leaf,
} from "lucide-react";
import { siteConfig, navLinks } from "@/data/site";
import { Logo } from "@/components/layout/logo";

export function Footer() {
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
                  {siteConfig.degree}
                </p>
              </div>
            </div>
            <p className="text-cream-300 text-sm leading-relaxed max-w-md mb-6">
              {siteConfig.summary.slice(0, 180)}...
            </p>
            <div className="flex flex-col gap-2 text-sm text-cream-300">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-fresh-300 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 hover:text-fresh-300 transition-colors"
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
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-300 hover:text-fresh-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Expertise
            </h3>
            <ul className="space-y-2 text-sm text-cream-300">
              <li className="flex items-center gap-2">
                <Leaf className="h-3 w-3 text-fresh-400" />
                Food Science & Analysis
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="h-3 w-3 text-fresh-400" />
                Quality Assurance
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="h-3 w-3 text-fresh-400" />
                Product Development
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="h-3 w-3 text-fresh-400" />
                Food Safety (HACCP)
              </li>
              <li className="flex items-center gap-2">
                <Leaf className="h-3 w-3 text-fresh-400" />
                Research & Innovation
              </li>
            </ul>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 text-sm text-cream-300 hover:text-fresh-300 transition-colors"
            >
              <LinkedinIcon className="h-4 w-4" />
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-earth-600 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-cream-400">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-xs text-cream-400 flex items-center gap-1">
            Crafted with scientific precision
            <Leaf className="h-3 w-3" />
          </p>
        </div>
      </div>
    </footer>
  );
}
