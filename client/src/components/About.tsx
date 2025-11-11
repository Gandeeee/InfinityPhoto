// Salin dan Timpa semua kode di client/src/components/About.tsx dengan kode ini:

import { motion } from "framer-motion";
import aboutImage from "@assets/generated_images/Photographer_at_work_BTS_71536412.png";

export default function About() {
  return (
    // 2. Kita tambahkan "overflow-hidden" di sini agar animasi slide-up terlihat rapi
    <section id="about" className="py-24 px-8 bg-background overflow-hidden" data-testid="section-about">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* === KOLOM TEKS (ANIMASI 1) === */}
          {/* 3. Kita ganti <div> pembungkus menjadi <motion.div> */}
          <motion.div
            className="order-2 md:order-1"

            // 4. Ini adalah properti animasinya:
            initial={{ opacity: 0, y: 50 }} // Posisi awal: transparan & 50px di bawah
            whileInView={{ opacity: 1, y: 0 }} // Saat di-scroll: jadi solid & kembali ke posisi 0
            viewport={{ once: true }} // Animasi hanya berjalan 1x saat muncul
            transition={{ duration: 1.5, ease: "easeOut" }} // Durasi & tipe animasi (smooth)
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground" data-testid="heading-about">
              About Us
            </h2>
            <p className="text-lg text-foreground mb-6 leading-relaxed">
              Infinity Photo is a professional photography brand based in the beautiful island of Bali, dedicated to creating premium visual experiences with emotional depth and personal connection.
            </p>
            <p className="text-base text-muted-foreground mb-6 leading-relaxed">
              Founded by a team experienced in the world of photography and the creative industry, Infinity Photo has served various clients in Bali with a personal approach and top-class visual quality. We believe that every photo is not just an image, but a visual heritage that will be remembered forever.
            </p>
            <blockquote className="border-l-2 border-primary pl-6 font-serif text-xl italic text-foreground/80" data-testid="text-quote">
              "Caputring Timeless Moments"
            </blockquote>
          </motion.div>

          {/* === KOLOM GAMBAR (ANIMASI 2) === */}
          {/* 5. Kita lakukan hal yang sama pada gambar */}
          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            // 6. Kita beri 'delay' 0.2 detik agar muncul sedikit setelah teks (lebih elegan)
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-md">
              <img
                src={aboutImage}
                alt="Professional photographer at work during photoshoot"
                className="w-full h-full object-cover"
                data-testid="img-about"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}