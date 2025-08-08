"use client";
import Link from "next/link";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import AppleArrowButton from "./AppleArrowButton";

const easing: [number, number, number, number] = [0.65, 0, 0.35, 1];
const duration = 0.6;

const contentVariants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(100% 0% 0% 0%)",
  },
  visible: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.3,
      ease: easing,
      when: "beforeChildren",
      staggerChildren: 0.03,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    clipPath: "inset(0% 0% 100% 0%)",
    transition: {
      duration: 0.3,
      ease: easing,
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

interface BlogPost {
  id: number;
  attributes: {
    title: string;
    slug: string;
    cover?: {
      data?: {
        attributes?: {
          url: string;
        };
      };
    };
  };
}

export default function HeaderDropdownBlog() {
  const [isOpen, setIsOpen] = useState(false);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const pathname = usePathname() ?? "";
  const contentRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(true), 120);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(false);
  };

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const offset = 320;
    el.scrollBy({ left: dir === "left" ? -offset : offset, behavior: "smooth" });
  };

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/posts?populate=cover&sort=publishedAt:desc&pagination[limit]=10`
      );
      const json = await res.json();
      setPosts(json?.data || []);
    }
    fetchPosts();
  }, []);

  useLayoutEffect(() => {
    if (contentRef.current && isOpen) {
      // Usando getBoundingClientRect para obter a altura exata do conteúdo renderizado
      const rect = contentRef.current.getBoundingClientRect();
      // Adicionando apenas um pequeno padding extra (16px) para garantir que nada seja cortado
      setHeight(rect.height + 16);
    }
  }, [isOpen, posts]);

  const strapiURL = (process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337").replace(/\/$/, "");

  return (
    <div
      className="relative z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/blog"
        className={`hover:text-black/80 transition ${
          pathname.startsWith("/blog") ? "font-semibold text-black" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        Blog
      </Link>
      <div className="absolute left-0 top-full w-full h-6 z-40" />
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="blur"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: easing }}
              className="fixed top-[44px] left-0 right-0 bottom-0 z-40 backdrop-blur-md bg-black/10 pointer-events-none"
            />
            <motion.div
              key="dropdown"
              initial={{ height: 0 }}
              animate={{ height }}
              exit={{ height: 0 }}
              transition={{ duration, ease: easing }}
              className="fixed top-[44px] left-0 w-full overflow-hidden bg-white z-50"
            >
              <div ref={contentRef}>
                <div className="py-6 px-6"> {/* Reduzi o padding vertical de 8 para 6 */}
                  <div className="flex items-center justify-center gap-6 max-w-[1280px] mx-auto">
                    <AppleArrowButton
                      direction="left"
                      onClick={() => scroll("left")}
                    />
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="overflow-hidden flex-1"
                    >
                      <div
                        ref={scrollRef}
                        className="flex gap-6 scroll-smooth overflow-x-auto no-scrollbar"
                      >
                        {posts.slice(0, 10).map((post) => {
                          const imageUrl = post.attributes.cover?.data?.attributes?.url
                            ? `${strapiURL}${post.attributes.cover.data.attributes.url}`
                            : null;
                          return (
                            <motion.div
                              key={post.id}
                              variants={itemVariants}
                              className="flex-shrink-0 w-80 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
                            >
                              <Link href={`/blog/${post.attributes.slug}`} className="block group">
                                {imageUrl && (
                                  <img
                                    src={imageUrl}
                                    alt={post.attributes.title}
                                    className="w-full h-48 object-cover rounded-t-xl"
                                  />
                                )}
                                <div className="px-4 py-3 text-center">
                                  <p className="text-sm font-semibold text-gray-900 group-hover:underline">
                                    {post.attributes.title}
                                  </p>
                                </div>
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                    <AppleArrowButton
                      direction="right"
                      onClick={() => scroll("right")}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}