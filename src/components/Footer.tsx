import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-50 border-t">
      <div className="max-w-7xl mx-auto px-6 py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="font-semibold mb-2">smartOPEA</div>
          <p className="text-neutral-600">
            Aprovação aeronáutica simplificada.
          </p>
        </div>
        <nav className="grid gap-1">
          <Link to="/solucoes">Soluções</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/casosdesucesso">Casos de sucesso</Link>
        </nav>
        <nav className="grid gap-1">
          <Link to="/politica-de-privacidade">Política de privacidade</Link>
          <Link to="/termos-de-uso">Termos de uso</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </div>
      <div className="text-center text-xs text-neutral-500 py-4 border-t">
        © {new Date().getFullYear()} smartOPEA — Todos os direitos reservados.
      </div>
    </footer>
  );
}
