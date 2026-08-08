"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import { getNavLinks } from "@/lib/i18n/content";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { Logo, LogoMark } from "@/components/layout/logo";
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
    const handleScroll = () => setScrolled(window.scrollY > 48);
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

  const linkClass = (href: string) =>
    cn(
      "relative px-2 py-2 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors sm:text-[11px]",
      isHeroOverlay
        ? pathname === href
          ? "text-white"
          : "text-white/75 hover:text-white"
        : pathname === href
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
            ? "border-b-2 border-fresh-600 bg-cream-50/95 backdrop-blur-md"
            : "border-b border-earth-200/40 bg-cream-50/80 backdrop-blur-sm",
        isOpen && "border-b-2 border-fresh-600 bg-cream-50"
      )}
    >
      <nav className="container-app mx-auto max-w-7xl px-4 py-3 sm:px-6 sm:py-4">
        <div className="hidden items-center md:grid md:grid-cols-[1fr_auto_1fr] md:gap-4">
          <div className="flex items-center gap-1 lg:gap-2">
            {leftLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
                {pathname === link.href && !isHeroOverlay && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-2 right-2 h-0.5 bg-fresh-600"
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            {isHeroOverlay ? (
              <Link
                href="/"
                aria-label={t.brand.tagline}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-sm transition-transform hover:scale-105"
              >
                <span className="h-2.5 w-2.5 rounded-full bg-wheat-400 shadow-[0_0_18px_rgba(196,146,58,0.8)]" />
              </Link>
            ) : (
              <Logo variant="nav" showTagline={false} />
            )}
          </div>

          <div className="flex items-center justify-end gap-2 lg:gap-3">
            {rightLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher theme={isHeroOverlay ? "dark" : "light"} />
            <Link href="/contact">
              <Button
                size="sm"
                variant={isHeroOverlay ? "heroOutline" : "default"}
                className={cn(
                  "text-xs lg:text-sm",
                  isHeroOverlay && "border-white/40 bg-white/10 text-white hover:bg-white/20"
                )}
              >
                <Leaf className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
                <span className="hidden lg:inline">{t.nav.contactMe}</span>
                <span className="lg:hidden">{t.nav.contactShort}</span>
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-between md:hidden">
          {isHeroOverlay ? (
            <LogoMark theme="dark" />
          ) : (
            <Logo variant="nav" showTagline={false} />
          )}

          <div className="flex items-center gap-1">
            <LanguageSwitcher theme={isHeroOverlay ? "dark" : "light"} />
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
              <Link href="/contact" className="mt-2">
                <Button className="w-full">{t.nav.contactMe}</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
