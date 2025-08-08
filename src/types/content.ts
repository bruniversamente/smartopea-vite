// src/types/content.ts
export type StrapiImage = {
  url: string;
  alternativeText?: string | null;
  width?: number;
  height?: number;
};

export type StrapiMedia = {
  data?: { attributes?: StrapiImage } | null;
};

export type Post = {
  title: string;
  slug: string;
  excerpt?: string | null;
  postDate?: string | null;
  cover?: StrapiMedia;
  content?: string | null; // markdown
};

export type Portfolio = {
  title: string;
  slug: string;
  description?: string | null;
  location?: string | null;
  cover?: StrapiMedia;
  gallery?: { data?: { attributes?: StrapiImage }[] } | null;
  content?: string | null; // markdown
};
