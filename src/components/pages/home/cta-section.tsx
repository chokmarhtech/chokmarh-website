import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react'

const CTASection = () => (
  <section className="py-20">
    <div className="container mx-auto px-6 max-w-[1280px]">
      <ScrollReveal>
        <div className="gradient-cta rounded-2xl p-12 md:p-16 text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, hsl(0 0% 100% / 0.3) 0%, transparent 50%)",
            }}
          />
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-4 relative z-10">
            Ready to Build Something That Lasts?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg max-w-xl mx-auto relative z-10">
            Let's turn your vision into a product that scales.
          </p>
          <Link href="/contact" className="relative z-10">
            <Button
              size="lg"
              className="bg-primary-foreground text-secondary font-semibold px-10 py-6 text-base hover:bg-primary-foreground/90 transition-all"
            >
              Start Your Project
            </Button>
          </Link>
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default CTASection