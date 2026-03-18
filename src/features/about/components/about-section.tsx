"use client";

import { motion } from "framer-motion";
import { slideInFromBottom, slideInFromLeft, slideInFromRight } from "@/lib/variants";
import { Award, Heart, Scissors, Sparkles } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="o-nas" className="py-20 md:py-32 relative bg-[#171717] min-h-screen flex items-center border-t border-white/5 scroll-mt-14 md:scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-20">
            <motion.h2 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromBottom}
              className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest text-[#B38728] mb-4 uppercase"
            >
              O Nas
            </motion.h2>
            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromBottom}
              className="text-[#a3a3a3] text-sm md:text-base tracking-[0.2em] uppercase max-w-2xl mx-auto"
            >
              Pasja, doświadczenie i miłość do piękna
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center mb-16 md:mb-24">
            {/* Left Column - Image */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromLeft}
              className="relative h-[400px] md:h-[600px] lg:h-[700px] w-full rounded-[2rem] overflow-hidden order-2 lg:order-1"
            >
              <Image
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=1000&auto=format&fit=crop"
                alt="Elena Kowalska - Założycielka Vogue Hair Studio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 border-2 border-[#B38728]/30 rounded-[2rem] m-4 pointer-events-none" />
              
              {/* Name Tag */}
              <div className="absolute bottom-8 left-8 right-8 bg-[#0a0a0a]/80 backdrop-blur-md border border-[#B38728]/30 rounded-2xl p-6">
                <p className="font-serif text-2xl md:text-3xl text-[#B38728] mb-1 font-bold">Elena Kowalska</p>
                <p className="text-[#a3a3a3] text-sm tracking-wider">Założycielka & Master Stylist</p>
              </div>
            </motion.div>

            {/* Right Column - Story */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideInFromRight}
              className="space-y-6 md:space-y-8 order-1 lg:order-2"
            >
              <div className="space-y-4 md:space-y-6">
                <p className="text-[#fafafa] text-base md:text-lg leading-relaxed">
                  Vogue Hair Studio to efekt 15 lat pasji i nieustannego dążenia do perfekcji. 
                  Wszystko zaczęło się od małego salonu w centrum Warszawy, gdzie Elena Kowalska – 
                  absolwentka prestiżowej Akademii Fryzjerskiej w Paryżu – postanowiła stworzyć 
                  miejsce, w którym każdy klient poczuje się wyjątkowo.
                </p>

                <p className="text-[#a3a3a3] text-sm md:text-base leading-relaxed">
                  "Wierzę, że fryzjerstwo to sztuka. Każde cięcie, każdy kolor to opowieść, 
                  którą tworzymy wspólnie z klientem. Moja misja to nie tylko metamorfoza włosów, 
                  ale przede wszystkim budowanie pewności siebie i podkreślanie naturalnego piękna."
                </p>

                <p className="text-[#a3a3a3] text-sm md:text-base leading-relaxed">
                  Dziś Vogue Hair Studio to zespół wykwalifikowanych stylistów, którzy dzielą 
                  tę samą filozofię – indywidualne podejście, najwyższa jakość produktów i 
                  nieustanne podnoszenie kwalifikacji na międzynarodowych szkoleniach.
                </p>
              </div>

              {/* Stats/Features */}
              <div className="grid grid-cols-2 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-white/5">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#B38728]/10 flex items-center justify-center text-[#B38728] shrink-0">
                    <Award className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="font-serif text-lg md:text-xl text-[#fafafa] mb-1 font-semibold">15+ lat</p>
                    <p className="text-[#a3a3a3] text-xs md:text-sm">Doświadczenia</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#B38728]/10 flex items-center justify-center text-[#B38728] shrink-0">
                    <Heart className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="font-serif text-lg md:text-xl text-[#fafafa] mb-1 font-semibold">5000+</p>
                    <p className="text-[#a3a3a3] text-xs md:text-sm">Zadowolonych klientów</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#B38728]/10 flex items-center justify-center text-[#B38728] shrink-0">
                    <Scissors className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="font-serif text-lg md:text-xl text-[#fafafa] mb-1 font-semibold">Premium</p>
                    <p className="text-[#a3a3a3] text-xs md:text-sm">Produkty</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#B38728]/10 flex items-center justify-center text-[#B38728] shrink-0">
                    <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <p className="font-serif text-lg md:text-xl text-[#fafafa] mb-1 font-semibold">Vogue</p>
                    <p className="text-[#a3a3a3] text-xs md:text-sm">Standard</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 md:w-96 md:h-96 bg-[#B38728]/5 rounded-full blur-[100px] pointer-events-none translate-x-1/2" />
    </section>
  );
}
