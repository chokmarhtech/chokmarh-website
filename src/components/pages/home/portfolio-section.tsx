"use client";

import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/lib/portfolio-data";

const PortfolioSection = () => {
  // Take the first 3 projects as featured
  const featuredProjects = projects.slice(0, 3);

  return (
    <section className="py-24 md:py-32 px-6 bg-black text-white overflow-hidden border-t border-white/5">
      <div className="container mx-auto max-w-[1280px]">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <ScrollReveal>
              <span className="text-primary font-body text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-4 block">
                Featured Work
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tight uppercase leading-none">
                Selected <span className="text-gray-500">Projects.</span>
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.2}>
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="rounded-full px-8 py-6 border-white/10 hover:bg-white hover:text-black transition-all group"
              >
                View All Work
                <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, i) => (
            <ScrollReveal key={project.slug} delay={i * 0.1}>
              <Link href={`/portfolio/${project.slug}`} className="group block">
                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 border border-white/10">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className={`w-full h-full ${project.color} flex items-center justify-center`}>
                       <span className="font-headline text-2xl font-black text-white/10 uppercase tracking-widest rotate-[-15deg]">
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
                <div className="space-y-2 px-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-medium text-gray-500">
                      / {project.year}
                    </span>
                  </div>
                  <h3 className="font-headline text-2xl font-bold group-hover:text-primary transition-colors uppercase tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
