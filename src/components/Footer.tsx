import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Inscrição realizada!",
        description: "Você receberá nossos melhores conteúdos sobre desenvolvimento profissional.",
      });
      setEmail("");
    }
  };

  return (
    <footer className="bg-card border-t border-border mt-16">
      {/* Newsletter Section */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-sans font-semibold text-foreground mb-4">
            Receba Frameworks Exclusivos
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cadastre-se para receber frameworks práticos, estudos de caso reais e estratégias 
            comprovadas para acelerar sua carreira. Conteúdo exclusivo, sem spam.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-3">
          <Input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" className="px-6">
            Quero Receber
          </Button>
        </form>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <div className="mb-4 md:mb-0">
              <p>&copy; 2024 Arquitetura do Potencial. Todos os direitos reservados.</p>
            </div>
            <div className="flex space-x-6">
              <a href="/sobre" className="hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="/contato" className="hover:text-foreground transition-colors">
                Contato
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;