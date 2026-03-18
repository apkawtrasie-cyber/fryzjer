import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ScrollToTop } from "@/components/ui/scroll-to-top";
import { seo } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  openGraph: seo.openGraph,
  twitter: seo.twitter,
  icons: {
    icon: '/favicon_hair.svg',
    shortcut: '/favicon_hair.svg',
    apple: '/favicon_hair.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cormorant.variable} font-sans antialiased bg-background text-foreground min-h-screen flex flex-col overflow-x-hidden`}
      >
        <main className="flex-1 pb-24 lg:pb-0 overflow-hidden">
          {children}
        </main>
        <MobileNav />
        <ScrollToTop />
      </body>
    </html>
  );
}
