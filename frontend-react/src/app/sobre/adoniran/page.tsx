"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function AdoniranPage() {
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
                src="/equipe/adoniran.jpg"
                alt="Adoniran Nascimento"
                width={120}
                height={120}
                className="rounded-full"
              />
              <div>
                <h1 className="text-4xl font-bold text-gray-900">Adoniran Nascimento</h1>
                <p className="text-lg text-gray-700 mt-1">
                  MBA | Especialista em Tráfego Aéreo e Aeródromos
                </p>
              </div>
            </div>
            <p className="text-gray-700">
              Expertise de 38 anos de carreira atuando no Gerenciamento de Tráfego Aéreo (ATM) e em Aeródromos (AGA) no Departamento de Controle do Espaço Aéreo (DECEA).
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
                <p className="font-medium">Sócio Proprietário – Easy AGA Consultoria e Treinamento Ltda</p>
                <p className="text-sm text-gray-600">04/2020 – Presente | Florianópolis-SC</p>
                <ul className="list-disc list-inside mt-1 text-gray-700">
                  <li>Implantação do heliponto Beira Mar Sul – Speedway (Blumenau-SC)</li>
                  <li>PBZPA do Aeródromo Público de Macaé/RJ</li>
                </ul>
              </div>

              <div>
                <p className="font-medium">Chefe – Seção Técnica AGA – CINDACTA II</p>
                <p className="text-sm text-gray-600">01/2016 – 12/2021 | Curitiba-PR</p>
                <ul className="list-disc list-inside mt-1 text-gray-700">
                  <li>Análises de OPEA, PBZPA, PBZPH e PZPANA para MS, PR, SC, RS</li>
                </ul>
              </div>

              <div>
                <p className="font-medium">Chefe – Subdivisão ATM – CINDACTA II</p>
                <p className="text-sm text-gray-600">01/2011 – 12/2011 | Curitiba-PR</p>
                <ul className="list-disc list-inside mt-1 text-gray-700">
                  <li>Setorização de TMA Curitiba/Florianópolis</li>
                  <li>Implantação da Navegação PBN Região Sul</li>
                </ul>
              </div>

              <div>
                <p className="font-medium">Chefe – Centro de Controle de Área Curitiba (ACC-CW)</p>
                <p className="text-sm text-gray-600">01/2009 – 12/2013 | Curitiba-PR</p>
                <ul className="list-disc list-inside mt-1 text-gray-700">
                  <li>Gerenciamento do X-4000 e SAGITARIO</li>
                  <li>Implantação do PBN nas TMA RJ/SP</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Card: Competências */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-[#f5faff] rounded-2xl p-8 shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Competências</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Gerenciamento de Tráfego Aéreo (ATM)</li>
              <li>Aeródromos (AGA)</li>
              <li>Segurança Operacional (SGSO)</li>
              <li>SAR (Busca e Salvamento)</li>
            </ul>
          </motion.div>

          {/* Card: Formação */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#f2f7ff] to-white rounded-2xl p-8 shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Formação</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>MBA em Gestão Pública – UFF (2010)</li>
              <li>Curso de Oficiais – Controle de Tráfego Aéreo (CIAAR, 1999)</li>
              <li>Licenciatura em Ciências (Matemática) – FFCL (1995)</li>
              <li>Curso de Formação de Sargentos – Controle de Tráfego Aéreo (EEAR, 1985)</li>
            </ul>
          </motion.div>

          {/* Card: Outros Cursos */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-[#eef4fc] rounded-2xl p-8 shadow-md"
          >
            <h2 className="text-2xl font-semibold mb-4">Outros Cursos</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Prevenção de Acidentes – CENIPA</li>
              <li>Gerenciamento da Segurança Operacional – CENIPA</li>
              <li>Procedimentos de Navegação Aérea – ICEA (Precisão e RNAV)</li>
              <li>Curso de Coordenação SAR – ICEA</li>
            </ul>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
}
