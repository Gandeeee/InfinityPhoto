import { ArrowUp, Instagram, Facebook } from "lucide-react";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#procedure" },
  { label: "Contact", href: "#contact" },
];

const scrollToSection = (href: string) => {
  const id = href.replace('#', '');
  const element = document.getElementById(id);
  if (element) {
    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - 90,
      behavior: "smooth",
    });
  }
};

export default function Footer() {
  return (
    <footer className="bg-background/90 border-t border-foreground/[0.06] px-6 pt-20 pb-10 relative z-10" data-testid="footer">
      <div className="max-w-7xl mx-auto">

        {/* Top row: brand + nav + socials */}
        <div className="grid md:grid-cols-3 gap-12 mb-16 items-start">

          {/* Brand Column */}
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="font-serif text-2xl font-extralight tracking-[0.1em] text-foreground mb-4 block hover:text-primary transition-colors duration-300 bg-transparent border-none cursor-pointer"
              aria-label="Back to top"
            >
              INFINITY PHOTO
            </button>
            <p className="text-xs text-muted-foreground font-light leading-relaxed max-w-[240px]">
              Professional photography studio based in Gianyar, Bali. Weddings, events, lifestyle portraits.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-muted-foreground/60 block mb-4">
              Navigate
            </span>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors duration-300 font-light bg-transparent border-none cursor-pointer p-0"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials + back to top */}
          <div className="flex flex-col items-start md:items-end gap-6">
            <div>
              <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-muted-foreground/60 block mb-4 md:text-right">
                Follow Us
              </span>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com/infinityphotobali"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full border border-foreground/[0.08] bg-foreground/[0.02] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <Instagram className="w-3.5 h-3.5" />
                </a>
                <a
                  href="https://facebook.com/infinityphotobali"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full border border-foreground/[0.08] bg-foreground/[0.02] flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <Facebook className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Back to top */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 text-[10px] uppercase tracking-[0.1em] font-semibold text-muted-foreground/60 hover:text-primary transition-colors duration-300 group bg-transparent border-none cursor-pointer p-0"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <div className="w-7 h-7 rounded-full border border-foreground/[0.08] bg-foreground/[0.02] group-hover:border-primary/30 flex items-center justify-center transition-all duration-300">
                <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-foreground/[0.05] mb-8" />

        {/* Bottom row: copyright + legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground/50 font-light">
            © {new Date().getFullYear()} Infinity Photo. All rights reserved. Gianyar, Bali, Indonesia.
          </p>
          <div className="flex gap-6">
            <a href="/privacy" className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50 hover:text-foreground transition-colors duration-300 font-light">
              Privacy Policy
            </a>
            <a href="/terms" className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50 hover:text-foreground transition-colors duration-300 font-light">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
