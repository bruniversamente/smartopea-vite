"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AdachiPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-28 pb-24 text-gray-800 font-sans">
        <section className="max-w-[1280px] mx-auto px-6 space-y-12">
          {/* Card: Apresentação */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-[#f0f4ff] rounded-2xl p-8 shadow-md"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <Image
                src="/equipe/adachi.jpg"
                alt="Marcos Kentaro Adachi"
                width={120}
                height={120}
                className="rounded-full"
              />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Marcos Kentaro Adachi</h1>
                <p className="text-lg text-gray-700 mt-1">
                  MBA | Especialista em Safety da Aviação e em Serviços de Navegação Aérea
                </p>
              </div>
            </div>
            <p className="text-gray-700">
              Mais de 30 anos integrando pessoas e gerenciando equipes de alta performance em atividades
              complexas relacionadas à aviação, à defesa aérea e ao controle de tráfego aéreo.
            </p>
          </motion.div>

          {/* Card: Experiência Profissional */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#eef4fc] to-white rounded-2xl p-8 shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Experiência Profissional</h2>

            <div className="space-y-4">
              <div>
                <p className="font-medium">Sócio Fundador – Easy AGA Consultoria e Treinamento Ltda</p>
                <p className="text-sm text-gray-600">04/2020 – Presente | Florianópolis-SC</p>
                <ul className="list-disc list-inside mt-1 text-gray-700">
                  <li>Consultoria de Safety na EPA Training Center (Curitiba-PR)</li>
                  <li>Implantação de heliponto no Hospital Santo Antônio (Blumenau-SC)</li>
                  <li>Homologação do PAPI do Aeroporto de Vitória (SBVT)</li>
                  <li>Heliponto Beira Mar Sul/Speedway, Balneário Camboriú-SC</li>
                </ul>
              </div>

              <div>
                <p className="font-medium">Membro Consultivo – Comissão de Direito Aeronáutico OAB-SC</p>
                <p className="text-sm text-gray-600">01/2021 – Presente | Florianópolis-SC</p>
              </div>

              <div>
                <p className="font-medium">Comandante – CINDACTA II</p>
                <p className="text-sm text-gray-600">01/2018 – 12/2019 | Curitiba-PR</p>
                <ul className="list-disc list-inside mt-1 text-gray-700">
                  <li>100% de conformidade em auditoria ASOCEA (2019)</li>
                  <li>Gerenciamento de 2300 pessoas nos estados do MS, PR, SC e RS</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Card: Outras Experiências */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-[#f5faff] rounded-2xl p-8 shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Outras Experiências</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Chefe da Divisão de Operações – CINDACTA II (2015–2018)</li>
              <li>Oficial de Operações – Sala Master CGNA – Jogos Olímpicos Rio 2016</li>
              <li>Coordenador do Projeto MUAC LTMPPS no ACC-CW</li>
              <li>Chefe da Subdivisão ATM – CINDACTA II (2014–2015)</li>
              <li>Projeto PBN SUL durante Copa do Mundo FIFA 2014</li>
            </ul>
          </motion.div>

          {/* Card: Competências */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#f2f7ff] to-white rounded-2xl p-8 shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Competências</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Gerenciamento de Tráfego Aéreo</li>
              <li>Defesa Aérea</li>
              <li>Aviação</li>
              <li>Aeródromos (AGA)</li>
              <li>Segurança de Voo</li>
            </ul>
          </motion.div>

          {/* Card: Formação */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-[#f0f4ff] rounded-2xl p-8 shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Formação</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>MBA em Gestão de Logística – UFF (2010)</li>
              <li>Bacharelado em Direito – UFSC (2000)</li>
              <li>Bacharelado em Ciências Aeronáuticas – AFA (1992)</li>
            </ul>
          </motion.div>

          {/* Card: Certificados */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#eef4fc] to-white rounded-2xl p-8 shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Certificados</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Piloto de Linha Aérea (PLA) e Instrutor de Voo (INVA)</li>
              <li>Piloto de Patrulha Marítima</li>
              <li>Piloto de Inspeção em Voo (GEIV)</li>
              <li>Chefe-controlador de Defesa Aérea</li>
              <li>Oficial de Segurança de Voo (OSV)</li>
            </ul>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
