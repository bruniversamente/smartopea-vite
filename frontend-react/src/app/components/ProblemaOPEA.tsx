"use client";

export default function ProblemaOPEA() {
  return (
    <section className="bg-[#e8f1fc] py-20 border-y" style={{ borderColor: "#e5e5e5" }}>
      <div className="max-w-[1280px] mx-auto px-6 text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
          Sua obra pode precisar de aprovação do COMAER
        </h2>
        <p className="text-lg text-gray-800 mb-6 max-w-3xl">
          Projetos com mais de 30 metros ou próximos de aeródromos exigem, por lei, análise técnica da Aeronáutica. Muitos profissionais descobrem isso apenas após notificações ou embargos.
        </p>

        <ul className="list-disc pl-5 text-gray-700 mb-10 space-y-2">
          <li>Antenas, gruas ou caixas d’água elevadas?</li>
          <li>Torres ou estruturas provisórias acima de 30 metros?</li>
          <li>Obras em regiões próximas de aeroportos ou helipontos?</li>
        </ul>

        <div className="flex flex-wrap gap-4">
          <a
            href="/blog/minha-obra-precisa-de-aprovacao"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-800 transition text-center w-full sm:w-auto"
          >
            Minha obra precisa de aprovação? →
          </a>

          <a
            href="/blog/o-que-e-opea"
            className="inline-block bg-sky-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-sky-600 transition text-center w-full sm:w-auto"
          >
            O que é OPEA? →
          </a>
        </div>
      </div>
    </section>
  );
}
