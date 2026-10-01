"use client";

import { useEffect, useRef, useState } from "react";
import { LOCALES } from "@/i18n/translations";
import { useLanguage } from "@/i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  // Hide the switcher entirely when there's only one locale active.
  // This is the current state while non-English is disabled.
  if (LOCALES.length <= 1) return null;

  const current = LOCALES.find((l) => l.code === locale);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm text-slate-400 hover:text-slate-100 hover:bg-slate-900 transition"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span>{current?.label}</span>
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 min-w-[140px] rounded-md border border-slate-800 bg-slate-950 shadow-xl z-50 overflow-hidden">
          {LOCALES.map((l) => (
            <button
              key={l.code}
              onClick={() => {
                setLocale(l.code);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm transition ${
                l.code === locale
                  ? "bg-slate-900 text-emerald-400"
                  : "text-slate-400 hover:bg-slate-900 hover:text-slate-100"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
