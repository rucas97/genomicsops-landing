"use client";

import { useEffect, useRef, useState } from "react";

type Variant = "up" | "left" | "right" | "scale";

export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  variant?: Variant;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const variantClass =
    variant === "left" ? "reveal-left"
    : variant === "right" ? "reveal-right"
    : variant === "scale" ? "reveal-scale"
    : "";

  const Comp = Tag as any;
  return (
    <Comp
      ref={ref}
      className={`reveal ${variantClass} ${visible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}
