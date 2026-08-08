"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getNavLinks } from "@/lib/i18n/content";
import { useLanguage } from "@/components/providers/language-provider";
import { Logo } from "@/components/layout/logo";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const { t } = useLanguage();
  const navLinks = getNavLinks(t);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 pt-[env(safe-area-inset-top)] transition-all duration-300",
        scrolled || isOpen
          ? "border-b border-[#003049]/10 bg-[#fdf0d5]/95 backdrop-blur-sm"
          : "bg-[#fdf0d5]/90"
      )}
    >
      <nav className="container-app mx-auto flex max-w-7xl items-center justify-between gap-4 py-3 sm:py-3.5">
        <Logo variant="nav" />

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-4 py-2 text-sm font-semibold transition-colors",
                  active ? "text-[#003049]" : "text-muted-foreground hover:text-[#003049]"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-[#c1121f]"
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <Link href="/contact">
            <Button variant="honey" size="sm">
              {t.nav.contactShort}
            </Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="tap-target rounded-md border border-[#003049]/15 bg-white p-2 text-[#003049]"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? t.common.closeMenu : t.common.openMenu}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-white md:hidden"
          >
            <div className="container-app flex flex-col gap-1 py-3 safe-pb">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "tap-target rounded-xl px-4 py-3 text-sm font-semibold",
                    pathname === link.href
                      ? "bg-[#669bbc]/15 text-[#003049]"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="px-2 pt-2">
                <Button variant="honey" className="w-full">
                  {t.nav.contactShort}
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
