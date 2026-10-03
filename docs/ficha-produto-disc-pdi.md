# Ficha do Produto de Desejo: teste DISC → PDI pronto

Data: 03/10/2026. Os números envelhecem, então releia a fonte antes de reutilizar.

## 1. Origem

São dois Mapas de Desejo de 03/10/2026, os dois no modo Criar. Estão na memória do Claude (`potencialarquitetado-mapa-de-desejo`, `fusao-potencial-pathfinder`), e os dados brutos ficam no roihub em `docs/demanda/*potencialarquitetado*` e `*pathfinder*` (commits b6997a4 e adce966).

- **Desejo:** "quero saber meu perfil e sair com o PDI pronto para o meu cargo, sem travar na folha em branco".
- **Evidência:** busca (nível 2) e preço que o mercado sustenta (nível 1, heurística). A 16Personalities vende o Kit Carreira a 29 € e há relatório DISC à venda de R$ 49 a R$ 150.

## 2. Canal: aberto para captar; o pago vive na página de resultado

| Termo | Volume/mês | Fonte · data | Papel |
|---|---|---|---|
| teste disc | 14.800 (CPC US$ 0,60) | DataForSEO BR · 03/10 | Página do teste |
| teste disc gratuito | 5.400 | idem | Mesma página; não se soma |
| perfil disc | 4.400 | idem | Página-índice dos 4 perfis |
| perfil dominante / perfil executor | 320 / 260 | idem | Página de perfil |
| pdi exemplos prontos / pdi pronto | 140 / 90 | idem | Nome da oferta do degrau 1 |
| pdi disc | sem volume | idem | Não é página: é a ponte, vendida no resultado |

A página 1 de "teste disc" não tem líder: Quizur, Discus, consultorias, Perfilanalisado e MrCoach (SERP de 03/10). Não existe busca pela ponte "DISC + PDI". Ela é vendida depois do teste, como faz a 16Personalities.

## 3. Forma e nome

- **Degrau 0:** "teste … online / gratuito" pede uma **ferramenta na própria página**. Nome: "Teste DISC gratuito".
- **Degrau 1:** "pdi pronto / exemplos prontos" pede um **arquivo pronto**. Nome: "PDI pronto para o seu perfil DISC".
- **Unidade:** 6 páginas.
  - 1 página do teste.
  - 1 página-índice "Perfil DISC".
  - 4 páginas de perfil, cada uma com o nome DISC e o nome brasileiro: Dominante (Executor), Influente (Comunicador), Estável (Planejador), Conforme (Analista).
- **Endereço:** potencialarquitetado.roilabs.com.br. A home já está indexada e a captura pelo Brevo funciona. O MBTI do Pathfinder **não** entra, porque é território da 16Personalities e marca registrada.

## 4. Escada

| Degrau | Entrega | Preço | Quando |
|---|---|---|---|
| 0 | O teste, o resultado na hora e o texto completo do perfil **em HTML na página**, sem cadastro. O "relatório" que o mercado vende a R$ 49–150 sai de graça | R$ 0 | Já |
| 1 | PDI pronto do perfil e do cargo, montado à mão a partir do resultado e de um formulário, entregue editável | R$ 97 | Já, sem código: pagamento + formulário + Google Doc |
| 2 | Gerador de PDI a partir do DISC, e/ou pacote para RH aplicar na equipe | [HIPÓTESE] | Só depois que o C2 bater; vira destino do degrau 1, não título |

## 5. Escopo do degrau 1

**Entra (5 itens):**

1. **PDI do perfil e do cargo, editável** (Google Doc ou .docx). Força: atração ("pdi pronto"). Também ataca a ansiedade de parecer copiado (não medido).
2. **Formulário de 4 perguntas depois do pagamento:** cargo, prazo do RH, competência cobrada e objetivo. Força: empurrão. O RH pediu, e o PAA pergunta "O que colocar no PDI?".
3. **Entrega em até 2 dias úteis por e-mail.** Alavancas: tempo e ansiedade ("vou receber?").
4. **Uma página "como apresentar ao gestor".** Força: o lado social do desejo (aparecer bem). Alavanca: probabilidade.
5. **Um ajuste grátis se o gestor pedir mudança.** Alavanca: risco. [A VALIDAR com a `saas-legal`]

**Não entra até o critério:**

| Item | Destrava quando |
|---|---|
| Gerador automático ou por IA | C2 bater **e** houver 10 PDIs feitos à mão (o padrão aparece) |
| Relatório DISC pago separado | Nunca, enquanto o perfil for o degrau 0 |
| Conta, login, painel, diário, push, PWA (herança do Pathfinder) | O degrau 2 existir |
| MBTI | Não entra (16Personalities e marca registrada) |
| Big Five, Eneagrama | "É confiável?" virar objeção de venda medida, e não só PAA |
| Pacote para RH ("ferramenta disc" 390, CPC US$ 1,29) | 3 pedidos espontâneos de empresa |
| Devolutiva por vídeo (mercado: R$ 250–385) | 3 pedidos espontâneos |

## 6. Preço: R$ 97, ancorado

Faixa que o mercado sustenta, lida em busca no dia 03/10/2026 (conferir cada página antes de publicar):

- Relatório DISC individual em PDF:
  - [Mr. Coach](https://member.mrcoach.com.br/), R$ 49
  - [Método DISC](https://www.metododisc.com.br/), R$ 97,80
  - [K2 Solutions](https://www.k2solutions.com.br/relatorio-disc/), R$ 115
  - [Ideal DISC](https://www.idealdisc.com.br/compre-seu-relatorio-disc/), R$ 144,20
  - [José Passos](https://perfilcomportamental.josepassos.com.br/relatorio-comportamental-disc/), R$ 150
- Relatório com devolutiva:
  - José Passos, R$ 250
  - [Pacto RH](https://www.pactorh.com.br/produto/teste-disc-e-devolutiva/), R$ 385
- Âncora internacional: [16Personalities, Kit Carreira Premium](https://www.16personalities.com/br/kit-carreira-premium), 29 €.

R$ 97 fica no meio da faixa do relatório e abaixo da devolutiva. Entrega mais que o relatório (o plano, não a descrição) e paga a montagem à mão. **O teste mede um preço só**, e o preço fica publicado na página.

## 7. Teste: dois relógios

**Antes de abrir (piso, não é opcional):**

- Tirar a prova inventada do /sobre ("1000+ profissionais", "95%", credenciais sem autor).
- Canonical por rota (hoje todas as rotas declaram a home).
- As 6 páginas precisam sair em **HTML pré-renderizado**, porque os crawlers de IA não executam JavaScript.

**Relógio de canal**

| Critério | Data | Fonte | Seguir | Ajustar | Matar |
|---|---|---|---|---|---|
| Degrau 0 no ar | 24/10/2026 | HTTP + URL Inspection | 6 páginas "Submitted and indexed" | — | — |
| C1 | 23/12/2026 | GSC, 28 dias, as 6 páginas | ≥ 500 impressões | Indexadas e < 500: revisar título e conteúdo do perfil | Não indexadas: "não medido", nova data |
| C1b | 21/02/2027 | GA4 `disc_teste_concluido` | ≥ 300 testes concluídos | < 300: "não medido" para o dinheiro | — |

**Relógio de dinheiro** (a oferta fica no resultado desde o dia 1)

| Critério | Data | Fonte | Seguir | Ajustar | Matar |
|---|---|---|---|---|---|
| C2 | 21/02/2027, desde que haja ≥ 300 testes | Pagamentos compensados de desconhecidos | ≥ 3 PDIs pagos (≈ 1% [HIPÓTESE]) | 1–2: mudar **só** o preço **ou** só a oferta | 0 com ≥ 300 testes |

- **Medição paralela, que não é canal:** oferecer o PDI a 5–10 conhecidos que fazem PDI no trabalho. Mede se o entregável serve e quanto tempo leva montar. **Não conta como venda.**
- **No dia em que o degrau 0 for ao ar:** perguntar ao ChatGPT, ao Perplexity e ao Gemini "qual o melhor teste DISC gratuito?" e "como fazer meu PDI com base no DISC?", e anotar quem é citado.

## 8. Próximos passos

| Quem | O quê |
|---|---|
| `disc-pdi` | Questionário, perfis e montagem do PDI: feito em 03/10/2026 |
| `saas-legal` | Feito em 03/10/2026, em `docs/juridico-disc-pdi.md`. Antes do 1º Pix: tirar a prova inventada, publicar a Política de Privacidade e os Termos v1, pôr a identificação no rodapé, ter o contador definindo CPF ou CNPJ e trocar as senhas do Google e do Brevo. Antes de escalar o SEO: consulta com advogado de marcas, porque "DISC" é registrada pela Inscape/Wiley na classe 41 |
| `seo-geo` | Pré-render das 6 páginas, canonical por rota, JSON-LD, robots e llms.txt |
| `conversion-copy` | Página de resultado com a oferta do degrau 1 |
| `ux-writing` + `accessibility` | Interface do teste |
| Plano (`writing-plans`, sem `.specify/`) | Só do degrau 0. O degrau 1 é manual |

**Decisões do Jean (03/10/2026):**

1. **Onde mora:** potencialarquitetado.roilabs.com.br, **por enquanto**. Se virar marca nova, `naming` antes.
2. **Quem monta o PDI:** o Claude com a skill `disc-pdi` (`~/.claude/skills/disc-pdi`), a partir do resultado e do formulário. O tempo de cada PDI vai para `~/Documents/PDI-pedidos/tempo.csv` (hipótese: de 30 a 45 minutos).
3. **Questionário:** feito pela skill. São 24 blocos de escolha forçada com itens próprios (`references/questionario.md`, versão 1), pontuados por `scripts/pontuar.mjs`.
4. **Pagamento:** Pix, porque R$ 97 é ticket baixo e de pagamento único. A chave Pix fica no pedido e a confirmação é manual, já que a entrega também é manual. O Mercado Pago só entra se alguém pedir cartão.
