import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export default function Contact() {
  // Fungsi ini akan menangani klik untuk kedua tombol
  const handleWhatsAppClick = (admin: 'admin1' | 'admin2') => {

    let waNumber = "";

    if (admin === 'admin1') {
      // --- NOMOR ADMIN 1 ---
      waNumber = "6282146802311"; // Ganti dengan nomor WA Admin 1
    } else {
      // ---  NOMOR ADMIN 2 ---
      waNumber = "6281805610551"; // Ganti dengan nomor WA Admin 2
    }

    const waMessage = encodeURIComponent("Halo Infinity Photo, saya tertarik dengan layanan fotografi Anda.");
    window.open(`https://wa.me/${waNumber}?text=${waMessage}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 px-8 bg-background" data-testid="section-contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground" data-testid="heading-contact">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to capture your special moments? Contact us to discuss your photography needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Semua kode <Form> diganti dengan blok di bawah ini */}
          <div className="flex flex-col items-center justify-center p-8 bg-accent rounded-md text-center h-full">
            <h3 className="font-serif text-3xl font-light mb-6 text-foreground">
              Let's Discuss Your Project
            </h3>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Klik tombol di bawah untuk mengobrol langsung dengan salah satu admin kami via WhatsApp untuk respon cepat.
            </p>

            {/* Wrapper untuk dua tombol */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-sm">
              <Button
                size="lg"
                className="w-full"
                onClick={() => handleWhatsAppClick('admin1')}
                data-testid="button-whatsapp-1"
              >
                <Phone className="mr-2 h-5 w-5" />
                Chat Admin 1
              </Button>
              <Button
                size="lg"
                variant="secondary" // Tombol kedua dibuat beda
                className="w-full"
                onClick={() => handleWhatsAppClick('admin2')}
                data-testid="button-whatsapp-2"
              >
                <Phone className="mr-2 h-5 w-5" />
                Chat Admin 2
              </Button>
            </div>
          </div>
          {/* === AKHIR BLOK YANG DIUBAH === */}


          {/* BLOK INFO KONTAK (TETAP SAMA) */}
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-2xl font-light mb-6 text-foreground">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4" data-testid="info-email">
                  <Mail className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">infinityphotocontact@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="info-phone">
                  <Phone className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+6281 8056 10551</p>
                  </div>
                </div>
                <div className="flex items-start gap-4" data-testid="info-location">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-muted-foreground">Gianyar, Bali, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-light mb-6 text-foreground">Follow Us</h3>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" data-testid="link-instagram">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" data-testid="link-facebook">
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="p-8 bg-accent rounded-md">
              <h4 className="font-serif text-lg mb-3 text-foreground">Business Hours</h4>
              <p className="text-sm text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-sm text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
              <p className="text-sm text-muted-foreground">Sunday: By Appointment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}