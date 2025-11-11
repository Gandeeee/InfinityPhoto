import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Handshake, Calendar, TrendingUp } from "lucide-react";

const opportunities = [
  {
    icon: Handshake,
    title: "Partnership Programs",
    description: "Long-term collaboration with hotels, resorts, and wedding planners",
  },
  {
    icon: Calendar,
    title: "Event Coverage",
    description: "Regular coverage for corporate events and recurring occasions",
  },
  {
    icon: TrendingUp,
    title: "Brand Collaborations",
    description: "Creative partnerships with lifestyle and luxury brands",
  },
];

export default function Collaboration() {
  const handleContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // 2. BUAT SECTION MENJADI RELATIVE
    <section className="py-24 px-8 bg-accent overflow-hidden relative" data-testid="section-collaboration">

      {/* 4. BUAT KONTEN MENJADI RELATIVE DAN DI DEPAN (z-10) */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground" data-testid="heading-collaboration">
          Collaboration Opportunities
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12">
          We welcome partnerships with businesses and creatives who share our passion for excellence and artistry
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {opportunities.map((opportunity, index) => {
            const Icon = opportunity.icon;
            return (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                {/* Kartu ini sudah memiliki background sendiri sehingga akan tampil di atas partikel */}
                <Card 
                  className="p-8 text-center h-full" 
                  data-testid={`card-opportunity-${index}`}
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-light mb-3 text-foreground" data-testid={`text-opportunity-title-${index}`}>
                    {opportunity.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-opportunity-desc-${index}`}>
                    {opportunity.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          whileHover={{ y: -8 }}
        >
          <Card 
            className="p-12 border-primary/20"
          >
            <h3 className="font-serif text-2xl font-light mb-4 text-foreground">
              Let's Create Something Beautiful Together
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're looking for short-term project collaboration or a long-term partnership, we'd love to hear from you. Let's discuss how we can work together to create exceptional visual experiences.
            </p>
            <Button onClick={handleContact} size="lg" data-testid="button-collaboration-contact">
              Get In Touch
            </Button>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}