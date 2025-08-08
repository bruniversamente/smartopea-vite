#!/bin/bash

mkdir -p src/app/blog/o-que-e-opea
cat > src/app/blog/o-que-e-opea/page.tsx << 'EOF'
export default function BlogOqueEOPEA() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">O que é OPEA?</h1>
        <p className="mb-4">
          A Análise de Objetos Projetados no Espaço Aéreo (OPEA) é um procedimento exigido pelo COMAER
          para avaliar se construções, torres ou estruturas em geral podem impactar a segurança das operações aéreas.
        </p>
        <p className="mb-4">
          Sempre que uma edificação ultrapassa certos limites de altura ou se localiza próxima a aeródromos, ela deve
          passar por esse processo. A análise considera o gabarito de altura da área e visa preservar a segurança do tráfego aéreo.
        </p>
        <p>
          A smartOPEA ajuda você a entender e realizar esse processo com mais agilidade, clareza e 100% online.
        </p>
      </div>
    </main>
  );
}
EOF

mkdir -p src/app/planos
cat > src/app/planos/page.tsx << 'EOF'
export default function PlanosPage() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-10">Planos e Preços</h1>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="border border-gray-300 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">Self-Service</h2>
            <p className="text-gray-600 mb-4">Ideal para projetos simples com suporte digital e submissão rápida.</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Simulação online</li>
              <li>Documentos gerados automaticamente</li>
              <li>Envio realizado por nossa equipe</li>
            </ul>
          </div>
          <div className="border-2 border-blue-700 bg-blue-50 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">Assistido</h2>
            <p className="text-gray-600 mb-4">Acompanhamento técnico com um especialista dedicado.</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Consultoria especializada</li>
              <li>Responsabilidade técnica (RRT)</li>
              <li>Atendimento individualizado</li>
            </ul>
          </div>
          <div className="border border-gray-300 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-2">Enterprise</h2>
            <p className="text-gray-600 mb-4">Para empresas com múltiplos projetos e gestão integrada.</p>
            <ul className="list-disc list-inside text-sm text-gray-700">
              <li>Painel multi-projetos</li>
              <li>Suporte prioritário</li>
              <li>Relatórios gerenciais</li>
              <li>Integrações via API</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
EOF

mkdir -p src/app/portfolio
cat > src/app/portfolio/page.tsx << 'EOF'
export default function PortfolioPage() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-10">Portfólio de Projetos</h1>
        <p className="text-gray-700 mb-6">Confira alguns projetos que passaram pelo processo OPEA com a smartOPEA.</p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">Torre Residencial • São Paulo</h2>
            <p className="text-gray-600 text-sm">Pré-análise concluída e aprovação obtida em 18 dias úteis.</p>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-2">Heliponto Corporativo • Curitiba</h2>
            <p className="text-gray-600 text-sm">Processo completo com assistência técnica. Aprovação sem exigências.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
EOF

mkdir -p src/app/contato
cat > src/app/contato/page.tsx << 'EOF'
export default function ContatoPage() {
  return (
    <main className="bg-white text-gray-800 font-sans">
      <div className="max-w-[1280px] mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold mb-6">Fale Conosco</h1>
        <p className="text-gray-600 mb-6">Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.</p>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Nome</label>
            <input type="text" className="w-full border border-gray-300 rounded-lg p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">E-mail</label>
            <input type="email" className="w-full border border-gray-300 rounded-lg p-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Mensagem</label>
            <textarea className="w-full border border-gray-300 rounded-lg p-2" rows={4} required></textarea>
          </div>
          <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </main>
  );
}
EOF

echo "✅ Páginas criadas com sucesso!"
