"use client";

import { motion } from "framer-motion";
import { slideInFromBottom, staggerContainer } from "@/lib/variants";
import { siteContent } from "@/config/site-content";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function GallerySection() {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [api, setApi] = useState<CarouselApi>();

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  return (
    <section id="galeria" className="py-20 md:py-24 lg:py-32 relative bg-[#171717] min-h-screen border-t border-white/5 scroll-mt-14 md:scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
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
              {siteContent.gallery.title}
            </motion.h2>
            <motion.p 
              variants={slideInFromBottom}
              className="text-[#a3a3a3] text-sm md:text-base tracking-[0.2em] uppercase max-w-2xl mx-auto"
            >
              {siteContent.gallery.subtitle}
            </motion.p>
          </div>

          {/* Grid Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
            {siteContent.gallery.images.map((image, index) => (
              <motion.div
                key={index}
                variants={slideInFromBottom}
                className={`relative group overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer ${
                  index === 0 ? "col-span-2 md:col-span-1" : ""
                }`}
                onClick={() => openLightbox(index)}
              >
                <div className="absolute inset-0 bg-[#0a0a0a] animate-pulse" /> {/* Placeholder */}
                
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <span className="font-sans font-bold text-xs tracking-widest text-[#B38728] uppercase">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social CTA */}
          <motion.div 
            variants={slideInFromBottom}
            className="mt-32 max-w-2xl mx-auto"
          >
            <div className="bg-[#0a0a0a] rounded-[2rem] p-8 md:p-12 border border-white/5 text-center relative overflow-hidden group">
              {/* Animated Border Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#B38728]/10 to-transparent group-hover:via-[#B38728]/20 transition-colors duration-700" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto bg-[#B38728]/10 rounded-full flex items-center justify-center mb-6 text-[#B38728]">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-[#fafafa] mb-4">
                  {siteContent.social.title}
                </h3>
                
                <p className="text-[#a3a3a3] text-sm md:text-base mb-8">
                  {siteContent.social.subtitle}
                </p>

                <a
                  href={siteContent.contact.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#B38728] text-[#0a0a0a] px-8 py-4 rounded-full font-bold tracking-widest text-sm hover:bg-[#FBF5B7] transition-colors duration-300"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.88z"/>
                  </svg>
                  {siteContent.social.cta}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Lightbox / Dialog */}
      <Dialog open={selectedImageIndex !== null} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent className="max-w-[100vw] max-h-[100vh] w-screen h-screen p-0 m-0 bg-black/95 border-none shadow-none flex flex-col justify-center items-center [&>button]:hidden sm:[&>button]:flex sm:[&>button]:right-6 sm:[&>button]:top-6 sm:[&>button]:text-white sm:[&>button]:hover:text-[#B38728] sm:[&>button]:w-10 sm:[&>button]:h-10 sm:[&>button]:bg-black/50 sm:[&>button]:rounded-full sm:[&>button]:items-center sm:[&>button]:justify-center">
          <VisuallyHidden>
            <DialogTitle>Podgląd zdjęcia</DialogTitle>
            <DialogDescription>Powiększone zdjęcie z galerii</DialogDescription>
          </VisuallyHidden>
          
          <div className="absolute top-4 right-4 sm:hidden z-50">
            <button 
              onClick={closeLightbox}
              className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:text-[#B38728] transition-colors"
              aria-label="Zamknij"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
          </div>

          <Carousel 
            setApi={setApi} 
            opts={{ 
              startIndex: selectedImageIndex ?? 0,
              loop: true,
            }}
            className="w-full h-full flex items-center justify-center"
          >
            <CarouselContent className="h-full ml-0">
              {siteContent.gallery.images.map((image, index) => (
                <CarouselItem key={index} className="h-full w-full flex items-center justify-center p-0 pl-0 relative">
                  <div className="relative w-full h-full max-h-[100dvh] flex items-center justify-center p-2 sm:p-12">
                    <div className="relative w-full h-full max-w-5xl mx-auto">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-contain"
                        sizes="100vw"
                        priority={index === selectedImageIndex}
                      />
                    </div>
                  </div>
                  <div className="absolute bottom-6 sm:bottom-12 left-0 right-0 text-center pointer-events-none">
                    <span className="bg-black/60 backdrop-blur-md text-[#B38728] px-4 py-2 rounded-full text-sm font-bold tracking-widest uppercase inline-block">
                      {image.alt}
                    </span>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden sm:block">
              <CarouselPrevious className="left-6 w-12 h-12 bg-black/50 border-white/10 text-white hover:bg-[#B38728] hover:text-black transition-all" />
              <CarouselNext className="right-6 w-12 h-12 bg-black/50 border-white/10 text-white hover:bg-[#B38728] hover:text-black transition-all" />
            </div>
          </Carousel>
        </DialogContent>
      </Dialog>
    </section>
  );
}
