export interface Article {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  category: string;
  author: string;
  isFeatured: boolean;
  status: 'published' | 'draft';
  publishedAt: string;
  readTime: string;
  createdAt: string;
  updatedAt: string;
}

export const articles: Article[] = [
  {
    _id: "1",
    title: "Como Desenvolver Inteligência Emocional em 30 Dias",
    slug: "como-desenvolver-inteligencia-emocional-30-dias",
    content: `
      <div class="prose prose-lg max-w-none">
        <p>A inteligência emocional é uma das competências mais valorizadas no mercado de trabalho atual. Estudos da Harvard Business Review mostram que profissionais com alta inteligência emocional têm 58% mais chances de alcançar posições de liderança.</p>
        
        <h2>O Que é Inteligência Emocional?</h2>
        <p>Inteligência emocional é a capacidade de reconhecer, compreender e gerenciar nossas próprias emoções, bem como entender e influenciar as emoções dos outros. Daniel Goleman, psicólogo de Harvard, identificou cinco componentes principais:</p>
        
        <ul>
          <li><strong>Autoconsciência:</strong> Conhecer suas emoções e como elas afetam seu comportamento</li>
          <li><strong>Autorregulação:</strong> Controlar impulsos e adaptar-se a mudanças</li>
          <li><strong>Motivação:</strong> Persistir diante de frustrações e manter otimismo</li>
          <li><strong>Empatia:</strong> Compreender as emoções dos outros</li>
          <li><strong>Habilidades sociais:</strong> Gerenciar relacionamentos e construir redes</li>
        </ul>
        
        <h2>Framework de 30 Dias para Desenvolver IE</h2>
        
        <h3>Semana 1: Autoconsciência</h3>
        <p><strong>Dias 1-7:</strong> Pratique o "check-in emocional" três vezes ao dia. Pergunte-se: "Como estou me sentindo agora?" e "Por que estou sentindo isso?"</p>
        
        <h3>Semana 2: Autorregulação</h3>
        <p><strong>Dias 8-14:</strong> Implemente a técnica da "pausa de 6 segundos" antes de reagir a situações estressantes. Use esse tempo para respirar profundamente e escolher sua resposta.</p>
        
        <h3>Semana 3: Empatia</h3>
        <p><strong>Dias 15-21:</strong> Pratique a "escuta ativa" em todas as conversas. Foque 100% no que a pessoa está dizendo, sem pensar em sua resposta.</p>
        
        <h3>Semana 4: Integração</h3>
        <p><strong>Dias 22-30:</strong> Combine todas as técnicas em situações reais de trabalho. Documente seus progressos e ajustes necessários.</p>
        
        <h2>Ferramentas Práticas</h2>
        <p>Use estas ferramentas diariamente:</p>
        <ul>
          <li>App de meditação (Headspace, Calm) - 10 minutos/dia</li>
          <li>Diário de emoções - registro noturno</li>
          <li>Feedback 360° - solicite mensalmente</li>
        </ul>
        
        <h2>Resultados Esperados</h2>
        <p>Ao final dos 30 dias, você será capaz de:</p>
        <ul>
          <li>Identificar suas emoções em tempo real</li>
          <li>Responder (não reagir) a situações desafiadoras</li>
          <li>Construir relacionamentos mais profundos</li>
          <li>Liderar com maior eficácia</li>
        </ul>
        
        <blockquote>
          <p>"A inteligência emocional não é um luxo que você pode dar-se ao luxo de ignorar, mas sim uma habilidade básica de que sua carreira pode depender." - Daniel Goleman</p>
        </blockquote>
      </div>
    `,
    excerpt: "Aprenda um framework científico de 30 dias para desenvolver inteligência emocional e acelerar sua carreira. Baseado em pesquisas de Harvard e Stanford.",
    featuredImage: "/api/placeholder/800/400",
    category: "Inteligência Emocional",
    author: "Especialista em Desenvolvimento Humano",
    isFeatured: true,
    status: "published",
    publishedAt: "2024-01-15T10:00:00Z",
    readTime: "8 min",
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z"
  },
  {
    _id: "2",
    title: "5 Soft Skills Que Todo Líder Precisa Dominar",
    slug: "5-soft-skills-todo-lider-precisa-dominar",
    content: `
      <div class="prose prose-lg max-w-none">
        <p>No ambiente corporativo moderno, soft skills se tornaram o diferencial entre bons e grandes líderes. Pesquisas do LinkedIn mostram que 92% dos profissionais de RH consideram soft skills tão importantes quanto hard skills.</p>
        
        <h2>1. Comunicação Eficaz</h2>
        <p>A comunicação vai além de falar bem. Inclui:</p>
        <ul>
          <li><strong>Clareza:</strong> Transmitir ideias de forma simples e direta</li>
          <li><strong>Escuta ativa:</strong> Ouvir para entender, não para responder</li>
          <li><strong>Feedback construtivo:</strong> Dar retornos que desenvolvam pessoas</li>
        </ul>
        
        <h3>Framework CLEAR para Comunicação:</h3>
        <ul>
          <li><strong>C</strong>ontext: Estabeleça o contexto</li>
          <li><strong>L</strong>ogic: Use lógica e dados</li>
          <li><strong>E</strong>motion: Conecte emocionalmente</li>
          <li><strong>A</strong>ction: Defina ações claras</li>
          <li><strong>R</strong>einforce: Reforce a mensagem</li>
        </ul>
        
        <h2>2. Inteligência Emocional</h2>
        <p>Líderes com alta IE têm equipes 20% mais produtivas. Desenvolva:</p>
        <ul>
          <li>Autoconsciência emocional</li>
          <li>Autorregulação</li>
          <li>Empatia</li>
          <li>Motivação intrínseca</li>
        </ul>
        
        <h2>3. Adaptabilidade</h2>
        <p>Em um mundo em constante mudança, a adaptabilidade é crucial:</p>
        <ul>
          <li>Mentalidade de crescimento</li>
          <li>Flexibilidade cognitiva</li>
          <li>Resiliência</li>
          <li>Aprendizado contínuo</li>
        </ul>
        
        <h2>4. Pensamento Crítico</h2>
        <p>Desenvolva sua capacidade de:</p>
        <ul>
          <li>Analisar informações objetivamente</li>
          <li>Identificar vieses cognitivos</li>
          <li>Tomar decisões baseadas em dados</li>
          <li>Questionar suposições</li>
        </ul>
        
        <h2>5. Colaboração</h2>
        <p>Lidere através da colaboração:</p>
        <ul>
          <li>Construa confiança</li>
          <li>Facilite decisões em grupo</li>
          <li>Gerencie conflitos construtivamente</li>
          <li>Promova diversidade de pensamento</li>
        </ul>
        
        <h2>Plano de Desenvolvimento</h2>
        <p>Para cada soft skill, dedique 30 dias de prática focada:</p>
        <ol>
          <li>Avalie seu nível atual (1-10)</li>
          <li>Defina uma meta específica</li>
          <li>Pratique diariamente</li>
          <li>Busque feedback</li>
          <li>Ajuste sua abordagem</li>
        </ol>
        
        <blockquote>
          <p>"Soft skills não são 'soft'. São as habilidades mais difíceis de desenvolver e as mais valiosas para sua carreira." - Josh Bersin</p>
        </blockquote>
      </div>
    `,
    excerpt: "Descubra as 5 soft skills essenciais para liderança eficaz e como desenvolver cada uma com frameworks práticos.",
    featuredImage: "/api/placeholder/800/400",
    category: "Liderança",
    author: "Especialista em Desenvolvimento Humano",
    isFeatured: true,
    status: "published",
    publishedAt: "2024-01-10T10:00:00Z",
    readTime: "6 min",
    createdAt: "2024-01-05T10:00:00Z",
    updatedAt: "2024-01-10T10:00:00Z"
  },
  {
    _id: "3",
    title: "Mentalidade de Crescimento: Como Transformar Desafios em Oportunidades",
    slug: "mentalidade-crescimento-transformar-desafios-oportunidades",
    content: `
      <div class="prose prose-lg max-w-none">
        <p>A mentalidade de crescimento, conceito desenvolvido pela psicóloga Carol Dweck de Stanford, é o fator que mais diferencia profissionais de alta performance dos demais. Pessoas com growth mindset veem desafios como oportunidades de aprendizado.</p>
        
        <h2>Mentalidade Fixa vs. Mentalidade de Crescimento</h2>
        
        <h3>Mentalidade Fixa:</h3>
        <ul>
          <li>"Eu não sou bom em matemática"</li>
          <li>"Isso é muito difícil para mim"</li>
          <li>"Eu falhei, não sirvo para isso"</li>
          <li>Evita desafios</li>
          <li>Desiste facilmente</li>
        </ul>
        
        <h3>Mentalidade de Crescimento:</h3>
        <ul>
          <li>"Eu ainda não sou bom em matemática"</li>
          <li>"Isso vai me ensinar algo novo"</li>
          <li>"Eu aprendi algo valioso com esse erro"</li>
          <li>Abraça desafios</li>
          <li>Persiste diante de obstáculos</li>
        </ul>
        
        <h2>O Framework GROWTH</h2>
        
        <h3>G - Goals (Objetivos)</h3>
        <p>Defina objetivos de aprendizado, não apenas de performance:</p>
        <ul>
          <li>Em vez de "Quero ser promovido"</li>
          <li>Diga "Quero desenvolver habilidades de liderança"</li>
        </ul>
        
        <h3>R - Reflect (Refletir)</h3>
        <p>Reflexão diária sobre aprendizados:</p>
        <ul>
          <li>O que aprendi hoje?</li>
          <li>Que erro me ensinou algo?</li>
          <li>Como posso melhorar amanhã?</li>
        </ul>
        
        <h3>O - Obstacles (Obstáculos)</h3>
        <p>Reframe obstáculos como oportunidades:</p>
        <ul>
          <li>Identifique o obstáculo</li>
          <li>Pergunte: "O que isso pode me ensinar?"</li>
          <li>Desenvolva estratégias alternativas</li>
        </ul>
        
        <h3>W - Wonder (Curiosidade)</h3>
        <p>Cultive a curiosidade:</p>
        <ul>
          <li>Faça mais perguntas</li>
          <li>Explore diferentes perspectivas</li>
          <li>Experimente novas abordagens</li>
        </ul>
        
        <h3>T - Try (Tentar)</h3>
        <p>Ação consistente:</p>
        <ul>
          <li>Comece pequeno</li>
          <li>Pratique regularmente</li>
          <li>Celebre progressos</li>
        </ul>
        
        <h3>H - Help (Ajuda)</h3>
        <p>Busque e ofereça ajuda:</p>
        <ul>
          <li>Encontre mentores</li>
          <li>Forme grupos de estudo</li>
          <li>Ensine outros</li>
        </ul>
        
        <h2>Estratégias Práticas</h2>
        
        <h3>1. O Poder do "Ainda"</h3>
        <p>Adicione "ainda" às suas limitações:</p>
        <ul>
          <li>"Não entendo isso... ainda"</li>
          <li>"Não consegui resolver... ainda"</li>
        </ul>
        
        <h3>2. Processo vs. Resultado</h3>
        <p>Foque no processo de aprendizado:</p>
        <ul>
          <li>Celebre o esforço, não apenas o resultado</li>
          <li>Analise estratégias, não apenas outcomes</li>
        </ul>
        
        <h3>3. Feedback como Combustível</h3>
        <p>Transforme feedback em crescimento:</p>
        <ul>
          <li>Busque feedback específico</li>
          <li>Pergunte "Como posso melhorar?"</li>
          <li>Implemente sugestões rapidamente</li>
        </ul>
        
        <h2>Exercícios Diários</h2>
        
        <h3>Manhã: Definição de Intenção</h3>
        <p>"Hoje quero aprender sobre..."</p>
        
        <h3>Tarde: Check-in de Progresso</h3>
        <p>"O que tentei de novo hoje?"</p>
        
        <h3>Noite: Reflexão de Aprendizado</h3>
        <p>"O que aprendi e como vou aplicar?"</p>
        
        <h2>Resultados da Mentalidade de Crescimento</h2>
        <p>Profissionais com growth mindset:</p>
        <ul>
          <li>São 34% mais propensos a sentir comprometimento no trabalho</li>
          <li>Têm 65% maior probabilidade de concordar que sua empresa apoia tomada de riscos</li>
          <li>Relatam níveis mais altos de confiança organizacional</li>
        </ul>
        
        <blockquote>
          <p>"Quando mudamos nossa crença sobre nossas habilidades, mudamos nossa realidade." - Carol Dweck</p>
        </blockquote>
      </div>
    `,
    excerpt: "Aprenda como desenvolver uma mentalidade de crescimento que transforma obstáculos em oportunidades de desenvolvimento profissional.",
    featuredImage: "/api/placeholder/800/400",
    category: "Mentalidade",
    author: "Especialista em Desenvolvimento Humano",
    isFeatured: true,
    status: "published",
    publishedAt: "2024-01-08T10:00:00Z",
    readTime: "7 min",
    createdAt: "2024-01-03T10:00:00Z",
    updatedAt: "2024-01-08T10:00:00Z"
  },
  {
    _id: "4",
    title: "Produtividade Baseada em Energia: O Método Científico",
    slug: "produtividade-baseada-energia-metodo-cientifico",
    content: `
      <div class="prose prose-lg max-w-none">
        <p>Gerenciar energia é mais importante que gerenciar tempo. Pesquisas neurocientíficas mostram que nosso cérebro tem ritmos naturais de alta e baixa performance ao longo do dia.</p>
        
        <h2>A Ciência da Energia Mental</h2>
        <p>Daniel Pink, em "When", revelou que 80% das pessoas têm seu pico de performance pela manhã. Tony Schwartz, do Energy Project, demonstrou que trabalhar em ciclos de 90 minutos maximiza a produtividade.</p>
        
        <h2>Os 4 Tipos de Energia</h2>
        
        <h3>1. Energia Física</h3>
        <ul>
          <li><strong>Sono:</strong> 7-9 horas de qualidade</li>
          <li><strong>Exercício:</strong> 30 min de atividade cardiovascular</li>
          <li><strong>Nutrição:</strong> Refeições balanceadas a cada 3-4 horas</li>
          <li><strong>Hidratação:</strong> 2-3 litros de água/dia</li>
        </ul>
        
        <h3>2. Energia Emocional</h3>
        <ul>
          <li><strong>Gratidão:</strong> 3 coisas positivas diárias</li>
          <li><strong>Conexões:</strong> Relacionamentos significativos</li>
          <li><strong>Propósito:</strong> Trabalho com significado</li>
          <li><strong>Humor:</strong> Momentos de leveza</li>
        </ul>
        
        <h3>3. Energia Mental</h3>
        <ul>
          <li><strong>Foco profundo:</strong> Blocos sem interrupções</li>
          <li><strong>Meditação:</strong> 10-20 min diários</li>
          <li><strong>Aprendizado:</strong> Novas habilidades</li>
          <li><strong>Criatividade:</strong> Tempo para exploração</li>
        </ul>
        
        <h3>4. Energia Espiritual</h3>
        <ul>
          <li><strong>Valores:</strong> Alinhamento com princípios</li>
          <li><strong>Missão:</strong> Contribuição para algo maior</li>
          <li><strong>Legado:</strong> Impacto positivo</li>
          <li><strong>Crescimento:</strong> Desenvolvimento contínuo</li>
        </ul>
        
        <h2>O Protocolo PEAK</h2>
        
        <h3>P - Plan (Planejar)</h3>
        <p>Mapeie seus ritmos energéticos:</p>
        <ul>
          <li>Track energia por 2 semanas</li>
          <li>Identifique padrões</li>
          <li>Agende tarefas por nível de energia</li>
        </ul>
        
        <h3>E - Execute (Executar)</h3>
        <p>Trabalhe em ciclos de energia:</p>
        <ul>
          <li>90 min de trabalho focado</li>
          <li>20 min de recuperação</li>
          <li>3-4 ciclos por dia máximo</li>
        </ul>
        
        <h3>A - Assess (Avaliar)</h3>
        <p>Monitore e ajuste:</p>
        <ul>
          <li>Como está sua energia?</li>
          <li>O que drenou/energizou você?</li>
          <li>Que ajustes são necessários?</li>
        </ul>
        
        <h3>K - Keep (Manter)</h3>
        <p>Rituais de renovação:</p>
        <ul>
          <li>Micro-breaks a cada hora</li>
          <li>Exercícios de respiração</li>
          <li>Caminhadas na natureza</li>
        </ul>
        
        <h2>Matriz de Energia vs. Importância</h2>
        
        <h3>Alta Energia + Alta Importância:</h3>
        <p>Trabalho estratégico, criativo, decisões importantes</p>
        
        <h3>Alta Energia + Baixa Importância:</h3>
        <p>Aprendizado, networking, projetos pessoais</p>
        
        <h3>Baixa Energia + Alta Importância:</h3>
        <p>Reuniões, e-mails importantes (delegue se possível)</p>
        
        <h3>Baixa Energia + Baixa Importância:</h3>
        <p>Tarefas administrativas, organização</p>
        
        <h2>Ferramentas Práticas</h2>
        
        <h3>Energy Tracker:</h3>
        <p>Avalie sua energia de 1-10 a cada 2 horas por 2 semanas:</p>
        <ul>
          <li>8h: 8/10</li>
          <li>10h: 9/10 (PICO)</li>
          <li>12h: 7/10</li>
          <li>14h: 5/10</li>
          <li>16h: 6/10</li>
          <li>18h: 4/10</li>
        </ul>
        
        <h3>Rituais de Energia:</h3>
        <ul>
          <li><strong>Manhã:</strong> Exercício + meditação + nutrição</li>
          <li><strong>Meio-dia:</strong> Caminhada + almoço leve</li>
          <li><strong>Tarde:</strong> Power nap de 20 min</li>
          <li><strong>Noite:</strong> Leitura + gratidão + preparo para o sono</li>
        </ul>
        
        <h2>Resultados Esperados</h2>
        <p>Ao implementar este sistema:</p>
        <ul>
          <li>25-40% aumento na produtividade</li>
          <li>Redução significativa no burnout</li>
          <li>Melhoria na qualidade das decisões</li>
          <li>Maior satisfação no trabalho</li>
        </ul>
        
        <blockquote>
          <p>"Gerenciar sua energia, não seu tempo, é a chave para alta performance e renovação pessoal." - Tony Schwartz</p>
        </blockquote>
      </div>
    `,
    excerpt: "Descubra como gerenciar seus níveis de energia para maximizar produtividade e bem-estar. Framework baseado em neurociência.",
    featuredImage: "/api/placeholder/800/400",
    category: "Produtividade",
    author: "Especialista em Desenvolvimento Humano",
    isFeatured: false,
    status: "published",
    publishedAt: "2024-01-05T10:00:00Z",
    readTime: "9 min",
    createdAt: "2024-01-01T10:00:00Z",
    updatedAt: "2024-01-05T10:00:00Z"
  },
  {
    _id: "5",
    title: "Networking Estratégico: Como Construir Relacionamentos que Aceleram sua Carreira",
    slug: "networking-estrategico-relacionamentos-aceleram-carreira",
    content: `
      <div class="prose prose-lg max-w-none">
        <p>Networking não é sobre coletar cartões de visita. É sobre construir relacionamentos genuínos que criam valor mútuo. Pesquisas mostram que 85% das vagas são preenchidas através de networking.</p>
        
        <h2>A Ciência do Networking</h2>
        <p>Mark Granovetter, sociólogo de Stanford, descobriu que "weak ties" (conexões fracas) são mais valiosas para oportunidades de carreira que "strong ties" (conexões fortes). Reid Hoffman, fundador do LinkedIn, ensina que você precisa ser "útil antes de precisar".</p>
        
        <h2>Os 5 Pilares do Networking Estratégico</h2>
        
        <h3>1. Mindset de Valor</h3>
        <p>Sempre pergunte: "Como posso ajudar?" antes de "Como pode me ajudar?"</p>
        <ul>
          <li>Compartilhe conhecimento</li>
          <li>Faça introduções</li>
          <li>Ofereça sua expertise</li>
          <li>Seja genuinamente interessado</li>
        </ul>
        
        <h3>2. Mapeamento Estratégico</h3>
        <p>Identifique stakeholders importantes:</p>
        <ul>
          <li><strong>Decisores:</strong> Quem tem poder de decisão</li>
          <li><strong>Influenciadores:</strong> Quem influencia decisores</li>
          <li><strong>Conectores:</strong> Quem conhece muita gente</li>
          <li><strong>Especialistas:</strong> Quem tem conhecimento específico</li>
        </ul>
        
        <h3>3. Presença Digital</h3>
        <p>Construa autoridade online:</p>
        <ul>
          <li><strong>LinkedIn otimizado:</strong> Perfil completo e ativo</li>
          <li><strong>Conteúdo de valor:</strong> Posts, artigos, insights</li>
          <li><strong>Engajamento genuíno:</strong> Comentários relevantes</li>
          <li><strong>Thought leadership:</strong> Posicionamento como especialista</li>
        </ul>
        
        <h3>4. Relacionamentos Sistemáticos</h3>
        <p>Use o método CRM pessoal:</p>
        <ul>
          <li>Database de contatos</li>
          <li>Histórico de interações</li>
          <li>Lembretes de follow-up</li>
          <li>Notas sobre interesses/necessidades</li>
        </ul>
        
        <h3>5. Networking Composto</h3>
        <p>Multiplique conexões:</p>
        <ul>
          <li>Introduza pessoas do seu network</li>
          <li>Organize eventos/encontros</li>
          <li>Participe de comunidades</li>
          <li>Mentore e seja mentorado</li>
        </ul>
        
        <h2>O Framework CONNECT</h2>
        
        <h3>C - Curiosity (Curiosidade)</h3>
        <p>Seja genuinamente interessado:</p>
        <ul>
          <li>Faça perguntas abertas</li>
          <li>Escute ativamente</li>
          <li>Lembre-se de detalhes</li>
        </ul>
        
        <h3>O - Offer (Oferecer)</h3>
        <p>Sempre ofereça valor primeiro:</p>
        <ul>
          <li>Compartilhe recursos úteis</li>
          <li>Faça introduções relevantes</li>
          <li>Ofereça sua expertise</li>
        </ul>
        
        <h3>N - Nurture (Nutrir)</h3>
        <p>Mantenha relacionamentos vivos:</p>
        <ul>
          <li>Follow-up regular</li>
          <li>Atualizações relevantes</li>
          <li>Celebre sucessos dos outros</li>
        </ul>
        
        <h3>N - Navigate (Navegar)</h3>
        <p>Use seu network estrategicamente:</p>
        <ul>
          <li>Peça conselhos específicos</li>
          <li>Solicite introduções</li>
          <li>Busque oportunidades</li>
        </ul>
        
        <h3>E - Expand (Expandir)</h3>
        <p>Cresça continuamente:</p>
        <ul>
          <li>Participe de eventos</li>
          <li>Entre em comunidades</li>
          <li>Aceite convites</li>
        </ul>
        
        <h3>C - Contribute (Contribuir)</h3>
        <p>Dê de volta ao network:</p>
        <ul>
          <li>Mentore outros</li>
          <li>Compartilhe oportunidades</li>
          <li>Organize eventos</li>
        </ul>
        
        <h3>T - Track (Rastrear)</h3>
        <p>Meça e otimize:</p>
        <ul>
          <li>Qualidade das conexões</li>
          <li>Valor gerado/recebido</li>
          <li>Oportunidades criadas</li>
        </ul>
        
        <h2>Scripts de Networking</h2>
        
        <h3>Primeira Abordagem:</h3>
        <p>"Olá [Nome], vi seu artigo sobre [tópico] e fiquei impressionado com [insight específico]. Como alguém que trabalha em [área], gostaria de trocar ideias sobre [tópico comum]."</p>
        
        <h3>Follow-up:</h3>
        <p>"Oi [Nome], foi um prazer conversar sobre [tópico] ontem. Como prometi, aqui está o [recurso/contato] que mencionei. Espero que seja útil!"</p>
        
        <h3>Pedido de Introdução:</h3>
        <p>"Olá [Nome], espero que esteja bem! Estou explorando oportunidades em [área] e lembrei que você conhece [pessoa]. Seria possível uma breve introdução? Posso enviar um contexto sobre mim."</p>
        
        <h2>Ferramentas Práticas</h2>
        
        <h3>CRM Pessoal (Notion/Airtable):</h3>
        <ul>
          <li>Nome e cargo</li>
          <li>Empresa e indústria</li>
          <li>Como se conheceram</li>
          <li>Interesses/necessidades</li>
          <li>Último contato</li>
          <li>Próximo follow-up</li>
        </ul>
        
        <h3>Calendário de Networking:</h3>
        <ul>
          <li>1 evento presencial/mês</li>
          <li>5 novos contatos/semana</li>
          <li>10 follow-ups/semana</li>
          <li>1 introdução/semana</li>
        </ul>
        
        <h2>Resultados do Networking Estratégico</h2>
        <p>Profissionais que fazem networking estratégico:</p>
        <ul>
          <li>Ganham 20% mais em média</li>
          <li>São promovidos 5x mais rápido</li>
          <li>Têm acesso a oportunidades exclusivas</li>
          <li>Desenvolvem carreira mais rapidamente</li>
        </ul>
        
        <blockquote>
          <p>"Seu network é seu net worth, mas apenas se você nutrir relacionamentos genuínos." - Reid Hoffman</p>
        </blockquote>
      </div>
    `,
    excerpt: "Aprenda estratégias científicas para construir uma rede de relacionamentos que acelera sua carreira e cria oportunidades.",
    featuredImage: "/api/placeholder/800/400",
    category: "Desenvolvimento Pessoal",
    author: "Especialista em Desenvolvimento Humano",
    isFeatured: false,
    status: "published",
    publishedAt: "2024-01-03T10:00:00Z",
    readTime: "8 min",
    createdAt: "2023-12-28T10:00:00Z",
    updatedAt: "2024-01-03T10:00:00Z"
  },
  {
    _id: "6",
    title: "Como Dar Feedback Eficaz: O Método SBI",
    slug: "como-dar-feedback-eficaz-metodo-sbi",
    content: `
      <div class="prose prose-lg max-w-none">
        <p>Dar feedback eficaz é uma das habilidades mais importantes para líderes. O método SBI (Situation-Behavior-Impact) é uma ferramenta criada pelo Center for Creative Leadership para tornar o feedback mais objetivo e construtivo.</p>
        
        <h2>Por que o Feedback Tradicional Falha</h2>
        <p>Frases como "Você precisa ser mais proativo" ou "Seu comportamento está inadequado" são:</p>
        <ul>
          <li><strong>Vagas:</strong> Não especificam o comportamento</li>
          <li><strong>Subjetivas:</strong> Baseadas em interpretações</li>
          <li><strong>Defensivas:</strong> Geram resistência</li>
          <li><strong>Inacionáveis:</strong> Não indicam o que mudar</li>
        </ul>
        
        <h2>O Método SBI Explicado</h2>
        
        <h3>S - Situation (Situação)</h3>
        <p>Descreva quando e onde o comportamento ocorreu:</p>
        <ul>
          <li>Seja específico sobre tempo e lugar</li>
          <li>Forneça contexto necessário</li>
          <li>Mantenha-se factual</li>
        </ul>
        
        <p><strong>Exemplo:</strong> "Na reunião de ontem com o cliente ABC, às 14h..."</p>
        
        <h3>B - Behavior (Comportamento)</h3>
        <p>Descreva o comportamento observável:</p>
        <ul>
          <li>Use verbos de ação</li>
          <li>Evite interpretações</li>
          <li>Seja específico e mensurável</li>
          <li>Foque no que viu/ouviu</li>
        </ul>
        
        <p><strong>Exemplo:</strong> "...você interrompeu o cliente 3 vezes e olhou para o celular durante a apresentação..."</p>
        
        <h3>I - Impact (Impacto)</h3>
        <p>Explique o impacto do comportamento:</p>
        <ul>
          <li>Como você se sentiu</li>
          <li>Impacto nos resultados</li>
          <li>Consequências para a equipe</li>
          <li>Efeito nos objetivos</li>
        </ul>
        
        <p><strong>Exemplo:</strong> "...isso passou a impressão de desinteresse, e o cliente pareceu desconfortável, o que pode prejudicar nossa proposta."</p>
        
        <h2>SBI em Ação: Exemplos Práticos</h2>
        
        <h3>Feedback Corretivo:</h3>
        <p><strong>Situação:</strong> "Na apresentação para a diretoria na segunda-feira..."</p>
        <p><strong>Comportamento:</strong> "...você não trouxe dados de suporte para suas recomendações e respondeu 'não sei' para 3 perguntas..."</p>
        <p><strong>Impacto:</strong> "...isso gerou dúvidas sobre nossa preparação e pode atrasar a aprovação do projeto."</p>
        
        <h3>Feedback de Reforço:</h3>
        <p><strong>Situação:</strong> "Durante a crise do sistema na sexta-feira..."</p>
        <p><strong>Comportamento:</strong> "...você ficou 2 horas extras, coordenou a comunicação com clientes e trouxe soluções alternativas..."</p>
        <p><strong>Impacto:</strong> "...isso evitou perdas maiores e demonstrou liderança. A equipe se sentiu mais confiante e os clientes elogiaram nossa resposta."</p>
        
        <h2>O Framework COIN para Conversas Difíceis</h2>
        
        <h3>C - Context (Contexto)</h3>
        <p>Estabeleça o cenário:</p>
        <ul>
          <li>"Gostaria de conversar sobre..."</li>
          <li>"Observei algo que quero discutir..."</li>
          <li>"Tenho um feedback importante..."</li>
        </ul>
        
        <h3>O - Observation (Observação)</h3>
        <p>Use o método SBI aqui</p>
        
        <h3>I - Intent (Intenção)</h3>
        <p>Esclareça sua intenção:</p>
        <ul>
          <li>"Meu objetivo é ajudar você a..."</li>
          <li>"Quero que você tenha sucesso..."</li>
          <li>"Isso é importante porque..."</li>
        </ul>
        
        <h3>N - Next Steps (Próximos Passos)</h3>
        <p>Defina ações concretas:</p>
        <ul>
          <li>O que deve mudar</li>
          <li>Como implementar</li>
          <li>Quando revisar</li>
          <li>Suporte necessário</li>
        </ul>
        
        <h2>Dicas para Feedback Eficaz</h2>
        
        <h3>Timing:</h3>
        <ul>
          <li>Dê feedback próximo ao evento</li>
          <li>Escolha momento apropriado</li>
          <li>Garanta privacidade</li>
          <li>Evite momentos de estresse</li>
        </ul>
        
        <h3>Tom:</h3>
        <ul>
          <li>Use tom neutro e profissional</li>
          <li>Mantenha curiosidade genuína</li>
          <li>Evite tom acusatório</li>
          <li>Demonstre cuidado</li>
        </ul>
        
        <h3>Escuta:</h3>
        <ul>
          <li>Permita que a pessoa responda</li>
          <li>Ouça sem interromper</li>
          <li>Faça perguntas abertas</li>
          <li>Valide sentimentos</li>
        </ul>
        
        <h2>Erros Comuns a Evitar</h2>
        
        <h3>Feedback Sandwich:</h3>
        <p>❌ "Você fez bem X, mas Y estava ruim, porém continue com Z"</p>
        <p>✅ Seja direto e claro sobre cada ponto</p>
        
        <h3>Generalização:</h3>
        <p>❌ "Você sempre chega atrasado"</p>
        <p>✅ "Esta semana você chegou atrasado 3 vezes"</p>
        
        <h3>Julgamento:</h3>
        <p>❌ "Você é desorganizado"</p>
        <p>✅ "Sua mesa tem documentos espalhados e você perdeu 2 prazos"</p>
        
        <h2>Templates SBI</h2>
        
        <h3>Template Básico:</h3>
        <p>"Quando [situação], você [comportamento], e isso [impacto]. Como podemos [próximos passos]?"</p>
        
        <h3>Template de Reforço:</h3>
        <p>"Durante [situação], você [comportamento positivo], o que resultou em [impacto positivo]. Continue fazendo isso porque [razão]."</p>
        
        <h3>Template Corretivo:</h3>
        <p>"Na [situação], observei que você [comportamento], o que causou [impacto]. Gostaria de entender sua perspectiva e discutir como podemos [melhoria]."</p>
        
        <h2>Medindo Eficácia do Feedback</h2>
        <p>Feedback eficaz resulta em:</p>
        <ul>
          <li><strong>Clareza:</strong> A pessoa entende exatamente o que fazer</li>
          <li><strong>Comprometimento:</strong> Há acordo sobre próximos passos</li>
          <li><strong>Mudança:</strong> Comportamento melhora progressivamente</li>
          <li><strong>Relacionamento:</strong> Confiança é mantida ou fortalecida</li>
        </ul>
        
        <blockquote>
          <p>"Feedback é um presente. Pode ser desconfortável dar e receber, mas é uma das formas mais valiosas de desenvolvimento." - Sheryl Sandberg</p>
        </blockquote>
      </div>
    `,
    excerpt: "Aprenda o método SBI para dar feedback eficaz que desenvolve pessoas e melhora performance. Baseado em pesquisas do Center for Creative Leadership.",
    featuredImage: "/api/placeholder/800/400",
    category: "Liderança",
    author: "Especialista em Desenvolvimento Humano",
    isFeatured: false,
    status: "published",
    publishedAt: "2024-01-01T10:00:00Z",
    readTime: "7 min",
    createdAt: "2023-12-25T10:00:00Z",
    updatedAt: "2024-01-01T10:00:00Z"
  }
];