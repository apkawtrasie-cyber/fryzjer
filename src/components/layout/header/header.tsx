"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/config/site-content";
import { useLanguage } from "@/i18n/context";
import { LanguageSwitcher } from "@/components/ui/language-switcher";

export function Header() {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.services, href: "#uslugi" },
    { label: t.nav.gallery, href: "#galeria" },
    { label: t.nav.about, href: "#o-nas" },
    { label: t.nav.contact, href: "#kontakt" },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/5 w-full shadow-lg">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20 gap-2 sm:gap-3 md:gap-4">
          <Link href="/" className="flex items-center z-10 shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Image
              src="/images/logo/logo_hair_przezroczyste.svg"
              alt="Vogue Hair Studio"
              width={180}
              height={60}
              className="h-9 sm:h-11 md:h-12 lg:h-14 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-sm font-medium tracking-wider transition-colors text-[#fafafa] hover:text-[#B38728] whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 z-10 shrink-0">
            <LanguageSwitcher />
            <a href={`tel:${siteContent.contact.phone.replace(/\s/g, '')}`}>
              <Button
                size="sm"
                className="bg-gradient-to-r from-[#B38728] to-[#AA771C] text-[#0a0a0a] font-bold tracking-wide hover:opacity-90 rounded-none px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8 h-8 sm:h-9 md:h-10 text-[9px] sm:text-[10px] md:text-xs lg:text-sm whitespace-nowrap"
              >
                {t.nav.call}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
