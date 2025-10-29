import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Shield } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Zwiększ sprzedaż",
      description: "Klienci łatwiej znajdą Twój sklep online, czy zarezerwują wizytę. Jednym dotykiem otrzymują bezpośredni dostęp do oferty.",
      color: "primary"
    },
    {
      icon: Users,
      title: "Nowoczesny kontakt",
      description: "Breloki gwarantują natychmiastowy dostęp do wszystkich wybranych przez Ciebie linków - bez wpisywania adresów i przeszukiwania portfela.",
      color: "secondary"
    },
    {
      icon: Clock,
      title: "Trwałość i wygoda",
      description: "Twój klient nigdy nie zgubi kontaktu do Ciebie - brelok działa nawet do 10 lat, nie niszczy się i jest zawsze gotowy do użycia.",
      color: "primary"
    },
    {
      icon: Shield,
      title: "Profesjonalny wizerunek",
      description: "Nowoczesna technologia podkreśla innowacyjny charakter Twojej marki, a oryginalny gadżet wywołuje uśmiech na twarzy klienta.",
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
            Dlaczego <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent inline-block">
              breloki NFC
            </span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Pozwól swoim klientom zapomnieć o papierowych wizytówkach, które łatwo zgubić lub szybko się dezaktualizują. Nowoczesny brelok NFC to gadżet, który będą mieć zawsze pod ręką - wystarczy zbliżyć telefon, by w jednej chwili uzyskać dostęp do informacji o Twojej firmie, ofercie i danych kontaktowych.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const isPrimary = benefit.color === 'primary';
            
            return (
              <Card 
                key={index} 
                className="bg-card/30 backdrop-blur border-border/30 hover:border-border/60 transition-all duration-300 group hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isPrimary 
                      ? 'bg-primary/10 glow-blue group-hover:glow-blue' 
                      : 'bg-secondary/10 glow-violet group-hover:glow-violet'
                  }`}>
                    <Icon className={`w-8 h-8 ${isPrimary ? 'text-primary' : 'text-secondary'}`} />
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
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent inline-block mb-2">99%</div>
            <p className="text-muted-foreground">kompatybilność smartfonów</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent inline-block mb-2">4cm</div>
            <p className="text-muted-foreground">zasięg odczytu</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent inline-block mb-2">10+</div>
            <p className="text-muted-foreground">lat żywotności</p>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent inline-block mb-2">0s</div>
            <p className="text-muted-foreground">czas oczekiwania</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;