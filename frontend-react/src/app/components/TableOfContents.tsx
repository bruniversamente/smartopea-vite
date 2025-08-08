"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const selector = "h2, h3";

    const getHeadings = () => {
      const elements = Array.from(document.querySelectorAll(selector));
      const parsed = elements
        .filter((el) => el.id)
        .map((el) => ({
          id: el.id,
          text: el.textContent || "",
          level: el.tagName === "H2" ? 2 : 3,
        }));
      setHeadings(parsed);
    };

    // Primeira tentativa
    getHeadings();

    // Tenta novamente se o DOM mudar (ReactMarkdown async)
    const observer = new MutationObserver(getHeadings);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  console.log("📑 TOC headings encontrados:", headings);

  return (
    <nav className="mb-12 text-sm border-l-2 border-gray-200 pl-4 text-gray-600">
      <p className="font-semibold text-gray-800 mb-3">Neste artigo:</p>
      <ul className="space-y-1">
        {headings.map((h) => (
          <li key={h.id} className={`ml-${(h.level - 2) * 4}`}>
            <a href={`#${h.id}`} className="hover:text-blue-600 transition">
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
