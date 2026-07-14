import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, Calendar, TrendingUp, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Client Logos
import clientLogo1 from "@assets/generated_images/logo_circuswp.png";
import clientLogo2 from "@assets/generated_images/logo_hotelpandawa.png";
import clientLogo3 from "@assets/generated_images/logo_lombokwildlife.png";
import clientLogo4 from "@assets/generated_images/logo_ombaksunset.png";
import clientLogo5 from "@assets/generated_images/logo_ubudstb.png";
import clientLogo6 from "@assets/generated_images/logo_villaombak.png";

const opportunities = [
  {
    icon: Handshake,
    title: "Partnership Programs",
    description: "Long-term collaboration with hotels, resorts, and wedding planners",
  },
  {
    icon: Calendar,
    title: "Event Coverage",
    description: "Regular coverage for corporate events and recurring occasions",
  },
  {
    icon: TrendingUp,
    title: "Brand Collaborations",
    description: "Creative partnerships with lifestyle and luxury brands",
  },
];

const clientLogos = [
  { name: "Circus Waterpark Bali", category: "Commercial Brand Campaign", img: clientLogo1 },
  { name: "Hotel Pandawa Hill Resort", category: "Hospitality & Architecture Visuals", img: clientLogo2 },
  { name: "Lombok Wildlife Park", category: "Eco-Tourism Promotion Campaign", img: clientLogo3 },
  { name: "Hotel Ombak Sunset Gili", category: "Luxury Destination Marketing", img: clientLogo4 },
  { name: "Ubud Luxury Villas & Spa", category: "Premium Resort Editorial Portfolio", img: clientLogo5 },
  { name: "Hotel Villa Ombak Gili", category: "Tropical Destination Brand Shooting", img: clientLogo6 },
];

export default function Collaboration() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedClientIndex, setSelectedClientIndex] = useState<number | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.getBoundingClientRect().top + window.scrollY - 90,
        behavior: 'smooth'
      });
    }
  };

  // Triple the logos for a seamless infinite loop
  const marqueeLogos = [...clientLogos, ...clientLogos, ...clientLogos];

  // Auto-scroll loop
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.8; // px per frame

    const step = () => {
      if (!isInteracting && !isDraggingRef.current && selectedClientIndex === null) {
        // Infinite wrap-around check
        const limit = scrollContainer.scrollWidth / 3;
        if (scrollContainer.scrollLeft >= limit) {
          scrollContainer.scrollLeft = 0;
        } else {
          scrollContainer.scrollLeft += scrollSpeed;
        }
      }
      animationFrameRef.current = requestAnimationFrame(step);
    };

    animationFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isInteracting, selectedClientIndex]);

  // Click-to-drag handlers for desktop mouse dragging
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
    setIsInteracting(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const container = scrollRef.current;
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag speed modifier
    let newScrollLeft = scrollLeftRef.current - walk;

    // Boundary wrap-around check during active dragging
    const limit = container.scrollWidth / 3;
    if (newScrollLeft <= 0) {
      newScrollLeft = limit;
      startXRef.current = e.pageX - container.offsetLeft;
      scrollLeftRef.current = limit;
    } else if (newScrollLeft >= limit) {
      newScrollLeft = 0;
      startXRef.current = e.pageX - container.offsetLeft;
      scrollLeftRef.current = 0;
    }

    container.scrollLeft = newScrollLeft;
  };

  const handleMouseUpOrLeave = () => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    
    // Resume auto-scroll after a short delay only for dragging
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 1500);
  };

  // Touch handlers to pause auto-scroll on mobile devices
  const handleTouchStart = () => {
    setIsInteracting(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleTouchEnd = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setIsInteracting(false);
    }, 1500);
  };

  // Lightbox Navigation Functions
  const closeLightbox = () => setSelectedClientIndex(null);

  const nextClient = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedClientIndex !== null) {
      setSelectedClientIndex((selectedClientIndex + 1) % marqueeLogos.length);
    }
  };

  const prevClient = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedClientIndex !== null) {
      setSelectedClientIndex((selectedClientIndex - 1 + marqueeLogos.length) % marqueeLogos.length);
    }
  };

  return (
    <section 
      id="collaboration" 
      className="py-36 md:py-48 bg-background overflow-hidden relative" 
      data-testid="section-collaboration"
    >
      {/* Self-contained CSS Marquee stylesheet */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee-scroll {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Content layout wrapper */}
      <div className="max-w-5xl mx-auto text-center relative z-10 px-6">
        {/* Header Block */}
        <div className="mb-20">
          <span className="text-[9px] uppercase tracking-[0.35em] font-semibold text-primary mb-4 block">
            Opportunities
          </span>
          <h2 
            className="font-serif text-5xl md:text-6xl font-light mb-6 text-foreground tracking-tight leading-[0.9]" 
            data-testid="heading-collaboration"
          >
            Collaboration
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            We welcome partnerships with businesses and creatives who share our passion for excellence and artistry
          </p>
        </div>

        {/* Opportunities grid using glass cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: index * 0.1 }}
                className="group flex animate-fade-up"
              >
                <div className="glass rounded-[2rem] p-8 flex flex-col items-center text-center w-full justify-between h-full hover:scale-[1.01] transition-transform duration-500">
                  <div>
                    <div className="inline-flex items-center justify-center w-11 h-11 mb-5 rounded-full bg-primary/10 border border-primary/20 transition-all duration-500 group-hover:scale-105">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <h3 
                      className="font-serif text-lg md:text-xl font-light mb-3 text-foreground tracking-wide" 
                      data-testid={`text-opportunity-title-${index}`}
                    >
                      {opportunity.title}
                    </h3>
                  </div>
                  <p 
                    className="text-xs text-muted-foreground leading-relaxed font-light mt-4" 
                    data-testid={`text-opportunity-desc-${index}`}
                  >
                    {opportunity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call To Action Box (Glass panel) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          className="flex group mb-24"
        >
          <div className="glass rounded-[2.5rem] p-8 md:p-12 w-full text-center">
            <h3 className="font-serif text-3xl font-light mb-4 text-foreground tracking-wide leading-tight">
              Let's Create Something Beautiful Together
            </h3>
            <p className="text-muted-foreground text-xs md:text-sm leading-relaxed max-w-xl mx-auto mb-8 font-light">
              Whether you're looking for short-term project collaboration or a long-term partnership, we'd love to hear from you.
            </p>
            <div className="inline-block p-0.5 rounded-full border border-foreground/[0.08] bg-foreground/[0.02]">
              <Button 
                onClick={handleContact} 
                className="rounded-full pl-6 pr-2 py-5 bg-primary text-primary-foreground hover:bg-primary/95 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)]"
                data-testid="button-collaboration-contact"
              >
                <span className="text-xs uppercase tracking-[0.2em] font-medium mr-3">Get In Touch</span>
                <div className="w-7 h-7 rounded-full bg-primary-foreground/15 flex items-center justify-center transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary-foreground" />
                </div>
              </Button>
            </div>
          </div>
        </motion.div>

        {/* LOGO WALL: HORIZONTAL TICKER WITH MANUAL DRAG-SCROLL + AUTO-SCROLL LOOP */}
        <div 
          className="border-t border-foreground/[0.05] pt-16 relative overflow-hidden" 
          data-testid="section-clients"
        >
          <span 
            className="text-[9px] uppercase tracking-[0.25em] font-semibold text-muted-foreground/60 block text-center mb-10 select-none"
            data-testid="heading-clients"
          >
            Valued Partners & Clients
          </span>
          
          {/* Draggable & Auto-scrolling Row Container — py expanded to py-16 to prevent clipping when zoomed up to 1.32x */}
          <div 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative w-full flex overflow-x-auto scrollbar-hide py-16 cursor-grab active:cursor-grabbing select-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {/* Overlay gradients for fade borders, blending dynamically */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-15 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-15 pointer-events-none" />

            {/* gap increased from 5 to 10 (2.5rem / 40px) to prevent zoomed cards from overlapping neighbors */}
            <div className="flex gap-10 items-center w-max px-4">
              {marqueeLogos.map((client, idx) => {
                const isHovered = hoveredIdx === idx;
                
                // Enhanced zoom scale and translate values
                const scale = isHovered ? 1.32 : 1;
                const y = isHovered ? -14 : 0;

                return (
                  <motion.div 
                    key={idx}
                    onMouseEnter={() => {
                      setHoveredIdx(idx);
                      setIsInteracting(true);
                      if (timeoutRef.current) clearTimeout(timeoutRef.current);
                    }}
                    onMouseLeave={() => {
                      setHoveredIdx(null);
                      setIsInteracting(false); // Resumes auto-scroll instantly upon mouse leave
                    }}
                    onClick={() => {
                      // Click opens the client lightbox modal
                      setSelectedClientIndex(idx);
                    }}
                    animate={{ scale, y }}
                    transition={{ type: "spring", stiffness: 180, damping: 18 }}
                    className={`relative p-1.5 rounded-[1.5rem] transition-all duration-300 select-none origin-bottom overflow-hidden cursor-pointer ${
                      isHovered
                        ? "glass border-primary/60 shadow-[0_0_25px_rgba(201,169,97,0.22)] bg-background/50"
                        : "glass bg-background/25 border-foreground/[0.06]"
                    }`}
                  >
                    {/* SURPRISE ME: Premium diagonal light-swipe shine sweep animation inside hovered card */}
                    {isHovered && (
                      <motion.div
                        initial={{ x: "-150%" }}
                        animate={{ x: "250%" }}
                        transition={{ duration: 1.1, ease: "easeInOut" }}
                        className="absolute inset-0 z-10 pointer-events-none"
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.28), transparent)",
                          skewX: -24,
                        }}
                      />
                    )}

                    {/* Outer Outline box is the hover trigger */}
                    <div className="py-3 px-6 flex items-center justify-center bg-background/30 rounded-[calc(1.5rem-1.5px)] min-w-[170px] h-24 select-none pointer-events-none">
                      <img 
                        src={client.img} 
                        alt={client.name} 
                        className={`h-11 md:h-12 w-auto object-contain transition-all duration-500 ease-out ${
                          isHovered ? "grayscale-0 opacity-100" : "grayscale opacity-45"
                        }`}
                        draggable={false}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

      {/* CLIENT LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {selectedClientIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center glass-heavy px-4 py-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors p-2.5 rounded-full glass cursor-pointer z-55"
              aria-label="Close brand showcase"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Desktop Side Left Nav Arrow */}
            <button
              onClick={prevClient}
              className="hidden md:flex absolute left-4 md:left-8 text-foreground/50 hover:text-foreground transition-colors p-3 rounded-full glass cursor-pointer z-55"
              aria-label="Previous brand"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Showcase card wrapper */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="relative max-w-lg w-full glass rounded-[2.5rem] p-10 md:p-12 flex flex-col items-center gap-8 text-center mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Highlight background circle for the logo */}
              <div className="w-40 h-40 rounded-2xl bg-foreground/[0.02] border border-foreground/[0.05] flex items-center justify-center p-6 shadow-sm">
                <img
                  src={marqueeLogos[selectedClientIndex].img}
                  alt={marqueeLogos[selectedClientIndex].name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Client brand info */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono text-primary uppercase tracking-[0.25em] font-semibold block">
                  {marqueeLogos[selectedClientIndex].category}
                </span>
                <h3 className="font-serif text-3xl font-light text-foreground tracking-tight leading-tight">
                  {marqueeLogos[selectedClientIndex].name}
                </h3>
                <p className="text-xs text-muted-foreground font-light leading-relaxed max-w-sm">
                  Partner resmi kolaborasi Infinity Photo dalam menghasilkan produksi visual tingkat dunia, mendokumentasikan keindahan Bali dan sekitarnya.
                </p>
              </div>

              {/* Project Details metadata badges */}
              <div className="w-full border-t border-foreground/[0.06] pt-6 flex justify-around text-left">
                <div>
                  <span className="text-[8px] font-mono text-muted-foreground/50 uppercase tracking-widest block">Project Type</span>
                  <span className="text-xs text-foreground/70 font-light">Commercial Film</span>
                </div>
                <div>
                  <span className="text-[8px] font-mono text-muted-foreground/50 uppercase tracking-widest block">Location</span>
                  <span className="text-xs text-foreground/70 font-light">Bali, ID</span>
                </div>
              </div>
            </motion.div>

            {/* Desktop Side Right Nav Arrow */}
            <button
              onClick={nextClient}
              className="hidden md:flex absolute right-4 md:right-8 text-foreground/50 hover:text-foreground transition-colors p-3 rounded-full glass cursor-pointer z-55"
              aria-label="Next brand"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Mobile Bottom Control Bar */}
            <div className="flex md:hidden items-center justify-center gap-6 mt-8 z-55">
              <button 
                onClick={prevClient} 
                className="p-3.5 rounded-full glass bg-background/50 active:scale-95 transition-transform"
                aria-label="Previous brand"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <span className="text-[10px] font-mono text-muted-foreground/80 tracking-widest bg-background/20 px-4 py-2 rounded-full glass">
                {(selectedClientIndex % clientLogos.length) + 1} / {clientLogos.length}
              </span>
              <button 
                onClick={nextClient} 
                className="p-3.5 rounded-full glass bg-background/50 active:scale-95 transition-transform"
                aria-label="Next brand"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}