"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { getNavLinks } from "@/lib/i18n/content";
import { useLanguage } from "@/components/providers/language-provider";
import { Logo } from "@/components/layout/logo";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export function Navigation() {
  const { t } = useLanguage();
  const navLinks = getNavLinks(t);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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

  const linkClass = (href: string) =>
    cn(
      "label-font text-[11px] font-semibold tracking-[0.12em] transition-colors",
      pathname === href ? "text-ink" : "text-ink/55 hover:text-ink"
    );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b-2 border-ink pt-[env(safe-area-inset-top)] transition-colors",
        scrolled || isOpen ? "bg-paper/95 backdrop-blur-md" : "bg-paper/80 backdrop-blur-sm"
      )}
    >
      <nav className="container-app mx-auto flex max-w-7xl items-center justify-between gap-4 py-3 sm:py-4">
        <Logo variant="nav" />

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass(link.href)}>
              {link.label}
            </Link>
          ))}
          <LanguageSwitcher />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="tap-target border-2 border-ink bg-v26yellow p-2 shadow-[3px_3px_0_#0e0e0e]"
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
            className="overflow-hidden border-t-2 border-ink bg-paper md:hidden"
          >
            <div className="container-app flex flex-col gap-1 py-4 safe-pb">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "label-font tap-target px-2 py-3 text-sm font-semibold tracking-wider",
                    pathname === link.href ? "text-ink" : "text-ink/60"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
