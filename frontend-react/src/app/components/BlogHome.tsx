"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  slug: string;
  cover?: {
    url: string;
  };
}

const gradients = [
  "bg-gradient-to-br from-[#edf2f7] to-[#e0f2fe]",
  "bg-gradient-to-br from-[#e0f2fe] to-[#f0f9ff]",
  "bg-gradient-to-br from-[#f0f9ff] to-[#f8fafc]",
  "bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]",
];

export default function BlogHome() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337"}/api/posts?pagination[limit]=4&sort=publishedAt:desc&populate=*`
        );
        const data = await res.json();

        if (!data?.data || !Array.isArray(data.data)) {
          console.warn("Nenhum post encontrado.");
          setPosts([]);
          return;
        }

        const mapped = data.data.map((item: any) => ({
          id: item.id,
          title: item.attributes.title,
          excerpt: item.attributes.excerpt,
          slug: item.attributes.slug,
          cover: item.attributes.cover?.data?.attributes,
        }));
        setPosts(mapped);
      } catch (error) {
        console.error("Erro ao carregar posts do blog:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="max-w-[1280px] mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
        Artigos recentes do nosso blog
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {posts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link
              href={`/blog/${post.slug}`}
              className={`block h-full rounded-2xl p-8 shadow-sm hover:shadow-md transition text-gray-900 ${gradients[index % gradients.length]} overflow-hidden`}
            >
              <div className="flex flex-col h-full">
                {post.cover?.url && (
                  <img
                    src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${post.cover.url}`}
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}
                <h3 className="text-2xl font-semibold mb-3">
                  {post.title}
                </h3>
                <p className="text-base text-gray-800 leading-relaxed flex-grow">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link
          href="/blog"
          className="inline-block px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition"
        >
          Ver todos os artigos →
        </Link>
      </div>
    </section>
  );
}
