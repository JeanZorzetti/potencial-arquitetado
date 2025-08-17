# Guia de Deploy - Arquitetura do Potencial

## 1. Deploy do Backend

### Opção A: Docker + Cloud Provider
1. Configure suas variáveis de ambiente de produção
2. Build da imagem Docker:
```bash
cd backend
docker build -t arquitetura-backend .
```

3. Deploy para seu provedor (DigitalOcean, AWS, etc.)

### Opção B: VPS Manual
1. Envie os arquivos para o servidor
2. Configure nginx como proxy reverso
3. Use PM2 para gerenciar o processo:
```bash
npm install -g pm2
pm2 start server.js --name "arquitetura-api"
pm2 startup
pm2 save
```

## 2. Deploy do Frontend no Vercel

### Via CLI
```bash
npm install -g vercel
vercel --prod
```

### Via Git Integration
1. Conecte o repositório no Vercel
2. Configure domínio personalizado: arquiteturadopotencial.roilabs.com.br
3. Variáveis de ambiente automáticas via vercel.json

## 3. Configuração DNS (Cloudflare)

### Backend (arquiteturaapi.roilabs.com.br)
- Tipo: A ou CNAME
- Nome: arquiteturaapi
- Valor: IP do servidor backend

### Frontend (arquiteturadopotencial.roilabs.com.br)  
- Tipo: CNAME
- Nome: arquiteturadopotencial
- Valor: cname.vercel-dns.com

## 4. Checklist Pós-Deploy

- [ ] Backend respondendo no domínio
- [ ] Health check funcionando
- [ ] Frontend carregando
- [ ] API calls funcionando
- [ ] CORS configurado corretamente
- [ ] SSL/HTTPS ativo em ambos domínios

## URLs Finais
- Frontend: https://arquiteturadopotencial.roilabs.com.br
- Backend: https://arquiteturaapi.roilabs.com.br
- Health Check: https://arquiteturaapi.roilabs.com.br/health