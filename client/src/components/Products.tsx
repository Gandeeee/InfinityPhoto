import { motion } from "framer-motion";
import albumImage from "@assets/generated_images/Luxury_photo_album_product_47215657.png";
import frameImage from "@assets/generated_images/Wooden_frame_product_mockup_bdcb6ceb.png";
import customUsb from "@assets/generated_images/custom_drives.jpg";
import digitalGallery from "@assets/generated_images/Digital_gallery.jpg";

const products = [
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

export default function Products() {
  return (
    <section 
      className="py-28 md:py-40 px-6 bg-accent/40 overflow-hidden" 
      data-testid="section-products"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <div className="text-center mb-24">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-primary mb-4 block">
            Preservation
          </span>
          <h2 
            className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground tracking-wide" 
            data-testid="heading-products"
          >
            Our Products
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Exclusive physical and digital products to preserve your precious memories
          </p>
        </div>

        {/* Asymmetrical Staggered Column layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pb-8">
          {products.map((product, index) => (
            <motion.div 
              key={product.title} 
              data-testid={`card-product-${index}`}
              className={`flex ${index % 2 === 1 ? "md:translate-y-8" : ""}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: index * 0.15 }}
            >
              <div className="double-bezel w-full flex shadow-[0_12px_36px_rgba(0,0,0,0.015)]">
                <div className="double-bezel-inner p-6 md:p-8 flex flex-col h-full w-full justify-between">
                  <div>
                    {product.image && (
                      <div className="mb-6 rounded-[1.25rem] overflow-hidden aspect-[16/10] bg-zinc-100 dark:bg-zinc-900 border border-black/5 dark:border-white/5">
                        <img
                          src={product.image}
                          alt={product.title}
                          className="w-full h-full object-cover transition-transform-premium hover:scale-105"
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
                    className="text-xs md:text-sm text-muted-foreground leading-relaxed font-light mt-auto" 
                    data-testid={`text-product-desc-${index}`}
                  >
                    {product.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
