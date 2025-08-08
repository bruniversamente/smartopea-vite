// Novo layout com stepper visual aprimorado — estilo PowerPoint com ajustes visuais

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Processo {
  id: number;
  documentId: string;
  nomeEmpreendimento?: string;
  enderecoObjeto?: string;
  statusProcesso?: string;
  createdAt?: string;
}

const ETAPAS = [
  "Cadastro Recebido",
  "Pré-análise Enviada",
  "Pré-análise Aprovada",
  "Processo Enviado",
  "Processo Aprovado",
];

const getEtapaIndex = (status: string) => {
  switch (status) {
    case "Cadastro Recebido": return 0;
    case "Pré-análise Enviada": return 1;
    case "Pré-análise Aprovada": return 2;
    case "Processo Enviado": return 3;
    case "Processo Aprovado": return 4;
    case "Erro": return -1;
    default: return -1;
  }
};

export default function MeusProcessosPage() {
  const [processos, setProcessos] = useState<Processo[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (!email) return;

    fetch(`/api/processos?email=${encodeURIComponent(email)}`)
      .then((res) => res.json())
      .then((data) => {
        const lista = (data?.data || []).map((item: any) => ({
          id: item.id,
          ...item.attributes,
        })) as Processo[];
        setProcessos(lista);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const renderStepper = (status?: string) => {
    const indexAtual = getEtapaIndex(status || "");
    const erro = indexAtual === -1;
    const etapaTotal = ETAPAS.length;

    return (
      <div className="relative w-full px-2 mt-6">
        <div className="absolute top-[22px] left-[-70%]  right-0 h-[10px] bg-transparent z-0">
          <div
            className="absolute left-0 right-0 top-0 h-[10px] bg-gray-300 rounded-full"
            style={{ left: "calc(50% + 24px)", right: "calc(10% + 24px)" }}
          ></div>
          <div
            className="absolute top-0 h-[10px] bg-blue-500 rounded-full z-10 transition-all duration-500"
            style={{
              left: "calc(10% + 24px)",
              width: `${(indexAtual / (etapaTotal - 1)) * 80}%`
            }}
          ></div>
        </div>
        <div className="flex justify-between relative z-20 px-[10%]">
          {ETAPAS.map((etapa, idx) => {
            const isComplete = idx < indexAtual;
            const isCurrent = idx === indexAtual;
            let cor = "bg-gray-300";
            if (isComplete) cor = "bg-blue-500";
            if (isCurrent) cor = erro ? "bg-red-500" : "bg-blue-700";

            return (
              <div key={etapa} className="flex flex-col items-center text-center flex-1">
                <div className={`w-12 h-12 rounded-full text-white flex items-center justify-center text-base font-bold ${cor} shadow-md`}>
                  {isComplete ? '✓' : idx + 1}
                </div>
                <span className="text-xs mt-3 text-gray-700 font-medium text-center max-w-[80px] leading-tight">{etapa}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-20">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">📁 Meus Processos</h1>
        <p className="text-gray-600 mt-1">Acompanhe o status simplificado da sua aprovação OPEA.</p>
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-500">
          <div className="animate-spin inline-block w-6 h-6 border-4 border-current border-t-transparent rounded-full text-blue-600" />
          <p className="mt-2">Carregando...</p>
        </div>
      ) : processos.length === 0 ? (
        <div className="bg-gradient-to-br from-white to-[#f0f4ff] rounded-2xl shadow-md p-10 text-center text-gray-500">
          Nenhum processo encontrado.
        </div>
      ) : (
        <div className="space-y-24">
          {processos.map((proc) => (
            <div key={proc.id} onClick={() => router.push(`/painel/meus-processos/${proc.documentId}`)} className="cursor-pointer px-4">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">{proc.nomeEmpreendimento || "Empreendimento sem nome"}</h2>
              <p className="text-sm text-gray-600 mb-6">{proc.enderecoObjeto || "Endereço não informado"}</p>
              {renderStepper(proc.statusProcesso)}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}