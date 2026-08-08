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
import {
  PageShell,
  PageContainer,
  PageHero,
} from "@/components/layout/page-shell";
import { cn } from "@/lib/utils";

const inputClass =
  "w-full border-2 border-ink bg-white px-4 py-3 text-base text-ink transition-all focus:outline-none focus:ring-2 focus:ring-v26yellow sm:text-sm";

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
    },
    {
      href: `tel:${siteConfig.phone}`,
      icon: Phone,
      label: t.common.phone,
      value: siteConfig.phone,
    },
  ];

  return (
    <PageShell>
      <PageHero
        label={page.label}
        title={page.title}
        description={page.description}
      />

      <section className="border-b-2 border-ink bg-white py-12 sm:py-16">
        <PageContainer size="wide">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="v26-card mb-6 overflow-hidden bg-v26sky p-3 sm:mb-8 sm:p-4">
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[260px] overflow-hidden border-2 border-ink bg-white sm:max-w-xs">
                  <PortraitImage
                    src="/images/portrait.png"
                    alt={`${siteConfig.name} - ${t.common.portraitAlt}`}
                    hint={t.common.tapForColor}
                    ariaSuffix={t.common.portraitAriaSuffix}
                  />
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {contactItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="v26-card group flex min-h-[var(--touch-min)] items-center gap-3 bg-paper p-3 transition-colors hover:bg-v26yellow sm:p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-ink bg-white transition-colors group-hover:bg-ink group-hover:text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="label-font text-[10px] tracking-wider text-ink/50">
                        {item.label}
                      </p>
                      <p className="truncate text-sm font-semibold">{item.value}</p>
                    </div>
                  </a>
                ))}

                <div className="v26-card flex min-h-[var(--touch-min)] items-center gap-3 bg-paper p-3 sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-ink bg-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="label-font text-[10px] tracking-wider text-ink/50">
                      {t.common.location}
                    </p>
                    <p className="text-sm font-semibold">{siteConfig.location}</p>
                  </div>
                </div>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="v26-card group flex min-h-[var(--touch-min)] items-center gap-3 bg-paper p-3 transition-colors hover:bg-v26yellow sm:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center border-2 border-ink bg-white transition-colors group-hover:bg-ink group-hover:text-white">
                    <LinkedinIcon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="label-font text-[10px] tracking-wider text-ink/50">
                      {t.common.linkedin}
                    </p>
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
              <div className="v26-card bg-paper p-4 sm:p-6 md:p-8">
                <h2 className="display-font text-xl sm:text-2xl">{t.common.sendMessage}</h2>
                <p className="mt-2 text-sm text-ink/70">{page.formDescription}</p>

                {submitted ? (
                  <div className="py-10 text-center sm:py-12">
                    <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-v26mint sm:h-16 sm:w-16" />
                    <h3 className="display-font text-xl">{page.success.title}</h3>
                    <p className="mt-2 text-sm text-ink/75 sm:text-base">
                      {page.success.message}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                      <div>
                        <label htmlFor="name" className="label-font mb-1.5 block text-[10px] font-bold tracking-wider">
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
                        <label htmlFor="email" className="label-font mb-1.5 block text-[10px] font-bold tracking-wider">
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
                      <label htmlFor="subject" className="label-font mb-1.5 block text-[10px] font-bold tracking-wider">
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
                      <label htmlFor="message" className="label-font mb-1.5 block text-[10px] font-bold tracking-wider">
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

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send className="h-4 w-4" />
                      {page.form.send}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </PageContainer>
      </section>
    </PageShell>
  );
}
