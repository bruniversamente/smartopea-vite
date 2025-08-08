"use client";

import Link from "next/link";
import { useState, useRef, useLayoutEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

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

export default function HeaderDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname() ?? "";
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    timeoutRef.current = setTimeout(() => setIsOpen(true), 120);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(false);
  };

  const menu = [
    {
      title: "Estudo",
      links: [
        { href: "/solucoes/viabilidade", label: "Estudo de Viabilidade" },
        { href: "/solucoes/impacto", label: "Avaliação de Impacto" },
        { href: "/solucoes/orientacao", label: "Orientação Técnica" },
      ],
    },
    {
      title: "Aprovação",
      links: [
        { href: "/solucoes/opea", label: "Processo OPEA" },
        { href: "/solucoes/comar", label: "Pré-Comar" },
        { href: "/solucoes/pbzpa", label: "PBZPA" },
      ],
    },
    {
      title: "Outros",
      links: [
        { href: "/solucoes/consultoria", label: "Consultoria Especializada" },
        { href: "/solucoes/monitoramento", label: "Monitoramento" },
        { href: "/solucoes/simulador", label: "Simulador OPEA" },
      ],
    },
  ];

  useLayoutEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen]);

  // Reorganiza itens por linha (cascata vertical)
  const itemsInOrder = menu[0].links.map((_, i) =>
    menu.map((col, colIndex) => ({
      ...col.links[i],
      colIndex,
      groupTitle: col.title,
    }))
  ).flat().filter(Boolean);

  return (
    <div
      className="relative z-50"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/solucoes"
        className={`hover:text-black/80 transition ${
          pathname.startsWith("/solucoes") ? "font-semibold text-black" : ""
        }`}
        onClick={() => setIsOpen(false)}
      >
        Soluções
      </Link>

      <div className="absolute left-0 top-full w-full h-6 z-40" />

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              key="blur"
              initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
              exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.4, ease: easing }}
              className="fixed top-[44px] left-0 right-0 bottom-0 z-40 bg-black/10 pointer-events-none"
              style={{ WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}
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
                <motion.ul
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="px-6 py-10 max-w-[1280px] mx-auto grid grid-cols-3 gap-x-10 gap-y-2 text-sm text-black/80 list-none"
                >
                  {/* Títulos (também animados) */}
                  {menu.map((col, colIndex) => (
                    <motion.li
                      key={`title-${colIndex}`}
                      variants={itemVariants}
                      className={`col-start-${colIndex + 1}`}
                    >
                      <span className="text-xs uppercase text-black/50 mb-3 block">
                        {col.title}
                      </span>
                    </motion.li>
                  ))}

                  {/* Links em cascata vertical */}
                  {itemsInOrder.map((item, i) => (
                    <motion.li
                      key={`link-${item.colIndex}-${i}`}
                      variants={itemVariants}
                      className={`col-start-${item.colIndex + 1}`}
                    >
                      <Link href={item.href} className="hover:underline block font-medium">
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
