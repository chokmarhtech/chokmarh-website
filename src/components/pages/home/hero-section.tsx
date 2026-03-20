import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const HeroSection = () => (
  <section className="gradient-hero relative min-h-screen flex items-center overflow-hidden">
    {/* Decorative elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div
        className="absolute bottom-32 left-[5%] w-96 h-96 rounded-full bg-primary/12 blur-3xl animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      {/* Green accent blobs */}
      <div
        className="absolute top-[30%] left-[25%] w-56 h-56 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: "hsl(155 62% 47% / 0.15)", animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-[20%] right-[15%] w-64 h-64 rounded-full blur-3xl animate-pulse-glow"
        style={{ background: "hsl(155 62% 47% / 0.10)", animationDelay: "3s" }}
      />
      <div className="absolute top-1/3 right-[20%] w-px h-40" style={{ background: "linear-gradient(to bottom, transparent, hsl(157 64% 47% / 0.8), transparent)" }} />
      <div className="absolute top-[20%] left-[15%] w-px h-32" style={{ background: "linear-gradient(to bottom, transparent, hsl(157 64% 47% / 0.6), transparent)" }} />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(214 83% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(214 83% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>

    <div className="container mx-auto px-6 pt-28 pb-20 relative z-10 max-w-[1280px]">
      <div className="max-w-3xl mx-auto text-center">
        <ScrollReveal>
          <span className="inline-block text-white font-body text-sm font-medium tracking-widest uppercase mb-6 bg-accent px-4 py-1 rounded-full">
            The Wise Master Builders
          </span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h1 className="text-center font-headline text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-foreground">
            Building Digital Products That{" "}
            <span className="text-gradient">Scale.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="text-center text-md md:text-lg text-muted-foreground mb-10 leading-tight">
            We partner with startups and forward-thinking organizations to
            design, build, and refine high-performance digital products, from
            concept to launch and beyond.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <Button
                size="lg"
                className="gradient-cta text-primary-foreground font-semibold px-8 py-6 text-base border-0 glow-blue-hover transition-all duration-300 rounded-full"
              >
                Start Your Project
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-6 text-base font-semibold bg-transparent border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary rounded-full transition-all"
              >
                View Our Capabilities
              </Button>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default HeroSection