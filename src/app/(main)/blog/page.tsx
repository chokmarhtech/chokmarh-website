"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, Clock, Search, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog-data";
import { Input } from "@/components/ui/input";

const categories = ["All", "Engineering", "Architecture", "Design", "Strategy", "Startups"];

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts[0];
  const remainingPosts = filteredPosts.filter(post => post.slug !== featuredPost.slug);

  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-white font-body">
      {/* Cinematic Hero (Featured Post) */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
        </div>

        <div className="container mx-auto max-w-[1280px] relative z-10">
          <ScrollReveal>
            <div className="grid lg:grid-cols-12 gap-12 items-end">
              <div className="lg:col-span-8 space-y-8">
                <div className="flex items-center gap-3">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">Featured Article</span>
                  <span className="text-muted-foreground text-xs font-medium uppercase tracking-widest">{featuredPost.category} • {featuredPost.readTime}</span>
                </div>
                <h1 className="font-headline text-6xl font-bold tracking-tighter leading-[0.9] uppercase">
                  {featuredPost.title.split(' ').slice(0, -1).join(' ')} <br />
                  <span className="text-gradient italic">{featuredPost.title.split(' ').pop()}</span>
                </h1>
                <p className="text-muted-foreground text-xl max-w-2xl leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <Link href={`/blog/${featuredPost.slug}`} className="inline-flex items-center gap-4 group">
                   <div className="w-16 h-16 rounded-full bg-white text-background flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                      <ArrowUpRight className="w-8 h-8" />
                   </div>
                   <span className="font-headline font-bold text-xl uppercase tracking-tighter group-hover:text-primary transition-colors underline decoration-primary/30 underline-offset-8">Read the story</span>
                </Link>
              </div>
              <div className="lg:col-span-4 hidden lg:block">
                 <div className="aspect-[4/5] rounded-3xl bg-card border border-border/50 p-10 flex flex-col justify-between overflow-hidden relative group">
                    <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Sparkles className="w-12 h-12 text-primary/20" />
                    <div>
                       <h3 className="font-headline text-3xl font-bold uppercase tracking-tighter mb-4">Engineering <br /> The Future</h3>
                       <p className="text-sm text-muted-foreground">Deep dives into the tech stacks and strategies powering modern digital growth.</p>
                    </div>
                 </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Dynamic Filter Bar */}
      <section className="sticky top-20 z-40 py-6 px-6 bg-background/80 backdrop-blur-md border-y border-border/50">
        <div className="container mx-auto max-w-[1280px]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                    activeCategory === cat 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "bg-card border border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Search articles..." 
                className="bg-card border-border/50 pl-12 rounded-full h-11 focus:ring-primary focus:border-primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Asymmetrical Article Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="group block h-full">
                  <article className="flex flex-col h-full bg-card border border-border/50 rounded-3xl p-8 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                    
                    <div className="flex items-center justify-between mb-8 relative z-10">
                      <span className="text-accent text-[10px] font-bold uppercase tracking-widest bg-accent/10 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="font-headline text-2xl font-bold mb-4 uppercase tracking-tighter leading-tight group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-6 border-t border-border/50">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-primary">Read Article</span>
                      <ChevronRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                    </div>
                  </article>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Footer Section with Newsletter Integration */}
      <section className="py-32 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7">
              <ScrollReveal>
                <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase leading-none">
                  INSIGHTS <br />
                  <span className="text-accent">FOR SCALE.</span>
                </h2>
                <p className="text-muted-foreground max-w-md mt-6 text-lg">
                  Every article is a baseline. Every strategy is measured by its performance. 
                  Subscribe to get the latest in technical excellence directly to your inbox.
                </p>
              </ScrollReveal>
            </div>
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.2}>
                <div className="bg-white text-background p-10 rounded-3xl shadow-2xl relative overflow-hidden group">
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
                  <h3 className="font-headline text-3xl font-bold uppercase tracking-tighter mb-6 relative z-10">Join the Circle</h3>
                  <div className="space-y-4 relative z-10">
                    <Input 
                      placeholder="Your work email..." 
                      className="bg-gray-100 border-gray-200 h-14 rounded-xl text-background placeholder:text-gray-400"
                    />
                    <Button size="lg" className="w-full gradient-cta text-white font-bold py-7 rounded-xl text-lg group">
                      Subscribe to Newsletter <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </Button>
                    <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest">No spam. Only technical precision.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
