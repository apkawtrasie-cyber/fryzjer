"use client";

import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight } from "@/lib/variants";
import { siteContent } from "@/config/site-content";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Image from "next/image";

export function ContactSection() {
  return (
    <section id="kontakt" className="py-20 md:py-24 lg:py-32 relative bg-[#0a0a0a] min-h-screen flex items-center scroll-mt-14 md:scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromBottom}
              className="font-serif text-3xl md:text-5xl font-bold tracking-widest text-[#B38728] mb-4 uppercase"
            >
              Kontakt
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromBottom}
              className="text-[#a3a3a3] text-sm md:text-base tracking-[0.2em] uppercase"
            >
              Umów się na wizytę
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Column - Contact Info */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromLeft}
              className="space-y-12"
            >
              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#171717] border border-white/5 flex items-center justify-center text-[#B38728] group-hover:bg-[#B38728] group-hover:text-[#0a0a0a] transition-colors shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#fafafa] mb-2">Adres Salonu</h3>
                    <p className="text-[#a3a3a3] leading-relaxed">
                      {siteContent.global.name}<br />
                      {siteContent.contact.address}
                    </p>
                    <a 
                      href="https://maps.google.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block mt-3 text-sm text-[#B38728] hover:text-[#FBF5B7] transition-colors border-b border-[#B38728]/30 pb-0.5"
                    >
                      Jak dojechać? &rarr;
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#171717] border border-white/5 flex items-center justify-center text-[#B38728] group-hover:bg-[#B38728] group-hover:text-[#0a0a0a] transition-colors shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#fafafa] mb-2">Telefon</h3>
                    <p className="text-[#a3a3a3] mb-4">
                      Zadzwoń do nas, aby umówić wizytę lub skonsultować metamorfozę.
                    </p>
                    <a href={`tel:${siteContent.contact.phone.replace(/\s/g, '')}`}>
                      <Button
                        className="bg-gradient-to-r from-[#B38728] to-[#AA771C] text-[#0a0a0a] font-bold tracking-wider hover:opacity-90 rounded-none px-8 h-12"
                      >
                        ZADZWOŃ: {siteContent.contact.phone}
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#171717] border border-white/5 flex items-center justify-center text-[#B38728] group-hover:bg-[#B38728] group-hover:text-[#0a0a0a] transition-colors shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-[#fafafa] mb-2">Email</h3>
                    <a href={`mailto:${siteContent.contact.email}`} className="text-[#a3a3a3] hover:text-[#B38728] transition-colors">
                      {siteContent.contact.email}
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-6 group">
                  <div className="w-12 h-12 rounded-full bg-[#171717] border border-white/5 flex items-center justify-center text-[#B38728] group-hover:bg-[#B38728] group-hover:text-[#0a0a0a] transition-colors shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="w-full max-w-sm">
                    <h3 className="font-serif text-xl text-[#fafafa] mb-4">Godziny Otwarcia</h3>
                    <ul className="space-y-2 text-[#a3a3a3] text-sm">
                      {siteContent.contact.openingHours.map((time, i) => (
                        <li key={i} className="flex justify-between border-b border-white/5 pb-2">
                          <span>{time.day}</span>
                          <span className="text-[#fafafa]">{time.hours}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromRight}
              className="relative h-[600px] lg:h-[800px] w-full rounded-[2rem] overflow-hidden"
            >
              <Image
                src="/images/kontakt/lokalizacja_vogue_hair.png"
                alt="Lokalizacja Vogue Hair Studio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 border border-[#B38728]/20 rounded-[2rem] m-4 pointer-events-none z-10" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
