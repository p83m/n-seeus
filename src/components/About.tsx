import { Card, CardContent } from "@/components/ui/card";
import { Zap, Globe, Users, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 gradient-subtle opacity-50" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Kim jest <span className="gradient-primary bg-clip-text text-transparent">SeeUS</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Jesteśmy agencją marketingu cyfrowego, która łączy tradycyjne podejście z nowoczesnymi technologiami. 
            Nasza specjalność to innowacyjne rozwiązania NFC.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Company info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center glow-blue">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Marketing cyfrowy</h3>
                <p className="text-muted-foreground">
                  Kompleksowe strategie online: SEO, SEM, media społecznościowe, content marketing. 
                  Pomagamy markom rosnąć w cyfrowym świecie.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center glow-violet">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Innowacje NFC</h3>
                <p className="text-muted-foreground">
                  Jako pierwsi w Polsce wprowadziliśmy spersonalizowane breloki NFC do marketingu biznesowego. 
                  Łączymy fizyczne z cyfrowym.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center glow-blue">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Doświadczenie</h3>
                <p className="text-muted-foreground">
                  Ponad 500 zadowolonych klientów, 50 000+ wyprodukowanych breloków NFC. 
                  Zaufały nam firmy z całej Europy.
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Values */}
          <Card className="bg-card/50 backdrop-blur border-border/50 glow-violet">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 mx-auto rounded-full gradient-primary flex items-center justify-center glow-blue">
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Nasza misja</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Wierzymy, że technologia powinna być prosta i dostępna. Dlatego tworzymy rozwiązania, 
                  które każdy może łatwo wdrożyć w swoim biznesie.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">500+</div>
                    <div className="text-sm text-muted-foreground">Klientów</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">50k+</div>
                    <div className="text-sm text-muted-foreground">Breloków NFC</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">15</div>
                    <div className="text-sm text-muted-foreground">Krajów</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-secondary mb-1">99%</div>
                    <div className="text-sm text-muted-foreground">Satysfakcji</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;