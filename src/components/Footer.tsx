import CTABox from "@/components/CTABox";
import { abrirPreferenciasDeCookies } from "@/components/CookieConsent";
import { OPERADOR } from "@/lib/operador";

const Footer = () => {
  const identificacao = [OPERADOR.documento, OPERADOR.endereco].filter(Boolean).join(" · ");

  return (
    <footer className="bg-card border-t border-border mt-16">
      <div id="newsletter" className="max-w-4xl mx-auto px-6 py-12">
        <CTABox
          title="Receba os próximos guias"
          description="Um e-mail quando sair um guia novo de soft skills, inteligência emocional ou liderança."
          buttonText="Receber os guias"
        />
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <div className="text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} Arquitetura do Potencial · Operado por {OPERADOR.nome}
              </p>
              {identificacao && <p>{identificacao}</p>}
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a href="/sobre" className="hover:text-foreground transition-colors">
                Sobre
              </a>
              <a href="/contato" className="hover:text-foreground transition-colors">
                Contato
              </a>
              <a href="/privacidade" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              {OPERADOR.documento && (
                <a href="/termos/v1" className="hover:text-foreground transition-colors">
                  Termos de Venda
                </a>
              )}
              <button
                type="button"
                onClick={abrirPreferenciasDeCookies}
                className="hover:text-foreground transition-colors"
              >
                Preferências de cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
