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
    <section className="py-24 px-8 bg-background" data-testid="section-equipment">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground" data-testid="heading-equipment">
            Professional Equipment
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-leading gear to ensure the highest quality results for every project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {equipmentCategories.map((category, catIndex) => (
            <div key={category.title} data-testid={`category-${catIndex}`}>
              <h3 className="font-serif text-2xl font-light mb-4 text-foreground" data-testid={`heading-category-${catIndex}`}>
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={item}
                    className="text-muted-foreground pl-4 border-l-2 border-primary/20"
                    data-testid={`item-${catIndex}-${itemIndex}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
