import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Partnership from "@/components/Partnership";
import Collaboration from "@/components/Collaboration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-6 focus:py-3 focus:rounded-full focus:bg-foreground focus:text-background focus:text-xs focus:uppercase focus:tracking-[0.15em] focus:font-semibold"
      >
        Skip to content
      </a>

      <div id="main-content">
        <Navigation />
        <Hero />
        <Portfolio />
        <Partnership />
        <Collaboration />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
