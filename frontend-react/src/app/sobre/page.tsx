// src/app/sobre/page.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/layout/Section";
import { ContainerWide } from "../components/layout/Containers";

export default function SobrePage() {
  return (
    <>
      <Header />
      <main className="text-gray-800 font-sans">
        {/* Introdução */}
        <Section variant="white" className="pt-28 pb-24">
          <ContainerWide>
            <motion.div
              className="bg-gradient-to-br from-white to-[#f0f4ff] rounded-2xl p-8 shadow-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl font-bold text-gray-900 mb-6">Sobre a smartOPEA</h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                A smartOPEA é uma plataforma digital dedicada a facilitar e automatizar o processo de Análise de Objetos Projetados no Espaço Aéreo (OPEA), tornando-o acessível, transparente e ágil para profissionais da construção civil e infraestrutura.
              </p>
            </motion.div>
          </ContainerWide>
        </Section>

        {/* Missão e Visão */}
        <Section variant="light" className="py-24">
          <ContainerWide>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#eef4fc] to-white rounded-2xl p-8 shadow-md"
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Missão e Visão</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nossa missão é simplificar o processo de aprovação aeronáutica no Brasil por meio da tecnologia e do conhecimento. Visamos ser referência nacional em soluções digitais para análise de gabarito de altura e restrições do espaço aéreo.
              </p>
            </motion.div>
          </ContainerWide>
        </Section>

        {/* Equipe Fundadora */}
        <Section variant="blue" className="py-24">
          <ContainerWide>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-[#f5faff] rounded-2xl p-8 shadow-md"
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Quem Somos</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Somos um time multidisciplinar formado por arquitetos, desenvolvedores e especialistas em regulação aeronáutica. Unimos experiência técnica e inovação para oferecer um serviço confiável e educativo.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    nome: "Bruno Nascimento",
                    cargo: "Arquiteto responsável",
                    imagem: "/equipe/bruno.jpg",
                    link: "#",
                  },
                  {
                    nome: "Marcos Adachi Tanaka",
                    cargo: "Engenheiro de software",
                    imagem: "/equipe/adachi.jpg",
                    link: "/sobre/adachi",
                  },
                  {
                    nome: "Adoniran Nascimento",
                    cargo: "Especialista SIG",
                    imagem: "/equipe/adoniran.jpg",
                    link: "/sobre/adoniran",
                  },
                ].map((pessoa, idx) => (
                  <Link
                    key={idx}
                    href={pessoa.link}
                    className="block bg-gradient-to-br from-white to-[#edf3f9] rounded-2xl p-6 shadow-md hover:shadow-xl transition hover:scale-[1.03] text-center"
                  >
                    <Image
                      src={pessoa.imagem}
                      alt={pessoa.nome}
                      width={120}
                      height={120}
                      className="rounded-full mx-auto mb-4"
                    />
                    <p className="font-bold text-lg text-gray-900">{pessoa.nome}</p>
                    <p className="text-sm text-gray-600">{pessoa.cargo}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          </ContainerWide>
        </Section>

        {/* História */}
        <Section variant="light" className="py-24">
          <ContainerWide>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-[#f1f5fb] to-white rounded-2xl p-8 shadow-md"
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">História da Empresa</h2>
              <div className="space-y-8 border-l-4 border-blue-600 pl-6">
                {[
                  {
                    ano: "2021 — Início da ideia",
                    texto: "A necessidade surgiu ao lidar com processos burocráticos de OPEA no mercado tradicional.",
                  },
                  {
                    ano: "2023 — Validação com EasyAGA",
                    texto: "Com apoio da EasyAGA, validamos um modelo digital para análise de gabarito.",
                  },
                  {
                    ano: "2025 — Lançamento da smartOPEA",
                    texto: "Lançamos oficialmente a plataforma com simulador gratuito e painel de acompanhamento.",
                  },
                ].map((evento, idx) => (
                  <div key={idx}>
                    <h3 className="text-lg font-semibold text-gray-900">{evento.ano}</h3>
                    <p className="text-gray-700 leading-relaxed">{evento.texto}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </ContainerWide>
        </Section>

        {/* EasyAGA */}
        <Section variant="white" className="py-24">
          <ContainerWide>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white to-[#f2f7ff] rounded-2xl p-8 shadow-md"
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-4">Grupo EasyAGA</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                A smartOPEA é uma spin-off tecnológica do grupo EasyAGA, empresa com histórico consolidado em projetos regulatórios aeronáuticos. Ao aliar o know-how da EasyAGA à inovação digital, entregamos uma solução robusta, validada e em constante evolução.
              </p>
            </motion.div>
          </ContainerWide>
        </Section>
      </main>
      <Footer />
    </>
  );
}