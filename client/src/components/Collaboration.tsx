import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, Calendar, Sparkles, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";

// Client Logos
import clientLogo1 from "@assets/generated_images/logo_circuswp.png";
import clientLogo2 from "@assets/generated_images/logo_hotelpandawa.png";
import clientLogo3 from "@assets/generated_images/logo_lombokwildlife.png";
import clientLogo4 from "@assets/generated_images/logo_ombaksunset.png";
import clientLogo5 from "@assets/generated_images/logo_ubudstb.png";
import clientLogo6 from "@assets/generated_images/logo_villaombak.png";

const opportunities = [
  {
    icon: Sparkles,
    title: "Commercial & Brand Campaigns",
    description: "Editorial visual direction, lookbooks, and commercial imagery tailored for luxury, fashion, and lifestyle brands.",
  },
  {
    icon: Calendar,
    title: "Corporate Event Retainers",
    description: "Dedicated documentation for high-profile summits, galas, and recurring corporate engagements.",
  },
  {
    icon: Handshake,
    title: "Planner & Agency Partnerships",
    description: "Preferred photography partner status for elite wedding planners, event producers, and creative agencies.",
  },
];

const clientLogos = [
  { 
    name: "Hotel Pandawa Hill Resort", 
    partnership: "Official Standby Studio Partner", 
    testimonial: "Infinity Photo's standby corner added a refined guest amenity while generating steady passive revenue with zero operational effort on our part.", 
    category: "Hospitality & Architecture Visuals", 
    img: clientLogo2 
  },
  { 
    name: "Hotel Ombak Sunset Gili", 
    partnership: "Exclusive Sunset Studio Partner", 
    testimonial: "Our guests adore the instant luxury print service. It elevated our beach resort experience significantly.", 
    category: "Luxury Destination Marketing", 
    img: clientLogo4 
  },
  { 
    name: "Ubud Luxury Villas & Spa", 
    partnership: "Preferred Editorial Photography Partner", 
    testimonial: "The visual quality and professional staging brought our brand storytelling to a whole new editorial standard.", 
    category: "Premium Resort Editorial Portfolio", 
    img: clientLogo5 
  },
  { 
    name: "Circus Waterpark Bali", 
    partnership: "Commercial Campaign Partner", 
    testimonial: "High energy, meticulous detail, and seamless campaign execution. Highly recommended production team.", 
    category: "Commercial Brand Campaign", 
    img: clientLogo1 
  },
  { 
    name: "Lombok Wildlife Park", 
    partnership: "Eco-Tourism Destination Partner", 
    testimonial: "They captured the natural beauty of our property and wildlife with incredible grace and warmth.", 
    category: "Eco-Tourism Promotion Campaign", 
    img: clientLogo3 
  },
  { 
    name: "Hotel Villa Ombak Gili", 
    partnership: "Standby Photo Corner Partner", 
    testimonial: "A seamless 1x1m setup that integrated naturally into our lobby aesthetic, delighting couples every evening.", 
    category: "Tropical Destination Brand Shooting", 
    img: clientLogo6 
  },
];

export default function Collaboration() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedClientIndex, setSelectedClientIndex] = useState<number | null>(null);
  const [isInteracting, setIsInteracting] = useState(false);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  
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

  // Auto-scroll loop and Parabolic Arc Calculation
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scrollSpeed = 0.8; // px per frame

    const step = () => {
      // 1. Handle auto-scrolling & seamless infinite loop
      if (!isInteracting && !isDraggingRef.current && selectedClientIndex === null && firstSetRef.current) {
        const limit = firstSetRef.current.offsetWidth;
        if (scrollContainer.scrollLeft >= limit) {
          // Pixel-perfect jump (subtract exact width to maintain sub-pixel momentum)
          scrollContainer.scrollLeft -= limit;
        } else {
          scrollContainer.scrollLeft += scrollSpeed;
        }
      }

      // 2. High-Performance Parabolic Arc
      const halfWidth = scrollContainer.clientWidth / 2;
      const centerScroll = scrollContainer.scrollLeft + halfWidth;

      cardsRef.current.forEach((card) => {
        if (!card) return;
        // offsetLeft is relative to the flex container which is perfect for calculation
        const cardCenter = card.offsetLeft + card.offsetWidth / 2;
        const dist = Math.abs(cardCenter - centerScroll);
        
        // y = a * dist^2 (Parabola)
        // At the edge of the screen (dist = halfWidth), it will dip by exactly 60px
        const dipAmount = 60; 
        const yOffset = (dist * dist) * (dipAmount / (halfWidth * halfWidth));
        
        // Apply transform directly bypassing React (Zero Lag)
        card.style.transform = `translate3d(0, ${yOffset}px, 0)`;
      });

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
    if (!container || !firstSetRef.current) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag speed modifier
    let newScrollLeft = scrollLeftRef.current - walk;

    // Boundary wrap-around check during active dragging
    const limit = firstSetRef.current.offsetWidth;
    if (newScrollLeft <= 0) {
      newScrollLeft += limit;
      startXRef.current = e.pageX - container.offsetLeft;
      scrollLeftRef.current = newScrollLeft;
    } else if (newScrollLeft >= limit) {
      newScrollLeft -= limit;
      startXRef.current = e.pageX - container.offsetLeft;
      scrollLeftRef.current = newScrollLeft;
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
      setSelectedClientIndex((selectedClientIndex + 1) % clientLogos.length);
    }
  };

  const prevClient = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedClientIndex !== null) {
      setSelectedClientIndex((selectedClientIndex - 1 + clientLogos.length) % clientLogos.length);
    }
  };

  return (
    <section 
      id="collaboration" 
      className="py-32 md:py-44 bg-background overflow-hidden relative" 
      data-testid="section-collaboration"
    >
      <div className="max-w-6xl mx-auto text-center relative z-10 px-4 md:px-8">
        {/* Header Block */}
        <div className="mb-16 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-foreground tracking-tight leading-[1.05] max-w-4xl mx-auto" 
            data-testid="heading-collaboration"
          >
            Co-Creating Visual Excellence
          </motion.h2>
          <p className="text-[#4A4A4A] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            From editorial brand campaigns to recurring corporate galas, we partner with visionary creative directors, agencies, and luxury brands.
          </p>
        </div>

        {/* Opportunities Grid with Soft Elevated Warm Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: index * 0.12 }}
                className="group flex"
              >
                <div className="rounded-2xl md:rounded-[1.25rem] bg-white border border-black/8 p-7 md:p-8 flex flex-col items-center text-center w-full justify-between h-full shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:scale-[1.015] transition-transform duration-500">
                  <div>
                    <div className="inline-flex items-center justify-center w-10 h-10 mb-5 rounded-full bg-[#FDFBF7] border border-black/5">
                      <Icon className="w-4 h-4 text-[#C5A059]" strokeWidth={1.8} />
                    </div>
                    <h3 
                      className="font-serif text-xl font-light mb-3 text-[#1A1A1A] tracking-wide" 
                      data-testid={`text-opportunity-title-${index}`}
                    >
                      {opportunity.title}
                    </h3>
                  </div>
                  <p 
                    className="text-xs md:text-sm text-[#4A4A4A] leading-relaxed font-light mt-3" 
                    data-testid={`text-opportunity-desc-${index}`}
                  >
                    {opportunity.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.2 }}
          className="flex group mb-20 md:mb-28"
        >
          <div className="rounded-2xl md:rounded-[1.5rem] bg-white border border-black/8 p-8 md:p-14 w-full text-center shadow-[0_8px_25px_rgba(0,0,0,0.03)]">
            <h3 className="font-serif text-2xl md:text-3xl font-light mb-4 text-[#1A1A1A] tracking-wide leading-tight max-w-2xl mx-auto">
              Have a Creative Project in Mind?
            </h3>
            <p className="text-[#4A4A4A] text-xs md:text-sm leading-relaxed max-w-xl mx-auto mb-8 font-light">
              Whether you need a dedicated production team or a long-term retainer, let us bring your vision to life.
            </p>
            
            {/* Uncluttered Deep Charcoal Pill Button */}
            <button 
              onClick={handleContact} 
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs uppercase tracking-[0.14em] font-medium bg-[#1A1A1A] text-white hover:bg-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 shadow-md"
              data-testid="button-collaboration-contact"
            >
              <span>Start a Collaboration</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* 100% EDGE-TO-EDGE FULL-WIDTH PARTNER MARQUEE SECTION */}
      <div 
        className="w-full border-t border-black/8 pt-20 pb-12 relative overflow-hidden" 
        data-testid="section-clients"
      >
        {/* Header Block (Centered) */}
        <div className="max-w-4xl mx-auto text-center mb-12 px-4 relative z-20">
          <h3 
            className="font-serif text-3xl md:text-4xl font-light text-[#1A1A1A] tracking-tight mb-3"
            data-testid="heading-clients"
          >
            Trusted by Premier Venues & Brands
          </h3>
          <p className="text-xs md:text-sm text-[#4A4A4A] font-light max-w-lg mx-auto leading-relaxed">
            Partnering with leading hospitality properties to capture unforgettable moments.
          </p>
        </div>
        
        {/* Full Bleed Marquee Viewport with Edge Fade Mask */}
        <div 
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          className="w-full overflow-x-auto overflow-y-hidden scrollbar-hide pt-14 pb-24 md:pt-16 md:pb-32 cursor-grab active:cursor-grabbing select-none [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <div className="flex w-max px-12 relative">
            {/* Set 1 (Used for offset calculation) */}
            <div ref={firstSetRef} className="flex gap-8 md:gap-12 items-center pr-8 md:pr-12">
              {clientLogos.map((client, idx) => {
                const isHovered = hoveredIdx === idx;
                const scale = isHovered ? 1.15 : 1;
                
                return (
                  <div 
                    key={`set1-${idx}`}
                    ref={(el) => cardsRef.current[idx] = el}
                    className="relative w-[160px] h-[100px] md:w-[270px] md:h-[155px]"
                  >
                    <motion.div 
                      onMouseEnter={() => {
                        setHoveredIdx(idx);
                        setIsInteracting(true);
                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      }}
                      onMouseLeave={() => {
                        setHoveredIdx(null);
                        setIsInteracting(false);
                      }}
                      onClick={() => setSelectedClientIndex(idx)}
                      animate={{ scale }}
                      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                      className={`w-full h-full rounded-2xl md:rounded-[1.25rem] bg-white border border-black/8 flex items-center justify-center p-4 md:p-8 cursor-pointer select-none overflow-hidden transition-shadow duration-300 ${
                        isHovered
                          ? "shadow-[0_20px_45px_rgba(197,160,89,0.15)] border-[#C5A059]/40 z-30"
                          : "shadow-sm z-10"
                      }`}
                    >
                      <img 
                        src={client.img} 
                        alt={client.name} 
                        loading="lazy"
                        decoding="async"
                        className="max-h-10 md:max-h-16 max-w-[130px] md:max-w-full w-auto object-contain transition-opacity duration-300 opacity-90 hover:opacity-100"
                        style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                        draggable={false}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Set 2 */}
            <div className="flex gap-5 md:gap-12 items-center pr-5 md:pr-12">
              {clientLogos.map((client, idx) => {
                const globalIdx = idx + clientLogos.length;
                const isHovered = hoveredIdx === globalIdx;
                const scale = isHovered ? 1.15 : 1;
                
                return (
                  <div 
                    key={`set2-${idx}`}
                    ref={(el) => cardsRef.current[globalIdx] = el}
                    className="relative w-[160px] h-[100px] md:w-[270px] md:h-[155px]"
                  >
                    <motion.div 
                      onMouseEnter={() => {
                        setHoveredIdx(globalIdx);
                        setIsInteracting(true);
                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      }}
                      onMouseLeave={() => {
                        setHoveredIdx(null);
                        setIsInteracting(false);
                      }}
                      onClick={() => setSelectedClientIndex(idx)}
                      animate={{ scale }}
                      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                      className={`w-full h-full rounded-2xl md:rounded-[1.25rem] bg-white border border-black/8 flex items-center justify-center p-4 md:p-8 cursor-pointer select-none overflow-hidden transition-shadow duration-300 ${
                        isHovered
                          ? "shadow-[0_20px_45px_rgba(197,160,89,0.15)] border-[#C5A059]/40 z-30"
                          : "shadow-sm z-10"
                      }`}
                    >
                      <img 
                        src={client.img} 
                        alt={client.name} 
                        loading="lazy"
                        decoding="async"
                        className="max-h-10 md:max-h-16 max-w-[130px] md:max-w-full w-auto object-contain transition-opacity duration-300 opacity-90 hover:opacity-100"
                        style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                        draggable={false}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>

            {/* Set 3 */}
            <div className="flex gap-5 md:gap-12 items-center pr-5 md:pr-12">
              {clientLogos.map((client, idx) => {
                const globalIdx = idx + clientLogos.length * 2;
                const isHovered = hoveredIdx === globalIdx;
                const scale = isHovered ? 1.15 : 1;
                
                return (
                  <div 
                    key={`set3-${idx}`}
                    ref={(el) => cardsRef.current[globalIdx] = el}
                    className="relative w-[160px] h-[100px] md:w-[270px] md:h-[155px]"
                  >
                    <motion.div 
                      onMouseEnter={() => {
                        setHoveredIdx(globalIdx);
                        setIsInteracting(true);
                        if (timeoutRef.current) clearTimeout(timeoutRef.current);
                      }}
                      onMouseLeave={() => {
                        setHoveredIdx(null);
                        setIsInteracting(false);
                      }}
                      onClick={() => setSelectedClientIndex(idx)}
                      animate={{ scale }}
                      transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                      className={`w-full h-full rounded-2xl md:rounded-[1.25rem] bg-white border border-black/8 flex items-center justify-center p-4 md:p-8 cursor-pointer select-none overflow-hidden transition-shadow duration-300 ${
                        isHovered
                          ? "shadow-[0_20px_45px_rgba(197,160,89,0.15)] border-[#C5A059]/40 z-30"
                          : "shadow-sm z-10"
                      }`}
                    >
                      <img 
                        src={client.img} 
                        alt={client.name} 
                        loading="lazy"
                        decoding="async"
                        className="max-h-10 md:max-h-16 max-w-[130px] md:max-w-full w-auto object-contain transition-opacity duration-300 opacity-90 hover:opacity-100"
                        style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                        draggable={false}
                      />
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* CLIENT TESTIMONIAL LIGHTBOX OVERLAY */}
      <AnimatePresence>
        {selectedClientIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80 backdrop-blur-xl px-4 py-8"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer z-[55]"
              aria-label="Close partner details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Desktop Left Nav Arrow */}
            <button
              onClick={prevClient}
              className="hidden md:flex absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors p-4 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer z-[55]"
              aria-label="Previous partner"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Partner Detail Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="relative max-w-lg w-full bg-white rounded-2xl md:rounded-[1.5rem] border border-black/10 p-8 md:p-10 flex flex-col items-center text-center mx-4 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Partner Logo Wrapper */}
              <div className="w-36 h-28 rounded-xl bg-stone-100 border border-black/5 flex items-center justify-center p-4 mb-6 shadow-inner">
                <img
                  src={clientLogos[selectedClientIndex].img}
                  alt={clientLogos[selectedClientIndex].name}
                  decoding="async"
                  className="max-w-full max-h-full object-contain"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                />
              </div>

              {/* Partner Info */}
              <div className="space-y-2 mb-6">
                <span className="text-[10px] uppercase tracking-[0.18em] font-medium text-[#C5A059] block">
                  {clientLogos[selectedClientIndex].partnership}
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-light text-[#1A1A1A] tracking-tight">
                  {clientLogos[selectedClientIndex].name}
                </h3>
              </div>

              {/* Management Testimonial Quote */}
              <blockquote className="text-xs md:text-sm text-[#4A4A4A] font-light italic leading-relaxed max-w-md bg-[#FDFBF7] p-5 rounded-xl border border-black/5 mb-6">
                "{clientLogos[selectedClientIndex].testimonial}"
              </blockquote>

              {/* Metadata details */}
              <div className="w-full border-t border-black/8 pt-4 flex justify-between text-left text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-foreground/50 block font-medium">Category</span>
                  <span className="text-[#1A1A1A] font-light">{clientLogos[selectedClientIndex].category}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-foreground/50 block font-medium">Location</span>
                  <span className="text-[#1A1A1A] font-light">Bali, Indonesia</span>
                </div>
              </div>
            </motion.div>

            {/* Desktop Right Nav Arrow */}
            <button
              onClick={nextClient}
              className="hidden md:flex absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors p-4 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer z-[55]"
              aria-label="Next partner"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center justify-center gap-6 mt-8 z-[55]">
              <button 
                onClick={prevClient} 
                className="p-3.5 rounded-full bg-white/10 active:scale-95 transition-transform"
                aria-label="Previous partner"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <span className="text-[11px] font-mono text-white/70 tracking-widest bg-white/10 px-4 py-2 rounded-full">
                {(selectedClientIndex % clientLogos.length) + 1} / {clientLogos.length}
              </span>
              <button 
                onClick={nextClient} 
                className="p-3.5 rounded-full bg-white/10 active:scale-95 transition-transform"
                aria-label="Next partner"
              >
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}