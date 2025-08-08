// src/lib/strapi.ts
import { ENV } from "./env";

type FetchOptions = RequestInit & { query?: Record<string, string | number | boolean> };

export function buildURL(path: string, query?: Record<string, any>) {
  const url = new URL(path.replace(/^\/+/, ""), ENV.STRAPI_URL + "/");
  if (query) {
    Object.entries(query).forEach(([k, v]) => {
      if (v !== undefined && v !== null) url.searchParams.set(k, String(v));
    });
  }
  return url.toString();
}

export async function fetchJSON<T = any>(path: string, options: FetchOptions = {}): Promise<T> {
  const { query, headers, ...rest } = options;
  const url = buildURL(path, query);
  const res = await fetch(url, {
    headers: { "Content-Type": "application/json", ...(headers || {}) },
    ...rest,
  });
  if (!res.ok) {
    const text = await res.text().catch(() => "");
    throw new Error(`Strapi ${res.status}: ${text || res.statusText}`);
  }
  return res.json();
}

export function imageURL(strapiFileUrl?: string | null) {
  if (!strapiFileUrl) return undefined;
  // Se vier só o caminho (/uploads/...), prefixa STRAPI base
  if (strapiFileUrl.startsWith("http")) return strapiFileUrl;
  return `${ENV.STRAPI_URL}${strapiFileUrl}`;
}
