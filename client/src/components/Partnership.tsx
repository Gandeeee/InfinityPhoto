import { motion } from "framer-motion";
import { CircleDollarSign, Minimize2, Sparkles, ArrowUpRight } from "lucide-react";

const pillars = [
  {
    title: "Fully Managed Operations",
    description: "Infinity Photo supplies all cameras, studio lighting, print stations, and professional photographers at zero cost to your venue.",
    icon: Sparkles,
  },
  {
    title: "Minimal Footprint",
    description: "Requires only 1x1m² of space and a single power outlet. Styled seamlessly to match your venue's interior aesthetic.",
    icon: Minimize2,
  },
  {
    title: "Shared Revenue Model",
    description: "Earn effortless passive income from every guest photo purchase with flexible, transparent revenue-sharing.",
    icon: CircleDollarSign,
  },
];

export default function Partnership() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 90,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      id="partnership" 
      className="py-32 md:py-44 px-4 md:px-8 bg-[#FDFBF7] overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block (Badge Eliminated, Human Copywriting) */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-foreground tracking-tight leading-[1.05] max-w-4xl mx-auto"
          >
            In-House Studio Corner for Luxury Venues
          </motion.h2>
          
          <p className="mt-6 text-base md:text-lg font-light text-foreground/80 max-w-[65ch] leading-relaxed mx-auto">
            Transform 1m² of unused space into an exclusive guest amenity and revenue stream. We manage the studio, gear, and team—your venue provides the space.
          </p>
        </div>

        {/* Asymmetrical Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-stretch">
          
          {/* LEFT: Visual Standby Studio Mockup (col-span-7) */}
          <motion.div 
            initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
            whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.32, 0.72, 0, 1] }}
            className="md:col-span-7 flex flex-col"
          >
            {/* Clean Elevated Container */}
            <div className="relative h-full min-h-[400px] md:min-h-[580px] rounded-2xl md:rounded-[1.5rem] bg-[#F5F2EB] border border-black/8 shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col items-center justify-center p-8 md:p-14 text-center">
              
              {/* Abstract Architectural Representation of Standby Studio */}
              <div className="w-32 h-48 md:w-40 md:h-64 rounded-t-full bg-white shadow-xl mb-8 relative flex flex-col items-center justify-start pt-8 border border-black/5">
                {/* Studio camera lens */}
                <div className="w-12 h-12 rounded-full border-4 border-black/10 bg-[#FDFBF7] flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-black/20" />
                </div>
                {/* Instant print preview screen */}
                <div className="w-24 h-16 mt-6 rounded-lg bg-black/5 border border-black/5" />
              </div>
              
              <h3 className="font-serif text-2xl font-light text-[#1A1A1A] tracking-wide mb-2">
                Infinity Standby Studio Mockup
              </h3>
              <p className="text-xs uppercase tracking-[0.16em] font-medium text-foreground/50">
                1x1m Installation & Managed Experience
              </p>
              
              {/* Micro Noise Texture */}
              <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }}></div>
            </div>
          </motion.div>

          {/* RIGHT: 3 Pillars + Inline CTA (col-span-5) */}
          <div className="md:col-span-5 flex flex-col justify-between gap-5 md:gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: index * 0.12 }}
                  className="rounded-2xl md:rounded-[1.25rem] bg-white border border-black/8 p-6 md:p-7 flex-1 shadow-[0_8px_30px_rgb(0,0,0,0.02)] flex flex-col justify-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#FDFBF7] border border-black/5 flex items-center justify-center mb-4">
                    <Icon className="w-4 h-4 text-[#1A1A1A]" strokeWidth={1.6} />
                  </div>
                  <h4 className="font-serif text-xl font-light text-[#1A1A1A] tracking-wide mb-2">
                    {pillar.title}
                  </h4>
                  <p className="text-xs md:text-sm text-[#4A4A4A] leading-relaxed font-light">
                    {pillar.description}
                  </p>
                </motion.div>
              );
            })}
            
            {/* CTA Button - Uncluttered Deep Charcoal Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.4 }}
              className="mt-1 w-full"
            >
              <button
                onClick={scrollToContact}
                className="group w-full inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs uppercase tracking-[0.14em] font-medium bg-[#1A1A1A] text-white hover:bg-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 shadow-md"
              >
                <span>Inquire for Standby Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
