import Hero from "@/components/Hero";
import ProductDescription from "@/components/ProductDescription";
import Benefits from "@/components/Benefits";
import BulkPackages from "@/components/BulkPackages";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <ProductDescription />
      <Benefits />
      <BulkPackages />
      <About />
      <Contact />
    </main>
  );
};

export default Index;
