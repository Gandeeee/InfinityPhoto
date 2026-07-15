import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import weddingImage1 from "@assets/generated_images/Wedding_ceremony_portrait_9b4b85c0.png";
import weddingImage2 from "@assets/generated_images/Beach_sunset_couple_walk_cce27857.png";
import weddingImage3 from "@assets/generated_images/Wedding_detail_bouquet_4205ca11.png";
import weddingImage4 from "@assets/generated_images/Wedding_reception_candid_moment_326596ad.png";
import eventImage from "@assets/generated_images/Corporate_event_photography_6b6c050c.png";
import lifestyleImage from "@assets/generated_images/Lifestyle_portrait_photography_1394232d.png";

const portfolioItems = [
  { id: 1, category: "wedding", image: weddingImage1, title: "Elegant Wedding Ceremony", year: "2024" },
  { id: 2, category: "wedding", image: weddingImage2, title: "Beach Sunset Romance", year: "2024" },
  { id: 3, category: "lifestyle", image: lifestyleImage, title: "Lifestyle Portrait", year: "2024" },
  { id: 4, category: "wedding", image: weddingImage3, title: "Bridal Details", year: "2023" },
  { id: 5, category: "event", image: eventImage, title: "Corporate Event", year: "2023" },
  { id: 6, category: "wedding", image: weddingImage4, title: "Reception Joy", year: "2023" },
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "wedding", label: "Wedding" },
  { id: "event", label: "Event" },
  { id: "lifestyle", label: "Lifestyle" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const filteredItems = selectedCategory === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  // Click-to-drag handlers for desktop mouse dragging on Gallery
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;

    isDraggingRef.current = true;
    startXRef.current = e.pageX - container.offsetLeft;
    scrollLeftRef.current = container.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current) return;
    const container = scrollRef.current;
    if (!container) return;

    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag speed multiplier
    container.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDraggingRef.current = false;
  };

  return (
    <section
      id="portfolio"
      className="py-36 md:py-48 mesh-portfolio overflow-hidden relative"
      data-testid="section-portfolio"
    >
      {/* Header */}
      <div className="px-6 md:px-12 lg:px-16 max-w-[1800px] mx-auto mb-12 select-none">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-primary mb-4 block">
              Gallery
            </span>
            <h2
              className="font-serif text-5xl md:text-6xl font-light text-foreground tracking-tight leading-[0.9]"
              data-testid="heading-portfolio"
            >
              Selected Works
            </h2>
          </div>

          {/* Filter capsules */}
          <div className="flex flex-wrap gap-2" data-testid="filter-categories">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  closeLightbox();
                }}
                className={`text-[11px] uppercase tracking-[0.1em] font-semibold px-5 py-2.5 rounded-full border transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                  selectedCategory === category.id
                    ? "bg-primary border-primary text-primary-foreground shadow-sm"
                    : "bg-background/25 border-foreground/[0.08] text-foreground/50 hover:text-foreground hover:border-foreground/20"
                }`}
                data-testid={`button-filter-${category.id}`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-[11px] uppercase tracking-[0.12em] text-muted-foreground/35 mt-6 font-light select-none">
          Drag or swipe to explore →
        </p>
      </div>

      {/* Drag-scroll view container: native touch inertia on mobile, drag-scroll on desktop */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUpOrLeave}
        onMouseLeave={handleMouseUpOrLeave}
        className="overflow-x-auto scrollbar-hide pl-6 md:pl-12 lg:pl-16 cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            className="flex gap-5 pb-6 select-none w-max"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex-shrink-0 w-60 sm:w-72 md:w-80 lg:w-[22rem]"
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{
                  duration: 0.75,
                  ease: [0.32, 0.72, 0, 1],
                  delay: index * 0.07,
                }}
                data-testid={`card-portfolio-${index}`}
              >
                {/* Premium glass frame bezel */}
                <div
                  className="p-1.5 rounded-[2rem] glass cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="group relative rounded-[calc(2rem-0.375rem)] overflow-hidden"
                    style={{ aspectRatio: "2/3" }}>
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.07]"
                      draggable={false}
                      data-testid={`img-portfolio-${index}`}
                    />

                    {/* Caption scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-7">
                      <span className="text-[11px] uppercase tracking-[0.12em] text-primary mb-2 font-semibold">
                        {item.category} · {item.year}
                      </span>
                      <h3
                        className="font-serif text-xl font-light text-foreground tracking-wide translate-y-2 group-hover:translate-y-0 transition-transform duration-500"
                        data-testid={`text-portfolio-title-${index}`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    {/* Always-visible index tag */}
                    <div className="absolute top-4 left-4 text-[11px] font-mono text-foreground/30 font-light tracking-widest">
                      0{index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Trailing spacer so last card isn't flush with edge */}
            <div className="flex-shrink-0 w-8 md:w-16" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
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
              aria-label="Close gallery"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Desktop-only Side Left Nav Arrow */}
            <button
              onClick={prevImage}
              className="hidden md:flex absolute left-4 md:left-8 text-foreground/50 hover:text-foreground transition-colors p-3 rounded-full glass cursor-pointer z-55"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Lightbox Center Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.93 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.93 }}
              transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
              className="relative max-w-full max-h-[70vh] md:max-h-[80vh] flex flex-col items-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredItems[selectedImageIndex].image}
                alt={filteredItems[selectedImageIndex].title}
                className="max-w-[88vw] max-h-[60vh] md:max-h-[72vh] object-contain rounded-2xl border border-foreground/[0.08] shadow-2xl"
              />
              <div className="text-center mt-5">
                <span className="font-serif text-base font-light text-foreground/80 tracking-wide">
                  {filteredItems[selectedImageIndex].title}
                </span>
                <span className="ml-3 text-[11px] font-mono text-foreground/35 tracking-widest">
                  {filteredItems[selectedImageIndex].year}
                </span>
              </div>
            </motion.div>

            {/* Desktop-only Side Right Nav Arrow */}
            <button
              onClick={nextImage}
              className="hidden md:flex absolute right-4 md:right-8 text-foreground/50 hover:text-foreground transition-colors p-3 rounded-full glass cursor-pointer z-55"
              aria-label="Next image"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Mobile-only Bottom Control Bar (Thumb-friendly & prevents side arrow overlaps) */}
            <div className="flex md:hidden items-center justify-center gap-6 mt-8 z-55">
              <button 
                onClick={prevImage} 
                className="p-3.5 rounded-full glass bg-background/50 active:scale-95 transition-transform"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <span className="text-[11px] font-mono text-muted-foreground/80 tracking-widest bg-background/20 px-4 py-2 rounded-full glass">
                {selectedImageIndex + 1} / {filteredItems.length}
              </span>
              <button 
                onClick={nextImage} 
                className="p-3.5 rounded-full glass bg-background/50 active:scale-95 transition-transform"
                aria-label="Next image"
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