"use client";

import { Typewriter } from "react-simple-typewriter";

export default function HeroSmartOPEA() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 bg-white text-gray-900">
      {/* Headline estratégica */}
      <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-gray-800">
        Descubra se sua obra<br />
        precisa de aprovação aeronáutica
      </h1>


      {/* Caixa com typewriter e botão */}
      <div
        className="bg-white shadow-xl rounded-3xl px-6 py-6 flex items-center gap-4 w-full max-w-2xl"
        style={{ border: "1px solid #f7f7f7" }}
      >
        <span className="text-gray-700 text-base md:text-lg flex-1 text-left leading-snug">
          <Typewriter
            words={[
              "Verifique se sua obra precisa de um processo OPEA",
              "Simule gratuitamente e receba um parecer técnico",
              "Evite embargos com análise prévia"
            ]}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={40}
            deleteSpeed={30}
            delaySpeed={2000}
          />
        </span>
        <a
          href="/simulador"
          className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full transition whitespace-nowrap"
        >
          Simular Agora
        </a>
      </div>
    </section>
  );
}
