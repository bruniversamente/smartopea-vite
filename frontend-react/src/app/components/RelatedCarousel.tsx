"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RelatedCarousel({ posts, strapiURL }: { posts: any[]; strapiURL: string }) {
  return (
    <section className="mt-24">
      <h2 className="text-2xl font-semibold text-gray-900 mb-10">Leia também</h2>
      <div className="relative">
        {/* Seta Esquerda */}
        <button
          onClick={() => {
            const el = document.getElementById("related-carousel");
            if (el) el.scrollBy({ left: -360, behavior: "smooth" });
          }}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow p-2 rounded-full hover:scale-110 transition"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div
          id="related-carousel"
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth px-4 pb-2 snap-x snap-mandatory"
          style={{ scrollbarWidth: "none" }}
        >
          {posts.map((item: any) => {
            const { title, excerpt, slug, cover } = item.attributes;
            const imageUrl = cover?.data?.attributes?.url
              ? `${strapiURL}${cover.data.attributes.url}`
              : null;

            return (
              <a
                key={slug}
                href={`/blog/${slug}`}
                className="snap-start min-w-[320px] w-[320px] h-[360px] rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition-all overflow-hidden bg-white text-black"
              >
                {imageUrl && (
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-40 object-cover rounded-t-2xl"
                  />
                )}
                <div className="p-5 h-[calc(100%-160px)] flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-sm text-gray-700">{excerpt}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Seta Direita */}
        <button
          onClick={() => {
            const el = document.getElementById("related-carousel");
            if (el) el.scrollBy({ left: 360, behavior: "smooth" });
          }}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white shadow p-2 rounded-full hover:scale-110 transition"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
