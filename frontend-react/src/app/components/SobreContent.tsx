"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SobreContent() {
  return (
    <div className="space-y-20">
      {/* Missão e Visão */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-2">Missão e Visão</h2>
        <p>
          Nossa missão é simplificar o processo de aprovação aeronáutica no Brasil por meio da tecnologia e do conhecimento. Visamos ser referência nacional em soluções digitais para análise de gabarito de altura e restrições do espaço aéreo.
        </p>
      </motion.section>

      {/* Quem Somos */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-2">Quem Somos</h2>
        <p>
          Somos um time multidisciplinar formado por arquitetos, desenvolvedores e especialistas em regulação aeronáutica. Unimos experiência técnica e inovação para oferecer um serviço confiável e educativo.
        </p>
      </motion.section>

      {/* História com linha do tempo */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-6">História da Empresa</h2>
        <div className="border-l-2 border-blue-700 pl-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold">2021 — Início da ideia</h3>
            <p>A necessidade surgiu ao lidar com processos burocráticos de OPEA no mercado tradicional.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">2023 — Validação com EasyAGA</h3>
            <p>Com apoio da EasyAGA, validamos um modelo digital para análise de gabarito.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">2025 — Lançamento da smartOPEA</h3>
            <p>Lançamos oficialmente a plataforma com simulador gratuito e painel de acompanhamento.</p>
          </div>
        </div>
      </motion.section>

      {/* Equipe Fundadora */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-6">Equipe Fundadora</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Image
              src="/equipe/bruno.jpg"
              alt="Bruno Nascimento"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-2"
            />
            <p className="font-bold">Bruno Nascimento</p>
            <p className="text-sm text-gray-600">Arquiteto responsável</p>
          </div>
          <div className="text-center">
            <Image
              src="/equipe/adachi.jpg"
              alt="Adachi Tanaka"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-2"
            />
            <p className="font-bold">Adachi Tanaka</p>
            <p className="text-sm text-gray-600">Engenheiro de software</p>
          </div>
          <div className="text-center">
            <Image
              src="/equipe/adoniran.jpg"
              alt="Adoniran Silva"
              width={120}
              height={120}
              className="rounded-full mx-auto mb-2"
            />
            <p className="font-bold">Adoniran Silva</p>
            <p className="text-sm text-gray-600">Especialista SIG</p>
          </div>
        </div>
      </motion.section>

      {/* Relação com EasyAGA */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-2xl font-semibold mb-2">Relação com o Grupo EasyAGA</h2>
        <p>
          A smartOPEA é uma spin-off tecnológica do grupo EasyAGA, empresa com histórico consolidado em projetos regulatórios aeronáuticos. Ao aliar o know-how da EasyAGA à inovação digital, entregamos uma solução robusta, validada e em constante evolução.
        </p>
      </motion.section>
    </div>
  );
}
