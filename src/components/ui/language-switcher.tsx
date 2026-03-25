"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/i18n/context";
import { languageMeta, type Language } from "@/i18n/translations";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const LANGUAGES = Object.entries(languageMeta) as [Language, { label: string; flag: string; htmlLang: string }][];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const current = languageMeta[language];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 bg-white/5 hover:border-[#B38728]/60 hover:bg-[#B38728]/10 transition-all duration-200 text-[#fafafa] text-xs font-bold tracking-wider select-none"
      >
        <span className="text-sm leading-none">{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown
          className={cn("w-3 h-3 text-[#a3a3a3] transition-transform duration-200", open && "rotate-180")}
        />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full mt-2 w-32 bg-[#171717] border border-white/10 rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] overflow-hidden z-[200]"
        >
          {LANGUAGES.map(([code, meta]) => (
            <button
              key={code}
              role="option"
              aria-selected={code === language}
              onClick={() => {
                setLanguage(code);
                setOpen(false);
              }}
              className={cn(
                "w-full flex items-center gap-2.5 px-3 py-2.5 text-xs font-bold tracking-wider transition-colors duration-150",
                code === language
                  ? "bg-[#B38728]/20 text-[#B38728]"
                  : "text-[#a3a3a3] hover:bg-white/5 hover:text-[#fafafa]"
              )}
            >
              <span className="text-sm">{meta.flag}</span>
              <span>{meta.label}</span>
              {code === language && (
                <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#B38728]" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
