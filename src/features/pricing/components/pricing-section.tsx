"use client";

import { motion } from "framer-motion";
import { slideInFromBottom, staggerContainer } from "@/lib/variants";
import { siteContent } from "@/config/site-content";
import { Scissors, Palette, Sparkles } from "lucide-react";
import Image from "next/image";

const iconMap = {
  Scissors,
  Palette,
  Sparkles,
};

export function PricingSection() {
  return (
    <section id="uslugi" className="py-20 md:py-24 lg:py-32 relative bg-[#0a0a0a] min-h-screen scroll-mt-14 md:scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h2 
              variants={slideInFromBottom}
              className="font-serif text-3xl md:text-5xl font-bold tracking-widest text-[#B38728] mb-4 uppercase"
            >
              {siteContent.pricing.title}
            </motion.h2>
            <motion.p 
              variants={slideInFromBottom}
              className="text-[#a3a3a3] text-sm md:text-base tracking-[0.2em] uppercase"
            >
              {siteContent.pricing.subtitle}
            </motion.p>
          </div>

          {/* Pricing Categories */}
          <div className="space-y-16">
            {siteContent.pricing.categories.map((category) => {
              const Icon = iconMap[category.icon as keyof typeof iconMap];

              return (
                <motion.div key={category.id} variants={slideInFromBottom} className="relative">
                  <div className="flex items-center gap-4 mb-8 border-b border-[#262626] pb-4">
                    <div className="text-[#B38728]">
                      {Icon && <Icon className="w-6 h-6" strokeWidth={1.5} />}
                    </div>
                    <h3 className="font-sans font-bold text-lg md:text-xl tracking-widest text-[#B38728] uppercase">
                      {category.name}
                    </h3>
                  </div>

                  <div className="space-y-8">
                    {category.services.map((service, index) => (
                      <div key={index} className="group relative pl-4 md:pl-8 border-l border-transparent hover:border-[#B38728]/30 transition-colors duration-300">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
                          <p className="font-serif text-xl md:text-2xl text-[#fafafa] font-medium tracking-wide">
                            {service.name}
                          </p>
                          <div className="flex items-center gap-4 text-[#B38728]">
                            <span className="font-sans font-bold text-lg md:text-xl whitespace-nowrap">
                              {service.price}
                            </span>
                          </div>
                        </div>
                        
                        <div className="flex flex-col md:flex-row md:justify-between gap-4 text-[#a3a3a3] text-sm">
                          <p className="max-w-xl leading-relaxed font-light">
                            {service.description}
                          </p>
                          <div className="flex items-center gap-2 whitespace-nowrap text-xs tracking-wider uppercase">
                            <span className="w-4 h-[1px] bg-[#B38728]/50" />
                            {service.duration}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#B38728]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#B38728]/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
