"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  LinkedinIcon,
  Send,
  CheckCircle2,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/components/providers/language-provider";
import { Button } from "@/components/ui/button";
import { PortraitImage } from "@/components/ui/portrait-image";
import { SurfaceCard } from "@/components/ui/surface-card";
import {
  PageShell,
  PageContainer,
  PageHero,
} from "@/components/layout/page-shell";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full rounded-xl border-2 border-border bg-white px-4 py-3 text-base text-foreground transition-colors focus:border-mint focus:outline-none focus:ring-2 focus:ring-mint/20 sm:text-sm";

export default function ContactPage() {
  const { t } = useLanguage();
  const page = t.pages.contact;
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const contactItems = [
    {
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      label: t.common.email,
      value: siteConfig.email,
      color: "bg-mint-light text-mint-dark",
    },
    {
      href: `tel:${siteConfig.phone}`,
      icon: Phone,
      label: t.common.phone,
      value: siteConfig.phone,
      color: "bg-honey-light text-amber-900",
    },
  ];

  return (
    <PageShell>
      <PageHero label={page.label} title={page.title} description={page.description} />

      <section className="py-12 sm:py-16">
        <PageContainer size="wide">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <SurfaceCard tint="honey" className="mb-6 overflow-hidden !p-3 sm:mb-8 sm:!p-4">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-md border border-[#003049]/15 bg-white sm:max-w-xs">
                  <PortraitImage
                    src="/images/portrait.png"
                    alt={`${siteConfig.name} - ${t.common.portraitAlt}`}
                    hint={t.common.tapForColor}
                    ariaSuffix={t.common.portraitAriaSuffix}
                  />
                </div>
              </SurfaceCard>

              <div className="space-y-3 sm:space-y-4">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group surface-card-interactive flex min-h-[var(--touch-min)] items-center gap-3 p-3 sm:p-4"
                  >
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.color}`}>
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="truncate text-sm font-semibold">{item.value}</p>
                    </div>
                  </a>
                ))}

                <div className="surface-card flex min-h-[var(--touch-min)] items-center gap-3 p-3 sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-coral-light text-orange-900">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{t.common.location}</p>
                    <p className="text-sm font-semibold">{siteConfig.location}</p>
                  </div>
                </div>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group surface-card-interactive flex min-h-[var(--touch-min)] items-center gap-3 p-3 sm:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-mint-light text-mint-dark">
                    <LinkedinIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{t.common.linkedin}</p>
                    <p className="text-sm font-semibold">{t.common.connectLinkedIn}</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <SurfaceCard tint="mint" className="!p-4 sm:!p-6 md:!p-8">
                <h2 className="font-display text-xl font-bold sm:text-2xl">{t.common.sendMessage}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{page.formDescription}</p>

                {submitted ? (
                  <div className="py-10 text-center sm:py-12">
                    <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-mint sm:h-16 sm:w-16" />
                    <h3 className="font-display text-xl font-bold">{page.success.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground sm:text-base">
                      {page.success.message}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                      <div>
                        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold">
                          {page.form.name}
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder={page.form.namePlaceholder}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-1.5 block text-sm font-semibold">
                          {page.form.email}
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          autoComplete="email"
                          inputMode="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={inputClass}
                          placeholder={page.form.emailPlaceholder}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="mb-1.5 block text-sm font-semibold">
                        {page.form.subject}
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className={inputClass}
                        placeholder={page.form.subjectPlaceholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
                        {page.form.message}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className={cn(inputClass, "resize-none")}
                        placeholder={page.form.messagePlaceholder}
                      />
                    </div>

                    <Button type="submit" variant="coral" size="lg" className="w-full sm:w-auto">
                      <Send className="h-4 w-4" />
                      {page.form.send}
                    </Button>
                  </form>
                )}
              </SurfaceCard>
            </motion.div>
          </div>
        </PageContainer>
      </section>
    </PageShell>
  );
}
