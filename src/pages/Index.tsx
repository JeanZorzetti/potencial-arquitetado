import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import CTABox from "@/components/CTABox";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { ArrowRight, BookOpen, Users, TrendingUp, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const featuredArticles = articles.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-foreground mb-6 leading-tight">
            Arquitetura do{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Potencial
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
            Frameworks práticos para acelerar sua carreira através de soft skills, 
            inteligência emocional e desenvolvimento pessoal baseado em ciência.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3" onClick={() => navigate('/framework')}>
              Explorar Framework
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3" onClick={() => navigate('/blog')}>
              Ler Artigos
            </Button>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-card">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-sans font-semibold mb-3">Baseado em Ciência</h3>
              <p className="text-muted-foreground">
                Conteúdo fundamentado em pesquisas de Harvard, Stanford e principais 
                autoridades em desenvolvimento humano.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-sans font-semibold mb-3">Frameworks Práticos</h3>
              <p className="text-muted-foreground">
                Estratégias acionáveis que você pode implementar imediatamente 
                para acelerar sua carreira e desenvolvimento.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-sans font-semibold mb-3">Resultados Mensuráveis</h3>
              <p className="text-muted-foreground">
                Métodos comprovados por profissionais que alcançaram posições 
                de liderança em grandes empresas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-sans font-bold text-foreground mb-4">
              Artigos em Destaque
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights profundos e estratégias práticas para acelerar seu desenvolvimento 
              profissional e pessoal.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Ver Todos os Artigos
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Author Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                <Users className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-3xl font-sans font-bold text-foreground mb-4">
                Sobre o Especialista
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Especialista em desenvolvimento humano com foco em soft skills e inteligência emocional. 
                Combina rigor acadêmico com aplicação prática, traduzindo pesquisas complexas em 
                frameworks acionáveis para profissionais ambiciosos que buscam acelerar suas carreiras.
              </p>
            </div>
            <Button variant="outline" size="lg" onClick={() => navigate('/sobre')}>
              Conheça Mais Sobre Mim
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <CTABox 
            title="Acelere Sua Carreira com Frameworks Exclusivos"
            description="Receba estratégias práticas baseadas em ciência para desenvolver soft skills, inteligência emocional e mentalidade de crescimento. Conteúdo exclusivo que não está disponível no blog."
            buttonText="Quero Acelerar Minha Carreira"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
