import ScrollReveal from '@/components/ScrollReveal';

const WhoWeAre = () => (
  <section className="py-24 lg:py-32 bg-white">
    <div className="container mx-auto px-6 max-w-[1280px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center grid-cols-reverse lg:grid-cols-normal">
        <div className="">
          <ScrollReveal>
            <span className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
              Who We Are
            </span>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6 text-primary leading-tight">
              Precision in thinking, <br />{" "}
              <span className="text-primary">Discipline in execution</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-secondary/40 text-lg leading-relaxed mb-4">
              Chokmarh Technologies is a product-focused technology company
              committed to building digital solutions that are structured,
              scalable, and built to last.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="text-secondary/40 text-lg leading-relaxed">
              We approach every project with clarity — understanding the problem
              deeply before engineering the solution.
            </p>
          </ScrollReveal>
        </div>

        {/* Decorative architectural visual */}
        <ScrollReveal delay={0.2}>
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 rounded-2xl border border-border/50 overflow-hidden">
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "linear-gradient(hsl(214 83% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(214 83% 50%) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
              />
              <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 border border-primary/30 rounded-lg" />
              <div className="absolute top-1/3 left-1/3 w-1/3 h-1/3 border border-primary/20 rounded-lg" />
              <div className="absolute top-[15%] right-[15%] w-20 h-20 rounded-full bg-primary/10 blur-xl" />
              <div className="absolute bottom-[20%] left-[20%] w-16 h-16 rounded-full bg-accent/10 blur-xl" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default WhoWeAre