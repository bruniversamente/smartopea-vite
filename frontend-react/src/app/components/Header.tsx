"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { SiWhatsapp } from "react-icons/si";
import { Menu, X } from "lucide-react";
import HeaderDropdown from "./HeaderDropdown";
import HeaderDropdownCasos from "./HeaderDropdownCasos";
import HeaderDropdownBlog from "./HeaderDropdownBlog"; // ✅ MANTÉM ESSE

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname() ?? "";

  return (
    <header className="fixed top-0 left-0 w-full bg-[#fbfbfd] text-[13px] font-normal z-50 border-b border-[#d2d2d7]">
      <div className="max-w-[1280px] mx-auto px-6 h-[44px] flex items-center justify-between">
        {/* Logo + Navegação */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="smartOPEA"
              width={120}
              height={120}
              priority
              className="object-contain"
            />
          </Link>

          <div className="relative flex gap-8 items-center">
            <nav className="flex gap-8 text-black/70 font-normal tracking-wide items-center">
              <Link
                href="/sobre"
                className={`hover:text-black/80 ${pathname === "/sobre" ? "font-semibold text-black" : ""}`}
              >
                Sobre
              </Link>

              <HeaderDropdownBlog /> {/* ✅ Drop do Blog funcionando */}
              <HeaderDropdown /> {/* Soluções */}
              <HeaderDropdownCasos />

              <Link
                href="/contato"
                className={`hover:text-black/80 ${pathname === "/contato" ? "font-semibold text-black" : ""}`}
              >
                Contato
              </Link>
            </nav>
          </div>
        </div>

        {/* Ações */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5541999990367"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center text-[#0071e3] hover:text-[#005ecb] transition"
            title="WhatsApp"
          >
            <SiWhatsapp className="w-5 h-5" />
          </a>

          <Link
            href="/login"
            className="hidden md:inline-block text-[#0071e3] hover:underline font-medium"
          >
            Login
          </Link>

          <button
            className="md:hidden text-black"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-[#d2d2d7] bg-[#fbfbfd] px-6 py-4 space-y-3 text-black/70 text-[15px]">
          <Link
            href="/sobre"
            onClick={() => setMenuOpen(false)}
            className={`block hover:text-black/80 ${pathname === "/sobre" ? "font-semibold text-black" : ""}`}
          >
            Sobre
          </Link>

          <Link
            href="/blog"
            onClick={() => setMenuOpen(false)}
            className={`block hover:text-black/80 ${pathname.startsWith("/blog") ? "font-semibold text-black" : ""}`}
          >
            Blog
          </Link>

          <Link
            href="/solucoes"
            onClick={() => setMenuOpen(false)}
            className={`block hover:text-black/80 ${pathname.startsWith("/solucoes") ? "font-semibold text-black" : ""}`}
          >
            Soluções
          </Link>

          <Link
            href="/casosdesucesso"
            onClick={() => setMenuOpen(false)}
            className={`block hover:text-black/80 ${pathname === "/casosdesucesso" ? "font-semibold text-black" : ""}`}
          >
            Casos de Sucesso
          </Link>

          <Link
            href="/contato"
            onClick={() => setMenuOpen(false)}
            className={`block hover:text-black/80 ${pathname === "/contato" ? "font-semibold text-black" : ""}`}
          >
            Contato
          </Link>

          <Link
            href="/login"
            className="inline-block mt-3 text-[#0071e3] hover:underline font-medium"
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
        </div>
      )}
    </header>
  );
}
