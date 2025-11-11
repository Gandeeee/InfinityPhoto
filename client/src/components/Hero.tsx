import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_wedding_couple_sunset_7f3ae820.png";
import ShinyText from "@/components/ui/shiny-text";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Setup untuk Parallax
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  // Transform untuk Parallax
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  // Transform untuk Fade Out Konten
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <section ref={targetRef} className="relative h-screen w-full overflow-hidden" data-testid="section-hero">
      
      {/* 1. GAMBAR BACKGROUND (PARALLAX) - z-0 */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY }}
      >
        <img
          src={heroImage}
          alt="Romantic couple embracing during golden hour sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      </motion.div>


      {/* 3. KONTEN (TEKS & TOMBOL) (DI DEPAN) - z-10 */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full px-8 text-center"
        style={{ opacity: contentOpacity }}
      >
        <ShinyText
          text="INFINITY PHOTO"
          speed={3}
          className="font-serif text-6xl md:text-8xl font-light tracking-wide mb-6 text-white"
          data-testid="text-brand-name"
        />
        <p className="font-serif text-lg md:text-2xl font-light italic opacity-90 max-w-2xl mb-12 text-white" data-testid="text-tagline">
          Capturing timeless moments with artistic excellence
        </p>
        <Button
          variant="outline"
          size="lg"
          className="bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20"
          onClick={() => scrollToSection('contact')}
          data-testid="button-cta-hero"
        >
          Get In Touch
        </Button>
      </motion.div>

      {/* 4. TOMBOL SCROLL DOWN (DI DEPAN) - z-10 */}
      <motion.button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white animate-bounce z-10"
        data-testid="button-scroll-down"
        aria-label="Scroll down"
        style={{ opacity: buttonOpacity }}
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}