export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  readTime: string;
  publishDate: string;
  slug: string;
  featured?: boolean;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Os 3 Pilares do Desenvolvimento Pessoal que Sustentam Qualquer Carreira de Sucesso",
    excerpt: "Descubra o framework fundamental que conecta autoconhecimento, competências comportamentais e mentalidade de crescimento para acelerar sua trajetória profissional.",
    content: `
    <div class="article-content">
      <p>O desenvolvimento pessoal não é um conceito abstrato ou uma moda passageira. É a base científica que sustenta todas as carreiras de sucesso duradouro. Profissionais que dominam essa arquitetura têm 5x mais chances de alcançar posições de liderança, segundo pesquisas do Harvard Business Review.</p>

      <h2>Pilar 1: Autoconhecimento Profundo</h2>
      <p>O primeiro pilar envolve compreender suas forças naturais, pontos de melhoria e padrões comportamentais. Não se trata de introspecção superficial, mas de uma análise sistemática baseada em feedback 360º e ferramentas de assessment.</p>

      <blockquote>"Conhecer a si mesmo é o início de toda sabedoria." - Aristóteles</blockquote>

      <h2>Pilar 2: Competências Comportamentais (Soft Skills)</h2>
      <p>As soft skills representam 75% do sucesso profissional de longo prazo. Comunicação, inteligência emocional, pensamento crítico e adaptabilidade são as competências mais valorizadas pelos recrutadores globais.</p>

      <h2>Pilar 3: Mentalidade de Crescimento</h2>
      <p>Desenvolvida por Carol Dweck, a mentalidade de crescimento é a crença de que habilidades podem ser desenvolvidas através de dedicação e trabalho árduo. Profissionais com essa mentalidade superam obstáculos 40% mais rapidamente.</p>

      <h2>Como Integrar os 3 Pilares</h2>
      <p>A magia acontece quando você conecta esses três elementos em um sistema integrado. O autoconhecimento revela quais soft skills desenvolver, enquanto a mentalidade de crescimento fornece a base psicológica para a evolução contínua.</p>
    </div>
    `,
    category: "Desenvolvimento Pessoal",
    readTime: "8 min",
    publishDate: "15 Jan 2024",
    slug: "3-pilares-desenvolvimento-pessoal-carreira-sucesso",
    featured: true
  },
  {
    id: "2",
    title: "Como a Inteligência Emocional Afeta a Tomada de Decisão e a Resiliência no Trabalho",
    excerpt: "Análise baseada em dados sobre como os 5 pilares da inteligência emocional de Daniel Goleman impactam diretamente sua performance profissional e capacidade de liderança.",
    content: `
    <div class="article-content">
      <p>A inteligência emocional (QE) não é apenas um conceito de autoajuda. É uma competência mensurável que prediz sucesso profissional com 90% de precisão, superando até mesmo o QI tradicional em ambientes corporativos modernos.</p>

      <h2>Os 5 Pilares da Inteligência Emocional no Trabalho</h2>
      
      <h3>1. Autoconsciência Emocional</h3>
      <p>Profissionais com alta autoconsciência tomam decisões 23% mais assertivas porque reconhecem como suas emoções influenciam o julgamento.</p>

      <h3>2. Autorregulação</h3>
      <p>A capacidade de gerir impulsos se traduz em resiliência operacional. Líderes com boa autorregulação mantêm a produtividade da equipe mesmo em crises.</p>

      <blockquote>"Entre estímulo e resposta há um espaço. Nesse espaço está nosso poder de escolher nossa resposta. Em nossa resposta está nosso crescimento e nossa liberdade." - Viktor Frankl</blockquote>

      <h3>3. Motivação Intrínseca</h3>
      <p>Profissionais intrinsecamente motivados superam metas em 31% comparado àqueles movidos apenas por recompensas externas.</p>

      <h3>4. Empatia</h3>
      <p>Em negociações complexas, a empatia aumenta as chances de acordos win-win em 45%. É a competência que diferencia bons vendedores de vendedores extraordinários.</p>

      <h3>5. Habilidades Sociais</h3>
      <p>Networking eficaz depende 80% de habilidades sociais e apenas 20% de expertise técnica. Relacionamentos sólidos aceleram carreiras mais que conhecimento isolado.</p>
    </div>
    `,
    category: "Inteligência Emocional",
    readTime: "6 min",
    publishDate: "12 Jan 2024",
    slug: "inteligencia-emocional-tomada-decisao-resiliencia-trabalho"
  },
  {
    id: "3",
    title: "Mentalidade Fixa vs. de Crescimento: A Crença que Define seu Sucesso Profissional",
    excerpt: "Entenda como suas crenças sobre habilidade e talento moldam sua trajetória de carreira, baseado na pesquisa revolucionária de Carol Dweck em Stanford.",
    content: `
    <div class="article-content">
      <p>Sua crença sobre a natureza do talento e da inteligência é o fator mais determinante do seu sucesso profissional. Esta não é uma opinião, mas uma conclusão baseada em 30 anos de pesquisa da psicóloga Carol Dweck, de Stanford.</p>

      <h2>O Que É Mentalidade Fixa?</h2>
      <p>Profissionais com mentalidade fixa acreditam que talentos são características imutáveis. Eles evitam desafios para proteger a autoimagem de "competentes" e veem fracassos como confirmação de limitações pessoais.</p>

      <h2>O Poder da Mentalidade de Crescimento</h2>
      <p>A mentalidade de crescimento parte da premissa de que habilidades são desenvolvíveis através de esforço direcionado, estratégia e feedback. Profissionais com essa mentalidade:</p>

      <ul>
        <li>Abraçam desafios como oportunidades de crescimento</li>
        <li>Persistem diante de obstáculos</li>
        <li>Veem esforço como caminho para maestria</li>
        <li>Aprendem com críticas construtivas</li>
        <li>Se inspiram no sucesso dos outros</li>
      </ul>

      <blockquote>"Em uma mentalidade de crescimento, os desafios são empolgantes ao invés de ameaçadores. Então, ao invés de pensar 'oh, vou revelar minhas fraquezas', você diz 'uau, aqui está uma chance de crescer'." - Carol Dweck</blockquote>

      <h2>Impacto Mensurável nos Negócios</h2>
      <p>Empresas que cultivam mentalidade de crescimento apresentam:</p>
      <ul>
        <li>47% maior confiança dos funcionários em sua empresa</li>
        <li>34% maior senso de propriedade e comprometimento</li>
        <li>65% maior concordância de que a empresa apoia a tomada de riscos</li>
        <li>49% maior concordância de que a empresa promove inovação</li>
      </ul>
    </div>
    `,
    category: "Mentalidade",
    readTime: "7 min",
    publishDate: "10 Jan 2024",
    slug: "mentalidade-fixa-crescimento-sucesso-profissional"
  }
];