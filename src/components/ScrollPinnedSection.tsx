"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ScrollPinnedSectionProps {
  children: ReactNode;
  className?: string;
}

const ScrollPinnedSection = ({ children, className }: ScrollPinnedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        scrub: 0.6,
        start: "top top",
        end: "+=130%",
        invalidateOnRefresh: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className={className}>
      {children}
    </section>
  );
};

export default ScrollPinnedSection;
