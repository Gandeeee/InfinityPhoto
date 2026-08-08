import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Partnership", href: "#partnership" },
  { label: "Collaboration", href: "#collaboration" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const scrollToSection = (href: string) => {
    const id = href.replace("#", "");
    const element = document.getElementById(id);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - (isScrolled ? 90 : 80);
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        layout
        transition={{ type: "spring", stiffness: 160, damping: 22 }}
        className={`fixed left-0 right-0 z-50 ${
          isScrolled
            ? "top-5 mx-auto w-[calc(100%-2.5rem)] max-w-5xl rounded-full backdrop-blur-md bg-white/85 border border-foreground/10 px-6 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
            : "top-0 w-full bg-transparent px-8 py-6 rounded-none"
        }`}
        data-testid="navigation-main"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`font-serif text-lg md:text-xl font-light tracking-[0.12em] transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] bg-transparent border-none cursor-pointer flex items-center ${
              isScrolled ? "text-foreground/90 hover:text-foreground" : "text-white/90 hover:text-white"
            }`}
            data-testid="button-logo"
          >
            INFINITY PHOTO
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`text-[11px] uppercase tracking-[0.12em] font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] px-3.5 py-1.5 rounded-full bg-transparent border-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${
                  isScrolled 
                    ? "text-foreground/70 hover:text-foreground" 
                    : "text-white/80 hover:text-white"
                }`}
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </button>
            ))}

            {/* Compact Editorial Navbar CTA button */}
            <button
              onClick={() => scrollToSection("#contact")}
              className={`group ml-3 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.14em] font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 active:scale-[0.98] ${
                isScrolled 
                  ? "border border-foreground/20 bg-foreground/5 hover:bg-foreground/10 text-foreground" 
                  : "border border-white/30 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md"
              }`}
            >
              <span>Book Now</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
            </button>
          </div>

          {/* Mobile: Hamburger Button */}
          <button
            className={`md:hidden relative w-9 h-9 flex items-center justify-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 bg-transparent border-none cursor-pointer ${
              isScrolled ? "hover:bg-foreground/[0.04]" : "hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            <div className="relative w-[18px] h-[12px]">
              {/* Line 1 */}
              <motion.span
                className={`absolute left-0 block h-[1.5px] rounded-full ${isScrolled || isMobileMenuOpen ? "bg-foreground" : "bg-white"}`}
                style={{ top: 0, originX: "center", originY: "center" }}
                animate={isMobileMenuOpen
                  ? { rotate: 45, y: 5.5, width: "100%" }
                  : { rotate: 0, y: 0, width: "100%" }}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              />
              {/* Line 2 */}
              <motion.span
                className={`absolute left-0 block h-[1.5px] rounded-full ${isScrolled || isMobileMenuOpen ? "bg-foreground" : "bg-white"}`}
                style={{ top: "50%", translateY: "-50%", originX: "left" }}
                animate={isMobileMenuOpen
                  ? { scaleX: 0, opacity: 0 }
                  : { scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              />
              {/* Line 3 */}
              <motion.span
                className={`absolute left-0 block h-[1.5px] rounded-full ${isScrolled || isMobileMenuOpen ? "bg-foreground" : "bg-white"}`}
                style={{ bottom: 0, width: "70%", originX: "center", originY: "center" }}
                animate={isMobileMenuOpen
                  ? { rotate: -45, y: -5.5, width: "100%" }
                  : { rotate: 0, y: 0, width: "70%" }}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Full-screen Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at calc(100% - 2.5rem) 2.5rem)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at calc(100% - 2.5rem) 2.5rem)" }}
            transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-0 z-40 bg-background md:hidden flex flex-col justify-between px-8 pt-28 pb-12"
            data-testid="menu-mobile"
          >
            {/* Nav items with staggered mask reveals */}
            <div className="flex flex-col gap-1">
              {navItems.map((item, index) => (
                <div key={item.href} className="overflow-hidden border-b border-foreground/[0.05] py-1">
                  <motion.button
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 40, opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                      delay: index * 0.07,
                    }}
                    onClick={() => scrollToSection(item.href)}
                    className="group w-full text-left flex items-end justify-between py-3 bg-transparent border-none cursor-pointer"
                    data-testid={`link-mobile-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <span className="font-serif text-3xl font-light text-foreground/80 group-hover:text-foreground tracking-tight transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="text-[11px] font-mono text-foreground/30 group-hover:text-primary transition-colors duration-300 mb-2">
                      0{index + 1}
                    </span>
                  </motion.button>
                </div>
              ))}
            </div>

            {/* Bottom row: location info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
              className="flex items-end justify-between border-t border-foreground/[0.05] pt-6"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.12em] text-foreground/40 mb-1 font-medium">Infinity Photo</p>
                <p className="text-xs text-foreground/70 font-light">Editorial & Partnership</p>
              </div>

              <div className="text-right">
                <p className="text-[11px] uppercase tracking-[0.12em] text-foreground/40 mb-1 font-medium">Based in</p>
                <p className="text-xs text-foreground/60 font-light">Gianyar, Bali</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
