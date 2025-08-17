# Configuração do Vercel

## Passo 1: Configurar Variáveis de Ambiente

No dashboard do Vercel, vá em Project Settings > Environment Variables e adicione:

```
VITE_API_URL=https://arquiteturaapi.roilabs.com.br/api
```

## Passo 2: Redeploy

Após adicionar a variável de ambiente, faça um redeploy do projeto para aplicar as mudanças.

## Arquivos Relevantes

- `.env.example`: Template com a variável necessária
- `.env.production`: Configuração para produção
- `.env.local`: Configuração para desenvolvimento local
- `vercel.json`: Configuração de roteamento SPA

## Verificação

1. Acesse https://arquiteturadopotencial.roilabs.com.br
2. Verifique se o blog carrega os artigos
3. Teste o login admin em /admin com:
   - Email: admin@example.com
   - Senha: password123