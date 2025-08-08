"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CasosSucesso() {
  const [projects, setProjects] = useState<any[]>([]);
  const [hasFetched, setHasFetched] = useState(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    fetch("http://localhost:1337/api/portfolios?pagination[limit]=10&populate=*")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data.data ?? []);
        setHasFetched(true);
      })
      .catch((err) => {
        console.error("Erro ao buscar portfólios:", err);
        setHasFetched(true);
      });
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 360;
      const newScroll =
        direction === "left"
          ? carouselRef.current.scrollLeft - scrollAmount
          : carouselRef.current.scrollLeft + scrollAmount;

      carouselRef.current.scrollTo({
        left: newScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="sucesso" className="bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9] py-20">
      <div className="max-w-[1280px] mx-auto px-6">
        <h3 className="text-4xl font-semibold text-gray-900 mb-10 text-left">
          Projetos aprovados com a smartOPEA
        </h3>

        <div className="relative">
          {/* Seta Esquerda */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow p-2 rounded-full hover:scale-110 transition"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Carrossel */}
          <div
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2 px-4 snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {!hasFetched && (
              <p className="text-gray-400">Carregando...</p>
            )}

            {hasFetched && projects.length === 0 && (
              <p className="text-gray-400">Nenhum projeto encontrado.</p>
            )}

            {projects.map((proj: any) => {
              const { id, attributes } = proj;
              const title = attributes?.title || "Sem título";
              const description = attributes?.description || "Sem descrição";
              const slug = attributes?.slug;

              // Agora usando COVER como imagem principal
              const imageUrl =
                attributes?.cover?.data?.attributes?.formats?.medium?.url ||
                attributes?.cover?.data?.attributes?.url;

              return (
                <Link
                  key={id}
                  href={`/portfolio/${slug}`}
                  className="snap-start relative min-w-[320px] w-[320px] h-[360px] rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all overflow-hidden bg-cover bg-center text-black"
                  style={{
                    backgroundImage: imageUrl
                      ? `url(http://localhost:1337${imageUrl})`
                      : undefined,
                  }}
                >
                  <div className="absolute inset-0 bg-white/40"></div>

                  <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-left drop-shadow-sm">
                        {title}
                      </h4>
                      <p className="text-base text-left mb-4 drop-shadow-sm">
                        {description}
                      </p>
                    </div>
                    <span className="inline-block bg-white text-gray-900 px-4 py-2 rounded-xl shadow text-sm font-semibold w-max">
                      Ver projeto
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Seta Direita */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow p-2 rounded-full hover:scale-110 transition"
            aria-label="Scroll Right"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/portfolio"
            className="inline-block bg-white text-gray-900 px-6 py-3 rounded-xl shadow hover:shadow-md transition font-semibold"
          >
            Ver todos os projetos →
          </Link>
        </div>
      </div>
    </section>
  );
}
