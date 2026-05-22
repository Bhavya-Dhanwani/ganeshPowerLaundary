import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://ganeshpowerlaundary.example"),
  title: {
    default: "Ganesh Power Laundary | Premium Laundry Service",
    template: "%s | Ganesh Power Laundary",
  },
  description:
    "Ganesh Power Laundary offers wash, iron, dry clean, pickup, and delivery services with careful garment handling.",
  keywords: [
    "Ganesh Power Laundary",
    "laundry service",
    "dry cleaning",
    "wash and iron",
    "laundry pickup",
  ],
  authors: [{ name: "Ganesh Power Laundary" }],
  creator: "Ganesh Power Laundary",
  openGraph: {
    title: "Ganesh Power Laundary",
    description:
      "Premium wash, iron, dry clean, pickup, and delivery service for everyday and occasion wear.",
    url: "/",
    siteName: "Ganesh Power Laundary",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ganesh Power Laundary",
    description:
      "Fresh clothes, careful handling, and owner-managed laundry operations.",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
