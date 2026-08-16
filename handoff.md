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

## Handoff — 2026-08-16

**Captura resolvida.** Destino: função serverless + Brevo. API key salva só como env var
`BREVO_API_KEY` na Vercel (production) — não está no repo.

- `api/newsletter.ts` — recebe `{email}`, adiciona à lista Brevo id `3`
  ("Potencial Arquitetado - Newsletter"), `updateEnabled: true`.
- `api/contact.ts` — recebe `{name, email, subject, message}`, envia e-mail transacional via Brevo
  pra `flow.controlx@gmail.com` (único sender verificado na conta), `replyTo` = quem preencheu.
- `CTABox.tsx` e `Contact.tsx` apontam pros dois endpoints (`/api/newsletter`, `/api/contact`),
  same-origin, sem `VITE_API_URL`.
- Testado em produção (`potencialarquitetado.roilabs.com.br`): contato caiu na lista Brevo, e-mail
  chegou (`delivered` + `opened` no log da Brevo). Contato de teste removido da lista depois.
- Card de contato removeu o e-mail morto `contato@arquiteturadopotencial.com` (NXDOMAIN), agora
  aponta pro formulário.

`/admin` continua fora do escopo (depende do `backend/` que não roda).

## Reavaliar

Meados de setembro/2026, com ~30 dias de GSC sobre conteúdo que de fato renderiza, **e agora com
lista Brevo real pra medir inscrições**.
