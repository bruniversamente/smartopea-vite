// src/lib/portfolio.ts
import { fetchJSON, imageURL } from "./strapi";
import type { Portfolio } from "../types/content";

type StrapiList<T> = { data: { id: number; attributes: any }[] };

function mapPortfolio(a: any): Portfolio {
  const attrs = a?.attributes ?? a;
  return {
    slug: attrs.slug,
    title: attrs.title,
    description: attrs.description ?? null,
    location: attrs.location ?? null,
    cover: attrs.cover,
    gallery: attrs.gallery ?? null,
    content: attrs.content ?? null,
  };
}

export async function getAllCasos(): Promise<Portfolio[]> {
  const json = await fetchJSON<StrapiList<Portfolio>>("/portfolios", {
    query: { sort: "title:asc", populate: "cover,gallery" },
  });
  return (json.data ?? []).map((item) => mapPortfolio(item));
}

export async function getCasoBySlug(slug: string): Promise<Portfolio | null> {
  const json = await fetchJSON<StrapiList<Portfolio>>("/portfolios", {
    query: { filters: `slug:$eq:${slug}`, populate: "cover,gallery" },
  });
  const first = json.data?.[0];
  return first ? mapPortfolio(first) : null;
}

export function coverUrlPortfolio(item?: Portfolio) {
  const u = item?.cover?.data?.attributes?.url;
  return imageURL(u ?? undefined);
}
