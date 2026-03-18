import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/config/site-content";
import { Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-12 md:pt-16 pb-24 md:pb-16 mt-auto">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 lg:gap-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/images/logo/favicon_hair.svg"
                alt="Vogue Hair Studio"
                width={200}
                height={80}
                className="h-16 md:h-20 w-auto"
              />
            </Link>
            <p className="text-[#a3a3a3] text-sm md:text-base max-w-md mb-6 md:mb-8 leading-relaxed">
              {siteContent.global.description}
            </p>
            <div className="flex gap-4">
              <a
                href={siteContent.contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#a3a3a3] hover:text-[#B38728] hover:border-[#B38728] transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={siteContent.contact.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#a3a3a3] hover:text-[#B38728] hover:border-[#B38728] transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base md:text-lg font-bold text-[#fafafa] mb-4 md:mb-6 tracking-wide">
              KONTAKT
            </h3>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#a3a3a3]">
              <li className="leading-relaxed">{siteContent.contact.address}</li>
              <li>
                <a href={`tel:${siteContent.contact.phone.replace(/\s/g, '')}`} className="hover:text-[#B38728] transition-colors">
                  {siteContent.contact.phone}
                </a>
              </li>
              <li className="break-all">
                <a href={`mailto:${siteContent.contact.email}`} className="hover:text-[#B38728] transition-colors">
                  {siteContent.contact.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-serif text-base md:text-lg font-bold text-[#fafafa] mb-4 md:mb-6 tracking-wide">
              GODZINY OTWARCIA
            </h3>
            <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-[#a3a3a3]">
              {siteContent.contact.openingHours.map((time, i) => (
                <li key={i} className="flex justify-between gap-4">
                  <span className="whitespace-nowrap">{time.day}</span>
                  <span className="text-[#fafafa] text-right whitespace-nowrap">{time.hours}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-[#a3a3a3]">
          <div className="text-center md:text-left flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
            <p>© {new Date().getFullYear()} {siteContent.global.name}. Wszelkie prawa zastrzeżone.</p>
            <p className="hidden sm:block text-white/20">|</p>
            <p>Created by <span className="text-[#B38728] font-bold tracking-wider">Andrzej Mich</span></p>
          </div>
          <div className="flex gap-4 md:gap-6">
            <Link href="/polityka-prywatnosci" className="hover:text-[#B38728] transition-colors whitespace-nowrap">
              Polityka prywatności
            </Link>
            <Link href="/regulamin" className="hover:text-[#B38728] transition-colors whitespace-nowrap">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
