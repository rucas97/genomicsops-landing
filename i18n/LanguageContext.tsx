"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  LOCALES,
  TRANSLATIONS,
  type Locale,
  type Translation,
} from "./translations";

type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Translation;
  dir: "ltr" | "rtl";
};

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "genomicsops-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (stored && TRANSLATIONS[stored]) {
        setLocaleState(stored);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const meta = LOCALES.find((l) => l.code === locale);
    document.documentElement.dir = meta?.dir ?? "ltr";
    document.documentElement.lang = locale;
  }, [locale, mounted]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  };

  const meta = LOCALES.find((l) => l.code === locale);
  const value: Ctx = {
    locale,
    setLocale,
    t: TRANSLATIONS[locale],
    dir: meta?.dir ?? "ltr",
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): Ctx {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
