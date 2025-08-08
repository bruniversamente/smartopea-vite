"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const easing: [number, number, number, number] = [0.32, 0, 0.67, 0];
const duration = 0.48;

interface PortfolioItem {
  id: number;
  attributes: {
    title: string;
    slug: string;
    location: string;
    cover: {
      data: {
        attributes: {
          url: string;
        };
      };
    };
  };
}

export default function HeaderDropdownCasos() {
  const [isOpen, setIsOpen] = useState(false);
  const [projetos, setProjetos] = useState<PortfolioItem[]>([]);
  const pathname = usePathname() ?? "";

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/portfolios?populate=cover&sort=createdAt:desc&pagination[limit]=3`)
      .then((res) => res.json())
      .then((data) => setProjetos(data.data));
  }, []);

  return (
    <div
      className="relative z-50"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
<Link
  href="/casosdesucesso"
  className={`hover:text-black/80 transition ${
    pathname.startsWith("/casosdesucesso") ? "font-semibold text-black" : ""
  }`}
  onClick={() => setIsOpen(false)}
>
  Casos de Sucesso
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
              transition={{ duration, ease: easing }}
              className="fixed top-[44px] left-0 right-0 bottom-0 z-40 backdrop-blur-md bg-black/10 pointer-events-none"
            />

            <motion.div
              key="dropdown"
              initial={{ opacity: 0, y: -12, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.985 }}
              transition={{ duration, ease: easing }}
              className="fixed top-[44px] left-0 w-full bg-white z-50"
            >
              <div className="max-w-[1280px] mx-auto px-6 py-10 grid grid-cols-3 gap-6 text-sm text-black/80">
                {projetos.map((proj) => (
                  <Link
                    key={proj.id}
                    href={`/portfolio/${proj.attributes.slug}`}
                    className="hover:underline block"
                  >
                    <div className="space-y-2">
                      <img
                        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${proj.attributes.cover?.data?.attributes?.url}`}
                        alt={proj.attributes.title}
                        className="w-full aspect-[16/9] object-cover rounded-lg"
                      />
                      <p className="font-medium">{proj.attributes.title}</p>
                      <p className="text-xs text-black/60">{proj.attributes.location}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
