import Link from "next/link";
import { Button } from "@/components/ui/button";

const NotFound = () => (
  <div className="min-h-screen gradient-hero flex items-center justify-center relative overflow-hidden">
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage:
          "linear-gradient(hsl(214 83% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(214 83% 50%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
    <div className="text-center relative z-10 px-6">
      <span className="font-headline text-8xl md:text-9xl font-bold text-primary/20 block mb-4">
        404
      </span>
      <h1 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4">
        Wisdom sometimes begins with getting lost.
      </h1>
      <p className="text-muted-foreground text-lg mb-8">
        Let's guide you back.
      </p>
      <Link href="/">
        <Button
          size="lg"
          className="gradient-cta text-primary-foreground font-semibold px-10 py-6 text-base border-0"
        >
          Go Home
        </Button>
      </Link>
    </div>
  </div>
);

export default NotFound;
