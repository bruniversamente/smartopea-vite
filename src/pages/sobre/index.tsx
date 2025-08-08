import { Link } from "react-router-dom";

export default function Sobre() {
  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-4">Sobre a smartOPEA</h1>
      <p className="text-gray-700 mb-6">Plataforma para simplificar aprovações aeronáuticas (OPEA) com experiência digital de ponta.</p>

      <div className="grid md:grid-cols-2 gap-4">
        <Link to="/sobre/adoniran" className="block p-4 border rounded hover:bg-gray-50">
          <h3 className="font-medium">Adoniran</h3>
          <p className="text-sm text-gray-600">Especialista em AGA e processos OPEA.</p>
        </Link>
        <Link to="/sobre/adachi" className="block p-4 border rounded hover:bg-gray-50">
          <h3 className="font-medium">Adachi</h3>
          <p className="text-sm text-gray-600">Engenharia e inovação.</p>
        </Link>
      </div>
    </section>
  );
}

// Estas páginas são independentes. Importe no seu roteador principal (main.tsx).
