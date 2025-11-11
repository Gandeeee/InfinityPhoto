// Salin dan Timpa semua kode di client/src/components/Clients.tsx dengan kode ini:

import { motion } from "framer-motion";

import clientLogo1 from "@assets/generated_images/logo_circuswp.png";
import clientLogo2 from "@assets/generated_images/logo_hotelpandawa.png";
import clientLogo3 from "@assets/generated_images/logo_lombokwildlife.png";
import clientLogo4 from "@assets/generated_images/logo_ombaksunset.png";
import clientLogo5 from "@assets/generated_images/logo_ubudstb.png";
import clientLogo6 from "@assets/generated_images/logo_villaombak.png";

// LANGKAH 2: Perbarui array ini untuk menggunakan gambar yang diimpor
const clientLogos = [
  { name: "Corporate Client", img: clientLogo1 },
  { name: "Media Partner", img: clientLogo2 },
  { name: "Lifestyle Brand", img: clientLogo3 },
  { name: "Event Organizer", img: clientLogo4 },
  { name: "Resort & Villa", img: clientLogo5 },
  { name: "Resort & Villa", img: clientLogo6 },
];

export default function Clients() {
  return (
    <motion.section 
      className="py-24 px-8 bg-background overflow-hidden"
      data-testid="section-clients"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground" data-testid="heading-clients">
          Our Valued Clients
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
          We are proud to have collaborated with a diverse range of prestigious clients and partners in Bali and beyond.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-10 md:gap-x-16">
          {clientLogos.map((client, index) => {
            
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
              >
                <img 
                  src={client.img} 
                  alt={client.name} 
                  className="h-20 w-auto grayscale opacity-60 transition-all duration-300 ease-out hover:grayscale-0 hover:opacity-100 hover:-translate-y-1 cursor-pointer"
                />

              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}