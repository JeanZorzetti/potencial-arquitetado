import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

// ponytail: regex no fonte em vez de importar o .ts — evita transpilar e não precisa de dep
// nenhuma. Não valida o TS, valida a única coisa que apodrece em silêncio: artigo novo em
// articles.ts que ninguém põe no sitemap (o Google nunca rebaixa o sitemap sozinho).
const fonte = readFileSync(new URL("./src/data/articles.ts", import.meta.url), "utf8");
const sitemap = readFileSync(new URL("./public/sitemap.xml", import.meta.url), "utf8");

const slugs = [...fonte.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

test("todo artigo publicado está no sitemap", () => {
  assert.ok(slugs.length > 0, "nenhum slug encontrado em articles.ts");
  for (const slug of slugs) {
    assert.ok(sitemap.includes(`/blog/${slug}<`), `slug fora do sitemap: ${slug}`);
  }
});

test("sitemap não aponta para artigo inexistente", () => {
  const noSitemap = [...sitemap.matchAll(/\/blog\/([^<]+)</g)].map((m) => m[1]);
  for (const slug of noSitemap) {
    assert.ok(slugs.includes(slug), `sitemap aponta para slug que não existe: ${slug}`);
  }
});
