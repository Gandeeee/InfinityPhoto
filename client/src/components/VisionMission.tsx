import { motion } from "framer-motion";

export default function VisionMission() {
  const missionItems = [
    "Deliver exceptional visual quality using professional-grade equipment",
    "Provide personalized service tailored to each client's unique story",
    "Innovate continuously with modern technology and creative techniques",
    "Guarantee client satisfaction through meticulous attention to detail",
    "Create exclusive, elegant final products that become cherished heirlooms"
  ];

  return (
    <section 
      id="vision" 
      className="py-28 md:py-36 px-6 bg-accent/40 overflow-hidden" 
      data-testid="section-vision-mission"
    >
      <div className="max-w-6xl mx-auto">
        {/* Eyebrow and Headline */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-primary mb-4 block">
            Philosophy
          </span>
          <h2 
            className="font-serif text-4xl md:text-5xl font-light text-foreground" 
            data-testid="heading-vision-mission"
          >
            Vision & Mission
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Vision Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="flex"
          >
            <div className="double-bezel w-full flex" data-testid="card-vision">
              <div className="double-bezel-inner p-8 md:p-12 w-full flex flex-col justify-center">
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-6 text-foreground tracking-wide">
                  Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  To become the leading photography brand in Bali, recognized for our artistic excellence, emotional storytelling, and commitment to preserving life's most precious moments through timeless imagery.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mission Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
            className="flex"
          >
            <div className="double-bezel w-full flex" data-testid="card-mission">
              <div className="double-bezel-inner p-8 md:p-12 w-full flex flex-col justify-center">
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-6 text-foreground tracking-wide">
                  Mission
                </h3>
                <ul className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
                  {missionItems.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-primary font-medium mt-0.5 select-none">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}