import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_wedding_couple_sunset_7f3ae820.png";
import LiquidHeroCanvas from "@/components/ui/LiquidHeroCanvas";

export default function Hero() {
  const isReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 90,
        behavior: "smooth",
      });
    }
  };

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", isReducedMotion ? "0%" : "12%"]);

  // The wedding image is clipped to ONLY be visible through the letterforms
  const clipTextStyle: React.CSSProperties = {
    backgroundImage: `url(${heroImage})`,
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    color: "transparent",
    backgroundSize: "140% auto",
    backgroundPosition: "center 40%",
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] w-full overflow-hidden flex bg-background"
      data-testid="section-hero"
    >
      {/* Three.js Liquid Distortion WebGL Canvas */}
      <LiquidHeroCanvas />

      {/* Translucent overlay to blend the canvas nicely with the theme background */}
      <div className="absolute inset-0 bg-background/25 dark:bg-background/40 z-[1] pointer-events-none" />

      {/* Hairline horizontal rule mid-section */}
      <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-foreground/[0.03] z-[2] pointer-events-none" />

      {/* Main content wrapper */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row items-stretch w-full min-h-[100dvh]"
        style={{ opacity: contentOpacity }}
      >
        {/* LEFT: Giant clipped typography block */}
        <motion.div
          className="flex-1 flex flex-col justify-center pl-4 sm:pl-8 md:pl-12 lg:pl-16 pt-28 pb-12 md:pt-0 md:pb-0"
          style={{ y: textY }}
        >
          {/* Eyebrow line */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="mb-6 md:mb-8"
          >
            <span className="text-[9px] uppercase tracking-[0.38em] font-semibold text-foreground/45">
              Premium Photography · Bali, Indonesia
            </span>
          </motion.div>

          {/* INFINITY — photo visible ONLY through letters */}
          <div className="overflow-hidden leading-none">
            <motion.div
              initial={{ opacity: 0, y: isReducedMotion ? 0 : 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
            >
              <span
                className="block font-serif font-extralight leading-[0.85] select-none tracking-[-0.03em]"
                style={{
                  ...clipTextStyle,
                  fontSize: "clamp(3.5rem, 17vw, 18rem)",
                  backgroundPosition: "20% 35%",
                }}
                data-testid="text-brand-name"
              >
                INFINITY
              </span>
            </motion.div>
          </div>

          {/* PHOTO — different crop of the same image */}
          <div className="overflow-hidden leading-none">
            <motion.div
              initial={{ opacity: 0, y: isReducedMotion ? 0 : 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
            >
              <span
                className="block font-serif font-extralight leading-[0.85] select-none tracking-[-0.03em]"
                style={{
                  ...clipTextStyle,
                  fontSize: "clamp(3.5rem, 17vw, 18rem)",
                  backgroundPosition: "70% 65%",
                }}
              >
                PHOTO
              </span>
            </motion.div>
          </div>

          {/* Mobile: CTA appears below text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.72 }}
            className="mt-12 md:hidden"
          >
            <div className="p-0.5 rounded-full glass inline-block">
              <Button
                variant="outline"
                className="group rounded-full pl-6 pr-2 py-5 bg-transparent border-transparent text-foreground hover:bg-foreground/[0.04] hover:border-transparent transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                onClick={() => scrollToSection("contact")}
                data-testid="button-cta-hero"
              >
                <span className="text-[10px] uppercase tracking-[0.22em] font-medium mr-3">
                  Get In Touch
                </span>
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
              </Button>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT: Slim vertical sidebar — desktop only, styled with glassmorphism */}
        <motion.aside
          initial={{ opacity: 0, x: 32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.68 }}
          className="hidden md:flex flex-col justify-between w-52 lg:w-64 border-l border-foreground/[0.05] glass px-8 lg:px-10 py-24 flex-shrink-0"
        >
          {/* Vertically rotated tagline */}
          <div className="flex items-start">
            <p
              className="font-serif text-[11px] italic font-light text-foreground/45 leading-loose"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
              data-testid="text-tagline"
            >
              Capturing timeless moments with artistic excellence
            </p>
          </div>

          {/* Location info + CTA */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-[8px] uppercase tracking-[0.35em] text-foreground/25 mb-1.5 font-semibold">
                Based in
              </p>
              <p className="text-xs text-foreground/50 font-light">Gianyar, Bali</p>
            </div>

            <div className="p-0.5 rounded-full border border-foreground/[0.06] bg-foreground/[0.02] group">
              <Button
                variant="outline"
                className="group rounded-full pl-5 pr-1.5 py-5 w-full bg-transparent border-transparent text-foreground hover:bg-foreground/[0.04] hover:border-transparent transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                onClick={() => scrollToSection("contact")}
                data-testid="button-cta-hero-desktop"
              >
                <span className="text-[9px] uppercase tracking-[0.2em] font-medium flex-1 text-left">
                  Get In Touch
                </span>
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-110">
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
              </Button>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </section>
  );
}