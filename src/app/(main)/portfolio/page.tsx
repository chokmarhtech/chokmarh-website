"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects, Project } from "@/lib/portfolio-data";

const PortfolioPage = () => {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-white font-body">
      {/* Hero Section */}
      <section className="relative pt-16 pb-16 md:pt-32 md:pb-16 px-6 overflow-hidden">
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
                Portfolio
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
                Our Work. <br className="hidden md:block" />
                Engineered for <span className="text-gradient">Impact.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                A showcase of digital products crafted with precision, strategy,
                and technical excellence. From startups to enterprise solutions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 px-2 border-t border-border/50">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <Link href={`/portfolio/${project.slug}`} className="group block h-full">
                  <div className={`relative rounded-3xl ${project.color || 'bg-muted'} border border-border/50 overflow-hidden mb-6 group-hover:border-primary/30 transition-all duration-500`}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="aspect-[4/5] w-full flex items-center justify-center">
                        <span className="font-headline text-2xl font-black text-primary/10 uppercase tracking-widest rotate-[-15deg]">
                          {project.title}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                        <ArrowUpRight className="w-8 h-8" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3 px-2 flex flex-col h-full">
                    <div className="flex items-center gap-3">
                      <project.icon className="w-4 h-4 text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                        {project.category}
                      </span>
                      <span className="text-[10px] font-medium text-muted-foreground">
                        / {project.year}
                      </span>
                    </div>
                    <h3 className="font-headline text-2xl font-bold group-hover:text-primary transition-colors tracking-tight uppercase">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {project.desc}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
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
                  ADD YOURS?
                </h2>
                <p className="text-muted-foreground max-w-md mt-6">
                  Let&apos;s discuss how we can bring your next product to life
                  with the same level of precision and excellence.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="gradient-cta text-white font-bold px-10 py-8 rounded-full text-lg shadow-[0_0_30px_rgba(26,115,232,0.3)] group transition-all"
                >
                  Begin the Conversation{" "}
                  <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
