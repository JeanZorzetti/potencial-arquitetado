# Handoff — 2026-08-15

## O card estava errado

A agenda do roihub mandava **"decidir se o conteúdo vira produto pago"**, dizendo que a parte de
conteúdo "é estática e funciona sozinha". Não era.

| Checagem | Resultado |
|---|---|
| Home `/` | 200 |
| `VITE_API_URL` → `arquiteturaapi.roilabs.com.br` | **NXDOMAIN** |
| `Index.tsx` / `Blog.tsx` / `Article.tsx` | todos chamavam `services/api.ts` → esse host |
| `sitemap.xml` | **1 URL** (só a home) |
| GSC, 28 dias | **0 impressões, 0 cliques, 0 páginas** |

Os 6 artigos existiam em `src/data/articles.ts` e **nunca chegaram ao browser**. Só `/sobre` e
`/framework` eram de fato estáticos.

## Decisão

Não vira produto pago agora — com 0 impressões e 0 lista, não há a quem cobrar. O passo é
**consertar o grátis e medir**.

## Feito (commit `a74e1bd`)

- `src/services/api.ts` resolve dos artigos de `src/data/articles.ts`. Mesma assinatura
  `Promise<Article[]>` — as páginas não mudaram uma linha. Se o backend voltar, refaz o `fetch` só
  aqui.
- `public/sitemap.xml`: 11 URLs (home, 4 páginas, 6 artigos). Submetido ao Search Console pela API
  (`sc-domain:roilabs.com.br`, OK).
- `sitemap.test.mjs` + `npm test` (`node --test`, zero dependências): falha se um artigo novo ficar
  fora do sitemap, ou se o sitemap apontar para slug inexistente.

Verificado no ar: deploy `● Ready`, `sitemap.xml` com 11 `<loc>`, slug de artigo presente no bundle
de produção, `getArticles` não chama mais host nenhum.

## Aberto — precisa de decisão do Jean

**Nenhum formulário público captura nada:**

- `src/components/CTABox.tsx` — newsletter faz `POST` no host NXDOMAIN. Erra sempre.
- `src/pages/Contact.tsx` — mostra "Mensagem enviada com sucesso!" e **não envia a lugar nenhum**;
  não há `fetch`. O e-mail exibido, `contato@arquiteturadopotencial.com`, também é NXDOMAIN.

Sem destino de captura não se forma lista — e é a lista, junto do GSC, que decide em setembro se
vale cobrar. Falta escolher o destino (Formspree, Google Form, ou um inbox real). Não inventei um.

`/admin` continua sem host: depende do `backend/`, que não roda em lugar nenhum. Não é caminho
público, ficou fora do escopo.

## Reavaliar

Meados de setembro/2026, com ~30 dias de GSC sobre conteúdo que de fato renderiza.
