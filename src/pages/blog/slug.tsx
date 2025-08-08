// src/pages/blog/slug.tsx
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPostBySlug, coverUrl } from "../../lib/posts";
import Loading from "../../components/Loading";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);
    setError(null);

    getPostBySlug(slug)
      .then((data) => {
        if (!data) {
          setError("Post não encontrado.");
        } else {
          setPost(data);
        }
      })
      .catch(() => {
        setError("Erro ao carregar o post.");
      })
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <Loading />;

  if (error) {
    return (
      <div className="max-w-3xl mx-auto p-6 text-center text-red-500">
        {error}
      </div>
    );
  }

  if (!post) return null;

  return (
    <article className="max-w-3xl mx-auto p-6">
      {coverUrl(post) && (
        <img
          src={coverUrl(post)}
          alt={post.cover?.data?.attributes?.alternativeText || post.title}
          className="mb-6 rounded-lg shadow"
        />
      )}

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      {post.postDate && (
        <p className="text-sm text-gray-500 mb-6">
          {new Date(post.postDate).toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>
      )}

      {/* Conteúdo do post (markdown convertido no Strapi para HTML) */}
      {post.content ? (
        <div
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      ) : (
        <p>Sem conteúdo.</p>
      )}
    </article>
  );
}
