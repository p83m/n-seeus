import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-primary/10 animate-float" />
      <div className="absolute bottom-20 right-10 w-24 h-24 rounded-full bg-secondary/10 animate-float" style={{ animationDelay: "1s" }} />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main headline */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in">
            Now you <span className="gradient-primary bg-clip-text text-transparent">SeeUS</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-6 h-6 text-primary animate-glow" />
            <p className="text-xl md:text-2xl text-muted-foreground font-light">
              Innowacyjne breloki NFC łączące Twój biznes z klientami
            </p>
            <Zap className="w-6 h-6 text-secondary animate-glow" />
          </div>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Jeden dotyk. Nieograniczone możliwości. Spersonalizowane breloki NFC 
          z Twoim logo, które przekierują klientów tam, gdzie chcesz.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-6 text-lg glow-blue hover:glow-blue transition-all duration-300">
            Chcę zamówić breloki NFC
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="outline" size="lg" className="border-border hover:bg-secondary/10 text-foreground font-medium px-8 py-6 text-lg transition-all duration-300">
            Zamów wycenę
          </Button>
        </div>

        {/* Floating NFC icon */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center justify-center animate-float glow-blue">
            <Zap className="w-8 h-8 text-primary" />
          </div>
        </div>
        
        <div className="absolute top-1/3 right-1/4 transform -translate-y-1/2">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-secondary/20 to-primary/20 flex items-center justify-center animate-float glow-violet" style={{ animationDelay: "2s" }}>
            <Zap className="w-6 h-6 text-secondary" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;