import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components";
import { AmbientSound } from "./AmbientSound";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://spandan-shah-portfolio.gatusshah.chatgpt.site"),
  title: {
    default: "Spandan Shah — Engineer, Researcher & Founder",
    template: "%s | Spandan Shah",
  },
  description:
    "The professional portfolio of Spandan Shah: cybersecurity, AI/ML, embedded systems, autonomous platforms and patent-pending research.",
  keywords: [
    "Spandan Shah",
    "Cybersecurity",
    "Artificial Intelligence",
    "Machine Learning",
    "Embedded Systems",
    "ESP32",
    "GoblinWisp",
    "AeroNexus",
  ],
  authors: [{ name: "Spandan Shah" }],
  creator: "Spandan Shah",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Spandan Shah — Engineer, Researcher & Founder",
    description:
      "Cybersecurity, AI/ML, embedded intelligence, autonomous platforms and patent-pending secure-session research.",
    siteName: "Spandan Shah Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spandan Shah — Engineer, Researcher & Founder",
    description:
      "Cybersecurity, AI/ML, embedded intelligence and autonomous systems.",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
        <AmbientSound />
      </body>
    </html>
  );
}
