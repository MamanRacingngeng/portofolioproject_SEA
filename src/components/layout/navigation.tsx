"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import { navLinks } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/layout/logo";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "pt-[env(safe-area-inset-top)]",
        scrolled || isOpen
          ? "border-b-2 border-fresh-600 bg-cream-50/95 backdrop-blur-sm"
          : "border-b border-transparent bg-cream-50/80 backdrop-blur-sm md:bg-cream-50/60",
        isOpen && "border-b-2 border-fresh-600 bg-cream-50"
      )}
    >
      <nav className="container-app mx-auto flex max-w-7xl items-center justify-between gap-3 py-3 sm:py-4">
        <Logo variant="nav" showTagline />

        <div className="hidden items-center gap-0.5 md:flex lg:gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "relative px-2.5 py-2 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors lg:px-4 lg:text-xs",
                pathname === link.href
                  ? "text-fresh-700"
                  : "text-earth-600 hover:text-fresh-700"
              )}
            >
              {link.label}
              {pathname === link.href && (
                <motion.div
                  layoutId="nav-indicator"
                  className="absolute -bottom-1 left-2 right-2 h-0.5 bg-fresh-600 lg:left-4 lg:right-4"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden shrink-0 md:block">
          <Link href="/contact">
            <Button size="sm" className="text-xs lg:text-sm">
              <Leaf className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
              <span className="hidden lg:inline">Contact Me</span>
              <span className="lg:hidden">Contact</span>
            </Button>
          </Link>
        </div>

        <button
          type="button"
          className="tap-target shrink-0 rounded-lg p-2 text-earth-700 hover:bg-fresh-50 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
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
              <div className="mb-3 flex justify-center border-b border-cream-200 pb-4">
                <Logo variant="nav" showTagline />
              </div>
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
                <Button className="w-full">Contact Me</Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
