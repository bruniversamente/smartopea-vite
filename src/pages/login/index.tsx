import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    // TODO: integrar com sua API (ex.: Strapi /auth/local)
    alert("Login de demonstração — conecte ao seu backend.");
  };

  return (
    <section className="max-w-md mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold mb-6">Entrar</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">E-mail</label>
          <input value={email} onChange={e => setEmail(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" required />
        </div>
        <div>
          <label className="block text-sm font-medium">Senha</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="mt-1 w-full border rounded px-3 py-2" required />
        </div>
        <button className="px-4 py-2 rounded bg-gray-900 text-white w-full">Acessar</button>
      </form>
    </section>
  );
}

// Estas páginas são independentes. Importe no seu roteador principal (main.tsx).
