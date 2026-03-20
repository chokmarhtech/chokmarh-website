"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { projects, Project } from "@/lib/portfolio-data";

const ProjectDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const project = projects.find((p) => p.slug === slug) as Project;

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-black text-white min-h-screen selection:bg-primary selection:text-white font-body">
      {/* Project Header Section */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-6">
        <div className="container mx-auto max-w-[1280px] text-center">
          <ScrollReveal>
            <span className="text-gray-400 font-medium text-xs md:text-sm tracking-[0.3em] uppercase mb-6 block">
              Project Details
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-12 uppercase leading-none">
              {project.title}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                {project.fullDesc}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex justify-center mb-16">
              <Link
                href={project.projectLink || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-8 py-4 rounded-full flex items-center gap-3 font-semibold hover:bg-gray-200 transition-colors"
              >
                <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                View Project
              </Link>
            </div>
          </ScrollReveal>

          {project.image && (
            <ScrollReveal delay={0.35}>
              <div className="max-w-5xl mx-auto mb-24 px-4">
                <div className="aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>

        {/* Project Info Bar */}
        <div className="container mx-auto max-w-[1280px]">
          <ScrollReveal delay={0.4}>
            <div className="bg-[#f2f2ed] text-black rounded-xl md:rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4 items-start">
                <div className="space-y-2 md:border-r border-gray-300 pr-4 h-full last:border-0">
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black mb-1">Services</h4>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">{project.services || project.category}</p>
                </div>
                <div className="space-y-2 md:border-r border-gray-300 pr-4 h-full last:border-0">
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black mb-1">Client</h4>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">{project.client || project.title}</p>
                </div>
                <div className="space-y-2 md:border-r border-gray-300 pr-4 h-full last:border-0">
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black mb-1">Year</h4>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">{project.duration || project.year}</p>
                </div>
                <div className="space-y-2 md:border-r border-gray-300 pr-4 h-full last:border-0">
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black mb-1">Designed By</h4>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">{project.designedBy || "Chokmarh UI"}</p>
                </div>
                <div className="space-y-2 md:border-r border-gray-300 pr-4 h-full last:border-0">
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black mb-1">Category</h4>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">{project.category}</p>
                </div>
                <div className="space-y-2 h-full last:border-0">
                  <h4 className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-black mb-1">Development</h4>
                  <p className="text-xs md:text-sm text-gray-600 font-medium">{project.development || "Design Team"}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Project Highlight Section */}
        <div className="container mx-auto max-w-[1280px] mt-24 md:mt-32 pb-20">
          <ScrollReveal delay={0.5}>
            <div className="max-w-5xl mx-auto">
              <p className="text-2xl md:text-4xl text-gray-200 leading-[1.4] text-center font-medium">
                {project.highlight || project.challenge}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview Section - Keep but style for dark theme */}
      <section className="py-24 md:py-32 px-6 bg-secondary/10 overflow-hidden relative border-t border-white/5">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollReveal>
              <div className="space-y-12">
                <div>
                  <h3 className="text-primary font-headline text-xl md:text-2xl font-bold uppercase tracking-tighter mb-6">
                    The Challenge.
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-primary font-headline text-xl md:text-2xl font-bold uppercase tracking-tighter mb-6">
                    The Solution.
                  </h3>
                  <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
                <h3 className="font-headline text-2xl font-bold mb-8 uppercase tracking-tighter text-white">Project Results</h3>
                <ul className="space-y-6">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex gap-4 items-start">
                      <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-1" />
                      <span className="text-lg text-gray-300 font-medium">{result}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-12 pt-12 border-t border-white/10">
                   <h4 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-4">Tech Stack</h4>
                   <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-bold px-4 py-2 bg-white/5 border border-white/10 rounded-full text-white">
                          {t}
                        </span>
                      ))}
                   </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Key Features (UI Pattern: Process Grid style) */}
      <section className="py-24 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-[1280px]">
          <ScrollReveal>
            <h2 className="font-headline text-4xl font-bold mb-16 uppercase tracking-tighter">Key Features</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {project.features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 0.1}>
                <div className="gradient-card p-10 rounded-3xl border border-border/50 h-full group">
                  <feature.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-tighter">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.desc}
                  </p>
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
                <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase leading-none">
                  BUILD YOUR
                </h2>
                <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase text-accent leading-none">
                  SUCCESS STORY
                </h2>
                <p className="text-muted-foreground max-w-md mt-6">
                   Every project starts with a conversation. Let&apos;s discuss how we can engineer your next breakthrough.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Link href="/contact">
                <Button size="lg" className="gradient-cta text-white font-bold px-10 py-8 rounded-full text-lg shadow-[0_0_30px_rgba(26,115,232,0.3)] group transition-all">
                  Start Your Project <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
