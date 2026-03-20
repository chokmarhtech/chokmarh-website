"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, CheckCircle, ArrowUpRight, MessageSquare, Phone, Globe } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

const ContactPage = () => {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    overview: "",
    timeline: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.overview) {
      toast({
        title: "Missing Details",
        description: "Please provide your name and a brief project overview.",
        variant: "destructive",
      });
      return;
    }
    setSubmitted(true);
  };

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
                Get In Touch
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8">
                Let&apos;s Build <br className="hidden md:block" />
                Something <span className="text-gradient">Great.</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Whether you&apos;re launching a new idea or refining an existing product, 
                we&apos;re ready to collaborate and engineer your success.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content Section (UI Pattern: Split Layout with White Background) */}
      <section className="py-20 md:py-32 px-6 bg-white text-background relative overflow-hidden">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            
            {/* Left: Contact Info & Message */}
            <div className="lg:col-span-5 space-y-12">
              <ScrollReveal>
                <div className="space-y-6">
                  <h3 className="text-accent font-headline text-xl md:text-2xl font-bold uppercase tracking-tighter">
                    Contact Information
                  </h3>
                  <h2 className="font-headline text-4xl md:text-6xl font-bold leading-tight tracking-tight text-background">
                    We&apos;re all <br /> ears.
                  </h2>
                  <p className="text-lg text-gray-600 max-w-md">
                    Tell us about your project, your timeline, and your goals. 
                    We usually respond within one business day.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Mail className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg text-background">Email Us</h4>
                      <p className="text-gray-600">hello@chokmarh.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <MapPin className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg text-background">Location</h4>
                      <p className="text-gray-600">Lagos, Nigeria • Remote-First</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Globe className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-headline font-bold text-lg text-background">Hours</h4>
                      <p className="text-gray-600">Mon - Fri • 9am - 6pm (GMT+1)</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Form Container */}
            <div className="lg:col-span-7">
              <ScrollReveal delay={0.3}>
                <div className="bg-gray-50 p-8 md:p-12 rounded-3xl border border-gray-100">
                  {submitted ? (
                    <div className="text-center py-12 space-y-6">
                      <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                        <CheckCircle className="w-10 h-10 text-accent" />
                      </div>
                      <h3 className="font-headline text-3xl font-bold text-background uppercase tracking-tighter">Message Received</h3>
                      <p className="text-gray-600 text-lg max-w-sm mx-auto">
                        Thank you for reaching out. A member of our team will be in touch shortly.
                      </p>
                      <Button 
                        onClick={() => setSubmitted(false)}
                        className="bg-primary text-white rounded-full px-8 py-4"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Your Name *</label>
                          <Input
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="Full Name"
                            className="bg-white border-gray-200 h-14 rounded-xl focus:ring-primary"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Company</label>
                          <Input
                            value={form.company}
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            placeholder="Organization Name"
                            className="bg-white border-gray-200 h-14 rounded-xl focus:ring-primary"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Project Overview *</label>
                        <Textarea
                          value={form.overview}
                          onChange={(e) => setForm({ ...form, overview: e.target.value })}
                          placeholder="Tell us about your project and goals..."
                          className="bg-white border-gray-200 min-h-[160px] rounded-xl focus:ring-primary p-4"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Timeline</label>
                          <Select onValueChange={(v) => setForm({ ...form, timeline: v })}>
                            <SelectTrigger className="bg-white border-gray-200 h-14 rounded-xl">
                              <SelectValue placeholder="Select timeline" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1-2 months">1–2 Months</SelectItem>
                              <SelectItem value="3-4 months">3–4 Months</SelectItem>
                              <SelectItem value="5-6 months">5–6 Months</SelectItem>
                              <SelectItem value="6+ months">6+ Months</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Budget Range</label>
                          <Select onValueChange={(v) => setForm({ ...form, budget: v })}>
                            <SelectTrigger className="bg-white border-gray-200 h-14 rounded-xl">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="$5k-10k">$5K – $10K</SelectItem>
                              <SelectItem value="$10k-25k">$10K – $25K</SelectItem>
                              <SelectItem value="$25k-50k">$25K – $50K</SelectItem>
                              <SelectItem value="$50k+">$50K+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        className="gradient-cta text-white font-bold px-10 py-8 rounded-full text-lg w-full group overflow-hidden relative"
                      >
                        <span className="relative z-10 flex items-center gap-2 justify-center">
                          Begin the Conversation <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </span>
                      </Button>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ROI CTA Section (UI Pattern: Final Impact Footer) */}
      <section className="py-32 px-6 border-t border-border/50">
        <div className="container mx-auto max-w-[1280px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <ScrollReveal>
              <div className="text-center flex flex-col justify-center items-center">
                <h2 className="font-headline text-center text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase leading-none">
                  READY TO
                </h2>
                <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-4 uppercase text-accent leading-none">
                  DELIVER ROI
                </h2>
                <p className="text-muted-foreground max-w-md mt-6 mx-auto md:ml-0">
                   Every conversation is a baseline. Every product is measured by its performance. 
                   At <span className="text-primary font-bold">Chokmarh</span>, we build things that work.
                </p>
              </div>
            </ScrollReveal>
            {/* <ScrollReveal delay={0.2}>
               <div className="bg-card p-10 rounded-3xl border border-border flex flex-col items-center">
                  <MessageSquare className="w-12 h-12 text-primary mb-4" />
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">Prefer Chat?</p>
                  <p className="text-lg font-bold text-foreground mb-6">hello@chokmarh.com</p>
                  <Link href="mailto:hello@chokmarh.com">
                    <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10">
                      Send an Email
                    </Button>
                  </Link>
               </div>
            </ScrollReveal> */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
