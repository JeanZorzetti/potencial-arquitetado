import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { abrirPreferenciasDeCookies } from "@/components/CookieConsent";
import { OPERADOR } from "@/lib/operador";

const h2 = "text-2xl font-sans font-semibold text-foreground mt-10 mb-3";
const p = "text-muted-foreground leading-relaxed mb-3";
const ul = "list-disc pl-6 space-y-2 text-muted-foreground leading-relaxed mb-3";

const Privacidade = () => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-sans font-bold text-foreground mb-2">Política de Privacidade</h1>
      <p className="text-sm text-muted-foreground mb-8">Versão 1 · 03/10/2026</p>

      <h2 className={h2}>Quem cuida dos seus dados</h2>
      <p className={p}>
        O site Arquitetura do Potencial é operado por {OPERADOR.nome}
        {OPERADOR.documento && `, ${OPERADOR.documento}`}
        {OPERADOR.endereco && `, ${OPERADOR.endereco}`}, que é a controladora dos dados pessoais
        tratados aqui (Lei nº 13.709/2018, a LGPD).
      </p>
      <p className={p}>
        Para qualquer pedido sobre os seus dados, use o{" "}
        <a href="/contato" className="underline underline-offset-2">formulário de contato</a>.
        Ele é o nosso canal de atendimento ao titular.
      </p>

      <h2 className={h2}>Que dados coletamos e por quê</h2>
      <ul className={ul}>
        <li>
          <strong>Newsletter:</strong> seu e-mail, para mandar os próximos guias. Base legal: o seu
          consentimento (LGPD, art. 7º, I). Todo e-mail traz um link para cancelar.
        </li>
        <li>
          <strong>Contato:</strong> nome, e-mail, assunto e mensagem, para responder a você. Base
          legal: o legítimo interesse de responder a quem nos procurou (art. 7º, IX).
        </li>
        <li>
          <strong>Pedido de PDI:</strong> nome, e-mail, cargo, prazo do RH, competência pedida,
          objetivo e o resultado do seu teste, para montar e entregar o PDI que você comprou. Base
          legal: a execução do contrato (art. 7º, V).
        </li>
        <li>
          <strong>Navegação:</strong> páginas visitadas e dados técnicos do navegador, pelo Google
          Analytics, para saber quais guias são lidos. Só com o seu consentimento (art. 7º, I).
        </li>
      </ul>
      <p className={p}>Não vendemos dados pessoais e não os usamos para outra finalidade.</p>

      <h2 className={h2}>Cookies</h2>
      <p className={p}>
        O Google Analytics só é carregado se você clicar em "Aceitar" no aviso de cookies. Se
        recusar, nenhum cookie de análise é gravado por este site. Você pode mudar a escolha quando
        quiser em{" "}
        <button
          type="button"
          onClick={abrirPreferenciasDeCookies}
          className="underline underline-offset-2"
        >
          Preferências de cookies
        </button>
        .
      </p>

      <h2 className={h2}>Com quem compartilhamos</h2>
      <ul className={ul}>
        <li><strong>Vercel</strong> (EUA): hospedagem do site.</li>
        <li><strong>Brevo</strong> (França): envio de e-mails e lista da newsletter.</li>
        <li>
          <strong>Google</strong> (EUA): Google Analytics, só com consentimento, e Google Docs, onde
          o PDI é entregue.
        </li>
      </ul>
      <p className={p}>
        Esses fornecedores ficam fora do Brasil, então há transferência internacional de dados
        (LGPD, art. 33).
      </p>

      <h2 className={h2}>Por quanto tempo guardamos</h2>
      <ul className={ul}>
        <li>Newsletter: até você cancelar.</li>
        <li>Mensagens de contato: 12 meses depois da última resposta.</li>
        <li>Formulário e documento do PDI: 12 meses depois da entrega.</li>
        <li>Comprovantes de pagamento: 5 anos, por obrigação fiscal.</li>
        <li>Google Analytics: até 14 meses.</li>
      </ul>

      <h2 className={h2}>Seus direitos</h2>
      <p className={p}>
        Você pode pedir, sem custo: confirmação de que tratamos seus dados, acesso, correção,
        anonimização ou eliminação, portabilidade, a lista de com quem compartilhamos e a revogação
        do consentimento (LGPD, art. 18). Respondemos em até 15 dias pelo{" "}
        <a href="/contato" className="underline underline-offset-2">formulário de contato</a>. Você
        também pode reclamar à Autoridade Nacional de Proteção de Dados (ANPD).
      </p>

      <h2 className={h2}>Segurança</h2>
      <p className={p}>
        Os dados ficam nos fornecedores acima, com acesso restrito. Se houver um incidente que possa
        trazer risco a você, avisamos você e a ANPD.
      </p>

      <h2 className={h2}>Menores de idade</h2>
      <p className={p}>
        O conteúdo é para adultos, em contexto de trabalho. A compra do PDI é só para maiores de 18
        anos.
      </p>

      <h2 className={h2}>Mudanças nesta política</h2>
      <p className={p}>
        Quando a política mudar, a versão e a data no topo mudam junto.
      </p>
    </main>
    <Footer />
  </div>
);

export default Privacidade;
