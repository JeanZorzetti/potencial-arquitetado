import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Compass, BookOpen, MessageCircle, Home } from "lucide-react";

const links = [
  { to: "/", label: "Início", icon: Home, description: "Volte para a página principal" },
  { to: "/framework", label: "Framework", icon: Compass, description: "Conheça nossa metodologia" },
  { to: "/blog", label: "Blog", icon: BookOpen, description: "Artigos e pesquisas" },
  { to: "/contato", label: "Contato", icon: MessageCircle, description: "Fale com a gente" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <section className="flex-1 py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-8 flex items-center justify-center">
            <span className="text-4xl font-sans font-bold text-white">404</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
            Essa página saiu do roteiro
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-10">
            Não encontramos o conteúdo em <span className="font-mono text-foreground">{location.pathname}</span>.
            Pode ter mudado de endereço — enquanto isso, aqui estão alguns caminhos úteis.
          </p>

          <Button asChild size="lg" className="mb-16">
            <Link to="/">Voltar ao início</Link>
          </Button>

          <div className="grid sm:grid-cols-2 gap-4 text-left">
            {links.map(({ to, label, description, icon: Icon }) => (
              <Link key={to} to={to}>
                <Card className="p-6 h-full hover:border-primary/50 transition-colors">
                  <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-sans font-semibold mb-1">{label}</h3>
                  <p className="text-sm text-muted-foreground">{description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
