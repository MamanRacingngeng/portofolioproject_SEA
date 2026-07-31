"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
    <div className="pt-24">
      <section className="py-16 bg-gradient-to-br from-cream-50 via-white to-fresh-50 relative">
        <div className="absolute inset-0 bg-molecule-pattern opacity-40" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium text-fresh-600 tracking-widest uppercase mb-3">
              Contact
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-earth-700 mb-4">
              Let&apos;s Connect
            </h1>
            <p className="text-earth-600/80 max-w-2xl mx-auto leading-relaxed">
              Interested in collaborating on food research, quality assurance, or
              product development? I&apos;d love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="relative mb-8">
                <div className="absolute -inset-3 bg-gradient-to-br from-fresh-100 to-cream-100 rounded-2xl" />
                <div className="relative w-full aspect-[3/4] max-w-xs mx-auto rounded-2xl overflow-hidden shadow-elevated">
                  <Image
                    src="/images/portrait.png"
                    alt={siteConfig.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-cream-50 border border-cream-200 hover:border-fresh-200 hover:shadow-soft transition-all group"
                >
                  <div className="h-10 w-10 rounded-lg bg-fresh-100 flex items-center justify-center group-hover:bg-fresh-600 transition-colors">
                    <Mail className="h-5 w-5 text-fresh-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-earth-500">Email</p>
                    <p className="text-sm font-medium text-earth-700">
                      {siteConfig.email}
                    </p>
                  </div>
                </a>

                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 p-4 rounded-xl bg-cream-50 border border-cream-200 hover:border-fresh-200 hover:shadow-soft transition-all group"
                >
                  <div className="h-10 w-10 rounded-lg bg-fresh-100 flex items-center justify-center group-hover:bg-fresh-600 transition-colors">
                    <Phone className="h-5 w-5 text-fresh-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs text-earth-500">Phone</p>
                    <p className="text-sm font-medium text-earth-700">
                      {siteConfig.phone}
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-cream-50 border border-cream-200">
                  <div className="h-10 w-10 rounded-lg bg-fresh-100 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-fresh-600" />
                  </div>
                  <div>
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
                  className="flex items-center gap-3 p-4 rounded-xl bg-cream-50 border border-cream-200 hover:border-fresh-200 hover:shadow-soft transition-all group"
                >
                  <div className="h-10 w-10 rounded-lg bg-fresh-100 flex items-center justify-center group-hover:bg-fresh-600 transition-colors">
                    <LinkedinIcon className="h-5 w-5 text-fresh-600 group-hover:text-white transition-colors" />
                  </div>
                  <div>
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
              <div className="bg-cream-50 rounded-2xl p-8 border border-cream-200 shadow-soft">
                <h2 className="font-display text-2xl font-semibold text-earth-700 mb-2">
                  Send a Message
                </h2>
                <p className="text-sm text-earth-500 mb-6">
                  Fill out the form below and I&apos;ll get back to you as soon
                  as possible.
                </p>

                {submitted ? (
                  <div className="text-center py-12">
                    <CheckCircle2 className="h-16 w-16 text-fresh-500 mx-auto mb-4" />
                    <h3 className="font-display text-xl font-semibold text-earth-700 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-earth-600">
                      Thank you for reaching out. I&apos;ll respond within 24-48
                      hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-earth-600 mb-1.5"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-earth-700 text-sm focus:outline-none focus:ring-2 focus:ring-fresh-500 focus:border-transparent transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-earth-600 mb-1.5"
                        >
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-earth-700 text-sm focus:outline-none focus:ring-2 focus:ring-fresh-500 focus:border-transparent transition-all"
                          placeholder="you@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-earth-600 mb-1.5"
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
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-earth-700 text-sm focus:outline-none focus:ring-2 focus:ring-fresh-500 focus:border-transparent transition-all"
                        placeholder="Job opportunity, collaboration, etc."
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-earth-600 mb-1.5"
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
                        className="w-full px-4 py-3 rounded-xl border border-cream-300 bg-white text-earth-700 text-sm focus:outline-none focus:ring-2 focus:ring-fresh-500 focus:border-transparent transition-all resize-none"
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
        </div>
      </section>
    </div>
  );
}
