"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "simulacao",
    title: "01 Simulação",
    contentTitle: "Descubra se sua obra precisa de aprovação",
    description:
      "Faça uma simulação gratuita e receba um parecer técnico por e-mail, sem compromisso.",
    color: "bg-gradient-to-br from-[#edf2f7] to-[#e0f2fe]",
  },
  {
    id: "plano",
    title: "02 Escolha do Plano",
    contentTitle: "Escolha o plano ideal",
    description: "",
    color: "bg-gradient-to-br from-[#e0f2fe] to-[#f0f9ff]",
  },
  {
    id: "submissao",
    title: "03 Submissão",
    contentTitle: "Enviamos tudo ao COMAER por você",
    description:
      "Nossa equipe revisa seus dados e protocola o processo completo junto à Aeronáutica.",
    color: "bg-gradient-to-br from-[#f0f9ff] to-[#f8fafc]",
  },
  {
    id: "acompanhamento",
    title: "04 Acompanhamento",
    contentTitle: "Acompanhe o status da sua aprovação",
    description:
      "Visualize cada etapa do processo em tempo real dentro do painel da plataforma smartOPEA.",
    color: "bg-gradient-to-br from-[#f8fafc] to-[#f1f5f9]",
  },
];

export default function ScrollTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sections.findIndex((s) => s.id === entry.target.id);
          if (entry.isIntersecting && index !== -1) {
            setActiveIndex(index);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -60% 0px",
      }
    );

    const targets = containerRef.current?.querySelectorAll<HTMLElement>("section");
    targets?.forEach((target) => observer.observe(target));
    return () => targets?.forEach((target) => observer.unobserve(target));
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto px-6 py-20">
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
        Como a smartOPEA simplifica sua aprovação
      </h2>
      <div className="flex flex-col md:flex-row gap-10">
        <ul className="md:w-1/4 space-y-4 text-sm font-medium sticky top-28 self-start">
          {sections.map((s, i) => (
            <li
              key={s.id}
              className={`cursor-pointer transition-colors border-l-2 pl-4 py-1 ${
                i === activeIndex
                  ? "text-black border-black"
                  : "text-gray-400 border-transparent"
              }`}
            >
              {s.title}
            </li>
          ))}
        </ul>

        <div ref={containerRef} className="md:w-3/4 space-y-12">
          {sections.map((s, i) => (
            <section id={s.id} key={s.id} className="scroll-mt-24">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`rounded-2xl p-10 text-gray-900 ${s.color} min-h-[250px] shadow-sm relative overflow-hidden`}
              >
                <h3 className="text-2xl font-semibold mb-3">{s.contentTitle}</h3>

                {s.id === "plano" ? (
                  <>
                    <p className="text-lg leading-relaxed mb-6 max-w-md">
                      Após a simulação gratuita, escolha o nível de suporte ideal:
                    </p>

                    <div className="flex flex-col gap-4">
                      <a href="/planos/self-service" className="block w-1/6 bg-white/50 rounded-xl px-6 py-3 shadow-md hover:shadow-lg transition text-left font-semibold text-gray-800 text-base">Self-Service</a>
                      <a href="/planos/assistido" className="block w-1/6 bg-white/50 rounded-xl px-6 py-3 shadow-md hover:shadow-lg transition text-left font-semibold text-gray-800 text-base">Assistido</a>
                      <a href="/planos/enterprise" className="block w-1/6 bg-white/50 rounded-xl px-6 py-3 shadow-md hover:shadow-lg transition text-left font-semibold text-gray-800 text-base">Enterprise</a>
                    </div>
                  </>
                ) : s.id === "simulacao" ? (
                  <>
                    <p className="text-lg max-w-md leading-relaxed mb-6">{s.description}</p>
                    <a href="/simulador" className="block w-1/6 bg-white/50 rounded-xl px-6 py-3 shadow-md hover:shadow-lg transition text-left font-semibold text-gray-800 text-base">Simulador</a>
                  </>
                ) : s.id === "submissao" ? (
                  <>
                    <p className="text-lg max-w-md leading-relaxed mb-6">{s.description}</p>
                    <a href="/blog/processos-opea" className="block w-1/2 bg-white/50 rounded-xl px-6 py-3 shadow-md hover:shadow-lg transition text-left font-semibold text-gray-800 text-base">Saiba mais sobre os processos OPEA</a>
                  </>
                ) : s.id === "acompanhamento" ? (
                  <>
                    <p className="text-lg max-w-md leading-relaxed mb-6">{s.description}</p>
                    <a href="/login" className="block w-1/6 bg-white/50 rounded-xl px-6 py-3 shadow-md hover:shadow-lg transition text-left font-semibold text-gray-800 text-base">Login</a>
                  </>
                ) : (
                  <p className="text-lg max-w-md leading-relaxed">{s.description}</p>
                )}

                <div className="absolute right-10 bottom-4 opacity-10 text-7xl font-bold">
                  0{i + 1}
                </div>
              </motion.div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
