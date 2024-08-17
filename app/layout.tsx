import type { Metadata } from "next";
import { Barlow } from 'next/font/google'
import "./globals.css";

const barlow = Barlow({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow'
})


export const metadata: Metadata = {
  title: "der Pflegedienst für Kreuzberg",
  description: "Der Pflegedienst für Kreuzberg - Nachhaltig, nah und aus Überzeugung.",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${barlow.variable} font-sans`}>
      <body className="barlow">{children}</body>
    </html>
  );
}
