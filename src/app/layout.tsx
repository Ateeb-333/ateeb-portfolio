import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ateeb's Portfolio",
  description: "Ateeb Chaudary - Software Engineer | Full-stack Developer & AI/ML Engineer specializing in Next.js, React, Python, and Machine Learning.",
  keywords: ["Ateeb Chaudary", "Software Engineer", "Full Stack Developer", "AI ML Engineer", "Next.js", "React", "Python", "Portfolio"],
  authors: [{ name: "Ateeb Chaudary" }],
  creator: "Ateeb Chaudary",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ateeb-portfolio.vercel.app",
    siteName: "Ateeb's Portfolio",
    title: "Ateeb Chaudary | Software Engineer",
    description: "Full-stack Developer & AI/ML Engineer specializing in Next.js, React, Python, and Machine Learning.",
    images: [
      {
        url: "/p2.jpeg",
        width: 1200,
        height: 630,
        alt: "Ateeb Chaudary - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ateeb Chaudary | Software Engineer",
    description: "Full-stack Developer & AI/ML Engineer specializing in Next.js, React, Python, and Machine Learning.",
    images: ["/p2.jpeg"],
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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
