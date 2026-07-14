import { motion } from "framer-motion";

const procedureSteps = [
  {
    num: "01",
    title: "Konsultasi Awal",
    description: "Mendengarkan kebutuhan klien secara detail untuk memahami visi dan momen yang ingin diabadikan.",
    accent: "C",
  },
  {
    num: "02",
    title: "Perencanaan & Jadwal",
    description: "Menyusun timeline, konsep visual, dan mempersiapkan semua kebutuhan teknis maupun artistik.",
    accent: "P",
  },
  {
    num: "03",
    title: "Sesi Pemotretan",
    description: "Menangkap momen terbaik Anda dengan profesionalisme penuh dan arahan artistik yang presisi.",
    accent: "S",
  },
  {
    num: "04",
    title: "Proses Editing",
    description: "Memproses dan menyempurnakan setiap frame dengan grading warna sinematik berkualitas tertinggi.",
    accent: "E",
  },
  {
    num: "05",
    title: "Pengiriman & Feedback",
    description: "Menyampaikan hasil akhir melalui galeri digital privat dan menampung revisi hingga puas.",
    accent: "D",
  },
];

const rotations = [-1.5, 1.2, -0.8, 1.6, -1.0];

const guarantees = [
  { label: "Years of mastery", value: "7+" },
  { label: "Sessions completed", value: "340+" },
  { label: "Satisfaction guarantee", value: "100%" },
  { label: "Bali locations covered", value: "60+" },
];

export default function WorkProcedure() {
  return (
    <section
      id="procedure"
      className="py-36 md:py-48 px-6 mesh-procedure overflow-hidden relative"
      data-testid="section-work-procedure"
    >
      {/* Large decorative outlined number in background */}
      <div
        className="absolute right-[-2rem] top-1/2 -translate-y-1/2 font-serif font-extralight text-[28rem] leading-none text-foreground/[0.015] select-none pointer-events-none z-0"
        aria-hidden="true"
      >
        ∞
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header — left aligned, editorial */}
        <motion.div
          className="mb-20 md:mb-28 max-w-xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[9px] uppercase tracking-[0.35em] font-semibold text-primary mb-5 block">
            Quality Process
          </span>
          <h2
            className="font-serif text-5xl md:text-6xl lg:text-7xl font-extralight text-foreground tracking-tight leading-[0.9] mb-6"
            data-testid="heading-work-procedure"
          >
            How we<br />
            <span className="italic text-foreground/35">work</span>
          </h2>
          <p className="text-sm text-muted-foreground font-light leading-relaxed max-w-md">
            Dari ide pertama hingga hasil akhir di tangan Anda — setiap langkah dirancang untuk menghasilkan karya terbaik.
          </p>
        </motion.div>

        {/* Two-column: Z-axis cascade steps LEFT | Stats + Guarantees RIGHT */}
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* LEFT: Z-Axis Cascade Step Cards */}
          <div className="lg:col-span-7">
            <div className="space-y-[-1px] md:space-y-0 relative">
              {procedureSteps.map((step, idx) => (
                <motion.div
                  key={step.num}
                  className="relative group animate-on-scroll"
                  initial={{ opacity: 0, y: 40, filter: "blur(6px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.85,
                    ease: [0.16, 1, 0.3, 1],
                    delay: idx * 0.1,
                  }}
                  data-testid={`card-step-${idx}`}
                >
                  <div
                    className="p-1.5 rounded-[2rem] glass mb-4 md:mb-5 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-primary/20"
                    style={{
                      transform: `rotate(${rotations[idx]}deg)`,
                    }}
                  >
                    <div className="rounded-[calc(2rem-0.375rem)] p-7 md:p-8 flex items-start gap-6 overflow-hidden relative">
                      {/* Ghost letter behind card content */}
                      <span
                        className="absolute right-5 bottom-0 font-serif text-7xl font-extralight text-foreground/[0.03] select-none leading-none"
                        aria-hidden="true"
                      >
                        {step.accent}
                      </span>

                      {/* Step number */}
                      <span className="font-mono text-xs text-primary/50 font-light tracking-widest flex-shrink-0 pt-0.5">
                        {step.num}
                      </span>

                      <div className="flex-1 min-w-0">
                        <h3
                          className="font-serif text-xl md:text-2xl font-light text-foreground tracking-wide mb-3"
                          data-testid={`text-step-title-${idx}`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-xs text-muted-foreground leading-relaxed font-light">
                          {step.description}
                        </p>
                      </div>

                      {/* Hairline right accent */}
                      <div className="absolute right-0 top-6 bottom-6 w-[1.5px] bg-gradient-to-b from-transparent via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT: Stats grid + guarantee pillars */}
          <motion.div
            className="lg:col-span-5 flex flex-col gap-12"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {/* Asymmetric stats grid (2x2 bento using glassmorphism) */}
            <div>
              <h3
                className="font-serif text-2xl font-light text-foreground tracking-wide mb-8"
                data-testid="heading-why-choose-us"
              >
                By the numbers
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {guarantees.map((g, idx) => (
                  <motion.div
                    key={g.label}
                    className={`glass rounded-[2rem] p-7 flex flex-col gap-2 ${idx === 0 ? "col-span-2" : ""}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 + idx * 0.08 }}
                    data-testid={`card-feature-${idx}`}
                  >
                    <span
                      className="font-serif font-extralight text-primary tracking-tight leading-none"
                      style={{ fontSize: idx === 0 ? "4rem" : "2.75rem" }}
                      data-testid={`text-feature-title-${idx}`}
                    >
                      {g.value}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground/60 font-medium">
                      {g.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Single editorial quote */}
            <motion.blockquote
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
              className="border-l-[2px] border-primary/30 pl-6"
            >
              <p className="font-serif text-lg md:text-xl font-light italic text-foreground/50 leading-relaxed">
                "Every frame we deliver is one we'd proudly hang in our own home."
              </p>
              <footer className="mt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/40 font-semibold">
                — Infinity Photo Studio
              </footer>
            </motion.blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}