// Salin dan Timpa semua kode di client/src/components/VisionMission.tsx dengan kode ini:

import { motion } from "framer-motion"; // <-- LANGKAH 1: Impor motion
import { Card } from "@/components/ui/card";

export default function VisionMission() {
  return (
    // LANGKAH 2: Tambahkan overflow-hidden
    <section id="vision" className="py-24 px-8 bg-accent overflow-hidden" data-testid="section-vision-mission">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-16 text-center text-foreground" data-testid="heading-vision-mission">
          Vision & Mission
        </h2>

        <div className="grid md:grid-cols-2 gap-12">

          {/* LANGKAH 3 & 4: Bungkus Card pertama dengan motion.div */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Card className="p-12 border-primary/20 h-full" data-testid="card-vision">
              <h3 className="font-serif text-3xl font-light mb-6 text-foreground">Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading photography brand in Bali, recognized for our artistic excellence, emotional storytelling, and commitment to preserving life's most precious moments through timeless imagery.
              </p>
            </Card>
          </motion.div>

          {/* LANGKAH 3 & 4: Bungkus Card kedua dengan motion.div + delay */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} // delay 0.2 detik
          >
            <Card className="p-12 border-primary/20 h-full" data-testid="card-mission">
              <h3 className="font-serif text-3xl font-light mb-6 text-foreground">Mission</h3>
              <ul className="space-y-4 text-muted-foreground leading-relaxed">
                <li>• Deliver exceptional visual quality using professional-grade equipment</li>
                <li>• Provide personalized service tailored to each client's unique story</li>
                <li>• Innovate continuously with modern technology and creative techniques</li>
                <li>• Guarantee client satisfaction through meticulous attention to detail</li>
                <li>• Create exclusive, elegant final products that become cherished heirlooms</li>
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}