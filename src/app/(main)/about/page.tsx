"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Target, Compass, Heart, Handshake } from "lucide-react";
import Link from "next/link";

const pillars = [
  {
    icon: Target,
    title: "Strategic Thinking",
    desc: "We think before we build. Every decision is backed by research and strategy.",
  },
  {
    icon: Compass,
    title: "Clean Architecture",
    desc: "Scalable, maintainable code structures that grow with your business.",
  },
  {
    icon: Heart,
    title: "Human-Centered Design",
    desc: "Every interface is crafted for real people with real needs.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "We don't just deliver and leave. We grow with our clients.",
  },
];

const AboutPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-white font-body">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
          <div
            className="absolute bottom-32 left-[5%] w-96 h-96 rounded-full bg-primary/12 blur-3xl animate-pulse-glow"
            style={{ animationDelay: "2s" }}
          />
          {/* Green accent blobs */}
          <div
            className="absolute top-[30%] left-[25%] w-56 h-56 rounded-full blur-3xl animate-pulse-glow"
            style={{
              background: "hsl(155 62% 47% / 0.15)",
              animationDelay: "1s",
            }}
          />
          <div
            className="absolute bottom-[20%] right-[15%] w-64 h-64 rounded-full blur-3xl animate-pulse-glow"
            style={{
              background: "hsl(155 62% 47% / 0.10)",
              animationDelay: "3s",
            }}
          />
          <div
            className="absolute top-1/3 right-[20%] w-px h-40"
            style={{
              background:
                "linear-gradient(to bottom, transparent, hsl(157 64% 47% / 0.8), transparent)",
            }}
          />
          <div
            className="absolute top-[20%] left-[15%] w-px h-32"
            style={{
              background:
                "linear-gradient(to bottom, transparent, hsl(157 64% 47% / 0.6), transparent)",
            }}
          />
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

        <div className="container mx-auto max-w-[1280px] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="text-accent font-body text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6 block">
                About Us
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-headline text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1]">
                Built With Intent. <br className="hidden md:block" />
                Engineered With <span className="text-gradient">Excellence.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed">
                Chokmarh Technologies was founded on a simple principle: great digital products are not rushed — they are carefully designed, methodically built, and continuously refined.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="py-16 md:py-20 px-2 border-t border-border/50">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="mb-8 md:mb-12">
               <h2 className="font-headline text-xs md:text-sm font-bold uppercase tracking-[0.2em] md:tracking-[0.3em] text-primary">What Defines Us</h2>
            </div>
          </ScrollReveal>
          <div className="divide-y divide-border/50">
            {pillars.map((pillar, i) => (
              <ScrollReveal key={pillar.title} delay={i * 0.1}>
                <div className="group py-8 md:py-16 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 items-start hover:bg-white/[0.02] transition-colors px-2 md:px-4 -mx-2 md:-mx-4 rounded-xl">
                  <div className="md:col-span-4 flex items-center gap-4">
                    <pillar.icon className="w-6 h-6 md:w-8 md:h-8 text-primary shrink-0" />
                    <h2 className="font-headline text-2xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                      {pillar.title}
                    </h2>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="md:col-span-2 flex justify-end md:static absolute right-4 top-10">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-48 px-2 bg-white text-background overflow-hidden relative">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-accent font-headline text-xl md:text-3xl font-bold uppercase tracking-tighter">
                  Our Story.
                </h3>
                <h2 className="font-headline text-4xl md:text-7xl font-bold leading-[1.1] tracking-tight">
                  Design Thinking. <br />
                  Modern Engineering.
                </h2>
                <p className="text-lg md:text-xl font-bold text-gray-800">
                  Where strategy meets execution.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-4 md:space-y-6 text-gray-600 text-base md:text-lg max-w-lg">
                <p>
                  We operate at the intersection of design thinking and modern engineering, helping businesses move confidently from idea to execution. 
                  Chokmarh Technologies isn&apos;t just a development studio; we are an extension of your creative and technical team.
                </p>
                <p>
                  Our foundation is built on the belief that digital products should handle real users with ease. 
                  <span className="text-background font-semibold underline decoration-accent underline-offset-4 ml-1">
                    Precision is our baseline.
                  </span>
                </p>
                <p>
                  From Lagos to the rest of the world, we partner with startups and forward-thinking organizations to design, build, and refine high-performance digital products.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32 px-2">
        <div className="container mx-auto max-w-[1280px]">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-20">
               <h2 className="font-headline text-3xl md:text-6xl font-bold mb-4 uppercase tracking-tighter leading-tight">
                 The Path <br />
                 <span className="text-gradient">Forward</span>
               </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {/* Mission */}
            <ScrollReveal>
              <div className="p-8 md:p-10 rounded-3xl h-full flex flex-col bg-card border border-border shadow-2xl">
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 text-primary">
                  Our Mission
                </span>
                <h3 className="font-headline text-3xl md:text-5xl font-bold mb-4 md:mb-6 uppercase tracking-tighter leading-tight">
                  Impact & <br /> Growth.
                </h3>
                <p className="mb-8 md:mb-10 text-base md:text-lg leading-relaxed text-muted-foreground">
                  To design and engineer digital products that create measurable impact and sustainable growth for our partners. Every line of code is written with your success in mind.
                </p>
                
                <div className="mt-auto flex gap-2 flex-wrap">
                  {["Impact", "Growth", "Success", "Partnership"].map((item) => (
                    <div key={item} className="text-[9px] md:text-[10px] font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-border bg-background/50 uppercase tracking-widest">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Vision */}
            <ScrollReveal delay={0.2}>
              <div className="p-8 md:p-10 rounded-3xl h-full flex flex-col bg-primary text-white shadow-[0_0_50px_-12px_rgba(26,115,232,0.5)]">
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest mb-4 md:mb-6 text-white/60">
                  Our Vision
                </span>
                <h3 className="font-headline text-3xl md:text-5xl font-bold mb-4 md:mb-6 uppercase tracking-tighter leading-tight">
                  Global <br /> Excellence.
                </h3>
                <p className="mb-8 md:mb-10 text-base md:text-lg leading-relaxed text-white/80">
                  To become a trusted product development partner across Africa and globally, setting the standard for how high-performance digital products are built and scaled.
                </p>
                
                <div className="mt-auto flex gap-2 flex-wrap">
                  {["Africa", "Global", "Excellence", "Trust"].map((item) => (
                    <div key={item} className="text-[9px] md:text-[10px] font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/20 bg-black/10 uppercase tracking-widest">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ROI CTA Section */}
      <section className="py-20 md:py-32 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-[1280px]">
          <div className="flex flex-col items-center justify-center text-center">
            <ScrollReveal>
              <div>
                <h2 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter mb-2 md:mb-4 uppercase leading-none">
                  BUILD WITH
                </h2>
                <h2 className="font-headline text-4xl md:text-7xl font-bold tracking-tighter mb-4 md:mb-6 uppercase text-accent leading-none">
                  PRECISION
                </h2>
                <p className="text-muted-foreground text-base md:text-lg max-w-md mx-auto mb-8 md:mb-10">
                   Let&apos;s create something meaningful together. Our focus stays the same: 
                   turning your vision into a production-ready reality.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
