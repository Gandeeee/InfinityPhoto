import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import WorkProcedure from "@/components/WorkProcedure";
import Collaboration from "@/components/Collaboration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorSpotlight from "@/components/ui/cursor-spotlight";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Warm amber cursor glow tracks across the dark page */}
      <CursorSpotlight />

      <Navigation />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <WorkProcedure />
      <Collaboration />
      <Contact />
      <Footer />
    </div>
  );
}
