'use client';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function EnterprisePage() {
  return (
    <>
      <Header />
      <main className="bg-[#f5f5f7] text-gray-800 font-sans">
        <section className="max-w-[1024px] mx-auto px-6 py-20">
          <h1 className="text-4xl font-bold mb-6">Plano Enterprise</h1>
          <p className="text-lg text-gray-700 mb-10 max-w-3xl">
            Para empresas com múltiplos projetos, foco em escala, integração e performance regulatória.
          </p>

          <div className="bg-gradient-to-br from-[#edf3f9] to-[#dbe8f5] rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">Ideal para grandes operações</h2>
            <ul className="text-sm text-gray-700 space-y-3">
              <li className="flex justify-between"><span>Painel multiusuário com controle de equipe</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600"><path d="M5 13l4 4L19 7" /></svg></li>
              <li className="flex justify-between"><span>Relatórios gerenciais e exportação de dados</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600"><path d="M5 13l4 4L19 7" /></svg></li>
              <li className="flex justify-between"><span>Suporte prioritário com SLA definido</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600"><path d="M5 13l4 4L19 7" /></svg></li>
              <li className="flex justify-between"><span>Integração via API com seu sistema</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600"><path d="M5 13l4 4L19 7" /></svg></li>
              <li className="flex justify-between"><span>Pacotes com volume mensal de processos</span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-blue-600"><path d="M5 13l4 4L19 7" /></svg></li>
            </ul>
          </div>

          <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Solicite Apresentação</h2>
            <form className="space-y-4">
              <div>
                <label className="block mb-1 font-medium">Nome da empresa</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block mb-1 font-medium">E-mail corporativo</label>
                <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Website ou perfil LinkedIn</label>
                <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Número estimado de projetos OPEA por mês</label>
                <input type="number" className="w-full p-3 border border-gray-300 rounded-lg" />
              </div>
              <div>
                <label className="block mb-1 font-medium">Mensagem ou necessidade específica</label>
                <textarea className="w-full p-3 border border-gray-300 rounded-lg" rows={4}></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
              >
                Agendar apresentação personalizada
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
