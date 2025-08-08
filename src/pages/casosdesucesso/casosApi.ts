const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export interface CasoItem {
  id: number;
  attributes: {
    title: string;
    slug: string;
    description?: string;
    location?: string;
    cover?: {
      data?: {
        attributes?: {
          url?: string;
          alternativeText?: string;
        };
      };
    };
    gallery?: {
      data?: {
        attributes?: {
          url?: string;
          alternativeText?: string;
        };
      }[];
    };
    content?: string;
  };
}

export interface CasoNormalized {
  id: number;
  title: string;
  slug: string;
  description?: string | null;
  location?: string | null;
  coverUrl?: string | null;
  coverAlt?: string | null;
  galleryUrls?: { url: string, alt: string | null }[];
  content?: string | null;
}

function getImageUrl(item?: any): string | null {
  const u = item?.data?.attributes?.url;
  if (!u) return null;
  if (u.startsWith("http")) return u;
  return `${STRAPI_URL}${u}`;
}

export async function fetchCasos(page = 1, pageSize = 12): Promise<CasoNormalized[]> {
  const url = `${STRAPI_URL}/portfolios?sort=title:asc&populate=cover`;
  const res = await fetch(url, { cache: "no-store" });
  const json = await res.json();
  const list: CasoItem[] = json?.data || [];
  return list.map((item) => ({
    id: item.id,
    title: item.attributes?.title,
    slug: item.attributes?.slug,
    description: item.attributes?.description ?? null,
    location: item.attributes?.location ?? null,
    coverUrl: getImageUrl(item.attributes?.cover),
    coverAlt: item.attributes?.cover?.data?.attributes?.alternativeText ?? null,
    galleryUrls: [],
    content: item.attributes?.content ?? null,
  }));
}

export async function fetchCasoBySlug(slug: string): Promise<CasoNormalized | null> {
  const url = `${STRAPI_URL}/portfolios?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=cover,gallery`;
  const res = await fetch(url, { cache: "no-store" });
  const json = await res.json();
  const item: CasoItem | undefined = (json?.data || [])[0];
  if (!item) return null;
  return {
    id: item.id,
    title: item.attributes?.title,
    slug: item.attributes?.slug,
    description: item.attributes?.description ?? null,
    location: item.attributes?.location ?? null,
    coverUrl: getImageUrl(item.attributes?.cover),
    coverAlt: item.attributes?.cover?.data?.attributes?.alternativeText ?? null,
    galleryUrls: (item.attributes?.gallery?.data || []).map((g: any) => ({
      url: getImageUrl({ data: g }) || "",
      alt: g?.attributes?.alternativeText ?? null
    })),
    content: item.attributes?.content ?? null,
  };
}
