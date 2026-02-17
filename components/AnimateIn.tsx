"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type AnimationType =
  | "fade-in"
  | "fade-in-up"
  | "fade-in-down"
  | "scale-in"
  | "slide-in-right";

const animationClasses: Record<AnimationType, string> = {
  "fade-in": "animate-fade-in",
  "fade-in-up": "animate-fade-in-up",
  "fade-in-down": "animate-fade-in-down",
  "scale-in": "animate-scale-in",
  "slide-in-right": "animate-slide-in-right",
};

interface AnimateInProps {
  children: ReactNode;
  animation?: AnimationType;
  className?: string;
  /** Delay in milliseconds before the animation starts */
  delay?: number;
  /** Root margin for intersection observer */
  rootMargin?: string;
  /** Only run animation once (default: true) */
  once?: boolean;
  as?: "div" | "section" | "span" | "article" | "aside" | "header" | "footer" | "main" | "li" | "ul";
}

export function AnimateIn({
  children,
  animation = "fade-in-up",
  className,
  delay = 0,
  rootMargin = "0px 0px -40px 0px",
  once = true,
  as: Tag = "div",
}: AnimateInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, rootMargin]);

  const style: CSSProperties = visible
    ? { animationDelay: delay ? `${delay}ms` : undefined, animationFillMode: "both" }
    : { opacity: 0 };

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(visible && animationClasses[animation], className)}
      style={style}
    >
      {children}
    </Tag>
  );
}
