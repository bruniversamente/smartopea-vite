// components/ComentarioPost.tsx
"use client";

import { useState } from "react";

interface ComentarioFormProps {
  postId: number;
}

export default function ComentarioPost({ postId }: ComentarioFormProps) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro("");
    setEnviado(false);

    const payload = {
      data: {
        nome,
        email,
        mensagem,
        post: postId,
        aprovado: false,
      },
    };

    try {
      const res = await fetch("http://localhost:1337/api/comentarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Erro ao enviar comentário");
      setEnviado(true);
      setNome("");
      setEmail("");
      setMensagem("");
    } catch (err) {
      setErro("Ocorreu um erro. Tente novamente mais tarde.");
    }
  };

  return (
    <div className="mt-20">
      <h2 className="text-xl font-semibold mb-4">Deixe um comentário</h2>
      {enviado && (
        <p className="text-green-600 font-medium mb-4">
          ✅ Comentário enviado! Será publicado após aprovação.
        </p>
      )}
      {erro && <p className="text-red-600 mb-4">{erro}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Seu nome"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />

        <input
          type="email"
          placeholder="Seu e-mail (opcional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />

        <textarea
          placeholder="Escreva seu comentário..."
          required
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          className="w-full px-4 py-2 border rounded min-h-[100px]"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Enviar comentário
        </button>
      </form>
    </div>
  );
}
