import { Article, articles } from "@/data/articles";

// ponytail: o backend (arquiteturaapi.roilabs.com.br) está NXDOMAIN, então todo fetch daqui
// falhava e o blog inteiro renderizava vazio com a home em 200. Os mesmos artigos já moram em
// articles.ts — trocar a API morta por um import é o menor diff que põe o conteúdo no ar.
// Se o backend voltar, refazer o fetch aqui: as páginas não mudam, a assinatura é a mesma.
const publicados = articles.filter((a) => a.status === "published");

export async function getArticles(): Promise<Article[]> {
  return publicados;
}

export async function getArticle(slug: string): Promise<Article> {
  const artigo = publicados.find((a) => a.slug === slug);
  if (!artigo) throw new Error(`Artigo não encontrado: ${slug}`);
  return artigo;
}
