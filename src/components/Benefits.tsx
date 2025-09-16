import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Zwiększ sprzedaż",
      description: "Klienci łatwiej znajdą Twój sklep online. Jeden dotyk = bezpośredni dostęp do oferty.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Buduj społeczność",
      description: "Przekieruj do mediów społecznościowych i zwiększ liczbę obserwatorów o 300%.",
      color: "secondary"
    },
    {
      icon: Clock,
      title: "Oszczędzaj czas",
      description: "Żadnych QR kodów do skanowania. NFC działa natychmiast, bez dodatkowych kroków.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Profesjonalny wizerunek",
      description: "Nowoczesna technologia podkreśla innowacyjność Twojej marki i buduje zaufanie.",
      color: "secondary"
    }
  ];

  return (
    <section className="py-20 px-4 relative">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-primary/5 animate-float" />
      <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-secondary/5 animate-float" style={{ animationDelay: "1.5s" }} />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Dlaczego <span className="gradient-primary bg-clip-text text-transparent">breloki NFC</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prostota, która działa. Technologia, która imponuje. Rezultaty, które liczą się dla Twojego biznesu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const glowClass = benefit.color === 'primary' ? 'glow-blue' : 'glow-violet';
            
            return (
              <Card 
                key={index} 
                className="bg-card/30 backdrop-blur border-border/30 hover:border-border/60 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${benefit.color}/10 flex items-center justify-center ${glowClass} group-hover:${glowClass}`}>
                    <Icon className={`w-8 h-8 text-${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">99%</div>
            <p className="text-muted-foreground">kompatybilność smartfonów</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">4cm</div>
            <p className="text-muted-foreground">zasięg odczytu</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">10+</div>
            <p className="text-muted-foreground">lat żywotności</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold gradient-primary bg-clip-text text-transparent mb-2">0s</div>
            <p className="text-muted-foreground">czas oczekiwania</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;