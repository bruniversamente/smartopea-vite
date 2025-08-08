'use client';

import { useRouter } from 'next/navigation';
import Header from "../components/Header";
import Footer from "../components/Footer";
import CardApple from "../components/CardApple";
import ButtonApple1 from "../components/ButtonApple1";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";

export default function SolucoesPage() {
  const router = useRouter();

  return (
    <>
      <Header />

      <main className="bg-[#f5f5f7] pt-28 pb-24 text-gray-800 font-[Inter]">
        <section className="max-w-[1280px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nossas Soluções
          </h1>
          <p className="text-lg text-gray-700 mb-12 max-w-full md:max-w-none md:w-full">
            Atuamos de forma estratégica desde a análise preliminar até a aprovação oficial do seu projeto.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-stretch gap-x-6 gap-y-8">
            {/* Estudo de Viabilidade */}
            <CardApple className="p-8 pt-6 flex flex-col justify-between min-h-[566px] w-[480px]">
              <div>
                <h2 className="text-2xl font-bold text-left text-gray-900 mb-2">
                  Estudo de Viabilidade Aeronáutica
                </h2>
                <div className="-mx-8 w-[calc(100%+4rem)] h-0.5 bg-gray-100 mb-6" />
                <p className="text-base mb-10 text-left">
                  Para quem está iniciando: analisamos a viabilidade técnica do seu projeto antes mesmo da aquisição do terreno ou do protocolo na prefeitura.
                </p>
                <p className="font-semibold text-sm mb-4">Aplicações típicas:</p>
                <ul className="text-sm space-y-3">
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Prospecção de terrenos com segurança técnica</li>
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Estudos de viabilidade para investidores</li>
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Avaliação prévia com base no PBZPA ou PBZPANA</li>
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Evita retrabalho, embargos e gastos desnecessários</li>
                </ul>
              </div>
              <ButtonApple1 href="/contato">Solicitar Estudo</ButtonApple1>


            </CardApple>

            {/* Aprovação OPEA */}
            <CardApple className="p-8 pt-6 flex flex-col justify-between min-h-[566px] w-[480px]">
              <div>
                <h2 className="text-2xl font-bold text-left text-gray-900 mb-2">
                  Aprovação Aeronáutica (OPEA)
                </h2>
                <div className="-mx-8 w-[calc(100%+4rem)] h-0.5 bg-gray-100 mb-6" />
                <p className="text-base mb-10 text-left">
                  Para quem já possui projeto e precisa de anuência do COMAER. Cuidamos de todo o processo técnico e regulatório.
                </p>
                <p className="font-semibold text-sm mb-4">Inclui:</p>
                <ul className="text-sm space-y-3">
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Pré-análise técnica com base no SysAGA</li>
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Preparação e submissão do processo</li>
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Acompanhamento no COMAER (COMAR)</li>
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Parecer técnico e documentação final</li>
                  <li className="flex items-start gap-2"><svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-green-600 mt-[2px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg> Painel online de acompanhamento</li>
                </ul>
              </div>
              <ButtonApple1 href="/simulador">Simular Aprovação</ButtonApple1>
            </CardApple>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
