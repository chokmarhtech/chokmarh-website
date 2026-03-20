import ScrollReveal from "@/components/ScrollReveal";
import React from "react";

const OurDifference = () => {
  const highlights = ["randomly", "intention", "structure", "accountability"];

  const formatLine = (text: string) => {
    const parts = text.split(new RegExp(`(${highlights.join("|")})`, "gi"));
    return parts.map((part, i) =>
      highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
        <span key={i} className="text-accent">
          {part}
        </span>
      ) : (
        part
      )
    );
  };

  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <ScrollReveal>
          <span className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-6 block">
            Our Difference
          </span>
        </ScrollReveal>
        {[
          "We do not build randomly.",
          "We design with intention.",
          "We engineer with structure.",
          "We deliver with accountability.",
        ].map((line, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <p className="font-headline text-2xl md:text-4xl lg:text-5xl font-bold text-secondary leading-tight mb-4 text-balance">
              {formatLine(line)}
            </p>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default OurDifference;
