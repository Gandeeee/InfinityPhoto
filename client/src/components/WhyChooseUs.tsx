import { motion } from "framer-motion";
import { Award, MapPin, User, Zap, Heart } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Professional Excellence",
    description: "Years of experience capturing thousands of precious moments with artistic mastery",
  },
  {
    icon: MapPin,
    title: "Bali Based",
    description: "Located in paradise, bringing tropical beauty and unique perspectives to every shoot",
  },
  {
    icon: User,
    title: "Personalized Approach",
    description: "Every project is tailored to reflect your unique story and character",
  },
  {
    icon: Zap,
    title: "Modern Technology",
    description: "Professional-grade equipment and latest editing techniques for stunning results",
  },
  {
    icon: Heart,
    title: "Client Satisfaction",
    description: "Guaranteed satisfaction with unlimited revisions until you're completely happy",
  },
];

export default function WhyChooseUs() {
  return (
    <section 
      className="py-28 md:py-36 px-6 bg-accent/40 overflow-hidden" 
      data-testid="section-why-choose-us"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-primary mb-4 block">
            Our Standard
          </span>
          <h2 
            className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground tracking-wide" 
            data-testid="heading-why-choose-us"
          >
            Why Choose Us
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto leading-relaxed">
            Five key reasons that make Infinity Photo your ideal photography partner
          </p>
        </div>

        {/* Bento/Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="group flex"
                data-testid={`card-feature-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: [0.32, 0.72, 0, 1], delay: index * 0.1 }}
              >
                <div className="double-bezel w-full flex shadow-[0_8px_30px_rgba(0,0,0,0.02)] transition-premium duration-500 hover:-translate-y-1">
                  <div className="double-bezel-inner p-8 flex flex-col items-center text-center h-full w-full">
                    {/* Circle Icon Container */}
                    <div className="inline-flex items-center justify-center w-14 h-14 mb-6 rounded-full bg-primary/10 border border-primary/20 transition-premium duration-500 group-hover:scale-105 group-hover:bg-primary/20">
                      <Icon className="w-5 h-5 text-primary" data-testid={`icon-feature-${index}`} />
                    </div>
                    
                    {/* Title */}
                    <h3 
                      className="font-serif text-xl font-light mb-3 text-foreground tracking-wide" 
                      data-testid={`text-feature-title-${index}`}
                    >
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className="text-xs md:text-sm text-muted-foreground leading-relaxed font-light" 
                      data-testid={`text-feature-desc-${index}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}