import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "PartiCiv – Beteiligungsverfahren digitalisieren & automatisieren",
  description:
    "PartiCiv digitalisiert und automatisiert Beteiligungsverfahren – von der Planauslage bis zur Einwendungsbearbeitung. Entwickelt mit der RWTH Aachen, gehostet in Deutschland, DSGVO-konform.",
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
    title: "PartiCiv – Beteiligungsverfahren digitalisieren & automatisieren",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
