"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Search, Lightbulb, PenTool, Code, TestTube, Send } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Discovery",
    desc: "We define goals, users, and technical requirements. This phase ensures we understand your business deeply before writing a single line of code.",
  },
  {
    icon: Lightbulb,
    number: "02",
    title: "Strategy",
    desc: "We outline architecture and roadmap. Every decision is mapped to your goals, timeline, and growth trajectory.",
  },
  {
    icon: PenTool,
    number: "03",
    title: "Design",
    desc: "We craft user-centered digital experiences. From wireframes to polished interfaces, every pixel serves a purpose.",
  },
  {
    icon: Code,
    number: "04",
    title: "Engineering",
    desc: "We build robust, scalable systems using modern tech stacks. Performance and security are engineered from the ground up.",
  },
  {
    icon: TestTube,
    number: "05",
    title: "Testing",
    desc: "Rigorous quality assurance ensures a bug-free experience. We test for performance, usability, and edge cases.",
  },
  {
    icon: Send,
    number: "06",
    title: "Launch",
    desc: "We handle the deployment and ensure a smooth transition to production. Your product is ready for the real world.",
  },
];

const ProcessPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-white font-body">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
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
                Our Methodology
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                A Structured Path <br className="hidden md:block" />
                To <span className="text-gradient">Execution.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Great products aren&apos;t built by accident. We follow a rigorous process 
                that transforms complex ideas into seamless digital experiences.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Numbered Process List (UI Pattern: List with Arrows) */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-[1280px]">
          <div className="divide-y divide-border/50">
            {steps.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 0.1}>
                <div className="group py-12 md:py-16 grid md:grid-cols-12 gap-6 items-start hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl relative">
                  <div className="md:col-span-4 flex items-center gap-6">
                    <span className="font-headline text-4xl md:text-6xl font-bold text-primary/20 group-hover:text-primary transition-colors duration-500">
                      {step.number}
                    </span>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors">
                      {step.title}
                    </h2>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  <div className="md:col-span-2 flex justify-end">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section (UI Pattern: Split Layout with White BG) */}
      <section className="py-32 md:py-48 px-6 bg-white text-background overflow-hidden relative">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h3 className="text-accent font-headline text-2xl md:text-3xl font-bold uppercase tracking-tighter">
                  Our Philosophy.
                </h3>
                <h2 className="font-headline text-5xl md:text-7xl font-bold leading-none tracking-tight text-background">
                  Built with Rigor. <br />
                  Shipped with Care.
                </h2>
                <p className="text-xl font-bold text-gray-800">
                  Precision is not a goal; it&apos;s our baseline.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-6 text-gray-600 max-w-lg">
                <p>
                  We don&apos;t believe in "moving fast and breaking things." We believe in moving with intent. 
                  Every sprint, every code review, and every design iteration is guided by a commitment to technical excellence.
                </p>
                <p>
                  Our process is collaborative and transparent. You&apos;ll never be in the dark about where your project stands or what the next milestone looks like.
                  <span className="text-background font-semibold underline decoration-accent underline-offset-4 ml-1">
                    We build for the long term.
                  </span>
                </p>
                <p>
                  Whether it&apos;s an MVP or a complex enterprise system, the methodology remains the same: understand, architect, engineer, and refine.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ROI CTA Section */}
      <section className="py-32 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-[1280px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <ScrollReveal>
              <div className="text-center md:text-left">
                <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase">
                  READY TO
                </h2>
                <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase text-accent">
                  START BUILDING
                </h2>
                <p className="text-muted-foreground max-w-md mt-6">
                   Your vision deserves a process that can realize it. 
                   Let&apos;s map out your project roadmap together and start building something that works.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link href="/contact">
                <Button size="lg" className="gradient-cta text-white font-bold px-10 py-8 rounded-full text-lg shadow-[0_0_30px_rgba(26,115,232,0.3)] group">
                  Begin the Conversation <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessPage;
