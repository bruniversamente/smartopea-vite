"use client";

import { useEffect, useState } from "react";

export default function PerfilPage() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [mostrarFormSenha, setMostrarFormSenha] = useState(false);

  const [senhaAtual, setSenhaAtual] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmacao, setConfirmacao] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const emailLocal = localStorage.getItem("email");
    if (emailLocal) {
      setEmail(emailLocal);
      fetch(`http://localhost:1337/api/simulacaos?filters[email][$eq]=${emailLocal}`)
        .then((res) => res.json())
        .then((data) => {
          const nomeCliente = data?.data?.[0]?.attributes?.nome || "";
          setNome(nomeCliente);
        });
    }
  }, []);

  const handleTrocarSenha = async () => {
    setMensagem("");

    if (!senhaAtual || !novaSenha || !confirmacao) {
      setMensagem("Preencha todos os campos.");
      return;
    }

    if (novaSenha !== confirmacao) {
      setMensagem("A nova senha e a confirmação não coincidem.");
      return;
    }

    const response = await fetch("/api/login", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, senhaAtual, novaSenha }),
    });

    const data = await response.json();

    if (response.ok) {
      setMensagem("Senha alterada com sucesso!");
      setSenhaAtual("");
      setNovaSenha("");
      setConfirmacao("");
    } else {
      setMensagem(data?.erro || "Erro ao alterar senha.");
    }
  };

  return (
    <main className="px-6 py-10 bg-[#f8fafc]">
      <div className="max-w-[1024px] mx-auto bg-gradient-to-br from-white to-[#f0f4ff] shadow-md rounded-2xl p-10 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">👤 Perfil</h2>

        <div className="text-gray-700 space-y-1">
          <p><strong>Nome:</strong> {nome || "—"}</p>
          <p><strong>E-mail:</strong> {email || "—"}</p>
        </div>

        <button
          onClick={() => setMostrarFormSenha((prev) => !prev)}
          className="text-blue-600 hover:underline text-sm"
        >
          🔒 Alterar Senha
        </button>

        {mostrarFormSenha && (
          <div className="mt-6 bg-white rounded-xl p-6 shadow-md w-full max-w-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Alterar Senha</h3>

            <label className="block mb-1 text-sm text-gray-600">Senha atual:</label>
            <input
              type="password"
              className="w-full mb-4 px-3 py-2 border rounded text-sm"
              value={senhaAtual}
              onChange={(e) => setSenhaAtual(e.target.value)}
            />

            <label className="block mb-1 text-sm text-gray-600">Nova senha:</label>
            <input
              type="password"
              className="w-full mb-4 px-3 py-2 border rounded text-sm"
              value={novaSenha}
              onChange={(e) => setNovaSenha(e.target.value)}
            />

            <label className="block mb-1 text-sm text-gray-600">Confirme a nova senha:</label>
            <input
              type="password"
              className="w-full mb-4 px-3 py-2 border rounded text-sm"
              value={confirmacao}
              onChange={(e) => setConfirmacao(e.target.value)}
            />

            <button
              onClick={handleTrocarSenha}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-xl text-sm font-semibold shadow transition w-full"
            >
              Alterar Senha
            </button>

            {mensagem && (
              <p className="mt-4 text-sm text-gray-700">{mensagem}</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
