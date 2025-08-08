import { Link } from "react-router-dom";

export default function Solucoes() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Soluções</h1>
      <ul className="grid md:grid-cols-2 gap-4">
        <li className="border rounded p-4 hover:bg-gray-50">
          <Link to="/solucoes/aprovacao" className="font-medium">Aprovação OPEA</Link>
          <p className="text-sm text-gray-600">Gestão de processos e submissão.</p>
        </li>
        <li className="border rounded p-4 hover:bg-gray-50">
          <Link to="/solucoes/viabilidade" className="font-medium">Viabilidade</Link>
          <p className="text-sm text-gray-600">Pré-análise e simulador de gabarito.</p>
        </li>
      </ul>
    </section>
  );
}

// Estas páginas são independentes. Importe no seu roteador principal (main.tsx).
