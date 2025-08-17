`# DIRETRIZES MESTRAS PARA DESENVOLVIMENTO DO BACKEND - PROJETO "ARQUITETURA DO POTENCIAL"

MÓDULO 1: VISÃO GERAL E ARQUITETURA (MACRO)
1.1. Objetivo Principal:
Sua tarefa é desenvolver o backend completo para o blog "Arquitetura do Potencial". Este backend deve ser seguro, escalável e eficiente, servindo como a API (Interface de Programação de Aplicações) para o frontend já existente. As funcionalidades centrais incluem gerenciamento de artigos, inscrição em newsletter e formulário de contato.

1.2. Stack de Tecnologia Sugerida:

Ambiente de Execução: Node.js

Framework: Express.js (para a criação da API RESTful)

Banco de Dados: MongoDB com Mongoose (ODM - Object Data Modeling) pela sua flexibilidade com conteúdo de texto, ou PostgreSQL com Sequelize (ORM - Object-Relational Mapping) se preferir uma estrutura relacional mais rígida. Vamos prosseguir com MongoDB e Mongoose como padrão.

Autenticação: JSON Web Tokens (JWT) para proteger as rotas de administração.

Segurança: bcrypt.js para hashing de senhas e dotenv para gerenciamento de variáveis de ambiente.

Validação: express-validator ou joi para validar os dados de entrada nas rotas da API.

1.3. Estrutura de Pastas do Projeto:
Organize o código na seguinte estrutura modular para garantir manutenibilidade:
/

|-- config/         # Conexão com banco de dados, configurações globais
|-- controllers/    # Lógica de negócio (o que fazer com as requisições)
|-- middleware/     # Funções intermediárias (ex: verificação de token JWT)
|-- models/         # Definição dos schemas do banco de dados (Mongoose)
|-- routes/         # Definição dos endpoints da API
|--.env            # Arquivo para variáveis de ambiente (NÃO versionar no Git)
|-- server.js       # Ponto de entrada da aplicação
|-- package.json


## MÓDULO 2: MODELAGEM DE DADOS E API (MESO)

**2.1. Definição dos Modelos (Schemas do Mongoose):**
Crie os seguintes modelos em `models/`:

*   **`Article.js` (Artigo do Blog):**
    *   `title`: String, Obrigatório, Único
    *   `slug`: String, Obrigatório, Único (gerado a partir do título, ex: "meu-primeiro-artigo")
    *   `content`: String, Obrigatório (corpo do artigo em HTML ou Markdown)
    *   `excerpt`: String, Obrigatório (resumo de 2 linhas)
    *   `featuredImage`: String (URL da imagem de destaque)
    *   `category`: String, Obrigatório
    *   `author`: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
    *   `isFeatured`: Boolean, default: false (para destacar na home)
    *   `status`: String, enum: ['published', 'draft'], default: 'draft'
    *   `publishedAt`: Date (data de publicação)
    *   *Timestamps automáticos (createdAt, updatedAt) devem ser ativados.*

*   **`User.js` (Autor/Administrador):**
    *   `name`: String, Obrigatório
    *   `email`: String, Obrigatório, Único
    *   `password`: String, Obrigatório (será armazenado como hash)

*   **`Subscriber.js` (Inscrito na Newsletter):**
    *   `email`: String, Obrigatório, Único
    *   *Timestamps automáticos (createdAt) devem ser ativados.*

*   **`ContactMessage.js` (Mensagem de Contato):**
    *   `name`: String, Obrigatório
    *   `email`: String, Obrigatório
    *   `message`: String, Obrigatório
    *   `isRead`: Boolean, default: false
    *   *Timestamps automáticos (createdAt) devem ser ativados.*

**2.2. Definição dos Endpoints da API RESTful:**
Crie os seguintes arquivos de rota em `routes/`:

*   **`publicRoutes.js` (Rotas Públicas):**
    *   `GET /api/articles`: Retorna todos os artigos com `status: 'published'`, ordenados por `publishedAt` decrescente. Implementar paginação (ex: `?page=1&limit=10`).
    *   `GET /api/articles/featured`: Retorna os 3 artigos mais recentes com `isFeatured: true` e `status: 'published'`.
    *   `GET /api/articles/:slug`: Retorna um único artigo publicado pelo seu `slug`.
    *   `POST /api/newsletter/subscribe`: Recebe um email, valida e salva um novo `Subscriber`.
    *   `POST /api/contact`: Recebe nome, email e mensagem, valida e salva uma nova `ContactMessage`.

*   **`adminRoutes.js` (Rotas Protegidas por Autenticação):**
    *   `POST /api/auth/login`: Autenticação do `User`, retorna um token JWT se as credenciais estiverem corretas.
    *   `POST /api/articles`: Cria um novo artigo (requer token JWT).
    *   `PUT /api/articles/:id`: Atualiza um artigo existente pelo seu ID (requer token JWT).
    *   `DELETE /api/articles/:id`: Deleta um artigo pelo seu ID (requer token JWT).
    *   `GET /api/articles/all`: Retorna TODOS os artigos (publicados e rascunhos) para o painel de administração (requer token JWT).

## MÓDULO 3: DETALHES DE IMPLEMENTAÇÃO (MICRO)

**3.1. Autenticação e Segurança:**
*   **Hashing de Senhas:** No modelo `User.js`, use um "pre-save hook" do Mongoose para aplicar hash com `bcrypt.js` na senha antes de salvar um novo usuário.
*   **Login:** Na rota `POST /api/auth/login`, compare a senha enviada com o hash do banco de dados usando `bcrypt.compare()`. Se for válida, gere um token JWT contendo o ID do usuário.
*   **Middleware de Proteção (`authMiddleware.js`):** Crie um middleware que verifique a presença e a validade do token JWT no cabeçalho `Authorization` (`Bearer <token>`). Se o token for válido, adicione os dados do usuário (ex: `req.user`) à requisição e chame `next()`. Caso contrário, retorne um erro 401 (Não Autorizado). Aplique este middleware a todas as rotas em `adminRoutes.js`.

**3.2. Lógica dos Controllers:**
*   **Validação de Entrada:** Em cada função do controller que recebe dados (`POST`, `PUT`), utilize `express-validator` para validar e sanitizar o `req.body`. Por exemplo, verifique se o email é válido, se os campos obrigatórios não estão vazios, etc. Retorne um erro 400 (Bad Request) com mensagens claras se a validação falhar.
*   **Geração de Slug:** Ao criar um novo artigo (`POST /api/articles`), gere o `slug` automaticamente a partir do `title`. Converta o título para minúsculas, substitua espaços por hífens e remova caracteres especiais. Garanta que o slug seja único no banco de dados.
*   **Respostas da API:** Padronize as respostas. Para sucesso, use status `200` (OK) ou `201` (Created) e retorne os dados em JSON. Para erros, use os códigos de status HTTP apropriados (`400`, `401`, `404`, `500`) e retorne um objeto JSON com uma mensagem de erro clara (ex: `{ "error": "Artigo não encontrado" }`).

**3.3. Configuração e Boas Práticas:**
*   **Variáveis de Ambiente (`.env`):**
    *   Crie um arquivo `.env` na raiz do projeto.
    *   Armazene nele dados sensíveis:
        *   `MONGO_URI`: A string de conexão do seu banco de dados MongoDB.
        *   `JWT_SECRET`: Uma string longa e aleatória para assinar os tokens.
        *   `PORT`: A porta onde o servidor irá rodar (ex: 5000).
    *   Use o pacote `dotenv` para carregar essas variáveis em `process.env`.
*   **Tratamento de Erros:**
    *   Use blocos `try...catch` em suas funções assíncronas de controller para capturar erros.
    *   Crie um middleware de tratamento de erros global no `server.js` para capturar quaisquer erros não tratados e enviar uma resposta de erro 500 (Internal Server Error) padronizada.
*   **CORS (Cross-Origin Resource Sharing):**
    *   Instale e configure o pacote `cors` no `server.js` para permitir que seu frontend (que roda em um domínio/porta diferente em desenvolvimento) possa fazer requisições para esta API.

**Exemplo de Instrução para o Gemini:**
"Com base neste arquivo de diretrizes, comece criando a estrutura de pastas do projeto