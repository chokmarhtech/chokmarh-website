import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const Footer1 = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-6 py-16 max-w-[1280px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
              Chokmarh
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              The Wise Master Builders. Designing digital products that scale.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a
                href="mailto:hello@chokmarh.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail size={14} /> hello@chokmarh.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Lagos, Nigeria
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-headline text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { name: "About", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Process", path: "/process" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-headline text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Services
            </h4>
            <div className="flex flex-col gap-3">
              {[
                "Product Design",
                "Web Platforms",
                "Mobile Applications",
                "MVP Development",
                "Ongoing Support",
              ].map((service) => (
                <Link
                  key={service}
                  href="/services"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-headline text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Start a Project
            </h4>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Ready to build something exceptional? Let's discuss your vision.
            </p>
            <Link
              href="/contact"
              className="inline-block text-sm font-medium text-primary hover:underline transition-colors"
            >
              Begin the Conversation →
            </Link>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Chokmarh Technologies. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
