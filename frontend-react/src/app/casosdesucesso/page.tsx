'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface PortfolioItem {
  id: number;
  title?: string;
  location?: string;
  slug?: string;
  description?: string;
  publishedAt?: string;
  cover?: {
    url?: string;
  };
}

export default function PortfolioPage() {
  const [cases, setCases] = useState<PortfolioItem[]>([]);
  const strapiURL = (process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337").replace(/\/$/, "");

  useEffect(() => {
    fetch(`${strapiURL}/api/portfolios?populate=cover&sort=publishedAt:desc`)
      .then((res) => res.json())
      .then((res) => {
        const items = res?.data?.map((item: any) => ({
          id: item.id,
          ...item.attributes,
          cover: item.attributes.cover?.data?.attributes || null,
        })) || [];
        setCases(items);
      })
      .catch(() => setCases([]));
  }, [strapiURL]);

  return (
    <>
      <Header />
      <main className="bg-[#f5f5f7] text-gray-800 font-sans">
        <section className="max-w-[1024px] mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-6">Portfólio</h1>
          <p className="text-lg text-gray-600 mb-10">
            Explore projetos aprovados com sucesso, seguindo padrões de segurança e conformidade regulatória.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((item) => {
              if (!item.slug) return null;

              const imageUrl = item.cover?.url ? `${strapiURL}${item.cover.url}` : null;

              const date = item.publishedAt
                ? new Date(item.publishedAt).toLocaleDateString("pt-BR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })
                : "Data não informada";

              return (
                <Link
                  key={item.id}
                  href={`/portfolio/${item.slug}`}
                  className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition block"
                >
                  {imageUrl && (
                    <img
                      src={imageUrl}
                      alt={item.title}
                      className="w-full h-40 object-cover rounded-md mb-4"
                    />
                  )}

                  <h2 className="text-xl font-semibold mb-2">
                    {item.title || "Sem título"}
                  </h2>
                  <p className="text-gray-600 mb-1">
                    📍 {item.location || "Local não informado"}
                  </p>
                  <p className="text-gray-500 mb-2">📅 {date}</p>
                  <p className="text-sm text-gray-600 line-clamp-3">
                    {item.description || "Sem descrição"}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
