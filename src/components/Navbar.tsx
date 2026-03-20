"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Process", path: "/process" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileOpen]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-3 shadow-sm"
          : "bg-transparent border-transparent py-5",
      )}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 max-w-[1280px]">
        {/* Logo */}
        <Link
          href="/"
          className="font-headline text-2xl font-bold tracking-tight text-foreground flex items-center gap-2 group"
        >
          <span className="text-primary font-black italic transition-transform group-hover:scale-110">C.</span>
          <span className="uppercase tracking-widest text-lg font-headline">Chokmarh</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "text-sm font-medium transition-colors duration-300 hover:text-primary nav-link-effect py-1",
                pathname === link.path
                  ? "text-primary after:scale-x-100"
                  : "text-foreground/70 hover:text-foreground",
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <Link href="/contact" className="hidden lg:block">
          <Button className="gradient-cta text-primary-foreground font-medium px-6 border-0 rounded-full h-11 glow-blue-hover transition-all">
            Start Your Project
          </Button>
        </Link>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2 z-[110] relative"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 z-[105] lg:hidden flex flex-col items-center justify-center bg-background transition-all duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]",
          mobileOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <div className="flex flex-col items-center gap-8 text-center px-6 w-full">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              href={link.path}
              className={cn(
                "text-3xl font-headline font-bold transition-all duration-500",
                mobileOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0",
                pathname === link.path
                  ? "text-primary scale-110"
                  : "text-foreground/60 hover:text-foreground",
              )}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className={cn(
            "mt-8 w-full max-w-xs transition-all duration-500 delay-300",
            mobileOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <Button className="gradient-cta text-primary-foreground font-medium w-full py-7 text-xl border-0 rounded-full">
              Start Your Project
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
