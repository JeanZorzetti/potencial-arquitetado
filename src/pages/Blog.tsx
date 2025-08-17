import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ArticleCard from "@/components/ArticleCard";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/articles";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const categories = [
    "Todos",
    "Desenvolvimento Pessoal", 
    "Inteligência Emocional",
    "Soft Skills",
    "Mentalidade",
    "Liderança",
    "Produtividade"
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "Todos" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-sans font-bold text-foreground mb-6">
            Blog da Arquitetura do Potencial
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Insights profundos sobre desenvolvimento pessoal, soft skills e inteligência 
            emocional baseados em pesquisas científicas e aplicação prática.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-card border-y border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder="Buscar artigos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="whitespace-nowrap"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          {filteredArticles.length > 0 ? (
            <>
              <div className="mb-8">
                <p className="text-muted-foreground">
                  {filteredArticles.length} artigo{filteredArticles.length !== 1 ? 's' : ''} encontrado{filteredArticles.length !== 1 ? 's' : ''}
                  {selectedCategory !== "Todos" && ` em "${selectedCategory}"`}
                  {searchTerm && ` para "${searchTerm}"`}
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-sans font-semibold text-foreground mb-2">
                Nenhum artigo encontrado
              </h3>
              <p className="text-muted-foreground mb-6">
                Tente ajustar sua busca ou explorar outras categorias.
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("Todos");
                }}
              >
                Limpar Filtros
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Sidebar Information */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-sans font-bold text-foreground mb-4">
                Por que Nossos Artigos São Diferentes?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Cada artigo é baseado em pesquisas científicas rigorosas, traduzidas 
                em linguagem clara e acompanhadas de frameworks práticos que você 
                pode implementar imediatamente em sua carreira.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-sans font-semibold mb-2">📊 Baseado em Dados</h3>
                <p className="text-sm text-muted-foreground">
                  Todos os insights são fundamentados em pesquisas peer-reviewed.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-sans font-semibold mb-2">🎯 Prático</h3>
                <p className="text-sm text-muted-foreground">
                  Frameworks acionáveis que você pode implementar hoje mesmo.
                </p>
              </div>
              <div className="bg-card p-4 rounded-lg border border-border">
                <h3 className="font-sans font-semibold mb-2">📈 Resultados</h3>
                <p className="text-sm text-muted-foreground">
                  Estratégias testadas por profissionais que alcançaram o sucesso.
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

export default Blog;