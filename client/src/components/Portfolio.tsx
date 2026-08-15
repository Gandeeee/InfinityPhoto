import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Loader2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Images
import img1 from "@assets/compressed_img/agung wed.jpg";
import img2 from "@assets/compressed_img/5p489.jpg";
import img3 from "@assets/compressed_img/5p498.jpg";
import img4 from "@assets/compressed_img/5p542.jpg";
import img5 from "@assets/compressed_img/IMG_4017-scaled.webp";
import img6 from "@assets/compressed_img/L4b.jpg";
import img7 from "@assets/compressed_img/PU7_5622.jpg";
import img8 from "@assets/compressed_img/lombok elephant.jpg";
import img9 from "@assets/compressed_img/senja-ombak-sunset.jpg";
import img10 from "@assets/compressed_img/90610778_3195905833767608_3937488238716911616_n.jpg";
import img11 from "@assets/compressed_img/Circus-Waterpark-Bali.jpg";
import img12 from "@assets/compressed_img/ban-3.webp";
import img13 from "@assets/compressed_img/circus water park.webp";
import img14 from "@assets/compressed_img/lombok elephant1.jpg";
import img15 from "@assets/compressed_img/lombok elephant3.jpg";
import img16 from "@assets/compressed_img/speed-racing-724x400.jpg";

const portfolioItems = [
  { id: 1, category: "wedding", image: img1, title: "Sacred Vows", location: "Bali", year: "2024", span: "md:col-span-8 md:row-span-2", objectPosition: "object-[center_25%]" },
  { id: 2, category: "wedding", image: img2, title: "Intimate Exchange", location: "Bali", year: "2024", span: "md:col-span-4 md:row-span-1" },
  { id: 3, category: "wedding", image: img3, title: "Golden Hour Romance", location: "Bali", year: "2024", span: "md:col-span-4 md:row-span-1" },
  { id: 4, category: "wedding", image: img4, title: "Bridal Elegance", location: "Bali", year: "2023", span: "md:col-span-4 md:row-span-2" },
  { id: 5, category: "lifestyle", image: img5, title: "Editorial Portrait", location: "Bali", year: "2023", span: "md:col-span-8 md:row-span-1", objectPosition: "object-[center_25%]" },
  { id: 6, category: "lifestyle", image: img6, title: "Urban Exploration", location: "Bali", year: "2023", span: "md:col-span-4 md:row-span-1" },
  { id: 7, category: "moments", image: img7, title: "Candid Laughter", location: "Bali", year: "2024", span: "md:col-span-4 md:row-span-1" },
  { id: 8, category: "lifestyle", image: img8, title: "Safari Encounter", location: "Lombok", year: "2024", span: "md:col-span-4 md:row-span-1" },
  { id: 9, category: "moments", image: img9, title: "Ocean Horizon", location: "Lombok", year: "2023", span: "md:col-span-4 md:row-span-1" },
  { id: 10, category: "wedding", image: img10, title: "Joyful Celebration", location: "Bali", year: "2024", span: "md:col-span-4 md:row-span-1" },
  { id: 11, category: "moments", image: img11, title: "Waterpark Splash", location: "Bali", year: "2024", span: "md:col-span-8 md:row-span-2" },
  { id: 12, category: "moments", image: img12, title: "Musical Harmony", location: "Bali", year: "2024", span: "md:col-span-4 md:row-span-1" },
  { id: 13, category: "moments", image: img13, title: "Playful Afternoon", location: "Bali", year: "2024", span: "md:col-span-4 md:row-span-1" },
  { id: 14, category: "lifestyle", image: img14, title: "Nature Connection", location: "Lombok", year: "2023", span: "md:col-span-4 md:row-span-1" },
  { id: 15, category: "lifestyle", image: img15, title: "Wilderness Walk", location: "Lombok", year: "2023", span: "md:col-span-4 md:row-span-1" },
  { id: 16, category: "moments", image: img16, title: "Thrill & Speed", location: "Bali", year: "2024", span: "md:col-span-4 md:row-span-1" },
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "wedding", label: "Wedding" },
  { id: "moments", label: "Sweet Moments" },
  { id: "lifestyle", label: "Lifestyle Portraits" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);
  const [isLoading, setIsLoading] = useState(false);

  const filteredItems = selectedCategory === "all"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === selectedCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount(prev => prev + 6);
      setIsLoading(false);
    }, 800);
  };

  const handleCategoryChange = (id: string) => {
    setSelectedCategory(id);
    setVisibleCount(6);
    setSelectedImageIndex(null);
  };

  const openLightbox = (index: number) => setSelectedImageIndex(index);
  const closeLightbox = () => setSelectedImageIndex(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % visibleItems.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + visibleItems.length) % visibleItems.length);
    }
  };

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
      id="portfolio"
      className="py-32 md:py-44 px-4 md:px-8 bg-background overflow-hidden relative"
    >
      <div className="max-w-[1600px] mx-auto mb-12 md:mb-20">
        {/* Header Block (Badge Eliminated, Clean Title) */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-10">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light text-foreground tracking-tight leading-[0.95]"
            >
              Selected Works
            </motion.h2>
          </div>

          {/* Filter Tabs (WCAG AA Compliant Light Mode Contrast) */}
          <div className="flex flex-wrap gap-2.5 md:gap-3">
            {categories.map((category) => {
              const isActive = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`text-[11px] uppercase tracking-[0.14em] font-medium px-5 py-2.5 md:px-6 md:py-3 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 cursor-pointer ${
                    isActive
                      ? "bg-[#1A1A1A] text-white shadow-sm"
                      : "bg-transparent text-[#333333] border border-black/15 hover:border-black/35"
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Gallery Grid (No Nested Outer Cards, Direct Image Radius & Hover Overlay) */}
      <div className="max-w-[1600px] mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {visibleItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1], delay: (index % 4) * 0.06 }}
                key={item.id}
                className={`relative group cursor-pointer ${item.span}`}
                onClick={() => openLightbox(index)}
              >
                {/* Direct Image Container without outer nested frames */}
                <div 
                  className="relative h-full min-h-[300px] md:min-h-[360px] rounded-2xl md:rounded-[1.25rem] overflow-hidden bg-stone-900/10"
                  style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden", transform: "translateZ(0)" }}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} - ${item.location}`}
                    loading="lazy"
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.035] ${item.objectPosition || "object-center"}`}
                    style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
                  />
                  
                  {/* Subtle Gradient Hover Overlay displaying Venue & Event Details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] flex flex-col justify-end p-6 md:p-8">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-white/70 font-medium mb-2">
                      {item.category} · {item.year}
                    </span>
                    <h3 className="font-serif text-2xl md:text-3xl font-light text-white tracking-wide mb-1 translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                      {item.title}
                    </h3>
                    <p className="text-xs font-light text-white/80 tracking-wide translate-y-3 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] delay-75">
                      {item.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Section Bottom CTA ("Explore Full Gallery ↗") */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
          className="mt-14 md:mt-20 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {hasMore ? (
            <button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs uppercase tracking-[0.14em] font-medium border border-foreground/20 bg-background/50 hover:bg-foreground/10 text-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              <span>{isLoading ? "Loading Works..." : "Load More Works"}</span>
              {isLoading ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
              )}
            </button>
          ) : (
            <button
              onClick={scrollToContact}
              className="group inline-flex items-center gap-2 rounded-full px-8 py-4 text-xs uppercase tracking-[0.14em] font-medium border border-foreground/20 bg-background/50 hover:bg-foreground/10 text-foreground transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
            >
              <span>Explore Full Gallery</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
            </button>
          )}
        </motion.div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-2xl px-4 py-8"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-3 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer z-[105]"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={prevImage}
              className="hidden md:flex absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors p-4 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer z-[105]"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="relative max-w-[90vw] max-h-[80vh] flex flex-col items-center select-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={visibleItems[selectedImageIndex].image}
                alt={`${visibleItems[selectedImageIndex].title} - ${visibleItems[selectedImageIndex].location}`}
                className="max-w-full max-h-[70vh] object-contain rounded-2xl shadow-2xl"
              />
              <div className="text-center mt-6">
                <span className="font-serif text-2xl font-light text-white tracking-wide block mb-1">
                  {visibleItems[selectedImageIndex].title}
                </span>
                <p className="text-xs font-light text-white/80 mb-2">
                  {visibleItems[selectedImageIndex].location}
                </p>
                <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-white/50">
                  {visibleItems[selectedImageIndex].category} · {visibleItems[selectedImageIndex].year}
                </span>
              </div>
            </motion.div>

            <button
              onClick={nextImage}
              className="hidden md:flex absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors p-4 rounded-full bg-white/10 hover:bg-white/20 cursor-pointer z-[105]"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex md:hidden items-center justify-center gap-8 mt-8 z-[105]">
              <button 
                onClick={prevImage} 
                className="p-4 rounded-full bg-white/10 active:scale-95 transition-transform"
              >
                <ChevronLeft className="w-5 h-5 text-white" />
              </button>
              <span className="text-[11px] font-mono text-white/60 tracking-widest">
                {selectedImageIndex + 1} / {visibleItems.length}
              </span>
              <button 
                onClick={nextImage} 
                className="p-4 rounded-full bg-white/10 active:scale-95 transition-transform"
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