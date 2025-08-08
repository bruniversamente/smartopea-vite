import type { Post } from "types/strapi"; // ✅ usado no map de getAllPosts

// Tipagem leve para o menu do blog
export interface BlogHeaderPost {
  id: number;
  title: string;
  slug: string;
}

// 🔁 Para o dropdown do header — leve e rápido
export async function getBlogHeaderPosts(): Promise<BlogHeaderPost[]> {
  const strapiURL = process.env.STRAPI_API_URL || "http://localhost:1337";

  const res = await fetch(
    `${strapiURL}/posts?sort=postDate:desc&pagination[pageSize]=12`,
    {
      next: { revalidate: 60 },
    }
  );

  const json = await res.json();
  if (!json?.data) return [];

  return json.data.map((item: any) => ({
    id: item.id,
    title: item.attributes.title,
    slug: item.attributes.slug,
  }));
}

// 🔁 Para o blog completo — usado nas páginas do blog
export interface PostPreview {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  image: string | null;
}

export async function getAllPosts(): Promise<PostPreview[]> {
  const strapiURL = process.env.STRAPI_API_URL || "http://localhost:1337";
  const publicURL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337";

  const res = await fetch(
    `${strapiURL}/posts?sort=postDate:desc&populate=cover`,
    {
      next: { revalidate: 60 },
    }
  );

  const json: { data: { attributes: Post }[] } = await res.json();

  if (!json?.data) return [];

  return json.data.map((item, index) => {
    const post = item.attributes;
    const imageUrl = post.cover?.url || post.cover?.formats?.medium?.url;

    return {
      slug: post.slug,
      title: post.title,
      date: post.postDate
        ? new Date(post.postDate).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
        : "Data desconhecida",
      excerpt: post.excerpt || "",
      image: imageUrl ? `${publicURL.replace(/\/$/, "")}${imageUrl}` : null,
    };
  });
}
