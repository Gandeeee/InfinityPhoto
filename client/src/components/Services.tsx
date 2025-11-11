// Salin dan Timpa semua kode di client/src/components/Services.tsx dengan kode ini:

import { motion } from "framer-motion"; // <-- LANGKAH 1: Impor motion
import weddingImage from "@assets/generated_images/Wedding_ceremony_portrait_9b4b85c0.png";
import eventImage from "@assets/generated_images/Corporate_event_photography_6b6c050c.png";
import lifestyleImage from "@assets/generated_images/Lifestyle_portrait_photography_1394232d.png";

const services = [
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

export default function Services() {
  return (
    // LANGKAH 2: Tambahkan overflow-hidden
    <section id="services" className="py-24 px-8 bg-background overflow-hidden" data-testid="section-services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground" data-testid="heading-services">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specializing in capturing life's most precious moments with artistic vision and technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (

            // LANGKAH 3 & 4: Ganti <div> menjadi <motion.div>
            <motion.div
              key={service.title}
              className="group overflow-hidden rounded-md hover-elevate"
              data-testid={`card-service-${index}`}

              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              // Trik Keren: 'delay' berdasarkan 'index' agar muncul satu per satu
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-testid={`img-service-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-serif text-2xl font-light mb-3" data-testid={`text-service-title-${index}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed opacity-90" data-testid={`text-service-desc-${index}`}>
                    {service.description}
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