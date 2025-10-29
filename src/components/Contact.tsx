import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    quantity: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Wiadomość wysłana!",
      description: "Skontaktujemy się z Tobą w ciągu 24 godzin.",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      quantity: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 px-4 relative" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skontaktuj się z{" "}
            <span className="bg-gradient-to-r from-sky-400 to-violet-500 bg-clip-text text-transparent inline-block">
              nami
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Gotowy na rozpoczęcie współpracy? Napisz do nas, a otrzymasz spersonalizowaną wycenę w ciągu 24 godzin.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact info */}
          <div className="space-y-6">
            <Card className="bg-card/30 backdrop-blur border-border/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center glow-blue">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">kontakt@seeus.pl</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur border-border/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center glow-violet">
                    <Phone className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Telefon</h3>
                    <p className="text-muted-foreground">+48 451 063 065</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/30 backdrop-blur border-border/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center glow-blue">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Lokalizacja</h3>
                    <p className="text-muted-foreground">Biłgoraj, Polska</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/10 rounded-lg p-6 glow-blue">
              <h3 className="font-semibold mb-2 text-primary">Szybka odpowiedź gwarantowana</h3>
              <p className="text-sm text-muted-foreground">
                Odpowiadamy na wszystkie zapytania w ciągu 24 godzin roboczych. 
                W przypadku pilnych projektów oddzwonimy tego samego dnia.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <Card className="bg-card/50 backdrop-blur border-border/50 glow-violet">
              <CardHeader>
                <CardTitle className="text-2xl">Wyślij zapytanie</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Imię i nazwisko *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Nazwa firmy</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefon</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="bg-background/50 border-border/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">Planowana ilość zamówienia</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      placeholder="np. 300 sztuk"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="bg-background/50 border-border/50"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Wiadomość *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Opisz swój projekt, wymagania dotyczące designu, terminy..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-background/50 border-border/50"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-blue">
                    <Send className="w-5 h-5 mr-2" />
                    Wyślij zapytanie
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;