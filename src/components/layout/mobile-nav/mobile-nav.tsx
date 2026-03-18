"use client";

import { motion } from "framer-motion";
import { slideInFromBottom } from "@/lib/variants";
import { Home, Calendar, Scissors, Phone, Info } from "lucide-react";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "HOME", href: "#home" },
  { icon: Scissors, label: "USŁUGI", href: "#uslugi" },
  { icon: Info, label: "O NAS", href: "#o-nas" },
  { icon: Phone, label: "KONTAKT", href: "#kontakt" },
];

export function MobileNav() {
  const [activeSection, setActiveSection] = useState("#home");
  const isClickingRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      // Don't update from scroll if user just clicked
      if (isClickingRef.current) return;
      
      const sections = navItems.map(item => item.href.substring(1));
      let foundSection = null;
      
      // Find the section that's most visible in the viewport
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Section is considered active if its top is within the upper portion of viewport
          // accounting for the fixed header (80px offset)
          if (rect.top <= 120 && rect.bottom > 120) {
            foundSection = section;
            break;
          }
        }
      }

      if (foundSection) {
        setActiveSection(`#${foundSection}`);
      } else if (window.scrollY < 50) {
        setActiveSection("#home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Block scroll handler temporarily
    isClickingRef.current = true;
    
    // Immediately update active section for instant visual feedback
    setActiveSection(href);
    
    if (href === "#home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Re-enable scroll handler after animation completes
      setTimeout(() => {
        isClickingRef.current = false;
      }, 1200);
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const y = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      // Re-enable scroll handler after scroll animation completes
      setTimeout(() => {
        isClickingRef.current = false;
      }, 1200);
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideInFromBottom}
      className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pb-safe"
    >
      <div className="bg-[#171717]/95 backdrop-blur-xl border-t border-white/5 px-4 py-3 rounded-t-[2rem] shadow-[0_-10px_40px_rgba(0,0,0,0.8)] relative overflow-hidden">
        {/* Subtelny złoty gradient na górnej krawędzi */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B38728]/50 to-transparent" />
        
        <nav className="flex justify-between items-center max-w-md mx-auto relative z-10 px-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.href;
            const Icon = item.icon;
            
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="flex flex-col items-center gap-1 min-w-[64px]"
              >
                <div
                  className={cn(
                    "p-2.5 rounded-full transition-all duration-300 relative",
                    isActive ? "text-[#0a0a0a] scale-110" : "text-[#a3a3a3] hover:text-[#fafafa]"
                  )}
                >
                  {/* Tło dla aktywnego elementu (złoty gradient) */}
                  {isActive && (
                    <motion.div
                      layoutId="active-nav-bg"
                      className="absolute inset-0 bg-gradient-to-br from-[#B38728] via-[#FBF5B7] to-[#AA771C] rounded-full shadow-[0_0_15px_rgba(179,135,40,0.4)]"
                      initial={false}
                      transition={{ 
                        type: "tween",
                        duration: 0.3,
                        ease: [0.4, 0, 0.2, 1]
                      }}
                    />
                  )}
                  <Icon className="w-5 h-5 relative z-10" strokeWidth={isActive ? 2.5 : 2} />
                </div>
                <span
                  className={cn(
                    "text-[9px] font-bold tracking-widest transition-colors duration-300",
                    isActive ? "text-[#B38728]" : "text-[#a3a3a3]"
                  )}
                >
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>
      </div>
    </motion.div>
  );
}
