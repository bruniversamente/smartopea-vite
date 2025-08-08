import { notFound } from "next/navigation";
import Head from "next/head";
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ReadingProgressBar from "../../components/ReadingProgressBar";
import ComentarioPost from "../../components/ComentarioPost";
import TableOfContents from "../../components/TableOfContents";
import RelatedCarousel from "../../components/RelatedCarousel";
import rehypeSlug from "rehype-slug";

async function getPostData(slug: string) {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/posts?filters[slug][$eq]=${slug}&populate=cover`,
    { next: { revalidate: 60 } }
  );
  const json = await res.json();
  return json.data?.[0] || null;
}

async function getRelatedPosts(currentSlug: string) {
  const res = await fetch(
    `${process.env.STRAPI_API_URL}/posts?filters[slug][$ne]=${currentSlug}&pagination[limit]=3&sort=publishedAt:desc&populate=cover`,
    { next: { revalidate: 60 } }
  );
  const json = await res.json();
  return json.data || [];
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPostData(slug);
  if (!post) return notFound();

  const relatedPosts = await getRelatedPosts(slug);
  const { title, content, postDate, cover } = post.attributes;

  const strapiURL =
    (process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337").replace(/\/$/, "");

  const imageUrl = cover?.data?.attributes?.url
    ? `${strapiURL}${cover.data.attributes.url}`
    : null;

  return (
    <>
      <Head>
        <title>{title} | smartOPEA</title>
      </Head>

      <ReadingProgressBar />
      <Header />

      <main className="bg-white pt-28 pb-24 text-gray-800 font-sans">
        <article className="max-w-[760px] mx-auto px-6">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>

          <div className="text-sm text-gray-500 mb-8">
            {postDate
              ? new Date(postDate).toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "Data desconhecida"}
          </div>

          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-full rounded-xl mb-8 object-cover max-h-[400px]"
            />
          )}

          <TableOfContents />

          <div className="prose prose-lg max-w-none text-justify [&>p]:mt-6 [&>h2]:mt-10">
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
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5h6m0 0v6m0-6L10 16"
                      />
                    </svg>
                  </a>
                ),
                code({
                  inline,
                  className,
                  children,
                  ...props
                }: {
                  inline?: boolean;
                  className?: string;
                  children?: React.ReactNode;
                }) {
                  const match = /language-(\w+)/.exec(className || "");
                  return !inline && match ? (
                    <SyntaxHighlighter
                      style={oneDark}
                      language={match[1]}
                      PreTag="div"
                      className="rounded-md my-6"
                      {...props}
                    >
                      {String(children).replace(/\n$/, "")}
                    </SyntaxHighlighter>
                  ) : (
                    <code className="bg-gray-100 px-1 rounded text-sm" {...props}>
                      {children}
                    </code>
                  );
                },
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-600 my-6">
                    {children}
                  </blockquote>
                ),
              }}
            >
              {content}
            </ReactMarkdown>
          </div>

          <div className="mt-24">
            <ComentarioPost postId={post.id} />
          </div>

          {relatedPosts.length > 0 && (
            <RelatedCarousel posts={relatedPosts} strapiURL={strapiURL} />
          )}
        </article>
      </main>

      <Footer />
    </>
  );
}
