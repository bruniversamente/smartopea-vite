const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || "http://localhost:1337";

export interface PostItem {
  id: number;
  attributes: {
    title: string;
    slug: string;
    excerpt?: string;
    postDate?: string;
    cover?: {
      data?: {
        attributes?: {
          url?: string;
          alternativeText?: string;
        }
      }
    };
    content?: string; // markdown
  };
}

export interface PostNormalized {
  id: number;
  title: string;
  slug: string;
  date?: string;
  coverUrl?: string | null;
  coverAlt?: string | null;
  excerpt?: string | null;
  content?: string | null;
}

function getImageUrl(item?: any): string | null {
  const u = item?.data?.attributes?.url;
  if (!u) return null;
  if (u.startsWith("http")) return u;
  return `${STRAPI_URL}${u}`;
}

export async function fetchPosts(page = 1, pageSize = 10): Promise<PostNormalized[]> {
  const url = `${STRAPI_URL}/posts?sort=postDate:desc&populate=cover&pagination[page]=${page}&pagination[pageSize]=${pageSize}`;
  const res = await fetch(url, { cache: "no-store" });
  const json = await res.json();
  const list: PostItem[] = json?.data || [];
  return list.map((item) => ({
    id: item.id,
    title: item.attributes?.title,
    slug: item.attributes?.slug,
    date: item.attributes?.postDate,
    coverUrl: getImageUrl(item.attributes?.cover),
    coverAlt: item.attributes?.cover?.data?.attributes?.alternativeText ?? null,
    excerpt: item.attributes?.excerpt ?? null,
    content: item.attributes?.content ?? null,
  }));
}

export async function fetchPostBySlug(slug: string): Promise<PostNormalized | null> {
  const url = `${STRAPI_URL}/posts?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=cover`;
  const res = await fetch(url, { cache: "no-store" });
  const json = await res.json();
  const item: PostItem | undefined = (json?.data || [])[0];
  if (!item) return null;
  return {
    id: item.id,
    title: item.attributes?.title,
    slug: item.attributes?.slug,
    date: item.attributes?.postDate,
    coverUrl: getImageUrl(item.attributes?.cover),
    coverAlt: item.attributes?.cover?.data?.attributes?.alternativeText ?? null,
    excerpt: item.attributes?.excerpt ?? null,
    content: item.attributes?.content ?? null,
  };
}
