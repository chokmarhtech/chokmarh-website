import ScrollReveal from "@/components/ScrollReveal";
import { processSteps } from "@/constant";

const OurProcess = () => (
  <section className="py-24 lg:py-32 bg-secondary">
    <div className="container mx-auto px-6 max-w-[1280px]">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-primary font-body text-sm font-medium tracking-widest uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            A Structured Path to Execution
          </h2>
        </div>
      </ScrollReveal>
      <div className="flex flex-wrap justify-center gap-4 lg:gap-0">
        {processSteps.map((step, i) => (
          <ScrollReveal
            key={step.label}
            delay={i * 0.1}
            className="flex items-center"
          >
            <div className="flex flex-col items-center text-center w-36">
              <div className="w-16 h-16 rounded-full border-2 border-primary/30 flex items-center justify-center mb-3 group-hover:border-primary transition-colors bg-secondary">
                <step.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Step {i + 1}
              </span>
              <span className="text-sm font-semibold text-foreground mt-1">
                {step.label}
              </span>
            </div>
            {i < processSteps.length - 1 && (
              <div className="hidden lg:block w-12 h-px bg-border mt-[-20px]" />
            )}
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default OurProcess;