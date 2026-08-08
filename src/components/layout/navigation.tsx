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
  const leftLinks = navLinks.slice(0, 2);
  const rightLinks = navLinks.slice(2);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const isHeroOverlay = isHome && !scrolled && !isOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 56);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const heroLinkClass = (href: string) =>
    cn(
      "origin-nav-link px-3 py-2 transition-opacity hover:opacity-100",
      pathname === href ? "opacity-100" : "opacity-80"
    );

  const defaultLinkClass = (href: string) =>
    cn(
      "relative px-2.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors lg:px-4 lg:text-xs",
      pathname === href
        ? "text-fresh-700"
        : "text-earth-600 hover:text-fresh-700"
    );

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        "pt-[env(safe-area-inset-top)]",
        isHeroOverlay
          ? "border-b border-transparent bg-transparent"
          : scrolled || isOpen
            ? "border-b border-fresh-600/20 bg-cream-50/95 backdrop-blur-md"
            : "border-b border-earth-200/40 bg-cream-50/85 backdrop-blur-sm",
        isOpen && "border-b border-fresh-600/20 bg-cream-50"
      )}
    >
      <nav
        className={cn(
          "mx-auto max-w-[1400px] px-6 py-5 sm:px-10",
          isHeroOverlay && "lg:px-16 lg:py-6"
        )}
      >
        <div className="hidden items-center md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6">
          <div className="flex items-center gap-1 sm:gap-3">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isHeroOverlay ? heroLinkClass(link.href) : defaultLinkClass(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            {isHeroOverlay ? (
              <Link
                href="/"
                aria-label={t.brand.tagline}
                className="flex h-4 w-4 items-center justify-center rounded-full bg-[#d9564c] shadow-[0_0_20px_rgba(217,86,76,0.65)] transition-transform hover:scale-110"
              />
            ) : (
              <Logo variant="nav" showTagline={false} />
            )}
          </div>

          <div className="flex items-center justify-end gap-1 sm:gap-3">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isHeroOverlay ? heroLinkClass(link.href) : defaultLinkClass(link.href)}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher
              theme={isHeroOverlay ? "origin" : "light"}
              className={isHeroOverlay ? "ml-2" : undefined}
            />
          </div>
        </div>

        <div className="flex items-center justify-between md:hidden">
          {isHeroOverlay ? (
            <Link href="/" aria-label={t.brand.tagline}>
              <span className="block h-3 w-3 rounded-full bg-[#d9564c]" />
            </Link>
          ) : (
            <Logo variant="nav" showTagline={false} />
          )}

          <div className="flex items-center gap-2">
            <LanguageSwitcher theme={isHeroOverlay ? "origin" : "light"} />
            <button
              type="button"
              className={cn(
                "tap-target rounded-lg p-2 transition-colors",
                isHeroOverlay
                  ? "text-white hover:bg-white/10"
                  : "text-earth-700 hover:bg-fresh-50"
              )}
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label={isOpen ? t.common.closeMenu : t.common.openMenu}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-b border-fresh-100 bg-white/98 backdrop-blur-md md:hidden"
          >
            <div className="container-app mx-auto flex max-w-7xl flex-col gap-1 py-4 safe-pb">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "tap-target rounded-xl px-4 py-3 text-base font-medium transition-colors",
                    pathname === link.href
                      ? "bg-fresh-50 text-fresh-700"
                      : "text-earth-600 hover:bg-fresh-50"
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
