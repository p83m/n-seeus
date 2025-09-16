import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Wifi, Palette, Zap } from "lucide-react";

const ProductDescription = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Czym są <span className="gradient-primary bg-clip-text text-transparent">breloki NFC</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Nowoczesna technologia NFC w eleganckim breloku. Twoi klienci jednym dotknięciem 
            smartfona mogą odwiedzić Twoją stronę, sklep online czy media społecznościowe.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Features */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center glow-blue">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Natychmiastowe połączenie</h3>
                <p className="text-muted-foreground">
                  Bez pobierania aplikacji. Każdy telefon z NFC automatycznie rozpoznaje brelok.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center glow-violet">
                <Palette className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pełna personalizacja</h3>
                <p className="text-muted-foreground">
                  Dowolny kształt, Twoje logo, kolory firmowe. Brelok idealnie dopasowany do marki.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center glow-blue">
                <Wifi className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Uniwersalne łącze</h3>
                <p className="text-muted-foreground">
                  Przekierowanie do strony WWW, sklepu online, profilu Instagram, karty kontaktowej lub dowolnego URL.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Visual */}
          <div className="relative">
            <Card className="bg-card/50 backdrop-blur border-border/50 glow-blue">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <div className="w-32 h-32 mx-auto rounded-full gradient-primary flex items-center justify-center glow-blue animate-float">
                    <Zap className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Twój brelok NFC</h3>
                  <p className="text-muted-foreground">
                    Elegancki design z Twoim logo. Trwały, wodoodporny i gotowy do codziennego użytku.
                  </p>
                  <div className="bg-primary/10 rounded-lg p-4">
                    <p className="text-sm text-primary font-medium">
                      ✨ Żywotność: 10+ lat | Zasięg: 4cm | Kompatybilność: 99% smartfonów
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDescription;