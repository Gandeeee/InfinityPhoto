import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Images for Photography Services
import weddingImage from "@assets/generated_images/Wedding_ceremony_portrait_9b4b85c0.png";
import eventImage from "@assets/generated_images/Corporate_event_photography_6b6c050c.png";
import lifestyleImage from "@assets/generated_images/Lifestyle_portrait_photography_1394232d.png";

// Images for Printed Products
import albumImage from "@assets/generated_images/Luxury_photo_album_product_47215657.png";
import frameImage from "@assets/generated_images/Wooden_frame_product_mockup_bdcb6ceb.png";
import customUsb from "@assets/generated_images/custom_drives.jpg";
import digitalGallery from "@assets/generated_images/Digital_gallery.jpg";

const serviceCategories = [
  {
    title: "Wedding Photography",
    description: "Capture the magic of your special day with romantic, emotional storytelling through our lens. From intimate moments to grand celebrations.",
    image: weddingImage,
  },
  {
    title: "Event Photography",
    description: "Professional coverage of corporate events, conferences, and special occasions with artistic flair and attention to detail.",
    image: eventImage,
  },
  {
    title: "Lifestyle Portrait",
    description: "Personal and authentic portrait sessions that reflect your unique personality and style in natural, beautiful settings.",
    image: lifestyleImage,
  },
];

const productCategories = [
  {
    title: "Premium Hardcover Albums",
    description: "Luxurious leather-bound photo albums with premium paper and elegant binding",
    image: albumImage,
  },
  {
    title: "Custom USB Drives",
    description: "Elegant wooden or metal USB drives containing high-resolution digital files",
    image: customUsb,
  },
  {
    title: "Framed Prints",
    description: "Museum-quality prints in handcrafted wooden frames ready to display",
    image: frameImage,
  },
  {
    title: "Digital Gallery",
    description: "Private online gallery for easy viewing, sharing, and downloading",
    image: digitalGallery,
  },
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<"services" | "products">("services");

  return (
    <section 
      id="services" 
      className="py-36 md:py-48 px-6 mesh-services overflow-hidden relative" 
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-20">
          <span className="text-[11px] uppercase tracking-[0.15em] font-semibold text-primary mb-4 block">
            Capabilities
          </span>
          <h2 
            className="font-serif text-5xl md:text-6xl font-light mb-8 text-foreground tracking-tight leading-[0.9]" 
            data-testid="heading-services"
          >
            Services & Products
          </h2>

          {/* Interactive Glass Switcher Tabs */}
          <div className="inline-flex p-1.5 rounded-full border border-foreground/[0.06] bg-foreground/[0.02] backdrop-blur-md">
            <button
              onClick={() => setActiveTab("services")}
              className={`text-[11px] uppercase tracking-[0.1em] font-semibold px-6 py-2.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                activeTab === "services"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Photography Services
            </button>
            <button
              onClick={() => setActiveTab("products")}
              className={`text-[11px] uppercase tracking-[0.1em] font-semibold px-6 py-2.5 rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                activeTab === "products"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              Printed Products
            </button>
          </div>
        </div>

        {/* Tab Content Showcase with glass aesthetic */}
        <AnimatePresence mode="wait">
          {activeTab === "services" ? (
            <motion.div
              key="services-pane"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-3 gap-8"
            >
              {serviceCategories.map((service, index) => (
                <div
                  key={service.title}
                  className="group p-1.5 rounded-[2rem] glass hover:scale-[1.01] transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] cursor-pointer"
                  data-testid={`card-service-${index}`}
                >
                  <div className="overflow-hidden aspect-[3/4] relative rounded-[calc(2rem-0.375rem)]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                      data-testid={`img-service-${index}`}
                    />
                    {/* Shadow overlay adjusted for theme flexibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 text-foreground z-10 flex flex-col justify-end h-full">
                      <span className="text-[11px] uppercase tracking-[0.1em] text-primary mb-2.5 font-semibold font-sans">
                        Session 0{index + 1}
                      </span>
                      <h3 
                        className="font-serif text-2xl font-light mb-3 tracking-wide text-foreground" 
                        data-testid={`text-service-title-${index}`}
                      >
                        {service.title}
                      </h3>
                      <p 
                        className="text-xs leading-relaxed text-muted-foreground font-light" 
                        data-testid={`text-service-desc-${index}`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="products-pane"
              initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: 15, filter: "blur(4px)" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="grid md:grid-cols-2 gap-8 lg:gap-12"
            >
              {productCategories.map((product, index) => (
                <div 
                  key={product.title} 
                  data-testid={`card-product-${index}`}
                  className={`flex ${index % 2 === 1 ? "md:translate-y-6" : ""}`}
                >
                  <div className="glass rounded-[2.5rem] p-6 md:p-8 flex flex-col h-full w-full justify-between">
                    <div>
                      {product.image && (
                        <div className="mb-6 rounded-[1.5rem] overflow-hidden aspect-[16/10] bg-foreground/[0.02] border border-foreground/[0.05]">
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-105"
                            data-testid={`img-product-${index}`}
                          />
                        </div>
                      )}
                      <h3 
                        className="font-serif text-2xl font-light mb-3 text-foreground tracking-wide" 
                        data-testid={`text-product-title-${index}`}
                      >
                        {product.title}
                      </h3>
                    </div>
                    <p 
                      className="text-xs md:text-sm text-muted-foreground leading-relaxed font-light mt-4" 
                      data-testid={`text-product-desc-${index}`}
                    >
                      {product.description}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}