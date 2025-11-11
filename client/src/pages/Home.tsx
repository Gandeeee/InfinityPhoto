import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VisionMission from "@/components/VisionMission";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Equipment from "@/components/Equipment";
import WorkProcedure from "@/components/WorkProcedure";
import Products from "@/components/Products";
import Portfolio from "@/components/Portfolio";
import Clients from "@/components/Clients";
import Collaboration from "@/components/Collaboration";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <WhyChooseUs />
      <Equipment />
      <WorkProcedure />
      <Products />
      <Clients />
      <Portfolio />
      <Collaboration />
      <Contact />
      <Footer />
    </div>
  );
}
