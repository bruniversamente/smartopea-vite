'use client';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AssistidoPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-28 pb-24 text-gray-800 font-sans">
        <section className="max-w-[1280px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Plano Assistido
          </h1>
          <p className="text-lg text-gray-700 mb-12 max-w-4xl">
            A escolha ideal para quem busca suporte completo, responsabilidade técnica e acompanhamento personalizado.
          </p>

          <div className="bg-gradient-to-br from-[#d6e5ff] to-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Inclui:</h2>
            <ul className="text-sm text-gray-700 space-y-3">
              <li className="flex justify-between"><span>Atendimento técnico com especialista dedicado</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600"><path d="M5 13l4 4L19 7" /></svg></li>
              <li className="flex justify-between"><span>Emissão de RRT (Responsabilidade Técnica)</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600"><path d="M5 13l4 4L19 7" /></svg></li>
              <li className="flex justify-between"><span>Revisão completa do processo de OPEA</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600"><path d="M5 13l4 4L19 7" /></svg></li>
              <li className="flex justify-between"><span>Suporte por e-mail e WhatsApp</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600"><path d="M5 13l4 4L19 7" /></svg></li>
              <li className="flex justify-between"><span>Atualizações constantes do status</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600"><path d="M5 13l4 4L19 7" /></svg></li>
            </ul>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Solicite Atendimento</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Nome completo</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block mb-1 font-medium">E-mail</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Cidade / Estado</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Descreva brevemente seu projeto</label>
                <textarea className="w-full p-3 border border-gray-300 rounded-lg" rows={4}></textarea>
              </div>
              <button
                type="submit"
                className="mt-6 mx-auto bg-blue-500 text-white px-6 py-3 text-base font-semibold rounded-xl shadow-md hover:bg-blue-600 transition block"
              >
                Solicitar atendimento assistido
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
