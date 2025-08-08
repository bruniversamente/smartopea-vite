import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { fetchPosts, PostNormalized } from "./blogApi";

export default function BlogIndex() {
  const [posts, setPosts] = useState<PostNormalized[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page") || 1);

  useEffect(() => {
    setLoading(true);
    fetchPosts(page, 10).then((data) => {
      setPosts(data);
      setLoading(false);
    });
  }, [page]);

  const next = () => setSearchParams({ page: String(page + 1) });
  const prev = () => setSearchParams({ page: String(Math.max(1, page - 1)) });

  if (loading) return <div className="p-8">Carregando…</div>;

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Blog</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((p) => (
          <article key={p.id} className="border rounded-lg overflow-hidden bg-white">
            {p.coverUrl && (
              <img src={p.coverUrl} alt={p.coverAlt || p.title} className="w-full h-40 object-cover" />
            )}
            <div className="p-4">
              <h2 className="text-lg font-medium leading-snug line-clamp-2 min-h-[3.25rem]">
                <Link to={`/blog/${p.slug}`} className="hover:underline">{p.title}</Link>
              </h2>
              <div className="mt-3">
                <Link
                  to={`/blog/${p.slug}`}
                  className="inline-block text-sm px-3 py-1 rounded-full bg-gray-900 text-white hover:bg-gray-700"
                >
                  Ler artigo
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-8">
        <button onClick={prev} disabled={page <= 1} className="px-3 py-1 rounded border disabled:opacity-50">Anterior</button>
        <span className="text-sm text-gray-600">Página {page}</span>
        <button onClick={next} className="px-3 py-1 rounded border">Próxima</button>
      </div>
    </section>
  );
}
