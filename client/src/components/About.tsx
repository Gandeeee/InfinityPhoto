import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import aboutImage from "@assets/generated_images/Photographer_at_work_BTS_71536412.png";
import BeforeAfter from "@/components/BeforeAfter";

const equipmentCategories = [
  {
    title: "Camera Bodies",
    items: ["Canon EOS R5", "Sony Alpha 7R IV", "Canon EOS 5D Mark IV"],
  },
  {
    title: "Lenses",
    items: [
      "Canon RF 50mm f/1.2L",
      "Sony FE 85mm f/1.4 GM",
      "Canon EF 24-70mm f/2.8L",
      "Sony FE 70-200mm f/2.8 GM",
    ],
  },
  {
    title: "Lighting Equipment",
    items: ["Profoto B10 Plus", "Godox AD600Pro", "LED Panel Lights", "Reflectors & Diffusers"],
  },
  {
    title: "Audio & Accessories",
    items: ["Wireless Microphones", "Professional Tripods", "Gimbals & Stabilizers"],
  },
  {
    title: "Post-Production",
    items: ["Adobe Lightroom Classic", "Adobe Photoshop", "Capture One Pro"],
  },
];

export default function About() {
  return (
    <section 
      id="about" 
      className="py-36 md:py-48 px-6 bg-background relative overflow-hidden" 
      data-testid="section-about"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: ABOUT INTRO, COMPARISON SLIDER, AND DRAWER LINK */}
          <motion.div
            className="lg:col-span-6 flex flex-col gap-10"
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div>
              <span className="text-[9px] uppercase tracking-[0.35em] font-semibold text-primary mb-6 block">
                The Studio
              </span>
              <h2 
                className="font-serif text-5xl md:text-6xl lg:text-7xl font-extralight mb-8 text-foreground tracking-[-0.02em] leading-[0.88]" 
                data-testid="heading-about"
              >
                About<br />
                <span className="italic text-foreground/35">Us</span>
              </h2>
              <p className="text-sm md:text-base text-foreground/80 mb-4 leading-relaxed font-light">
                Infinity Photo is a professional photography brand based in the beautiful island of Bali, dedicated to creating premium visual experiences with emotional depth and personal connection.
              </p>
              <p className="text-xs md:text-sm text-muted-foreground mb-6 leading-relaxed font-light">
                Founded by a team experienced in the world of photography and the creative industry, Infinity Photo has served various clients in Bali with a personal approach and top-class visual quality. We believe that every photo is not just an image, but a visual heritage that will be remembered forever.
              </p>

              {/* Collapsible Gear spec drawer */}
              <Sheet>
                <SheetTrigger asChild>
                  <button className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1.5 cursor-pointer bg-transparent border-none">
                    View Professional Gear Specs <span className="text-sm font-sans font-light">↗</span>
                  </button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto w-full sm:max-w-md glass-heavy p-8 border-l border-foreground/[0.08]">
                  <SheetHeader className="mb-8">
                    <SheetTitle className="font-serif text-3xl font-light tracking-wide text-foreground">
                      Our Equipment
                    </SheetTitle>
                    <SheetDescription className="text-xs text-muted-foreground font-light">
                      Industry-leading professional gear utilized for every project to ensure high-fidelity outputs.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="space-y-6">
                    {equipmentCategories.map((category, catIndex) => (
                      <div key={category.title} data-testid={`category-${catIndex}`}>
                        <h4 
                          className="font-serif text-lg font-light mb-3 text-foreground tracking-wide border-b border-foreground/[0.06] pb-2"
                          data-testid={`heading-category-${catIndex}`}
                        >
                          {category.title}
                        </h4>
                        <ul className="space-y-1.5">
                          {category.items.map((item, itemIndex) => (
                            <li 
                              key={item} 
                              className="text-xs text-muted-foreground pl-3 border-l border-primary/40 font-light"
                              data-testid={`item-${catIndex}-${itemIndex}`}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Before / After drag slider wrapped in a glass bezel */}
            <div className="p-1 rounded-[2.5rem] glass">
              <BeforeAfter />
            </div>
          </motion.div>

          {/* RIGHT COLUMN: PORTRAIT IMAGE AND VISION/MISSION PILLARS */}
          <motion.div
            className="lg:col-span-6 flex flex-col gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: 0.15 }}
          >
            {/* Tilted photo container */}
            <div className="p-1.5 rounded-[2rem] glass rotate-[1.2deg] hover:rotate-0 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] max-w-md mx-auto lg:max-w-none">
              <div className="overflow-hidden aspect-[16/10] rounded-[calc(2rem-0.375rem)]">
                <img
                  src={aboutImage}
                  alt="Professional photographer at work during photoshoot"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  data-testid="img-about"
                />
              </div>
            </div>

            {/* Side-by-side glass cards for Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              {/* Vision Card */}
              <div className="glass rounded-[2rem] p-7 flex flex-col justify-center" data-testid="card-vision">
                <h3 className="font-serif text-lg md:text-xl font-light mb-3 text-foreground tracking-wide">
                  Vision
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  To become the leading photography brand in Bali, recognized for our artistic excellence, emotional storytelling, and commitment to preserving life's most precious moments.
                </p>
              </div>

              {/* Mission Card */}
              <div className="glass rounded-[2rem] p-7 flex flex-col justify-center" data-testid="card-mission">
                <h3 className="font-serif text-lg md:text-xl font-light mb-3 text-foreground tracking-wide">
                  Mission
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed font-light">
                  Deliver exceptional visual quality, personalize stories, innovate with modern techniques, and create elegant final products that become cherished heirlooms.
                </p>
              </div>
            </div>

            <blockquote 
              className="border-l-[3px] border-primary pl-6 font-serif text-xl md:text-2xl font-light italic text-foreground/80 py-1 leading-relaxed max-w-lg mx-auto lg:mx-0 lg:max-w-none mt-2" 
              data-testid="text-quote"
            >
              "Capturing Timeless Moments"
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}