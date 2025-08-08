"use client";

export default function Planos() {
  return (
    <section id="planos" className="py-20 bg-[#e8f1fc] border-y" style={{ borderColor: "#e5e5e5" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
          Encontre o plano ideal para o seu projeto
        </h2>
        <p className="text-lg text-gray-800 mb-12 max-w-2xl">
          Self-service ou suporte completo: você escolhe o melhor caminho.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Self-Service */}
          <a
            href="/planos/self-service"
            className="block bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 pt-10 shadow-md hover:shadow-xl transition hover:scale-[1.03] min-h-[320px] flex flex-col justify-between"
          >
            <div>
              <h4 className="text-2xl font-bold mb-3 text-left">Self-Service</h4>
              <p className="text-gray-800 text-base mb-6 text-left">
                Para projetos simples. Faça tudo com nosso suporte digital.
              </p>
            </div>
            <span className="inline-block bg-white text-gray-900 px-5 py-2 text-sm rounded-xl shadow-md hover:shadow-lg transition w-max">
              Saiba mais
            </span>
          </a>

          {/* Assistido */}
          <a
            href="/planos/assistido"
            className="block bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 pt-10 shadow-md hover:shadow-xl transition hover:scale-[1.03] min-h-[320px] flex flex-col justify-between"
          >
            <div>
              <h4 className="text-2xl font-bold mb-3 text-left">Assistido</h4>
              <p className="text-gray-800 text-base mb-6 text-left">
                Acompanhamento técnico por um especialista.
              </p>
            </div>
            <span className="inline-block bg-white text-gray-900 px-5 py-2 text-sm rounded-xl shadow-md hover:shadow-lg transition w-max">
              Saiba mais
            </span>
          </a>

          {/* Enterprise */}
          <a
            href="/planos/enterprise"
            className="block bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 pt-10 shadow-md hover:shadow-xl transition hover:scale-[1.03] min-h-[320px] flex flex-col justify-between"
          >
            <div>
              <h4 className="text-2xl font-bold mb-3 text-left">Enterprise</h4>
              <p className="text-gray-800 text-base mb-6 text-left">
                Para empresas com múltiplos projetos e necessidades avançadas.
              </p>
            </div>
            <span className="inline-block bg-white text-gray-900 px-5 py-2 text-sm rounded-xl shadow-md hover:shadow-lg transition w-max">
              Saiba mais
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
