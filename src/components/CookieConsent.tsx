import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const CHAVE = "pa-cookies"; // "aceito" | "recusado"
const GA_ID = "G-FZQCMWQ69M";
const EVENTO_ABRIR = "pa-cookies-abrir";

const ler = () => {
  try {
    return localStorage.getItem(CHAVE);
  } catch {
    return null;
  }
};

const gravar = (valor: string) => {
  try {
    localStorage.setItem(CHAVE, valor);
  } catch {
    // ponytail: private mode / blocked storage — the banner simply shows again next visit
  }
};

type Gtag = { dataLayer: unknown[]; gtag: (...args: unknown[]) => void } & Record<string, unknown>;

// GA4 only loads after an explicit "Aceitar" (Guia ANPD de cookies, 2022).
function carregarGA() {
  const w = window as unknown as Gtag;
  w[`ga-disable-${GA_ID}`] = false;
  if (document.getElementById("ga4")) return;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () {
    // gtag.js reads the raw arguments object, not an array
    // eslint-disable-next-line prefer-rest-params
    w.dataLayer.push(arguments);
  };
  w.gtag("js", new Date());
  w.gtag("config", GA_ID);
  const s = document.createElement("script");
  s.id = "ga4";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);
}

// Google's documented opt-out flag: stops hits from a tag already loaded on this page.
function desligarGA() {
  (window as unknown as Gtag)[`ga-disable-${GA_ID}`] = true;
}

export const abrirPreferenciasDeCookies = () => window.dispatchEvent(new Event(EVENTO_ABRIR));

const CookieConsent = () => {
  const [aberto, setAberto] = useState(false);
  const quemAbriu = useRef<HTMLElement | null>(null);
  const primeiroBotao = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const escolha = ler();
    if (escolha === "aceito") carregarGA();
    else if (escolha === null) setAberto(true);

    const abrir = () => {
      quemAbriu.current = document.activeElement as HTMLElement | null;
      setAberto(true);
      // reopened from the footer: take keyboard focus to the choice
      requestAnimationFrame(() => primeiroBotao.current?.focus());
    };
    window.addEventListener(EVENTO_ABRIR, abrir);
    return () => window.removeEventListener(EVENTO_ABRIR, abrir);
  }, []);

  if (!aberto) return null;

  const escolher = (valor: "aceito" | "recusado") => {
    gravar(valor);
    if (valor === "aceito") carregarGA();
    else desligarGA();
    setAberto(false);
    quemAbriu.current?.focus();
    quemAbriu.current = null;
  };

  return (
    <>
      {/* keeps the fixed banner from covering the end of the page (WCAG 2.4.11) */}
      <div aria-hidden="true" className="h-40 sm:h-24" />
      <section
        aria-label="Cookies"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card p-4 shadow-lg"
      >
        <div className="mx-auto flex max-w-4xl flex-col gap-3 sm:flex-row sm:items-center">
          <p className="flex-1 text-sm text-foreground">
            Usamos o Google Analytics para saber quais guias são lidos, só se você aceitar.{" "}
            <a href="/privacidade" className="underline underline-offset-2">
              Política de Privacidade
            </a>
          </p>
          <div className="flex gap-2">
            <Button ref={primeiroBotao} variant="outline" onClick={() => escolher("recusado")}>
              Recusar
            </Button>
            <Button variant="outline" onClick={() => escolher("aceito")}>
              Aceitar
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CookieConsent;
