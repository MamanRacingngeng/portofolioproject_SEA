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
import { Button } from "@/components/ui/button";
import { PortraitImage } from "@/components/ui/portrait-image";
import {
  PageShell,
  PageContainer,
  PageHero,
} from "@/components/layout/page-shell";

export default function ContactPage() {
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

  return (
    <PageShell>
      <PageHero
        label="Contact"
        title="Let's Connect"
        description="Interested in collaborating on food research, fermentation innovation, or product development? I'd love to hear from you."
      />

      <section className="bg-white py-12 sm:py-16">
        <PageContainer size="wide">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative mb-6 sm:mb-8">
                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-fresh-100 to-cream-100 sm:-inset-3" />
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[240px] overflow-hidden rounded-2xl shadow-elevated xs:max-w-[260px] sm:max-w-xs">
                  <PortraitImage
                    src="/images/portrait.png"
                    alt={siteConfig.name}
                  />
                </div>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {[
                  {
                    href: `mailto:${siteConfig.email}`,
                    icon: Mail,
                    label: "Email",
                    value: siteConfig.email,
                  },
                  {
                    href: `tel:${siteConfig.phone}`,
                    icon: Phone,
                    label: "Phone",
                    value: siteConfig.phone,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex min-h-[var(--touch-min)] items-center gap-3 rounded-xl border border-cream-200 bg-cream-50 p-3 transition-all hover:border-fresh-200 hover:shadow-soft sm:p-4"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fresh-100 transition-colors group-hover:bg-fresh-600">
                      <item.icon className="h-5 w-5 text-fresh-600 transition-colors group-hover:text-white" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs text-earth-500">{item.label}</p>
                      <p className="truncate text-sm font-medium text-earth-700">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}

                <div className="flex min-h-[var(--touch-min)] items-center gap-3 rounded-xl border border-cream-200 bg-cream-50 p-3 sm:p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fresh-100">
                    <MapPin className="h-5 w-5 text-fresh-600" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-earth-500">Location</p>
                    <p className="text-sm font-medium text-earth-700">
                      {siteConfig.location}
                    </p>
                  </div>
                </div>

                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex min-h-[var(--touch-min)] items-center gap-3 rounded-xl border border-cream-200 bg-cream-50 p-3 transition-all hover:border-fresh-200 hover:shadow-soft sm:p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-fresh-100 transition-colors group-hover:bg-fresh-600">
                    <LinkedinIcon className="h-5 w-5 text-fresh-600 transition-colors group-hover:text-white" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-earth-500">LinkedIn</p>
                    <p className="text-sm font-medium text-earth-700">
                      Connect on LinkedIn
                    </p>
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
              <div className="rounded-2xl border border-cream-200 bg-cream-50 p-4 shadow-soft sm:p-6 md:p-8">
                <h2 className="mb-2 font-display text-xl font-semibold text-earth-700 sm:text-2xl">
                  Send a Message
                </h2>
                <p className="mb-6 text-sm text-earth-500">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </p>

                {submitted ? (
                  <div className="py-10 text-center sm:py-12">
                    <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-fresh-500 sm:h-16 sm:w-16" />
                    <h3 className="mb-2 font-display text-xl font-semibold text-earth-700">
                      Message Sent!
                    </h3>
                    <p className="text-sm text-earth-600 sm:text-base">
                      Thank you for reaching out. I&apos;ll respond within
                      24–48 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="mb-1.5 block text-sm font-medium text-earth-600"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          autoComplete="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-base text-earth-700 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fresh-500 sm:text-sm"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-1.5 block text-sm font-medium text-earth-600"
                        >
                          Email Address
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
                          className="w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-base text-earth-700 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fresh-500 sm:text-sm"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="mb-1.5 block text-sm font-medium text-earth-600"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-cream-300 bg-white px-4 py-3 text-base text-earth-700 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fresh-500 sm:text-sm"
                        placeholder="Job opportunity, collaboration, etc."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-1.5 block text-sm font-medium text-earth-600"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full resize-none rounded-xl border border-cream-300 bg-white px-4 py-3 text-base text-earth-700 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-fresh-500 sm:text-sm"
                        placeholder="Tell me about your opportunity or inquiry..."
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full sm:w-auto">
                      <Send className="h-4 w-4" />
                      Send Message
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
