"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("Login inválido");

      const data = await res.json();

      localStorage.setItem("token", data.jwt);
      localStorage.setItem("email", data.user.email);
      localStorage.setItem("username", data.user.username);

      router.push("/painel");
    } catch (err) {
      setError("E-mail ou senha incorretos.");
    }
  };

  const handleForgotPassword = () => {
    alert("Entre em contato com o suporte para redefinir sua senha.");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm"
      >
        <h1 className="text-2xl font-semibold mb-4 text-center">Acesso ao Painel</h1>

        <label className="block mb-2 text-sm font-medium">E-mail</label>
        <input
          type="email"
          className="w-full border rounded px-3 py-2 mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label className="block mb-2 text-sm font-medium">Senha</label>
        <input
          type="password"
          className="w-full border rounded px-3 py-2 mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="button"
          onClick={handleForgotPassword}
          className="text-sm text-blue-600 mb-4 hover:underline"
        >
          Esqueci minha senha
        </button>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-700 text-white py-2 rounded hover:bg-blue-800 transition"
        >
          Entrar
        </button>
      </form>
    </main>
  );
}
