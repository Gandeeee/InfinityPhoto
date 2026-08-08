import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_wedding_couple_sunset_7f3ae820.png";

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
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", isReducedMotion ? "0%" : "15%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100dvh] w-full flex items-center justify-center bg-[#050505] overflow-hidden px-4 md:px-8 py-28 md:py-36"
      data-testid="section-hero"
    >
      {/* Background Image Layer with Parallax Scale */}
      <motion.div 
        className="absolute inset-0 z-0 origin-center"
        style={{ scale: bgScale }}
      >
        <img
          src={heroImage}
          alt="Infinity Photo Editorial Photography"
          decoding="async"
          className="w-full h-full object-cover object-center opacity-90"
        />
      </motion.div>
      
      {/* Vantablack radial fade vignette effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_100%)] pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-black/40 z-[2] pointer-events-none" />

      {/* Main Content (High-End Editorial Archetype) */}
      <motion.div 
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center mt-12 md:mt-0"
        style={{ opacity: contentOpacity, y: textY }}
      >
        {/* Editorial Headline with Mask Reveal */}
        <div className="overflow-hidden mb-8 md:mb-10 px-2 py-4 -my-4 -mx-2">
          <motion.h1
            initial={{ opacity: 0, y: 120, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl lg:text-[6.5rem] font-light leading-[1.05] tracking-[-0.02em] text-white max-w-5xl origin-bottom-left"
          >
            Timeless Imagery. <br className="hidden md:block"/>
            <span className="italic text-white/80">Elevated Experiences.</span>
          </motion.h1>
        </div>

        {/* Subheadline with enhanced contrast & WCAG AA readability */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          className="mt-2 mb-16 md:mb-20 text-base md:text-lg font-light text-white/80 max-w-[62ch] leading-relaxed mx-auto"
        >
          Editorial photography for private moments, seamlessly paired with standby studio concepts for luxury venues.
        </motion.p>

        {/* Uncluttered High-End Editorial Dual CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-5 md:gap-6"
        >
          {/* Primary CTA (B2C) - Soft Champagne Pill */}
          <Button
            variant="outline"
            className="group rounded-full px-8 py-7 h-auto w-full sm:w-auto border-transparent bg-[#E8DCC4] hover:bg-[#dfd2b8] text-[#050505] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] shadow-lg flex items-center justify-center cursor-pointer"
            onClick={() => scrollToSection("portfolio")}
          >
            <span className="text-xs uppercase tracking-[0.14em] font-medium text-[#050505] mr-2">
              Book Your Session
            </span>
            <ArrowUpRight className="w-4 h-4 text-[#050505] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5" strokeWidth={1.8} />
          </Button>

          {/* Secondary CTA (B2B) - Subtle Glassmorphism Pill */}
          <Button
            variant="outline"
            className="group rounded-full px-8 py-7 h-auto w-full sm:w-auto border-white/25 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] flex items-center justify-center cursor-pointer"
            onClick={() => scrollToSection("partnership")}
          >
            <span className="text-xs uppercase tracking-[0.14em] font-medium text-white mr-2">
              Partner With Us
            </span>
            <ArrowUpRight className="w-4 h-4 text-white transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-0.5" strokeWidth={1.8} />
          </Button>
        </motion.div>

      </motion.div>
    </section>
  );
}