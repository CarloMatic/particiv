import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PartiCiv – Beteiligungsverfahren digitalisieren & Genehmigung beschleunigen",
  description:
    "PartiCiv digitalisiert und automatisiert Beteiligungsverfahren – von der Planauslage bis zur Einwendungsbearbeitung. Beschleunigen Sie Ihre Genehmigungsverfahren mit KI-Unterstützung.",
  keywords: [
    "Beteiligungsverfahren",
    "Planfeststellung",
    "Öffentlichkeitsbeteiligung",
    "Einwendungsmanagement",
    "KI Beteiligung",
    "BIM Beteiligung",
    "Bürgerbeteiligung digital",
    "PartiCiv",
    "RWTH Aachen",
    "Genehmigungsverfahren beschleunigen",
  ],
  authors: [{ name: "PartiCiv – Interactive Pioneers GmbH & RWTH Aachen" }],
  openGraph: {
    title: "PartiCiv – Beteiligungsverfahren digitalisieren",
    description:
      "Genehmigungsverfahren beschleunigen – wissenschaftlich fundiert, praxiserprobt, sicher.",
    url: "https://particiv.de",
    siteName: "PartiCiv",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PartiCiv – Beteiligungsverfahren digitalisieren",
    description:
      "Genehmigungsverfahren beschleunigen – wissenschaftlich fundiert, praxiserprobt, sicher.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "name": "PartiCiv",
      "applicationCategory": "GovernmentService",
      "operatingSystem": "Web",
      "description": "Digitale Plattform zur Automatisierung von Beteiligungsverfahren und Einwendungsmanagement.",
      "author": {
        "@type": "Organization",
        "name": "Interactive Pioneers GmbH",
        "url": "https://www.interactive-pioneers.de"
      },
      "funder": {
        "@type": "Organization",
        "name": "Bundesministerium für Verkehr"
      }
    },
    {
      "@type": "Organization",
      "name": "PartiCiv",
      "url": "https://particiv.de",
      "logo": "https://particiv.de/logo.svg",
      "sameAs": [
        "https://www.interactive-pioneers.de"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self';"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
