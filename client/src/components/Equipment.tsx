import { motion } from "framer-motion";

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

export default function Equipment() {
  return (
    <section 
      className="py-28 md:py-36 px-6 bg-background overflow-hidden" 
      data-testid="section-equipment"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-primary mb-4 block">
            Tools of Craft
          </span>
          <h2 
            className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground tracking-wide" 
            data-testid="heading-equipment"
          >
            Professional Equipment
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Industry-leading gear to ensure the highest quality results for every project
          </p>
        </div>

        {/* Spec Sheet Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {equipmentCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              data-testid={`category-${catIndex}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: catIndex * 0.1 }}
              className="flex"
            >
              <div className="double-bezel w-full flex shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
                <div className="double-bezel-inner p-8 w-full">
                  {/* Category Title */}
                  <h3 
                    className="font-serif text-2xl font-light mb-6 text-foreground tracking-wide border-b border-black/5 dark:border-white/5 pb-4" 
                    data-testid={`heading-category-${catIndex}`}
                  >
                    {category.title}
                  </h3>
                  
                  {/* Item List */}
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={item}
                        className="text-xs md:text-sm text-muted-foreground pl-4 border-l-2 border-primary/45 tracking-wide hover:text-foreground transition-colors duration-300"
                        data-testid={`item-${catIndex}-${itemIndex}`}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
