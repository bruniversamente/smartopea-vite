import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPostBySlug, PostNormalized, fetchPosts } from "./blogApi";
import ReadingProgressBar from "./ReadingProgressBar";

export default function BlogSlug() {
  const { slug } = useParams();
  const [post, setPost] = useState<PostNormalized | null>(null);
  const [related, setRelated] = useState<PostNormalized[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    Promise.all([
      fetchPostBySlug(slug),
      fetchPosts(1, 6)
    ]).then(([p, list]) => {
      setPost(p);
      setRelated(list.filter(x => x.slug !== slug).slice(0, 3));
      setLoading(false);
    });
  }, [slug]);

  const md = post?.content || "";
  const content = useMemo(() => md, [md]);

  if (loading) return <div className="p-8">Carregando…</div>;
  if (!post) return <div className="p-8">Artigo não encontrado.</div>;

  return (
    <>
      <ReadingProgressBar />
      <article className="max-w-3xl mx-auto px-4 pt-6 pb-12">
        <header className="mb-6">
          <h1 className="text-3xl font-semibold">{post.title}</h1>
          {post.date && <div className="text-sm text-gray-500 mt-1">{new Date(post.date).toLocaleDateString("pt-BR")}</div>}
          {post.coverUrl && (
            <img src={post.coverUrl} alt={post.coverAlt || post.title} className="w-full mt-6 rounded-lg" />
          )}
        </header>

        <section className="prose prose-neutral max-w-none whitespace-pre-wrap">
          {content}
        </section>
      </article>

      <section className="max-w-5xl mx-auto px-4 pb-16">
        <h2 className="text-xl font-semibold mb-4">Leia também</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {related.map(r => (
            <article key={r.id} className="border rounded-lg p-4 bg-white">
              <h3 className="font-medium leading-snug line-clamp-3 min-h-[3.5rem]">
                <Link to={`/blog/${r.slug}`} className="hover:underline">{r.title}</Link>
              </h3>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
