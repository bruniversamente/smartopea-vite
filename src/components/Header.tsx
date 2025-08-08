import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import HeaderDropdown from "./HeaderDropdown";
import HeaderDropdownBlog from "./HeaderDropdownBlog";
import HeaderDropdownCasos from "./HeaderDropdownCasos";

export default function Header() {
  const [open, setOpen] = useState<string | null>(null);
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">smartOPEA</Link>
        <nav className="hidden md:flex items-center gap-6 text-[15px]">
          <NavLink to="/solucoes" onMouseEnter={() => setOpen("solucoes")} onMouseLeave={() => setOpen(null)}>
            Soluções
          </NavLink>
          <div onMouseEnter={() => setOpen("blog")} onMouseLeave={() => setOpen(null)}>
            <NavLink to="/blog">Blog</NavLink>
            {open === "blog" && <HeaderDropdownBlog />}
          </div>
          <div onMouseEnter={() => setOpen("casos")} onMouseLeave={() => setOpen(null)}>
            <NavLink to="/casosdesucesso">Casos</NavLink>
            {open === "casos" && <HeaderDropdownCasos />}
          </div>
          <NavLink to="/sobre">Sobre</NavLink>
          <NavLink to="/contato">Contato</NavLink>
          <NavLink to="/login" className="ml-2 rounded-full bg-[#0071e3] text-white px-4 py-1.5">
            Entrar
          </NavLink>
        </nav>
      </div>
      {open === "solucoes" && (
        <HeaderDropdown onClose={() => setOpen(null)} />
      )}
    </header>
  );
}
