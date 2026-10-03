# Jurídico: teste DISC grátis → PDI pago (R$ 97, Pix)

Conferido em 03/10/2026 pela skill `saas-legal`. **Não é parecer.** Mostra a regra e o que muda; onde o risco é alto, aponta o advogado.

**Pergunta 0: quem é o cliente?** Pessoa física comprando para si, no site, por Pix. O regime é o **CDC** [JURISP finalismo, STJ], e todo o fluxo de compra segue o CDC.

## Resumo

| # | Ponto | Bloqueia a venda? | Advogado? |
|---|---|---|---|
| 0 | Prova inventada no /sobre | **Sim**, remover antes | Não |
| 1 | Conselho de Psicologia (CFP) | Não, com o vocabulário da skill | Só se chegar notificação do Conselho Regional (CRP) |
| 2 | Marca "DISC" registrada no Brasil | Não bloqueia o teste do degrau 1 | **Sim**, consulta curta antes de escalar o SEO |
| 3 | Arrependimento de 7 dias | Não; vale integralmente | Não |
| 4 | Ajuste grátis | Não; precisa estar escrito | Não |
| 5 | LGPD | **Sim**: falta a política de privacidade | Não |
| 6 | Tributo | Depende de quem vende (CPF ou CNPJ) | Não; **contador** |
| 7 | Identificação no site e termos | **Sim**, antes do 1º Pix | Não |

### Status em 03/10/2026 (commit 20fea2c)

- **0, feito:** saíram do site inteiro os números inventados, as credenciais, a "mentoria em grupo", o "conteúdo exclusivo", o FAQ de coaching e treinamento corporativo, e os botões mortos de LinkedIn, consultoria e "Baixar Guia". **Continua aberto:** o **corpo** dos 6 artigos tem estatísticas sem fonte (ex.: "Harvard Business Review… 58% mais chance"), o que pede revisão editorial à parte.
- **5, feito:** `/privacidade` v1 publicada. O GA4 só carrega depois de "Aceitar", e o rodapé reabre as preferências. A newsletter do rodapé passou a inscrever de verdade; antes mostrava sucesso sem enviar nada.
- **7, parcial:**
  - feito: `/termos/v1` publicada, e o rodapé mostra "Operado por ROI Labs" (de `src/lib/operador.ts`);
  - **falta:** CPF ou CNPJ e endereço em `OPERADOR`. O link "Termos de Venda" aparece sozinho quando o `documento` for preenchido;
  - **falta:** o checkbox de aceite, que entra no formulário do pedido junto com o degrau 1.
- **6:** espera a decisão de vender por CPF ou CNPJ ("depende", segundo o Jean).

## 0. Prova inventada

- **Regra:**
  - Publicidade enganosa é proibida [LEI CDC art. 37 §1º].
  - Fazer publicidade que se sabe enganosa é crime, com detenção de 3 meses a 1 ano e multa [LEI CDC art. 67].
- **O que muda:** tirar do `/sobre` e da chamada final:
  - os números "50+ estudos", "1000+ profissionais", "15+ anos" e "95% de satisfação";
  - as credenciais FGV/USP/ICF/BCG de um autor sem nome.

  A partir do momento em que o site vende, isso deixa de ser enfeite e vira oferta.
- **Risco se ignorar:** Procon, ação do consumidor e o crime do art. 67.
- **Advogado:** não, basta remover.

## 1. Conselho Federal de Psicologia

- **Regra:**
  - É função privativa do psicólogo usar métodos e técnicas psicológicas para diagnóstico psicológico, orientação e seleção profissional, orientação psicopedagógica e solução de problemas de ajustamento [LEI Lei 4.119/1962 art. 13 §1º] ([Planalto](https://www.planalto.gov.br/ccivil_03/leis/1950-1969/l4119.htm)).
  - Exercer atividade sem as condições legais é contravenção [LEI Decreto-Lei 3.688/1941 art. 47].
  - O DISC **não** está entre os testes psicológicos do SATEPSI. O CFP regula o uso de teste psicológico, não o de questionário de perfil comportamental ([SATEPSI, FAQ](https://satepsi.cfp.org.br/faq.cfm)).
  - O DISC é vendido amplamente no Brasil por quem não é psicólogo (Solides, Mr. Coach, Método DISC, Ideal DISC) [PRÁTICA].
- **O que muda:** o vocabulário já está na skill `disc-pdi`. Nunca usar "teste psicológico", "avaliação psicológica", "diagnóstico", "orientação profissional/vocacional", nem sugerir troca de carreira. Acrescentei duas regras:
  - ninguém do site se apresenta como psicólogo;
  - o futuro pacote para RH (degrau 2) **não** pode ser oferecido para **seleção** de candidatos.
- **Risco se ignorar:** notificação do CRP. Com esse enquadramento (desenvolvimento no cargo atual, não orientação nem seleção), o risco é baixo.
- **Advogado:** não para lançar; sim se chegar notificação.

## 2. Marca

**"DISC" sozinho é marca registrada no Brasil.** Busca no INPI em 03/10/2026:

| Processo | Marca | Titular | Classe | Especificação (resumo) |
|---|---|---|---|---|
| 827815310 | DISC | Inscape Publishing (Wiley) | 41 | Software online de uso temporário com questões, respostas e dados interpretativos para avaliação de comportamento |
| 817780440 | DISC | Inscape Publishing (Wiley) | 41 (antiga 41:10) | Aulas e seminários em desenvolvimento pessoal e treinamento de empregados |
| 909304890 | DISC | Success Tools | 35 | Consultoria em marketing e negócios |
| 830997148 | EVERYTHING DISC | Inscape Publishing (Wiley) | 41 | Software online de avaliação de comportamento |

- **Regra:**
  - A marca registrada dá uso exclusivo no ramo [LEI LPI art. 129].
  - A exceção para citar a marca vale só **sem conotação comercial** [LEI LPI art. 132 IV], e a página que vende não se encaixa nela.
  - O registro 827815310 descreve justamente um questionário online com interpretação.
- **Contrapeso:** o mercado brasileiro usa "teste DISC" comercialmente e em escala, inclusive no domínio (metododisc.com.br) e na página 1 do Google [PRÁTICA]. Não se acha sinal público de que o titular faça valer a marca contra o uso descritivo. Isso reduz o risco, mas não o elimina.
- **O que muda:**
  - "DISC" só como **descrição da teoria** ("teste de perfil comportamental baseado na teoria DISC, de William Marston, 1928"), nunca como marca do produto. A marca é a do site.
  - Nunca escrever "DiSC" nem "Everything DiSC", e nunca usar logo, cores ou textos deles.
  - Aviso no rodapé do teste e do PDI: "DISC é marca registrada de seus titulares. Este teste usa questionário próprio e não é afiliado à Wiley nem ao Everything DiSC."
- **Risco se ignorar:** notificação pedindo para retirar "DISC" das páginas. O canal de SEO **é** essa palavra ("teste disc", 14.800 buscas/mês), então perder o uso derruba o produto.
- **Advogado:** **sim**. Uma consulta curta com advogado de marcas antes de investir além do degrau 0 e do degrau 1. A pergunta concreta: o uso descritivo se sustenta? Cabe pedir caducidade [LEI LPI art. 143], se o titular não usa "DISC" sozinho no Brasil há 5 anos?

**Nomes brasileiros dos perfis** (Executor, Comunicador, Planejador, Analista): são palavras comuns, usadas como conjunto por vários fornecedores. Os textos da skill são próprios [PRÁTICA]. Não conferi o conjunto no INPI.

**Marca própria:** "Potencial Arquitetado" e "Arquitetura do Potencial" não têm marca idêntica viva nas classes 35, 41 e 42, e os dois `.com.br` estão livres (03/10/2026). O site usa os dois nomes. Escolher um e depositar na classe 41 antes de investir em SEO (`naming`).

## 3. Arrependimento (7 dias)

- **Regra:**
  - Compra online dá direito a desistir em 7 dias, com reembolso integral [LEI CDC art. 49].
  - A lei **não** abre exceção para produto personalizado, e "já recebeu o PDI" não afasta o direito [JURISP serviço digital].
  - Cláusula de renúncia é nula [LEI CDC art. 51 I].
  - O consumidor desiste pelo mesmo meio da compra [LEI Decreto 7.962/2013 art. 5º].
- **O que muda:**
  - Os termos e o e-mail de entrega dizem: "Você pode desistir em até 7 dias da compra respondendo este e-mail; devolvo o Pix integral".
  - O reembolso volta pela mesma chave de origem.
  - Não atrasar a entrega para fugir do prazo.
  - A taxa de desistência vira métrica do teste (C2).
- **Risco se ignorar:** Procon. Com R$ 97, o custo de algumas desistências é menor que o atrito de discutir.
- **Advogado:** não.

## 4. Ajuste grátis

- **Regra:**
  - A oferta vincula [LEI CDC art. 30].
  - Independente do ajuste, o consumidor tem 30 dias para reclamar de vício no serviço [LEI CDC art. 26 I].
- **O que muda:** escrever na oferta "1 ajuste de conteúdo a pedido do seu gestor, em até 30 dias da entrega, além dos seus direitos pelo CDC". Não chamar de "garantia", para não confundir com a garantia legal.
- **Advogado:** não.

## 5. LGPD

- **Papéis e bases legais:**
  - Quem vende é o **controlador** [LEI LGPD art. 5º VI].
  - O teste grátis calcula no navegador e não guarda as respostas, então não trata dado pessoal. Isso precisa continuar assim.
  - O pedido do PDI (nome, e-mail, cargo, competência, objetivo, resultado) tem como base a execução de contrato [LEI art. 7º V].
  - A newsletter usa consentimento [LEI art. 7º I, art. 8º].
- **O que muda:**
  1. **Política de Privacidade** [LEI art. 9º]: hoje o link do rodapé é `#`. Ela deve conter:
     - o controlador;
     - o canal de contato no lugar do encarregado (DPO), já que agente de pequeno porte está dispensado de nomear [LEI Res. CD/ANPD 2/2022 art. 11];
     - as finalidades e a base de cada uma;
     - os suboperadores: Vercel, Brevo e Google (Docs e Analytics);
     - a transferência internacional [LEI art. 33] ⏳;
     - a retenção: comprovante e nota por 5 anos, formulário e PDI por 12 meses [PRÁTICA];
     - os direitos do titular.
  2. **GA4:** hoje carrega antes de qualquer consentimento. Precisa de banner com "Recusar" tão visível quanto "Aceitar" [Guia ANPD de cookies, 2022].
  3. **Segurança** [LEI art. 46]: esta máquina teve ladrão de senhas como administrador em 02/10/2026. Por isso:
     - pedido de cliente **não fica salvo localmente**: a cópia que fica é o Google Doc;
     - a pasta local é apagada depois da entrega;
     - **antes do 1º pedido**, trocar a senha e ativar a verificação em 2 etapas na conta Google que guarda os Docs e no Brevo.
  4. A compra é só para maiores de 18 anos [PRÁTICA]. O teste grátis não coleta dado, o que reduz a exposição ao ECA Digital ⏳.
- **Advogado:** não.

## 6. Tributo

Depende de **quem vende**. Pergunta aberta ao Jean.

- **CPF:** carnê-leão mensal sobre o que recebe de pessoa física [LEI Lei 7.713/1988 art. 8º], mais o ISS de autônomo no município.
- **CNPJ do Simples:**
  - NFS-e pelo Emissor Nacional [LEI Res. CGSN 189/2026] ⏳;
  - Anexo III ou V conforme o Fator R;
  - o CNAE provável é 8599-6/04, treinamento em desenvolvimento profissional e gerencial [PRÁTICA, o contador confirma].
- **MEI:** conferir com o contador se a ocupação cobre a venda.
- **Advogado:** não. **Contador:** sim, antes do 1º Pix.

## 7. Identificação no site e termos

- **Regra:** o site que vende precisa mostrar [LEI Decreto 7.962/2013 art. 2º]:
  - nome e CPF ou CNPJ, endereço físico e e-mail;
  - as características essenciais, o preço, a forma de pagamento, o prazo de entrega e as condições;
  - o modo de desistir.
- **O que muda:**
  - Rodapé com a identificação.
  - A página da oferta com preço, prazo (2 dias úteis), o que inclui, o ajuste e a desistência.
  - **Termos de Venda v1** em URL permanente (`/termos/v1`).
  - No formulário do pedido, checkbox **desmarcado** de aceite dos termos v1, gravando `{e-mail, versão, data/hora}` antes de mostrar a chave Pix [PRÁTICA; aceite eletrônico, MP 2.200-2/2001 art. 10 §2º].
- **Advogado:** não.

---

Itens ⏳ usados (NFS-e nacional, transferência internacional, ECA Digital): conferidos na `saas-legal` em 26/09/2026, há menos de 6 meses. As fontes de CFP e INPI foram lidas em 03/10/2026; os processos do INPI vieram de `naming/scripts/checar.py`.
