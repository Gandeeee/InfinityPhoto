import { motion } from "framer-motion"; // <-- LANGKAH 1: Impor motion
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
    // LANGKAH 2: Tambahkan overflow-hidden
    <section className="py-24 px-8 bg-accent overflow-hidden" data-testid="section-why-choose-us">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground" data-testid="heading-why-choose-us">
            Why Choose Us
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Five key reasons that make Infinity Photo your ideal photography partner
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (

              // LANGKAH 3 & 4: Ganti <div> menjadi <motion.div>
              <motion.div
                key={feature.title}
                className="text-center p-8 hover-elevate rounded-md"
                data-testid={`card-feature-${index}`}

                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-primary/10">
                  <Icon className="w-8 h-8 text-primary" data-testid={`icon-feature-${index}`} />
                </div>
                <h3 className="font-serif text-xl font-light mb-3 text-foreground" data-testid={`text-feature-title-${index}`}>
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-feature-desc-${index}`}>
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}