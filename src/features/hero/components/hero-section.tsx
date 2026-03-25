"use client";

import { motion } from "framer-motion";
import { slideInFromBottom, fadeIn } from "@/lib/variants";
import { Button } from "@/components/ui/button";
import { siteContent } from "@/config/site-content";
import Image from "next/image";
import { useLanguage } from "@/i18n/context";

export function HeroSection() {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16 md:pt-20 w-full">
      {/* Background Image / Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=65&w=1200&auto=format&fit=crop&fit=crop&crop=center"
          alt="Vogue Hair Studio Interior"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/80 to-[#0a0a0a]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center justify-center text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="max-w-4xl w-full"
        >
          <motion.h1 
            variants={slideInFromBottom}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-wider text-[#B38728] mb-4 md:mb-6 drop-shadow-lg px-4"
            style={{
              WebkitTextStroke: "1px rgba(251, 245, 183, 0.2)",
            }}
          >
            {siteContent.hero.title}
          </motion.h1>
          
          <motion.p 
            variants={slideInFromBottom}
            className="text-[#fafafa] text-base sm:text-lg md:text-xl font-light tracking-wide mb-8 md:mb-12 max-w-2xl mx-auto drop-shadow-md px-4"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div 
            variants={slideInFromBottom}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a href={`tel:${siteContent.contact.phone.replace(/\s/g, '')}`}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#B38728] via-[#FBF5B7] to-[#AA771C] text-[#0a0a0a] font-bold tracking-widest hover:opacity-90 rounded-none px-12 py-8 text-sm md:text-base w-full sm:w-auto shadow-[0_0_30px_rgba(179,135,40,0.3)] transition-all hover:shadow-[0_0_50px_rgba(179,135,40,0.5)]"
              >
                {t.hero.cta}
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Gold Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B38728]/50 to-transparent z-10" />
    </section>
  );
}
