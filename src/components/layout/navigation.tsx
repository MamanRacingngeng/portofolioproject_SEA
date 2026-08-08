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
import { Button } from "@/components/ui/button";

export function Navigation() {
  const { t } = useLanguage();
  const navLinks = getNavLinks(t);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
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
    <header className="fixed left-0 right-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
      <nav
        className={cn(
          "container-app mx-auto mt-3 flex max-w-7xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-500 sm:px-5 sm:py-3",
          scrolled || isOpen
            ? "border border-white/50 bg-white/80 shadow-soft backdrop-blur-xl"
            : "bg-white/40 backdrop-blur-md"
        )}
      >
        <Logo variant="nav" />

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active ? "text-fresh-700" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-fresh-100"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <LanguageSwitcher />
          <Link href="/contact">
            <Button size="sm">{t.nav.contactShort}</Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Button
            variant="glass"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? t.common.closeMenu : t.common.openMenu}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="container-app mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/50 bg-white/90 shadow-soft backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 p-3 safe-pb">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "tap-target rounded-xl px-4 py-3 text-sm font-medium transition-colors",
                    pathname === link.href
                      ? "bg-fresh-100 text-fresh-700"
                      : "text-muted-foreground hover:bg-fresh-50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/contact" className="px-2 pt-2">
                <Button className="w-full">{t.nav.contactShort}</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
