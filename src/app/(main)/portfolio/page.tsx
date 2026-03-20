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
      <section className="py-20 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-[1280px]">
          <div className="divide-y divide-border/50">
            {projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 0.1}>
                <div className="group py-12 md:py-24 grid md:grid-cols-12 gap-8 items-center hover:bg-white/[0.02] transition-all px-4 -mx-4 rounded-3xl relative">
                  <div className="md:col-span-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <project.icon className="w-5 h-5 text-primary" />
                      <span className="text-xs font-bold uppercase tracking-widest text-primary">
                        {project.category}
                      </span>
                      <span className="text-xs font-medium text-muted-foreground">
                        / {project.year}
                      </span>
                    </div>
                    <Link href={`/portfolio/${project.slug}`}>
                      <h2 className="font-headline text-4xl md:text-5xl font-bold group-hover:text-primary transition-colors leading-tight cursor-pointer">
                        {project.title}
                      </h2>
                    </Link>
                  </div>

                  <div className="md:col-span-6">
                    <Link href={`/portfolio/${project.slug}`}>
                      <div
                        className={`aspect-video rounded-3xl ${project.color} border border-border/50 overflow-hidden relative group-hover:border-primary/30 transition-all duration-500 cursor-pointer`}
                      >
                        {project.image ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="font-headline text-3xl font-black text-primary/10 group-hover:text-primary/20 transition-all duration-700 scale-150 uppercase tracking-[0.2em] rotate-[-15deg]">
                              {project.title}
                            </span>
                          </div>
                        )}
                      </div>
                    </Link>
                    <p className="mt-8 text-muted-foreground text-lg leading-relaxed max-w-lg">
                      {project.desc}
                    </p>
                    <div className="mt-6">
                      <Link
                        href={(project as any).projectLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-primary/80 transition-colors group/link"
                      >
                        View Live Website
                        <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  <div className="md:col-span-2 flex justify-end">
                    <Link
                      href={`/portfolio/${project.slug}`}
                      className="w-16 h-16 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-12"
                    >
                      <ArrowUpRight className="w-8 h-8" />
                    </Link>
                  </div>
                </div>
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
