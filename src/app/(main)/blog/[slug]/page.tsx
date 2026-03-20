import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";

const blogContent: Record<string, string[]> = {
  "structure-mvp-speed-stability": [
    "Building a Minimum Viable Product (MVP) is about finding the balance between speed and sustainability. Too fast, and you create technical debt that will haunt you. Too slow, and you miss your market window.",
    "The key is to establish a solid foundation — clean architecture, clear separation of concerns, and automated testing for critical paths — while ruthlessly cutting non-essential features.",
    "Start with your core user flow. Identify the one thing your product must do exceptionally well, and build that first. Everything else is iteration.",
    "Use modern frameworks that provide structure out of the box. Choose technologies your team knows well over the latest trends. Familiarity breeds speed without sacrificing quality.",
    "Finally, plan for scale from day one, even if you don't build for it yet. Document architectural decisions, keep your data models flexible, and write clean interfaces between services.",
  ],
  "web-apps-fail-at-scale": [
    "Most web applications aren't built to scale — they're built to ship. And there's a critical difference between the two approaches.",
    "The most common failure point is the database layer. Poorly indexed queries, missing caching strategies, and monolithic data models create bottlenecks that compound over time.",
    "Another frequent issue is tight coupling. When your frontend, backend, and business logic are tangled together, changing one thing breaks three others.",
    "The solution isn't over-engineering from the start. It's making intentional architectural decisions: choosing the right database for your access patterns, implementing proper caching, and designing clear service boundaries.",
    "Scale is not just about handling more users. It's about handling more complexity — more features, more team members, more edge cases — without the system collapsing under its own weight.",
  ],
};

const defaultContent = [
  "This article explores fundamental principles and practical strategies that every product team should consider when building digital products.",
  "The most successful products aren't built on trends — they're built on a deep understanding of user needs and solid engineering principles.",
  "Great products emerge from the intersection of clear strategy, thoughtful design, and disciplined execution. Each phase builds on the last, creating a foundation for sustainable growth.",
  "At Chokmarh Technologies, we've seen these patterns play out across dozens of projects. The teams that invest in understanding before building consistently deliver better outcomes.",
  "The takeaway is simple: slow down to speed up. Invest in clarity, structure, and intention early, and you'll move faster when it matters most.",
];

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="font-headline text-4xl font-bold text-foreground mb-4">
            Post Not Found
          </h1>
          <Link href="/blog" className="text-primary hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const paragraphs = blogContent[post.slug] || defaultContent;

  return (
    <>
      <section className="gradient-hero relative min-h-[50vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(hsl(214 83% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(214 83% 50%) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={16} /> Back to Blog
            </Link>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <span className="text-xs font-medium text-primary uppercase tracking-wider mb-4 block">
              {post.category}
            </span>
            <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold text-foreground max-w-3xl leading-tight mb-6">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar size={14} /> February 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock size={14} /> {post.readTime}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6">
          <article className="max-w-3xl mx-auto">
            {paragraphs.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {p}
                </p>
              </ScrollReveal>
            ))}
            <ScrollReveal>
              <div className="border-t border-border mt-12 pt-8">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                >
                  <ArrowLeft size={16} /> Back to all insights
                </Link>
              </div>
            </ScrollReveal>
          </article>
        </div>
      </section>
    </>
  );
}
