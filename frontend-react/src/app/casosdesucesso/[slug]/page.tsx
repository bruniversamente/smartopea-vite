"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import TableOfContents from "../../components/TableOfContents";

export default function CaseDetailPage() {
  const params = useParams() as { slug: string };
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const [data, setData] = useState<any>(null);

  const strapiURL = (process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337").replace(/\/$/, "");

  useEffect(() => {
    if (!slug) return;

    fetch(`${strapiURL}/api/portfolios?filters[slug][$eq]=${slug}&populate=gallery,cover`)
      .then((res) => res.json())
      .then((res) => {
        const item = res?.data?.[0];
        if (!item) return;
        setData({
          id: item.id,
          ...item.attributes,
        });
      });
  }, [slug, strapiURL]);

  return (
    <>
      <Header />
      <main className="bg-[#f5f5f7] text-gray-800 font-sans pt-24 pb-20">
        <section className="max-w-[760px] mx-auto px-6">
          {data ? (
            <>
              <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

              <div className="text-sm text-gray-500 mb-8">
                📍 Localização: {data.location || "—"}
              </div>

              {/* Imagem de capa */}
              {data.cover?.data?.attributes?.url && (
                <img
                  src={`${strapiURL}${data.cover.data.attributes.url}`}
                  alt={`Imagem do projeto ${data.title}`}
                  className="w-full max-h-[400px] object-cover rounded-xl mb-10 shadow"
                />
              )}

              {/* Galeria opcional */}
              {data.gallery?.data?.[0]?.attributes?.url && (
                <img
                  src={`${strapiURL}${data.gallery.data[0].attributes.url}`}
                  alt="Imagem adicional do projeto"
                  className="rounded-xl shadow mb-10"
                />
              )}

              {/* TOC automático */}
              <TableOfContents />

              {/* Markdown com estilo refinado */}
              {data.content && (
                <div className="prose prose-slate max-w-none text-justify [&>p]:mt-6 [&>h2]:mt-10 scroll-smooth">
                  <ReactMarkdown
                    rehypePlugins={[rehypeSlug]}
                    components={{
                      ul: ({ children }) => (
                        <ul className="list-none pl-4 space-y-2">{children}</ul>
                      ),
                      li: ({ children }) => (
                        <li className="before:content-['\2013'] before:mr-2 before:text-gray-700">
                          {children}
                        </li>
                      ),
                      img: ({ src, alt }) => (
                        <img
                          src={src || ""}
                          alt={alt || ""}
                          className="w-full rounded-xl my-6 shadow"
                        />
                      ),
                      a: ({ href, children }) => (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline inline-flex items-center gap-1"
                        >
                          {children}
                        </a>
                      ),
                      blockquote: ({ children }) => (
                        <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
                          {children}
                        </blockquote>
                      ),
                    }}
                  >
                    {data.content}
                  </ReactMarkdown>
                </div>
              )}
            </>
          ) : (
            <p className="text-center text-gray-500">Carregando detalhes...</p>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
