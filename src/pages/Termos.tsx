import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { OPERADOR } from "@/lib/operador";

// ponytail: v1 lives at /termos/v1 forever; a material change becomes v2 on its own route,
// and the order form records which version was accepted.
const h2 = "text-2xl font-sans font-semibold text-foreground mt-10 mb-3";
const p = "text-muted-foreground leading-relaxed mb-3";
const ul = "list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-3";

const Termos = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-sans font-bold text-foreground mb-2">Termos de Venda</h1>
      <p className="text-sm text-muted-foreground mb-8">
        PDI pronto para o seu perfil DISC · Versão 1 · 03/10/2026
      </p>

      <h2 className={h2}>Quem vende</h2>
      <p className={p}>
        {OPERADOR.nome}
        {OPERADOR.documento && `, ${OPERADOR.documento}`}
        {OPERADOR.endereco && `, ${OPERADOR.endereco}`}. Atendimento pelo{" "}
        <a href="/contato" className="underline underline-offset-2">formulário de contato</a>.
      </p>

      <h2 className={h2}>O que você compra</h2>
      <p className={p}>
        Um Plano de Desenvolvimento Individual (PDI) montado a partir do seu resultado no teste DISC
        deste site e de um formulário com 4 perguntas: cargo, prazo do RH, competência pedida e
        objetivo. Você recebe um documento editável no Google Docs com:
      </p>
      <ul className={ul}>
        <li>3 competências, começando pela que o seu RH pediu;</li>
        <li>uma meta com data para cada uma;</li>
        <li>ações com prazo e a evidência que o seu gestor pode ver;</li>
        <li>um calendário de acompanhamento mensal;</li>
        <li>um roteiro de como apresentar o PDI ao seu gestor.</li>
      </ul>

      <h2 className={h2}>O que o PDI não é</h2>
      <ul className={ul}>
        <li>
          Não é avaliação psicológica. O DISC descreve como você prefere agir no trabalho e não mede
          competência, inteligência nem potencial.
        </li>
        <li>Não é orientação profissional ou vocacional e não serve para seleção de candidatos.</li>
        <li>Não garante promoção, aumento nem aprovação do RH: quem decide é a sua empresa.</li>
      </ul>

      <h2 className={h2}>Preço e pagamento</h2>
      <p className={p}>R$ 97,00, pagamento único por Pix. Não há assinatura nem renovação.</p>

      <h2 className={h2}>Prazo de entrega</h2>
      <p className={p}>
        Até 2 dias úteis depois da confirmação do Pix e do envio do formulário completo. Se o prazo
        do seu RH for antes disso, avisamos no mesmo dia para combinar a data.
      </p>

      <h2 className={h2}>Ajuste</h2>
      <p className={p}>
        1 ajuste de conteúdo a pedido do seu gestor, em até 30 dias da entrega, além dos seus
        direitos pelo Código de Defesa do Consumidor.
      </p>

      <h2 className={h2}>Desistência</h2>
      <p className={p}>
        Você pode desistir em até 7 dias da compra, mesmo depois de receber o PDI (CDC, art. 49).
        Basta responder o e-mail de entrega ou usar o formulário de contato. Devolvemos o valor
        integral pela mesma chave Pix de origem assim que recebermos o pedido.
      </p>

      <h2 className={h2}>Seus dados</h2>
      <p className={p}>
        O tratamento dos dados do pedido está na{" "}
        <a href="/privacidade" className="underline underline-offset-2">Política de Privacidade</a>.
      </p>

      <h2 className={h2}>Idade</h2>
      <p className={p}>A compra é só para maiores de 18 anos.</p>

      <h2 className={h2}>Marca</h2>
      <p className={p}>
        DISC é marca registrada de seus titulares. O teste deste site usa questionário próprio,
        baseado na teoria de William Marston (1928), e não é afiliado à Wiley nem ao Everything DiSC.
      </p>

      <h2 className={h2}>Foro</h2>
      <p className={p}>Qualquer disputa é resolvida no foro do seu domicílio (CDC, art. 101, I).</p>
    </main>
    <Footer />
  </div>
);

export default Termos;
