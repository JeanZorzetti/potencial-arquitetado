# Arquitetura do Potencial - Backend

## Setup Local

1. Instalar dependências:
```bash
npm install
```

2. Configurar variáveis de ambiente:
```bash
cp .env.example .env
# Editar .env com suas configurações
```

3. Executar o seeder:
```bash
npm run seed
```

4. Iniciar o servidor:
```bash
npm run dev
```

## Deploy

### Docker
```bash
docker build -t arquitetura-backend .
docker run -p 5000:5000 --env-file .env arquitetura-backend
```

### Variáveis de Ambiente para Produção
- `MONGO_URI`: String de conexão MongoDB
- `JWT_SECRET`: Chave secreta para JWT
- `PORT`: Porta do servidor (padrão: 5000)
- `NODE_ENV`: production

## Endpoints

### Públicos
- `GET /health` - Health check
- `GET /api/articles` - Listar artigos
- `GET /api/articles/:slug` - Artigo por slug
- `POST /api/newsletter/subscribe` - Inscrever newsletter
- `POST /api/contact` - Enviar mensagem

### Admin (require JWT)
- `POST /api/auth/login` - Login
- `POST /api/articles` - Criar artigo
- `PUT /api/articles/:id` - Atualizar artigo
- `DELETE /api/articles/:id` - Deletar artigo