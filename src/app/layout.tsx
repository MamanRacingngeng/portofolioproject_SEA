import type { Metadata } from "next";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { AppProviders } from "@/components/providers/app-providers";
import { siteConfig } from "@/data/site";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${getDictionary("en").site.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: getDictionary("en").site.description,
  icons: {
    icon: siteConfig.ogImage,
    apple: siteConfig.ogImage,
  },
  keywords: [
    "Gnothi Sea Fauziah",
    "Food Technology",
    "Ahmad Dahlan University",
    "Natto Sacha Inchi",
    "Simple Patent",
    "Fermentation",
    "Plukenetia volubilis",
    "Food Innovation",
    "Product Development",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | ${getDictionary("en").site.title}`,
    description: getDictionary("en").site.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Food Technology Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${getDictionary("en").site.title}`,
    description: getDictionary("en").site.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#003049" },
    { media: "(prefers-color-scheme: dark)", color: "#780000" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: getDictionary("en").site.title,
  description: getDictionary("en").site.description,
  url: siteConfig.url,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Yogyakarta",
    addressCountry: "Indonesia",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: getDictionary("en").site.university,
  },
  knowsAbout: [
    "Food Science",
    "Food Technology",
    "Quality Assurance",
    "HACCP",
    "Proximate Analysis",
    "Product Development",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-[100dvh] flex-col">
        <AppProviders>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
