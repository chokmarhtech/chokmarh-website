"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Palette, Globe, Smartphone, Rocket, Settings, Cpu, Activity, LayoutPanelTop } from "lucide-react";
import Link from "next/link";
import { processSteps } from "@/constant";

const serviceData = [
  {
    icon: Palette,
    title: "Product Design",
    desc: "We create user-centered digital experiences that balance aesthetics with function. Strategic UX and refined UI systems designed for usability and growth.",
    includes: ["UX Research", "Wireframing", "Interface Design", "Design Systems", "Prototyping"],
  },
  {
    icon: Globe,
    title: "Web Platforms",
    desc: "Robust web platforms engineered for security, performance, and scale. From corporate sites to complex custom applications.",
    includes: ["Corporate Sites", "Web Apps", "Dashboards", "CMS Integration"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Modern cross-platform mobile apps engineered for reliability and a seamless experience on every device.",
    includes: ["iOS & Android", "API Integration", "Auth Systems", "App Store Support"],
  },
  {
    icon: Cpu,
    title: "Automated Systems",
    desc: "Custom workflow automation and intelligent systems that eliminate manual bottlenecks. We build the logic that powers your growth.",
    includes: ["Workflow Automation", "API Orchestration", "Data Processing", "Legacy Integration"],
  },
  {
    icon: Activity,
    title: "IoT Enabled Systems",
    desc: "Connecting hardware to software with real-time monitoring and smart device ecosystems. Real-time data from the physical world.",
    includes: ["Device Integration", "Real-time Dashboards", "Sensor Networks", "Fleet Monitoring"],
  },
  {
    icon: LayoutPanelTop,
    title: "Internal Tooling",
    desc: "Bespoke administrative panels and operational tools built to power your internal teams and optimize overhead.",
    includes: ["Admin Panels", "Custom CMS", "Operations CRM", "Data Visualization"],
  },
];

const specializedServices = [
  {
    title: "MVP Development",
    desc: "Structured product development that transforms ideas into launch-ready solutions efficiently.",
    includes: ["Idea Validation", "Rapid Prototyping", "Core Build", "Launch Strategy"],
  },
  {
    title: "Ongoing Support",
    desc: "Continuous improvement, optimization, and product evolution to keep your systems at peak performance.",
    includes: ["Monitoring", "Bug Fixes", "Updates", "Technical Consultation"],
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-white font-body">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-[10%] w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-32 left-[5%] w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="container mx-auto max-w-[1280px] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <span className="text-accent font-body text-xs md:text-sm font-semibold tracking-widest uppercase mb-4 md:mb-6 block">
                Our Services
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                We think first. <br className="hidden md:block" />
                Then we <span className="text-gradient">build.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Most projects start with tools and timelines. Ours start with understanding. 
                Whether you need a one-off build or an ongoing partnership, 
                the measure is the same: did it work?
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Primary Services List (UI Pattern: List with Arrows) */}
      <section className="py-20 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-[1280px]">
          <div className="divide-y divide-border/50">
            {serviceData.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 0.1}>
                <div className="group py-12 md:py-16 grid md:grid-cols-12 gap-6 items-start hover:bg-white/[0.02] transition-colors px-4 -mx-4 rounded-xl">
                  <div className="md:col-span-4 flex items-center gap-4">
                    <service.icon className="w-8 h-8 text-primary" />
                    <h2 className="font-headline text-2xl md:text-4xl font-bold group-hover:text-primary transition-colors uppercase tracking-tighter">
                      {service.title}
                    </h2>
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.includes.map((item) => (
                        <span key={item} className="text-[10px] font-bold px-3 py-1 rounded-full border border-border bg-secondary/30 uppercase tracking-widest">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2 flex justify-end">
                    <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded Partnership Section */}
      <section className="py-32 md:py-48 px-6 bg-white text-background overflow-hidden relative">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h3 className="text-accent font-headline text-2xl md:text-3xl font-bold uppercase tracking-tighter">
                  Your tech arm.
                </h3>
                <h2 className="font-headline text-5xl md:text-7xl font-bold leading-none tracking-tight text-background">
                  Not an outside vendor.
                </h2>
                <p className="text-xl font-bold text-gray-800">
                  This isn&apos;t outsourcing. It&apos;s embedded partnership.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-6 text-gray-600 max-w-lg">
                <p>
                  At <span className="text-primary font-bold">Chokmarh</span>, we don&apos;t just deliver assets; we integrate with your vision. 
                  We serve clients who know exactly what they need, as well as those who need a partner to handle the entire digital ecosystem.
                </p>
                <p>
                  For one-off projects, we build with rigor and hand off clean. 
                  For ongoing partnerships, we stay embedded and keep improving.
                  <span className="text-background font-semibold underline decoration-accent underline-offset-4 ml-1">
                    We serve both.
                  </span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-[1280px]">
          <div className="mb-20">
             <ScrollReveal>
               <h2 className="font-headline text-4xl font-bold mb-2">How we work</h2>
               <span className="text-muted-foreground font-medium tracking-tight block">Here&apos;s how it works →</span>
             </ScrollReveal>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.label} delay={i * 0.1}>
                <div className="gradient-card p-8 rounded-2xl h-full border border-border/50 hover:border-primary/30 transition-all duration-500 group text-center">
                  <step.icon className="w-8 h-8 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="font-headline text-sm font-bold uppercase tracking-widest">
                    {step.label}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Models */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-[1280px]">
          <ScrollReveal>
            <div className="text-center mb-20">
               <h2 className="font-headline text-4xl md:text-6xl font-bold mb-4 uppercase tracking-tighter leading-tight">
                 Two ways to <br />
                 <span className="text-gradient">partner with us</span>
               </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="p-10 rounded-3xl h-full flex flex-col bg-card border border-border shadow-2xl">
                <span className="text-sm font-bold uppercase tracking-widest mb-6 text-primary">
                  For Launch
                </span>
                <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                  Build With Chokmarh
                </h3>
                <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
                  {specializedServices[0].desc}
                </p>
                <div className="mt-auto grid grid-cols-2 gap-4">
                  {specializedServices[0].includes.map((item) => (
                    <div key={item} className="text-[10px] font-bold p-3 rounded-lg border border-border bg-background/50 flex items-center justify-center text-center uppercase tracking-widest">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="p-10 rounded-3xl h-full flex flex-col bg-primary text-white shadow-[0_0_50px_-12px_rgba(26,115,232,0.5)]">
                <span className="text-sm font-bold uppercase tracking-widest mb-6 text-white/60">
                  For Growth
                </span>
                <h3 className="font-headline text-4xl md:text-5xl font-bold mb-6 tracking-tighter">
                  Scale With Chokmarh
                </h3>
                <p className="mb-10 text-lg leading-relaxed text-white/80">
                  {specializedServices[1].desc}
                </p>
                <div className="mt-auto grid grid-cols-2 gap-4">
                  {specializedServices[1].includes.map((item) => (
                    <div key={item} className="text-[10px] font-bold p-3 rounded-lg border border-white/20 bg-black/10 flex items-center justify-center text-center uppercase tracking-widest">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ROI Footer Section */}
      <section className="py-32 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-[1280px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <ScrollReveal>
              <div className="text-center md:text-left">
                <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase leading-none">
                  THE GOAL IS
                </h2>
                <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase text-accent leading-none">
                  ALWAYS ROI
                </h2>
                <p className="text-muted-foreground max-w-md mt-6">
                   Every launch is a baseline. Every system is measured by what it produces. 
                   At <span className="text-primary font-bold">Chokmarh</span>, we build systems that scale.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link href="/contact">
                <Button size="lg" className="gradient-cta text-white font-bold px-10 py-8 rounded-full text-lg shadow-[0_0_30px_rgba(26,115,232,0.3)]">
                  Start a Conversation
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
