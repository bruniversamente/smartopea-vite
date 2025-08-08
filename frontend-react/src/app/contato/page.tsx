"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ConsentimentoLGPD from "../components/ConsentimentoLGPD";

export default function ContatoPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage("");

    const form = e.currentTarget;
    const nome = (form.elements.namedItem("nome") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const mensagem = (form.elements.namedItem("mensagem") as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/mensagens", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nome, email, mensagem }),
      });

      if (!res.ok) throw new Error("Erro ao enviar");

      setStatusMessage("Mensagem enviada com sucesso!");
      form.reset();
    } catch (err) {
      setStatusMessage("❌ Erro ao enviar mensagem. Tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />

      <main className="bg-white pt-28 pb-24 text-gray-800 font-sans">
        <section className="max-w-[640px] mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Fale Conosco
          </h1>
          <p className="text-lg text-gray-700 mb-10">
            Preencha o formulário abaixo e nossa equipe entrará em contato com você o mais breve possível.
          </p>

          <div className="bg-gradient-to-br from-white to-[#e6f0ff] rounded-2xl p-8 shadow-md hover:shadow-lg transition-all">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-medium mb-1">Nome</label>
                <div className="relative">
                  <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zM4 20v-1c0-2.21 3.58-4 8-4s8 1.79 8 4v1" />
                  </svg>
                  <input name="nome" type="text" className="w-full border border-gray-300 rounded-xl px-4 py-3 pl-10" required />
                </div>
              </div>

              {/* E-mail */}
              <div>
                <label className="block text-sm font-medium mb-1">E-mail</label>
                <div className="relative">
                  <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 4h16v16H4z" />
                    <path d="M4 4l8 8 8-8" />
                  </svg>
                  <input name="email" type="email" className="w-full border border-gray-300 rounded-xl px-4 py-3 pl-10" required />
                </div>
              </div>

              {/* Mensagem */}
              <div>
                <label className="block text-sm font-medium mb-1">Mensagem</label>
                <div className="relative">
                  <svg className="absolute left-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                  <textarea name="mensagem" className="w-full border border-gray-300 rounded-xl px-4 py-3 pl-10" rows={5} required></textarea>
                </div>
              </div>

              <ConsentimentoLGPD />

              <AnimatePresence>
                {statusMessage && (
                  <motion.div
                    key="status"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="text-sm font-medium px-4 py-3 rounded-md border mt-2"
                    style={{
                      backgroundColor: statusMessage.includes("sucesso") ? "#f0fdf4" : "#fef2f2",
                      borderColor: statusMessage.includes("sucesso") ? "#86efac" : "#fca5a5",
                      color: statusMessage.includes("sucesso") ? "#166534" : "#991b1b",
                    }}
                  >
                    {statusMessage}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-3 rounded-xl font-semibold shadow-md transition text-white ${
                    isSubmitting ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                  }`}
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
