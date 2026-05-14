"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logoWhite from "@/app/assets/logos/logo-white.svg";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

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
          className="flex items-center gap-2 group"
        >
          <Image 
            src={logoWhite} 
            alt="Chokmarh Logo" 
            height={32} 
            className="w-auto h-8 transition-transform group-hover:scale-105"
            priority 
          />
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

        {/* Mobile Toggle & Menu overlay */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <button
              className="lg:hidden text-foreground p-2 z-[110] relative"
              aria-label="Toggle menu"
            >
              <Menu size={28} />
            </button>
          </SheetTrigger>
          <SheetContent 
            side="top" 
            className="w-full h-[100dvh] flex flex-col items-center justify-center bg-background/80 backdrop-blur-xl border-none z-[105]"
          >
            <div className="flex flex-col items-center gap-8 text-center px-6 w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "text-3xl font-headline font-bold transition-all duration-300",
                    pathname === link.path
                      ? "text-primary scale-110"
                      : "text-foreground/80 hover:text-foreground",
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-8 w-full max-w-xs">
                <Button className="gradient-cta text-primary-foreground font-medium w-full py-7 text-xl border-0 rounded-full">
                  Start Your Project
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};

export default Navbar;
