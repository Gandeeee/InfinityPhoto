import { Card } from "@/components/ui/card";
import albumImage from "@assets/generated_images/Luxury_photo_album_product_47215657.png";
import frameImage from "@assets/generated_images/Wooden_frame_product_mockup_bdcb6ceb.png";
import customUsb from "@assets/generated_images/custom_drives.jpg";
import digitalGallery from "@assets/generated_images/digital_gallery.jpg";

const products = [
  {
    title: "Premium Hardcover Albums",
    description: "Luxurious leather-bound photo albums with premium paper and elegant binding",
    image: albumImage,
  },
  {
    title: "Custom USB Drives",
    description: "Elegant wooden or metal USB drives containing high-resolution digital files",
    image: customUsb,
  },
  {
    title: "Framed Prints",
    description: "Museum-quality prints in handcrafted wooden frames ready to display",
    image: frameImage,
  },
  {
    title: "Digital Gallery",
    description: "Private online gallery for easy viewing, sharing, and downloading",
    image: digitalGallery,
  },
];

export default function Products() {
  return (
    <section className="py-24 px-8 bg-accent" data-testid="section-products">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6 text-foreground" data-testid="heading-products">
            Our Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exclusive physical and digital products to preserve your precious memories
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <Card key={product.title} className="overflow-hidden p-8" data-testid={`card-product-${index}`}>
              {product.image && (
                <div className="mb-6 rounded-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover"
                    data-testid={`img-product-${index}`}
                  />
                </div>
              )}
              <h3 className="font-serif text-2xl font-light mb-3 text-foreground" data-testid={`text-product-title-${index}`}>
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`text-product-desc-${index}`}>
                {product.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
