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
      "text-sm font-medium transition-colors",
      pathname === href ? "text-primary" : "text-muted-foreground hover:text-foreground"
    );

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 border-b border-border pt-[env(safe-area-inset-top)] transition-colors",
        scrolled || isOpen ? "bg-background/95 backdrop-blur-md" : "bg-background/80 backdrop-blur-sm"
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
          <Link href="/contact">
            <Button size="sm">{t.nav.contactShort}</Button>
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <Button
            variant="outline"
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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-border bg-background md:hidden"
          >
            <div className="container-app flex flex-col gap-1 py-4 safe-pb">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "tap-target rounded-md px-2 py-3 text-sm font-medium",
                    pathname === link.href ? "text-primary" : "text-muted-foreground"
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
