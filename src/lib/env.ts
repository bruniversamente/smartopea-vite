// src/lib/env.ts
export const ENV = {
  STRAPI_URL: import.meta.env.VITE_STRAPI_URL ?? "http://localhost:1337",
  // Se ainda usa alguma pública antiga:
  // LEGADO: NEXT_PUBLIC_STRAPI_URL -> use VITE_STRAPI_URL
};

export function assertEnv() {
  if (!ENV.STRAPI_URL) {
    // Ajuda a detectar em build
    // eslint-disable-next-line no-console
    console.warn("VITE_STRAPI_URL não definido. Usando http://localhost:1337");
  }
}
