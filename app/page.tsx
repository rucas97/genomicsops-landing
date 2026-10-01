"use client";

import Image from "next/image";
import Reveal from "@/components/Reveal";
import StatCounter from "@/components/StatCounter";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/i18n/LanguageContext";

const DOWNLOAD_URL =
  "https://github.com/rucas97/genomicsops-releases/releases/download/v0.1.0/GenomicsOps_0.1.0_x64-setup.exe";

const DOC_FILES = [
  "/docs/GenomicsOps-Catalog.pdf",
  "/docs/GenomicsOps-GettingStarted.pdf",
  "/docs/GenomicsOps-SLA.pdf",
];

const FEATURE_IMAGES = [
  "/screenshots/variant-drawer.png",
  "/screenshots/cnv-explorer.png",
  "/screenshots/trio-analysis.png",
  "/screenshots/cohort-pca.png",
  "/screenshots/pipeline-demo.png",
  "/screenshots/reports.png",
];

const TOUR_IMAGES = [
  "/screenshots/setup-data.png",
  "/screenshots/sample-details.png",
  "/screenshots/variant-page.png",
  "/screenshots/license.png",
];

export default function Landing() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen">
      {/* ============ NAV ============ */}
      <nav className="border-b border-slate-900 sticky top-0 z-50 bg-slate-950/90 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-2 md:gap-4">

          {/* ===== MOBILE LAYOUT: switcher | logo | download ===== */}
          <div className="flex md:hidden items-center justify-between w-full">
            <div className="flex-1 flex justify-start">
              <LanguageSwitcher />
            </div>
            <a href="#top" className="flex items-center justify-center">
              <Image
                src="/brand/logo.png"
                alt="GenomicsOps"
                width={140}
                height={36}
                className="h-7 w-auto"
                priority
              />
            </a>
            <div className="flex-1 flex justify-end">
              <a
                href={DOWNLOAD_URL}
                className="lift px-3 py-2 rounded-md bg-emerald-500 text-slate-950 text-xs font-medium hover:bg-emerald-400 transition whitespace-nowrap"
              >
                {t.nav.download}
              </a>
            </div>
          </div>

          {/* ===== DESKTOP LAYOUT: logo | links | switcher + download ===== */}
          <div className="hidden md:flex items-center justify-between w-full gap-4">
            <a href="#top" className="flex items-center gap-2 shrink-0">
              <Image
                src="/brand/logo.png"
                alt="GenomicsOps"
                width={140}
                height={36}
                className="h-9 w-auto"
                priority
              />
            </a>

            <div className="flex items-center gap-8 text-sm text-slate-400 flex-1 justify-center">
              <a href="#features" className="hover:text-slate-100 transition">
                {t.nav.features}
              </a>
              <a href="#tour" className="hover:text-slate-100 transition">
                {t.nav.tour}
              </a>
              <a href="#faq" className="hover:text-slate-100 transition">
                {t.nav.faq}
              </a>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <LanguageSwitcher />
              <a
                href={DOWNLOAD_URL}
                className="lift px-4 py-2 rounded-md bg-emerald-500 text-slate-950 text-sm font-medium hover:bg-emerald-400 transition whitespace-nowrap"
              >
                {t.nav.download}
              </a>
            </div>
          </div>

        </div>
      </nav>

      {/* ============ HERO ============ */}
      <section id="top" className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="max-w-3xl">
          <div className="hero-enter hero-d1 inline-flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-400 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            {t.hero.badge}
          </div>
          <h1 className="hero-enter hero-d2 text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] mb-6">
            {t.hero.h1}
          </h1>
          <p className="hero-enter hero-d3 text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
            {t.hero.subtitle}
          </p>
          <div className="hero-enter hero-d4 flex flex-wrap items-center gap-4">
            <a
              href={DOWNLOAD_URL}
              className="lift px-6 py-3 rounded-md bg-emerald-500 text-slate-950 font-medium hover:bg-emerald-400 transition"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#tour"
              className="lift px-6 py-3 rounded-md border border-slate-800 text-slate-300 hover:bg-slate-900 transition"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <div className="hero-enter hero-d4 mt-16 rounded-xl border border-slate-800 overflow-hidden shadow-2xl shadow-emerald-500/5">
          <Image
            src="/screenshots/dashboard.png"
            alt="GenomicsOps dashboard"
            width={1600}
            height={1000}
            className="w-full h-auto"
            priority
          />
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="border-y border-slate-900 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Reveal delay={0}>
              <div>
                <div className="text-3xl font-semibold text-emerald-400 mb-1.5 tabular-nums">
                  <StatCounter value={95.8} decimals={1} suffix="%" />
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {t.stats.acmg}
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <div className="text-3xl font-semibold text-emerald-400 mb-1.5 tabular-nums">
                  <StatCounter value={100} suffix="%" />
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {t.stats.cnv}
                </div>
              </div>
            </Reveal>
            <Reveal delay={200}>
              <div>
                <div className="text-3xl font-semibold text-emerald-400 mb-1.5 tabular-nums">
                  <StatCounter value={19363} separator />
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {t.stats.mane}
                </div>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div>
                <div className="text-3xl font-semibold text-emerald-400 mb-1.5">
                  0
                </div>
                <div className="text-xs text-slate-500 leading-relaxed">
                  {t.stats.offline}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-24">
        <Reveal className="mb-16 max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-emerald-400 mb-3">
            {t.features.label}
          </div>
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            {t.features.title}
          </h2>
          <p className="text-slate-400 leading-relaxed">
            {t.features.subtitle}
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.features.items.map((f, i) => (
            <Reveal key={f.title} delay={(i % 3) * 100} variant="scale">
              <div className="feature-card group rounded-lg border border-slate-800 bg-slate-900/40 overflow-hidden cursor-pointer h-full">
                <div className="aspect-video bg-slate-950 border-b border-slate-800 overflow-hidden">
                  <Image
                    src={FEATURE_IMAGES[i]}
                    alt={f.title}
                    width={800}
                    height={450}
                    className="feature-img w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-medium mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {f.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ PRODUCT TOUR ============ */}
      <section id="tour" className="border-t border-slate-900 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Reveal className="mb-16 max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-3">
              {t.tour.label}
            </div>
            <h2 className="text-4xl font-semibold tracking-tight mb-4">
              {t.tour.title}
            </h2>
            <p className="text-slate-400 leading-relaxed">
              {t.tour.subtitle}
            </p>
          </Reveal>

          <div className="space-y-20">
            {t.tour.steps.map((step, i) => {
              const flip = i % 2 === 1;
              return (
                <div
                  key={step.title}
                  className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                  <Reveal
                    variant={flip ? "right" : "left"}
                    className={flip ? "md:order-2" : ""}
                  >
                    <div className="text-xs text-emerald-400 font-mono mb-2">
                      0{i + 1}
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {step.body}
                    </p>
                  </Reveal>
                  <Reveal
                    variant={flip ? "left" : "right"}
                    delay={100}
                    className={flip ? "md:order-1" : ""}
                  >
                    <div className="feature-card rounded-lg border border-slate-800 overflow-hidden bg-slate-900">
                      <Image
                        src={TOUR_IMAGES[i]}
                        alt={step.title}
                        width={1200}
                        height={750}
                        className="w-full h-auto"
                      />
                    </div>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ PERSONAS ============ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <Reveal className="mb-16 max-w-2xl">
          <div className="text-xs uppercase tracking-widest text-emerald-400 mb-3">
            {t.personas.label}
          </div>
          <h2 className="text-4xl font-semibold tracking-tight mb-4">
            {t.personas.title}
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.personas.items.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 100} variant="up">
              <div className="feature-card rounded-lg border border-slate-800 bg-slate-900/40 p-6 h-full">
                <h3 className="font-medium mb-2">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section id="faq" className="border-t border-slate-900 bg-slate-950">
        <div className="max-w-3xl mx-auto px-6 py-24">
          <Reveal className="mb-12">
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-3">
              {t.faq.label}
            </div>
            <h2 className="text-4xl font-semibold tracking-tight mb-4">
              {t.faq.title}
            </h2>
          </Reveal>
          <div className="space-y-6">
            {t.faq.items.map((item, i) => (
              <Reveal key={item.q} delay={i * 60}>
                <div className="border-b border-slate-900 pb-6 last:border-0">
                  <h3 className="font-medium mb-2.5">{item.q}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DOCUMENTATION ============ */}
      <section className="border-t border-slate-900 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <Reveal className="mb-12 max-w-2xl">
            <div className="text-xs uppercase tracking-widest text-emerald-400 mb-3">
              {t.docs.label}
            </div>
            <h2 className="text-4xl font-semibold tracking-tight mb-4">
              {t.docs.title}
            </h2>
            <p className="text-slate-400 leading-relaxed">{t.docs.subtitle}</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.docs.items.map((doc, i) => (
              <Reveal key={doc.title} delay={i * 100} variant="scale">
                <a
                  href={DOC_FILES[i]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="feature-card group block rounded-lg border border-slate-800 bg-slate-900/40 p-6 hover:border-emerald-900/60 transition h-full"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-md bg-slate-800 flex items-center justify-center text-slate-300 group-hover:bg-emerald-500/15 group-hover:text-emerald-400 transition">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="9" y1="15" x2="15" y2="15" />
                        <line x1="9" y1="11" x2="15" y2="11" />
                      </svg>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-mono">
                      PDF
                    </div>
                  </div>
                  <h3 className="font-medium mb-2 group-hover:text-emerald-400 transition">
                    {doc.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {doc.body}
                  </p>
                  <div className="text-xs text-emerald-400 flex items-center gap-1.5">
                    {t.docs.openPdf}
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <Reveal variant="scale">
            <h2 className="text-4xl font-semibold tracking-tight mb-4">
              {t.cta.title}
            </h2>
            <p className="text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
              {t.cta.body}
            </p>
            <a
              href={DOWNLOAD_URL}
              className="lift inline-block px-8 py-3.5 rounded-md bg-emerald-500 text-slate-950 font-medium hover:bg-emerald-400 transition"
            >
              {t.cta.button}
            </a>
            <p className="text-xs text-slate-500 mt-4">
              {t.cta.requirements}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="border-t border-slate-900 bg-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-10">
            <div className="md:col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2.5 mb-3">
                <Image
                  src="/brand/logo.png"
                  alt="GenomicsOps"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
                />
              </div>
              <p className="text-sm text-slate-500 leading-relaxed max-w-sm">
                {t.footer.tagline}
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                {t.footer.productLabel}
              </div>
              <div className="space-y-2 text-sm">
                <a
                  href={DOWNLOAD_URL}
                  className="block text-slate-400 hover:text-slate-100 transition"
                >
                  {t.footer.download}
                </a>
                <a
                  href="#features"
                  className="block text-slate-400 hover:text-slate-100 transition"
                >
                  {t.footer.features}
                </a>
                <a
                  href="#faq"
                  className="block text-slate-400 hover:text-slate-100 transition"
                >
                  {t.footer.faq}
                </a>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                {t.footer.docsLabel}
              </div>
              <div className="space-y-2 text-sm">
                <a
                  href="/docs/GenomicsOps-GettingStarted.pdf"
                  className="block text-slate-400 hover:text-slate-100 transition"
                >
                  {t.footer.gettingStarted}
                </a>
                <a
                  href="/docs/GenomicsOps-Catalog.pdf"
                  className="block text-slate-400 hover:text-slate-100 transition"
                >
                  {t.footer.catalog}
                </a>
                <a
                  href="/docs/GenomicsOps-SLA.pdf"
                  className="block text-slate-400 hover:text-slate-100 transition"
                >
                  {t.footer.sla}
                </a>
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mb-3">
                {t.footer.contactLabel}
              </div>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:rez.anvaripour@gmail.com"
                  className="block text-slate-400 hover:text-slate-100 transition"
                >
                  sales@genomicsops.io
                </a>
                <a
                  href="mailto:rez.anvaripour@gmail.com"
                  className="block text-slate-400 hover:text-slate-100 transition"
                >
                  support@genomicsops.io
                </a>
                <a
                  href="mailto:rez.anvaripour@gmail.com"
                  className="block text-slate-400 hover:text-slate-100 transition"
                >
                  security@genomicsops.io
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-900 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs text-slate-500">
            <div>{t.footer.copyright}</div>
            <div className="text-amber-400/70">{t.footer.ruo}</div>
          </div>
        </div>
      </footer>
    </main>
  );
}
