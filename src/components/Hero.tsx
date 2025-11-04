  import { Button } from "@/components/ui/button";
  import { ArrowRight, Zap, Nfc } from "lucide-react";

const Hero = () => {
  // Scroll to the contact section
  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 gradient-subtle" />
        
        {/* Floating elements */}
        {/* left lightning */}
        <div className="absolute top-20 left-1/4 -translate-x-1/2 w-24 h-24 rounded-full bg-primary/10 animate-float flex items-center justify-center opacity-20 sm:opacity-100 transition-opacity duration-500" style={{ animationDelay: "1s" }}>
        <Zap className="w-8 h-8 sm:w-12 sm:h-12" />
        </div>

        {/* right lightning*/}
        <div className="absolute bottom-10 right-10 w-24 h-24 rounded-full bg-secondary/10 animate-float flex items-center justify-center" style={{ animationDelay: "3s" }}>
          <Zap className="w-8 h-8 sm:w-12 sm:h-12 text-primary" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          {/* Main headline */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-fade-in">
              SeeUS. <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent inline-block duration-5000">
                Connect smarter.
              </span>
            </h1>
            <div className="flex items-center justify-center gap-2 mb-6">
              <p className="text-xl md:text-2xl max-w-xl text-muted-foreground font-light">
                Innowacyjne breloki<br/> łączące Twój biznes z klientami
              </p>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Jeden dotyk - nieograniczone możliwości. Spersonalizowane breloki 
            dla Twojej firmy, które przekierują klientów tam, gdzie chcesz.<br/> Zawsze pod ręką.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="group bg-primary hover:bg-primary/60 text-primary-foreground font-medium px-8 py-6 text-lg glow-blue hover:glow-blue transition-all duration-500"
              onClick={handleScrollToContact}
            >
              Chcę zamówić breloki NFC
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-border hover:bg-secondary/80 text-foreground font-medium px-8 py-6 text-lg transition-all duration-500">
              Zobacz jak to działa
            </Button>
          </div>

          {/* Floating NFC icon */}
          <div className="absolute top-[2%] left-[80%] transform -translate-y-1/2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 flex items-center justify-center animate-float glow-blue">
          <Zap className="w-10 h-10 text-primary" />
            </div>
          </div>
          
          <div className="absolute top-[110%] left-[10%] transform -translate-y-1/2">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-secondary/10 to-primary/20 flex items-center justify-center animate-float glow-violet" style={{ animationDelay: "2s" }}>
          <Nfc className="w-8 h-8 text-secondary" />
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default Hero;