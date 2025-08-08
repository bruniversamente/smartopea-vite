"use client";

export default function NotificacoesPage() {
  return (
    <main className="px-6 py-10 bg-[#f8fafc]">
      <div className="max-w-[1024px] mx-auto bg-gradient-to-br from-white to-[#f1f5ff] shadow-md rounded-2xl p-10 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900">🔔 Notificações</h2>
        <p className="text-gray-700 text-sm">
          Aqui serão exibidas atualizações importantes dos seus processos e mensagens da equipe técnica.
        </p>

        <div className="mt-6 text-gray-500 text-sm italic">
          Nenhuma notificação no momento.
        </div>
      </div>
    </main>
  );
}
