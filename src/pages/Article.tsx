import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABox from "@/components/CTABox";
import ArticleCard from "@/components/ArticleCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { articles } from "@/data/articles";
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Linkedin, 
  Mail,
  MessageCircle 
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Article = () => {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);
  
  const relatedArticles = articles
    .filter(a => a.slug !== slug && a.category === article?.category)
    .slice(0, 2);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article?.title || "";
    
    let shareUrl = "";
    switch (platform) {
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(`${title} - ${url}`)}`;
        break;
      case "email":
        shareUrl = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(`Confira este artigo: ${url}`)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
    
    toast({
      title: "Link copiado!",
      description: "O link do artigo foi copiado para sua área de transferência.",
    });
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Artigo não encontrado</h1>
          <p className="text-muted-foreground mb-8">
            O artigo que você está procurando não existe ou foi removido.
          </p>
          <Link to="/blog">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Article Header */}
      <article className="py-12">
        <div className="article-content">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar ao Blog
            </Link>
          </div>

          {/* Article Meta */}
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4">
              {article.category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-foreground mb-6 leading-tight">
              {article.title}
            </h1>
            <div className="flex items-center text-muted-foreground space-x-6 mb-8">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">{article.publishDate}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm">{article.readTime} de leitura</span>
              </div>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-border">
            <span className="text-sm font-medium text-muted-foreground">Compartilhar:</span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("linkedin")}
              className="text-[#0077B5] border-[#0077B5] hover:bg-[#0077B5] hover:text-white"
            >
              <Linkedin className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("whatsapp")}
              className="text-[#25D366] border-[#25D366] hover:bg-[#25D366] hover:text-white"
            >
              <MessageCircle className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => handleShare("email")}
            >
              <Mail className="w-4 h-4" />
            </Button>
          </div>

          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Middle CTA */}
          <div className="my-16">
            <CTABox 
              title="Gostou deste artigo? Acelere sua carreira!"
              description="Receba frameworks exclusivos e estratégias avançadas que não compartilhamos no blog. Conteúdo premium para profissionais que querem resultados rápidos."
              buttonText="Quero Conteúdo Exclusivo"
            />
          </div>

          {/* Share Buttons Bottom */}
          <div className="flex items-center justify-center space-x-4 my-12 py-8 border-t border-b border-border">
            <span className="text-sm font-medium text-muted-foreground">Achou útil? Compartilhe:</span>
            <Button
              variant="outline"
              onClick={() => handleShare("linkedin")}
              className="text-[#0077B5] border-[#0077B5] hover:bg-[#0077B5] hover:text-white"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              onClick={() => handleShare("whatsapp")}
              className="text-[#25D366] border-[#25D366] hover:bg-[#25D366] hover:text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button
              variant="outline"
              onClick={() => handleShare("email")}
            >
              <Mail className="w-4 h-4 mr-2" />
              E-mail
            </Button>
          </div>
        </div>
      </article>

      {/* Related Articles */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-muted/30">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-2xl md:text-3xl font-sans font-bold text-foreground mb-8 text-center">
              Artigos Relacionados
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.id} {...relatedArticle} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link to="/blog">
                <Button variant="outline" size="lg">
                  Ver Todos os Artigos
                </Button>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <CTABox 
            title="Pronto para Implementar estes Conceitos?"
            description="Junte-se a mais de 1.000 profissionais que aplicam nossos frameworks para acelerar suas carreiras. Receba um guia prático para implementar tudo que você aprendeu."
            buttonText="Quero Acelerar Minha Carreira"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Article;