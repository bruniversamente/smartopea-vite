import { useState } from "react";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e: any) => setForm({ ...form, [e.target.name]: e.target.value });
  const onSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // TODO: integrar com sua API / Strapi (cole aqui o endpoint).
      setSent(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-6">Fale com a smartOPEA</h1>
      {!sent ? (
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Nome</label>
            <input name="nome" value={form.nome} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium">E-mail</label>
            <input type="email" name="email" value={form.email} onChange={onChange} className="mt-1 w-full border rounded px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm font-medium">Mensagem</label>
            <textarea name="mensagem" value={form.mensagem} onChange={onChange} rows={5} className="mt-1 w-full border rounded px-3 py-2" required />
          </div>
          <button className="px-4 py-2 rounded bg-gray-900 text-white">Enviar</button>
        </form>
      ) : (
        <div className="p-6 rounded border bg-green-50">Recebemos sua mensagem. Em breve retornaremos!</div>
      )}
    </section>
  );
}

// Estas páginas são independentes. Importe no seu roteador principal (main.tsx).
