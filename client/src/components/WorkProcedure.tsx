import { motion } from "framer-motion";
import { Users, CalendarCheck, Camera, Wand2, Send } from "lucide-react";

const procedureSteps = [
  {
    icon: Users,
    title: "Konsultasi Awal",
    description: "Mendengarkan kebutuhan klien secara detail untuk memahami visi Anda.",
  },
  {
    icon: CalendarCheck,
    title: "Perencanaan & Jadwal",
    description: "Menyusun timeline, konsep visual, dan mempersiapkan semua kebutuhan.",
  },
  {
    icon: Camera,
    title: "Sesi Pemotretan",
    description: "Menangkap momen terbaik Anda dengan profesionalisme dan arahan artistik.",
  },
  {
    icon: Wand2,
    title: "Proses Editing",
    description: "Memproses dan menyempurnakan setiap foto untuk kualitas sinematik tertinggi.",
  },
  {
    icon: Send,
    title: "Pengiriman & Feedback",
    description: "Menyampaikan hasil akhir dalam galeri digital dan mengumpulkan feedback Anda.",
  },
];

export default function WorkProcedure() {
  return (
    <motion.section 
      className="py-24 px-8 bg-background overflow-hidden" 
      data-testid="section-work-procedure"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground" data-testid="heading-work-procedure">
            Our Work Procedure
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dari ide hingga hasil akhir, proses kami dirancang untuk memastikan kualitas dan kepuasan Anda di setiap langkah.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          {procedureSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative flex flex-col text-left p-6 rounded-md" // Kartu custom
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="relative z-10 flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>

                <h3 className="font-serif text-xl font-light mb-2 text-foreground">
                  <span className="text-3xl text-primary/50 mr-2">
                    0{index + 1}
                  </span>
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}