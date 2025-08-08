import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getAllPosts } from "../lib/api";

interface BlogPost {
  slug: string;
  title: string;
  date: string;
  image: string | null;
  excerpt: string;
}

export default async function BlogHomePage() {
  const posts: BlogPost[] = await getAllPosts();

  if (!posts.length) {
    return (
      <>
        <Header />
        <main className="pt-28 pb-20 text-center text-gray-700 font-sans">
          <p className="text-xl">Nenhum post encontrado no momento.</p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="bg-white text-gray-900 pt-28 pb-24 font-sans">
        <section className="max-w-[800px] mx-auto px-6">
          <h1 className="text-4xl font-bold mb-12">Blog smartOPEA</h1>

          <div className="space-y-10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block bg-gradient-to-br from-white to-blue-50 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.03] transition overflow-hidden"
              >
                {post.image && (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[240px] object-cover"
                  />
                )}
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-1">{post.date}</div>
                  <h2 className="text-xl font-semibold mb-2 group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="text-base text-gray-700">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
