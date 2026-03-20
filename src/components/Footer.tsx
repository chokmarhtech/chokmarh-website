import Link from "next/link";
import { Mail, MapPin, Linkedin, Twitter, Github, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative gradient-hero border-t border-border overflow-hidden">
      {/* Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03]" 
        style={{
          backgroundImage:
            "linear-gradient(hsl(214 83% 50%) 1px, transparent 1px), linear-gradient(90deg, hsl(214 83% 50%) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 pt-24 pb-12 max-w-[1280px]">
        {/* CTA Section */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 max-w-2xl leading-tight">
            Ready to build with precision?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-md">
            Tell us what you&apos;re shipping. We&apos;ll respond within two business days.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-md font-medium transition-all group btn-hover-effect"
          >
            Start a project <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 mb-20 text-sm text-muted-foreground">
          <a
            href="mailto:hello@chokmarh.tech"
            className="flex items-center gap-2 hover:text-foreground transition-colors"
          >
            <Mail size={16} /> hello@chokmarh.tech
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} /> Lagos, Nigeria.
          </span>
        </div>

        {/* Divider Line */}
        <div className="w-full h-px bg-border mb-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <h3 className="font-headline text-xl font-bold text-foreground">
              Chokmarh
            </h3>
            <p className="text-xs text-muted-foreground uppercase tracking-widest">
              Systems that scale
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex gap-8 text-xs font-medium text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-foreground transition-colors">
              Terms
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[
              { icon: <Linkedin size={18} />, href: "#" },
              { icon: <Twitter size={18} />, href: "#" },
              { icon: <Github size={18} />, href: "#" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-10 h-10 flex items-center justify-center border border-border rounded hover:bg-secondary hover:text-primary transition-all text-muted-foreground btn-hover-effect"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 text-center text-[10px] text-muted-foreground/60 uppercase tracking-widest">
          © {new Date().getFullYear()} Chokmarh Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
