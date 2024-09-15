import type { Metadata } from "next";
import { Barlow } from 'next/font/google'
import "../../app/globals.css";
import Footer from "../components/footer";
import Logo from "../components/logo";

const barlow = Barlow({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-barlow'
})


export const metadata: Metadata = {
  title: "Der Pflegedienst für Kreuzberg",
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
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="barlow">
        <Logo />
        {children}
        <Footer />
      </body>
    </html>
  );
}
