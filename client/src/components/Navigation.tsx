import { useState } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useTheme } from "@/components/ui/theme-provider";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#procedure" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
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
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
        className={`fixed left-0 right-0 z-50 ${
          isScrolled
            ? "top-6 mx-auto w-[calc(100%-2rem)] max-w-5xl rounded-full glass px-6 py-3 shadow-[0_12px_40px_rgba(201,169,97,0.06)]"
            : "top-0 w-full bg-transparent px-8 py-6 rounded-none"
        }`}
        data-testid="navigation-main"
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-xl font-extralight tracking-[0.12em] text-foreground/90 hover:text-foreground transition-colors duration-500 bg-transparent border-none cursor-pointer"
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
                className="text-[11px] uppercase tracking-[0.12em] font-medium transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] px-4 py-2 rounded-full text-foreground/60 hover:text-foreground hover:bg-foreground/[0.04] bg-transparent border-none cursor-pointer"
                data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {item.label}
              </button>
            ))}

            {/* Theme Switcher Toggle */}
            <button
              onClick={toggleTheme}
              className="ml-2 w-8 h-8 rounded-full flex items-center justify-center text-foreground/50 hover:text-foreground hover:bg-foreground/[0.04] transition-all duration-500 focus:outline-none bg-transparent border-none cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                // Moon Icon
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>
                </svg>
              ) : (
                // Sun Icon
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>
                </svg>
              )}
            </button>

            {/* Desktop CTA pill */}
            <div className="ml-4 p-0.5 rounded-full border border-foreground/[0.08] bg-foreground/[0.02]">
              <button
                onClick={() => scrollToSection("#contact")}
                className="group flex items-center gap-2 rounded-full pl-5 pr-1.5 py-1.5 text-[11px] uppercase tracking-[0.12em] font-semibold text-foreground/75 hover:text-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] bg-transparent border-none cursor-pointer"
              >
                <span>Book Now</span>
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-primary-foreground">
                    <path d="M1 11L11 1"/><path d="M4 1h7v7"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile: Hamburger Button */}
          <button
            className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-foreground/[0.04] transition-colors duration-300 focus:outline-none bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            data-testid="button-mobile-menu"
          >
            <div className="relative w-[18px] h-[12px]">
              {/* Line 1 */}
              <motion.span
                className="absolute left-0 block h-[1.5px] bg-foreground rounded-full"
                style={{ top: 0, originX: "center", originY: "center" }}
                animate={isMobileMenuOpen
                  ? { rotate: 45, y: 5.5, width: "100%" }
                  : { rotate: 0, y: 0, width: "100%" }}
                transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              />
              {/* Line 2 */}
              <motion.span
                className="absolute left-0 block h-[1.5px] bg-foreground rounded-full"
                style={{ top: "50%", translateY: "-50%", originX: "left" }}
                animate={isMobileMenuOpen
                  ? { scaleX: 0, opacity: 0 }
                  : { scaleX: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
              />
              {/* Line 3 */}
              <motion.span
                className="absolute left-0 block h-[1.5px] bg-foreground rounded-full"
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
                    <span className="font-serif text-3xl font-extralight text-foreground/80 group-hover:text-foreground tracking-tight transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="text-[11px] font-mono text-foreground/20 group-hover:text-primary transition-colors duration-300 mb-2">
                      0{index + 1}
                    </span>
                  </motion.button>
                </div>
              ))}
            </div>

            {/* Bottom row: theme toggle + location + copyright */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.42 }}
              className="flex items-end justify-between border-t border-foreground/[0.05] pt-6"
            >
              <div>
                <p className="text-[11px] uppercase tracking-[0.12em] text-foreground/25 mb-1 font-semibold">Theme</p>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 text-xs text-foreground/60 hover:text-foreground transition-colors duration-300 font-light bg-transparent border-none cursor-pointer p-0"
                >
                  {theme === "light" ? "Switch to Dark" : "Switch to Light"}
                </button>
              </div>

              <div className="text-right">
                <p className="text-[11px] uppercase tracking-[0.12em] text-foreground/25 mb-1 font-semibold">Based in</p>
                <p className="text-xs text-foreground/50 font-light">Gianyar, Bali</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
