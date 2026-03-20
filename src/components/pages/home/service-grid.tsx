import ScrollReveal from '@/components/ScrollReveal'
import { services } from '@/constant'

const ServicesGrid = () => (
  <section className="py-24 lg:py-32">
    <div className="container mx-auto px-6 max-w-[1280px]">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="text-accent font-body text-sm font-semibold tracking-widest uppercase mb-4 block">
            What We Do
          </span>
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground">
            We deliver
          </h2>
        </div>
      </ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <ScrollReveal key={service.title} delay={i * 0.1}>
            <div className="gradient-card rounded-xl border border-border/50 p-8 group transition-all duration-500 h-full">
              <service.icon
                className="w-10 h-10 text-primary mb-5"
                strokeWidth={1.5}
              />
              <h3 className="font-headline text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid