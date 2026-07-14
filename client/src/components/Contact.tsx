import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import ConceptBuilder from "@/components/ConceptBuilder";

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="py-36 md:py-48 px-6 mesh-contact overflow-hidden relative" 
      data-testid="section-contact"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="text-center mb-20">
          <span className="text-[9px] uppercase tracking-[0.35em] font-semibold text-primary mb-4 block">
            Connect
          </span>
          <h2 
            className="font-serif text-5xl md:text-6xl font-light mb-6 text-foreground tracking-tight leading-[0.9]" 
            data-testid="heading-contact"
          >
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed font-light">
            Ready to capture your special moments? Contact us to discuss your photography needs
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column - Concept Builder Interactive Quote estimating calculator (md:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="md:col-span-7 w-full flex"
          >
            <ConceptBuilder />
          </motion.div>

          {/* Right Column - Direct Contact Information (md:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
            className="md:col-span-5 space-y-10 flex flex-col justify-between"
          >
            {/* Direct Contact info */}
            <div>
              <h3 className="font-serif text-2xl font-light mb-6 text-foreground tracking-wide">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4" data-testid="info-email">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-foreground/80 mb-0.5">Email</p>
                    <p className="text-sm text-muted-foreground font-light">infinityphotocontact@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" data-testid="info-phone">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-foreground/80 mb-0.5">Phone</p>
                    <p className="text-sm text-muted-foreground font-light">+6281 8056 10551</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4" data-testid="info-location">
                  <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold text-foreground/80 mb-0.5">Location</p>
                    <p className="text-sm text-muted-foreground font-light">Gianyar, Bali, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h3 className="font-serif text-2xl font-light mb-4 text-foreground tracking-wide">Follow Us</h3>
              <div className="flex gap-4">
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-background/30 hover:bg-primary border border-foreground/[0.08] hover:text-primary-foreground hover:border-primary transition-all duration-500 w-10 h-10" 
                  data-testid="link-instagram"
                  asChild
                >
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-4 h-4" />
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="icon" 
                  className="rounded-full bg-background/30 hover:bg-primary border border-foreground/[0.08] hover:text-primary-foreground hover:border-primary transition-all duration-500 w-10 h-10" 
                  data-testid="link-facebook"
                  asChild
                >
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Business Hours glass card */}
            <div className="glass rounded-[2rem] p-7 md:p-8">
              <h4 className="font-serif text-lg font-light mb-3 text-foreground tracking-wide">Business Hours</h4>
              <div className="space-y-1.5 text-xs text-muted-foreground font-light">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: By Appointment</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}