import { Article } from "@/data/articles";

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function getArticles(): Promise<Article[]> {
  const response = await fetch(`${API_URL}/articles`);
  if (!response.ok) {
    throw new Error('Failed to fetch articles');
  }
  return response.json();
}

export async function getArticle(slug: string): Promise<Article> {
    const response = await fetch(`${API_URL}/articles/${slug}`);
    if (!response.ok) {
        throw new Error('Failed to fetch article');
    }
    return response.json();
}
