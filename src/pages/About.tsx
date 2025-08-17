import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABox from "@/components/CTABox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
              Uma abordagem científica e prática para acelerar o desenvolvimento 
              profissional através de frameworks baseados em evidências.
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
                Democratizar o acesso a frameworks científicos de desenvolvimento pessoal, 
                traduzindo pesquisas complexas de universidades como Harvard e Stanford 
                em estratégias práticas e acionáveis.
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
                <h3 className="font-sans font-semibold mb-2">50+</h3>
                <p className="text-sm text-muted-foreground">Estudos Analisados</p>
              </Card>
              <Card className="text-center p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sans font-semibold mb-2">1000+</h3>
                <p className="text-sm text-muted-foreground">Profissionais Impactados</p>
              </Card>
              <Card className="text-center p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sans font-semibold mb-2">15+</h3>
                <p className="text-sm text-muted-foreground">Anos de Experiência</p>
              </Card>
              <Card className="text-center p-6">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-sans font-semibold mb-2">95%</h3>
                <p className="text-sm text-muted-foreground">Taxa de Satisfação</p>
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
                <h3 className="text-xl font-sans font-semibold mb-3">Rigor Científico</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Todo conteúdo é baseado em pesquisas peer-reviewed de universidades 
                  renomadas e institutos de pesquisa reconhecidos internacionalmente.
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
                  Priorizamos estratégias com impacto comprovado na aceleração de 
                  carreiras e desenvolvimento de liderança.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-sans font-bold text-foreground mb-8 text-center">
            Formação e Experiência
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-primary" />
                  Formação Acadêmica
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">MBA em Gestão de Pessoas</h4>
                  <p className="text-sm text-muted-foreground">Fundação Getúlio Vargas</p>
                </div>
                <div>
                  <h4 className="font-semibold">Especialização em Psicologia Organizacional</h4>
                  <p className="text-sm text-muted-foreground">Universidade de São Paulo</p>
                </div>
                <div>
                  <h4 className="font-semibold">Certificação em Coaching Executivo</h4>
                  <p className="text-sm text-muted-foreground">International Coach Federation</p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Experiência Profissional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold">Diretor de Desenvolvimento Humano</h4>
                  <p className="text-sm text-muted-foreground">Multinacional de Tecnologia</p>
                </div>
                <div>
                  <h4 className="font-semibold">Consultor Senior em Liderança</h4>
                  <p className="text-sm text-muted-foreground">BCG - Boston Consulting Group</p>
                </div>
                <div>
                  <h4 className="font-semibold">Coach Executivo</h4>
                  <p className="text-sm text-muted-foreground">C-Levels Fortune 500</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <CTABox 
            title="Pronto para Aplicar Frameworks Científicos?"
            description="Junte-se a mais de 1.000 profissionais que já aceleram suas carreiras com nossos frameworks exclusivos baseados em pesquisas de Harvard e Stanford."
            buttonText="Começar Minha Transformação"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;