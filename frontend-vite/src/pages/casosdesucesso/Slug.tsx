import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCasoBySlug, CasoNormalized } from "./casosApi";

export default function CasoSlug() {
  const { slug } = useParams();
  const [caso, setCaso] = useState<CasoNormalized | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetchCasoBySlug(slug).then((data) => {
      setCaso(data);
      setLoading(false);
    });
  }, [slug]);

  if (loading) return <div className="p-8">Carregando…</div>;
  if (!caso) return <div className="p-8">Caso não encontrado.</div>;

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold">{caso.title}</h1>
      {caso.location && <div className="text-sm text-gray-500">{caso.location}</div>}
      {caso.coverUrl && (
        <img src={caso.coverUrl} alt={caso.coverAlt || caso.title} className="w-full mt-6 rounded-lg" />
      )}
      {caso.content && (
        <div className="prose prose-neutral mt-6 whitespace-pre-wrap">
          {caso.content}
        </div>
      )}
      {caso.galleryUrls && caso.galleryUrls.length > 0 && (
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {caso.galleryUrls.map((g, i) => (
            <img key={i} src={g.url} alt={g.alt || ""} className="w-full h-40 object-cover rounded" />
          ))}
        </div>
      )}
    </article>
  );
}
