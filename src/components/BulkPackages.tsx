import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const BulkPackages = () => {
  const packages = [
    {
      units: 100,
      popular: false,
      features: [
        "Pełna personalizacja",
        "Twoje logo w dowolnym kolorze",
        "Kształt do wyboru",
        "Programowanie NFC",
        "Pakowanie w eleganckie pudełko"
      ]
    },
    {
      units: 200,
      popular: false,
      features: [
        "Wszystko z pakietu 100 szt.",
        "Zniżka za ilość",
        "Dodatkowy projekt graficzny",
        "Express realizacja",
        "Dedykowany opiekun"
      ]
    },
    {
      units: 300,
      popular: true,
      features: [
        "Wszystko z pakietu 200 szt.",
        "Najlepsza cena za sztukę",
        "Możliwość 2 projektów",
        "Priorytetowa obsługa",
        "Darmowa próbka przed produkcją"
      ]
    },
    {
      units: 400,
      popular: false,
      features: [
        "Wszystko z pakietu 300 szt.",
        "Kolejna zniżka",
        "3 różne projekty",
        "Dodatkowe opcje kształtu",
        "Gwarancja satysfakcji"
      ]
    },
    {
      units: 500,
      popular: false,
      features: [
        "Wszystko z pakietu 400 szt.",
        "Najniższa cena",
        "Nieograniczone projekty",
        "Premium opakowanie",
        "Rozszerzona gwarancja 2 lata"
      ]
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pakiety <span className="gradient-primary bg-clip-text text-transparent">hurtowe</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Wybierz odpowiednią ilość dla Twojego biznesu. Im więcej zamówisz, tym niższa cena za sztukę.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {packages.map((pkg, index) => (
            <Card 
              key={index}
              className={`relative bg-card/30 backdrop-blur border-border/30 hover:border-border/60 transition-all duration-300 hover:scale-105 ${
                pkg.popular ? 'border-primary/50 glow-blue' : ''
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Najpopularniejszy
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl font-bold">
                  {pkg.units}
                  <span className="text-lg font-normal text-muted-foreground ml-1">szt.</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full ${
                    pkg.popular 
                      ? 'bg-primary hover:bg-primary/90 text-primary-foreground glow-blue' 
                      : 'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                  }`}
                >
                  Zamów {pkg.units} szt.
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-6">
            Potrzebujesz innej ilości lub masz pytania?
          </p>
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Skontaktuj się z nami
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BulkPackages;