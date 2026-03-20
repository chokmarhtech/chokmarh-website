"use client";

import { useEffect, useRef, useState } from "react";

const CounterStat = ({ value, label }: { value: string; label: string }) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`text-center transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="font-headline text-5xl md:text-6xl font-bold text-gradient mb-2">
        {value}
      </div>
      <p className="text-muted-foreground text-sm uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
};

const Stats = () => (
  <section className="py-20 border-y border-border">
    <div className="container mx-auto px-6 max-w-[1280px]">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
        <CounterStat value="50+" label="Projects Delivered" />
        <CounterStat value="30+" label="Clients Served" />
        <CounterStat value="5+" label="Years of Experience" />
        <CounterStat value="98%" label="Client Satisfaction" />
      </div>
    </div>
  </section>
);

export default Stats;
