import { Card, CardContent } from "@/components/ui/card";
import { Smartphone, Wifi, Palette, Zap, Nfc } from "lucide-react";

const ProductDescription = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-[pulse_4s_ease-in-out_infinite]">
            Czym są{" "}
            <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent inline-block animate-[pulse_4s_ease-in-out_infinite]">
              breloki SeeUS
            </span>
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Elegancki brelok z technologią NFC to połączenie stylu z nowoczesnością. Jednym dotknięciem smartfona klienci mogą odwiedzić Twoją stronę, sklep online, profile w mediach społecznościowych, zarezerwować wizytę, czy wystawić opinię - wszystko w jednym miejscu, zawsze dostępne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left column - Features */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center glow-blue">
                <Smartphone className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
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
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Pełna personalizacja</h3>
                <p className="text-muted-foreground">
                  Wykonamy projekt pod dowolny kształt, logo, kolory firmowe. Brelok idealnie dopasowany do marki.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center glow-blue">
                <Nfc className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Uniwersalne łącze</h3>
                <p className="text-muted-foreground">
                  Przekierowanie do spersonalizowanej wizytówki. Zawsze aktualnej - aktualizowanej zdalnie.
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
                    <Nfc className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">Twój brelok NFC</h3>
                  <p className="text-muted-foreground">
                    Elegancki design z Twoim logo. Trwały, wodoodporny i gotowy do codziennego użytku.
                  </p>
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