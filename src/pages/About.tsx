import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABox from "@/components/CTABox";
import { articles } from "@/data/articles";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { BookOpen, Users, Award, Target } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-8 flex items-center justify-center">
              <Users className="w-16 h-16 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
              Sobre a Arquitetura do Potencial
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Guias práticos para desenvolver soft skills, inteligência emocional
              e liderança no trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-sans font-bold text-foreground mb-6">
                Nossa Missão
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Tornar acessíveis ideias de desenvolvimento profissional que costumam ficar
                presas em livros e treinamentos caros, em passos que cabem na sua semana.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acreditamos que todo profissional ambicioso merece ter acesso às mesmas 
                ferramentas de desenvolvimento que são utilizadas por executivos de 
                grandes corporações e líderes globais.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sans font-semibold mb-2">{articles.length} guias</h3>
                <p className="text-sm text-muted-foreground">publicados no blog</p>
              </Card>
              <Card className="text-center p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sans font-semibold mb-2">Sem cadastro</h3>
                <p className="text-sm text-muted-foreground">para ler qualquer guia</p>
              </Card>
              <Card className="text-center p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sans font-semibold mb-2">Gratuito</h3>
                <p className="text-sm text-muted-foreground">do primeiro ao último</p>
              </Card>
              <Card className="text-center p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sans font-semibold mb-2">4 pilares</h3>
                <p className="text-sm text-muted-foreground">no framework</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16 bg-card">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-sans font-bold text-foreground mb-8 text-center">
            Nossa Filosofia: O Especialista Acessível
          </h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Badge variant="secondary" className="mt-1">1</Badge>
              <div>
                <h3 className="text-xl font-sans font-semibold mb-3">Autores de Referência</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Os guias partem de autores conhecidos no tema, como Daniel Goleman
                  e Carol Dweck, e não de opinião solta.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Badge variant="secondary" className="mt-1">2</Badge>
              <div>
                <h3 className="text-xl font-sans font-semibold mb-3">Linguagem Clara</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Traduzimos jargões acadêmicos em linguagem compreensível, sem perder 
                  a profundidade e a precisão dos conceitos originais.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Badge variant="secondary" className="mt-1">3</Badge>
              <div>
                <h3 className="text-xl font-sans font-semibold mb-3">Aplicação Prática</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cada framework inclui passos concretos, ferramentas de implementação 
                  e métricas para acompanhar o progresso.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Badge variant="secondary" className="mt-1">4</Badge>
              <div>
                <h3 className="text-xl font-sans font-semibold mb-3">Foco no Resultado</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Priorizamos o que dá para aplicar no trabalho já nesta semana.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;