import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Shree Vishnu Scans & Diagnostics | Bangalore",
    template: "%s | Shree Vishnu Scans & Diagnostics",
  },
  description:
    "Premier diagnostic centre in Kattigenahalli, Bangalore. CT Scan, MRI, Blood Tests, ECG, Ultrasound. NABL accredited. Reports in 24hrs.",
  keywords:
    "diagnostic centre bangalore, blood test bangalore, ct scan bangalore, ultrasound scan bangalore, ECG bangalore, kattigenahalli diagnostics",
  openGraph: {
    title: "Shree Vishnu Scans & Diagnostics | Bangalore",
    description:
      "Premier diagnostic centre in Kattigenahalli, Bangalore. CT Scan, MRI, Blood Tests, ECG, Ultrasound. Reports in 24hrs.",
    url: "https://shreevishnudiagnostics.com",
    siteName: "Shree Vishnu Scans & Diagnostics",
    images: [
      {
        url: "https://shreevishnudiagnostics.com/assets/imgs/real_img_7.jpg",
        width: 1200,
        height: 630,
        alt: "Shree Vishnu Scans & Diagnostics Centre",
      },
    ],
    locale: "en_IN",
    type: "website",
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
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-canvas text-ink font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
      </body>
    </html>
  );
}
