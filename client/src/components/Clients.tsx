import { motion } from "framer-motion";

import clientLogo1 from "@assets/generated_images/logo_circuswp.png";
import clientLogo2 from "@assets/generated_images/logo_hotelpandawa.png";
import clientLogo3 from "@assets/generated_images/logo_lombokwildlife.png";
import clientLogo4 from "@assets/generated_images/logo_ombaksunset.png";
import clientLogo5 from "@assets/generated_images/logo_ubudstb.png";
import clientLogo6 from "@assets/generated_images/logo_villaombak.png";

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
    <section 
      className="py-28 md:py-36 px-6 bg-background overflow-hidden"
      data-testid="section-clients"
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header Block */}
        <div className="mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-primary mb-4 block">
            Collaborations
          </span>
          <h2 
            className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground tracking-wide" 
            data-testid="heading-clients"
          >
            Our Valued Clients
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            We are proud to have collaborated with a diverse range of prestigious clients and partners in Bali and beyond.
          </p>
        </div>

        {/* Logos Flex Row wrapped inside custom frames */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
          {clientLogos.map((client, index) => {
            return (
              <motion.div
                key={client.name}
                className="double-bezel shadow-[0_4px_20px_rgba(0,0,0,0.01)] hover:scale-105 transition-premium duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1], delay: index * 0.08 }}
              >
                <div className="double-bezel-inner py-4 px-8 flex items-center justify-center bg-card rounded-[calc(2rem-0.375rem)] min-w-[140px] h-24">
                  <img 
                    src={client.img} 
                    alt={client.name} 
                    className="h-12 w-auto object-contain grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-500 ease-out cursor-pointer"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}