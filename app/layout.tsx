import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GenomicsOps — Variant interpretation you can audit",
  description:
    "A Windows desktop workbench for variant interpretation. Runs offline with local ClinVar, gnomAD, and MANE. Transparent ACMG classification validated at 95.8% on 12,644 curated variants.",
  icons: {
    icon: "/brand/favicon-32.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
