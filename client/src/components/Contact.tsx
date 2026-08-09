import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Facebook, ArrowUpRight, Check } from "lucide-react";

export default function Contact() {
  const [intent, setIntent] = useState<"client" | "partnership">("client");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "6282146802311";
    
    let waText = "";
    if (intent === "client") {
      waText = `Hello Infinity Photo, I am ${name || "a client"}. I would like to inquire about booking a photography session.`;
      if (message.trim()) {
        waText += `\n\nDetails: ${message}`;
      }
    } else {
      waText = `Hello Infinity Photo, I am ${name || "a venue representative"}. I would like to discuss a venue standby studio partnership.`;
      if (message.trim()) {
        waText += `\n\nDetails: ${message}`;
      }
    }

    const encodedText = encodeURIComponent(waText);
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedText}`;
    
    window.open(waLink, "_blank");
  };

  return (
    <section 
      id="contact" 
      className="py-32 md:py-44 px-4 md:px-8 overflow-hidden relative bg-background scroll-mt-24 md:scroll-mt-32 w-full box-border" 
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block (Badge Eliminated, Clean Title & Copy) */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-foreground tracking-tight leading-[1.05]"
          >
            Let's Connect
          </motion.h2>
          <p className="text-[#4A4A4A] text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Whether you are booking an editorial session or exploring a venue partnership, we would love to hear from you.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-stretch w-full box-border">

          {/* Left Column - Smart Form */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotate: -2 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col origin-bottom-left w-full box-border"
          >
            <div className="rounded-2xl md:rounded-[1.5rem] bg-white border border-black/8 p-8 md:p-12 shadow-[0_8px_25px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between">
              <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between gap-8">
                <div className="space-y-8">
                  {/* Intent Selector */}
                  <div className="space-y-3">
                    <label className="text-[11px] uppercase tracking-[0.14em] font-medium text-[#1A1A1A] block">
                      I am interested in...
                    </label>
                    <div className="flex flex-col sm:flex-row gap-3.5 w-full box-border">
                      {/* Option A - Client */}
                      <button
                        type="button"
                        onClick={() => setIntent("client")}
                        aria-pressed={intent === "client"}
                        className={`cursor-pointer text-left w-full sm:flex-1 box-border p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                          intent === "client" 
                            ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm" 
                            : "bg-transparent text-[#333333] border-black/15 hover:border-black/35"
                        }`}
                      >
                        <div className={`w-4 h-4 mt-0.5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                          intent === "client" 
                            ? "border-white bg-white text-black" 
                            : "border-black/30"
                        }`}>
                          {intent === "client" && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                        </div>
                        <div>
                          <span className="block text-sm font-medium mb-0.5">Booking a Session</span>
                          <span className={`block text-xs font-light ${intent === "client" ? "text-white/80" : "text-foreground/60"}`}>For private events or portraits</span>
                        </div>
                      </button>

                      {/* Option B - Partnership */}
                      <button
                        type="button"
                        onClick={() => setIntent("partnership")}
                        aria-pressed={intent === "partnership"}
                        className={`cursor-pointer text-left w-full sm:flex-1 box-border p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
                          intent === "partnership" 
                            ? "bg-[#1A1A1A] text-white border-[#1A1A1A] shadow-sm" 
                            : "bg-transparent text-[#333333] border-black/15 hover:border-black/35"
                        }`}
                      >
                        <div className={`w-4 h-4 mt-0.5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                          intent === "partnership" 
                            ? "border-white bg-white text-black" 
                            : "border-black/30"
                        }`}>
                          {intent === "partnership" && <Check className="w-2.5 h-2.5" strokeWidth={3} />}
                        </div>
                        <div>
                          <span className="block text-sm font-medium mb-0.5">Venue Partnership</span>
                          <span className={`block text-xs font-light ${intent === "partnership" ? "text-white/80" : "text-foreground/60"}`}>For hotel & venue directors</span>
                        </div>
                      </button>
                    </div>
                  </div>

                  {/* Form Input Fields */}
                  <div className="space-y-5">
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-[0.14em] font-medium text-[#1A1A1A] block">
                        {intent === "client" ? "Full Name" : "Company / Venue Name"}
                      </label>
                      <input 
                        type="text" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={intent === "client" ? "Your full name" : "Your venue or hotel name"}
                        className="w-full bg-stone-50 border border-black/12 focus:border-black/40 rounded-xl px-5 py-4 text-sm font-medium text-[#1A1A1A] placeholder:text-stone-400 outline-none transition-all duration-300"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-[11px] uppercase tracking-[0.14em] font-medium text-[#1A1A1A] block">
                        Short Message
                      </label>
                      <textarea 
                        required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us a little bit about what you need..."
                        rows={4}
                        className="w-full bg-stone-50 border border-black/12 focus:border-black/40 rounded-xl px-5 py-4 text-sm font-medium text-[#1A1A1A] placeholder:text-stone-400 outline-none transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* WhatsApp Action Button */}
                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-xs uppercase tracking-[0.14em] font-medium bg-[#1A1A1A] text-white hover:bg-black transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 shadow-md mt-4"
                >
                  <span>Continue to WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={1.8} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Right Column - Direct Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
            className="lg:col-span-5 flex flex-col w-full box-border"
          >
            <div className="rounded-2xl md:rounded-[1.5rem] bg-white border border-black/8 p-8 md:p-10 shadow-[0_8px_25px_rgba(0,0,0,0.03)] h-full flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl md:text-3xl font-light mb-8 text-[#1A1A1A] tracking-wide">
                  Direct Information
                </h3>
                
                <div className="space-y-7">
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-[#FDFBF7] border border-black/5 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Mail className="w-4 h-4 text-[#C5A059]" strokeWidth={1.8} />
                    </div>
                    <div className="pt-0.5 min-w-0 flex-1">
                      <p className="text-[10px] uppercase tracking-widest font-medium text-foreground/50 mb-1">Email</p>
                      <p className="text-sm md:text-base text-[#1A1A1A] font-medium break-all">infinityphotocontact@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-[#FDFBF7] border border-black/5 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <Phone className="w-4 h-4 text-[#C5A059]" strokeWidth={1.8} />
                    </div>
                    <div className="pt-0.5">
                      <p className="text-[10px] uppercase tracking-widest font-medium text-foreground/50 mb-1">Phone / WhatsApp</p>
                      <div className="space-y-1">
                        <p className="text-sm md:text-base text-[#1A1A1A] font-medium">+62 821 4680 2311 <span className="text-foreground/50 text-xs ml-1 font-light">(Primary)</span></p>
                        <p className="text-sm md:text-base text-[#1A1A1A] font-medium">+62 818 0561 0551 <span className="text-foreground/50 text-xs ml-1 font-light">(Secondary)</span></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-full bg-[#FDFBF7] border border-black/5 flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                      <MapPin className="w-4 h-4 text-[#C5A059]" strokeWidth={1.8} />
                    </div>
                    <div className="pt-0.5">
                      <p className="text-[10px] uppercase tracking-widest font-medium text-foreground/50 mb-1">Location</p>
                      <p className="text-sm md:text-base text-[#1A1A1A] font-medium">Gianyar, Bali, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="mt-10 pt-8 border-t border-black/8">
                <h4 className="font-serif text-xl font-light mb-4 text-[#1A1A1A] tracking-wide">
                  Social Media
                </h4>
                <div className="flex gap-3">
                  <a 
                    href="https://instagram.com/infinityphotobali" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-black/15 bg-transparent flex items-center justify-center transition-all duration-300 hover:bg-[#1A1A1A] hover:text-white group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4 transition-colors" strokeWidth={1.8} />
                  </a>
                  <a 
                    href="https://facebook.com/infinityphotobali" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full border border-black/15 bg-transparent flex items-center justify-center transition-all duration-300 hover:bg-[#1A1A1A] hover:text-white group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/70"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4 transition-colors" strokeWidth={1.8} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}