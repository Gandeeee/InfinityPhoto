// Salin dan Timpa semua kode di client/src/components/Portfolio.tsx dengan kode ini:

import { useState } from "react";
// 1. Impor 'motion' dan 'AnimatePresence' dari framer-motion
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import weddingImage1 from "@assets/generated_images/Wedding_ceremony_portrait_9b4b85c0.png";
import weddingImage2 from "@assets/generated_images/Beach_sunset_couple_walk_cce27857.png";
import weddingImage3 from "@assets/generated_images/Wedding_detail_bouquet_4205ca11.png";
import weddingImage4 from "@assets/generated_images/Wedding_reception_candid_moment_326596ad.png";
import eventImage from "@assets/generated_images/Corporate_event_photography_6b6c050c.png";
import lifestyleImage from "@assets/generated_images/Lifestyle_portrait_photography_1394232d.png";

const portfolioItems = [
  { id: 1, category: "wedding", image: weddingImage1, title: "Elegant Wedding Ceremony" },
  { id: 2, category: "wedding", image: weddingImage2, title: "Beach Sunset Romance" },
  { id: 3, category: "wedding", image: weddingImage3, title: "Bridal Details" },
  { id: 4, category: "wedding", image: weddingImage4, title: "Reception Joy" },
  { id: 5, category: "event", image: eventImage, title: "Corporate Event" },
  { id: 6, category: "lifestyle", image: lifestyleImage, title: "Lifestyle Portrait" },
];

const categories = [
  { id: "all", label: "All" },
  { id: "wedding", label: "Wedding" },
  { id: "event", label: "Event" },
  { id: "lifestyle", label: "Lifestyle" },
];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredItems = selectedCategory === "all"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    // 2. Tambahkan 'overflow-hidden' di section utama
    <section id="portfolio" className="py-24 px-8 bg-background overflow-hidden" data-testid="section-portfolio">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground" data-testid="heading-portfolio">
            Portfolio
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A curated collection of our finest work across weddings, events, and lifestyle photography
          </p>

          {/* Bagian tombol filter ini tidak perlu diubah */}
          <div className="flex flex-wrap justify-center gap-3" data-testid="filter-categories">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => {
                  console.log(`Filter changed to: ${category.id}`);
                  setSelectedCategory(category.id);
                }}
                data-testid={`button-filter-${category.id}`}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        {/* 3. Kita bungkus list/map kita dengan <AnimatePresence> */}
        {/* Kita berikan prop 'mode="wait"' agar animasi 'exit' selesai 
            sebelum animasi 'enter' dimulai. Ini lebih rapi.
        */}
        <AnimatePresence mode="wait">
          <div
            key={selectedCategory} // Beri key di sini agar AnimatePresence tahu kapan list berubah
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (

              // 4. Kita ganti <div> pembungkus item menjadi <motion.div>
              <motion.div
                key={item.id} // key={item.id} sangat penting untuk AnimatePresence
                className="group relative aspect-[3/4] overflow-hidden rounded-md hover-elevate"
                data-testid={`card-portfolio-${index}`}

                // 5. Tambahkan properti animasi ini
                layout // Ini akan menganimasikan perpindahan posisi grid
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }} // Ini animasi saat item "keluar"
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-testid={`img-portfolio-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-xl" data-testid={`text-portfolio-title-${index}`}>
                      {item.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </div>
    </section>
  );
}