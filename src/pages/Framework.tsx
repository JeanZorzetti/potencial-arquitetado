import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABox from "@/components/CTABox";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Target, 
  Users, 
  TrendingUp, 
  Lightbulb, 
  CheckCircle,
  ArrowRight,
  Clock,
  Award
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Framework = () => {
  const navigate = useNavigate();
  
  const frameworkSteps = [
    {
      step: "1",
      title: "Mentalidade de Crescimento",
      icon: Brain,
      description: "Desenvolva a base psicológica para o aprendizado acelerado através da mentalidade de crescimento de Carol Dweck.",
      details: [
        "Identifique e reframe crenças limitantes",
        "Cultive amor pelo processo vs. resultado",
        "Transforme fracassos em oportunidades de aprendizado",
        "Desenvolva resiliência emocional"
      ]
    },
    {
      step: "2", 
      title: "Planejamento Estratégico",
      icon: Target,
      description: "Crie um plano estruturado baseado em objetivos SMART e teoria de definição de metas.",
      details: [
        "Defina objetivos específicos e mensuráveis",
        "Crie marcos de progresso intermediários",
        "Identifique recursos e obstáculos",
        "Desenvolva planos de contingência"
      ]
    },
    {
      step: "3",
      title: "Prática Deliberada",
      icon: TrendingUp,
      description: "Implemente o método de Anders Ericsson para desenvolvimento de expertise através de prática focada e intencional.",
      details: [
        "Identifique pontos de melhoria específicos",
        "Pratique com feedback imediato",
        "Mantenha foco total durante a prática",
        "Progressão gradual de dificuldade"
      ]
    },
    {
      step: "4",
      title: "Ecossistema de Suporte",
      icon: Users,
      description: "Construa uma rede de mentores, peers e recursos que aceleram seu desenvolvimento.",
      details: [
        "Identifique e conecte-se com mentores",
        "Crie grupos de accountability",
        "Desenvolva relacionamentos estratégicos",
        "Cultive mentalidade de contribuição mútua"
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Acelera Resultados",
      description: "Reduz o tempo para atingir maestria em 50% comparado a métodos tradicionais"
    },
    {
      icon: Award,
      title: "Baseado em Ciência",
      description: "Fundamentado em 30+ anos de pesquisa de Stanford, Harvard e outras instituições"
    },
    {
      icon: CheckCircle,
      title: "Comprovadamente Eficaz",
      description: "Testado por 1000+ profissionais que alcançaram posições de liderança"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Badge variant="outline" className="mb-4">
            Framework Exclusivo
          </Badge>
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
            Framework de Aceleração de{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Aprendizado
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto mb-8">
            Um sistema científico de 4 pilares para acelerar o desenvolvimento de soft skills, 
            inteligência emocional e competências de liderança baseado em pesquisas de Stanford e Harvard.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3" onClick={() => navigate('/contato')}>
              Implementar Framework
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3" onClick={() => window.open('#', '_blank')}>
              Baixar Guia Completo
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Overview */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sans font-bold text-foreground mb-4">
              Por Que Este Framework Funciona?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Desenvolvido a partir da análise de 50+ estudos científicos e testado 
              por mais de 1.000 profissionais em diferentes indústrias.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-sans font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Framework Steps */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
              Os 4 Pilares do Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Cada pilar é baseado em décadas de pesquisa e foi testado por profissionais 
              que aceleram suas carreiras de forma consistente e sustentável.
            </p>
          </div>
          
          <div className="space-y-12">
            {frameworkSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="flex-1">
                  <Card className="h-full border-primary/20 hover:border-primary/40 transition-colors">
                    <CardHeader>
                      <div className="flex items-center mb-4">
                        <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                          {step.step}
                        </div>
                        <step.icon className="w-8 h-8 text-primary" />
                      </div>
                      <CardTitle className="text-2xl font-sans">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="flex items-center text-sm">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="w-full lg:w-64 flex justify-center">
                  <div className="bg-gradient-to-br from-primary/20 to-accent/20 w-48 h-48 rounded-full flex items-center justify-center">
                    <step.icon className="w-20 h-20 text-primary" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-sans font-bold text-foreground mb-4">
              Como Implementar na Prática
            </h2>
            <p className="text-lg text-muted-foreground">
              Siga nosso roteiro passo-a-passo para aplicar o framework e ver 
              resultados mensuráveis em 90 dias.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-primary" />
                  Semanas 1-2: Fundação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Assessment completo de competências atuais</li>
                  <li>• Definição de objetivos SMART específicos</li>
                  <li>• Identificação de crenças limitantes</li>
                  <li>• Criação do plano de desenvolvimento</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Semanas 3-8: Execução
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Prática deliberada diária (30-60 min)</li>
                  <li>• Busca ativa por feedback qualificado</li>
                  <li>• Construção do ecossistema de suporte</li>
                  <li>• Ajustes semanais baseados em resultados</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-primary" />
                  Semanas 9-12: Otimização
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Análise de progresso e métricas</li>
                  <li>• Refinamento de estratégias mais eficazes</li>
                  <li>• Planejamento do próximo ciclo</li>
                  <li>• Consolidação de hábitos sustentáveis</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Resultados Esperados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• 40% melhoria em competências-chave</li>
                  <li>• Maior clareza sobre próximos passos</li>
                  <li>• Rede de relacionamentos estratégicos</li>
                  <li>• Sistema sustentável de crescimento</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <CTABox 
            title="Acelere Sua Carreira com o Framework Completo"
            description="Receba o guia detalhado de implementação, templates exclusivos e acesso ao programa de mentoria em grupo para implementar o framework com sucesso."
            buttonText="Quero Acelerar Minha Carreira"
            variant="framework"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Framework;