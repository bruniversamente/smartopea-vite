"use client";

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface Documento {
  id: number;
  name: string;
  url: string;
}

interface Processo {
  id?: number;
  nomeEmpreendimento?: string;
  enderecoObjeto?: string;
  latitude?: string;
  longitude?: string;
  altura?: number;
  tipologia?: string;
  material?: string;
  situacaoObra?: string;
  dataInicioObra?: string;
  dataFimObra?: string;
  equipamentosTemporarios?: boolean;
  detalhesEquipamentos?: string;
  statusProcesso?: string;
  createdAt?: string;

  nomeProprietario?: string;
  cpfCnpj?: string;
  enderecoProprietario?: string;
  telefoneProprietario?: string;
  emailProprietario?: string;

  contratoSocial?: Documento | Documento[];
  termoOutorga?: Documento | Documento[];

  levantamentoTopografico?: Documento | Documento[];
  implantacaoProjeto?: Documento | Documento[];
  elevacaoCorteProjeto?: Documento | Documento[];
  imagensTerreno?: Documento | Documento[];
  arquivosComplementares?: Documento | Documento[];
}

export default function ProcessoDetalhadoPage() {
  const params = useParams();
  const documentId = (params?.documentId || "") as string;
  const router = useRouter();
  const [processo, setProcesso] = useState<Processo | null>(null);
  const [notFound, setNotFound] = useState(false);

  const strapiURL = (process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337").replace(/\/$/, "");

  useEffect(() => {
    if (!documentId) return;

    fetch(`/api/processos/${documentId}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data?.data) {
          setNotFound(true);
        } else {
          const processoBruto = data.data;
          setProcesso({
            id: processoBruto.id,
            ...processoBruto,
          });
        }
      })
      .catch(() => setNotFound(true));
  }, [documentId]);

  const renderArquivos = (docs: Documento | Documento[] | undefined) => {
    if (!docs) return null;
    const lista = Array.isArray(docs) ? docs : [docs];
    return (
      <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-blue-700">
        {lista.map((doc, index) => (
          <li key={doc.id ?? `${doc.url}-${index}`}>
            <a
              href={`${strapiURL}${doc.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-900"
            >
              {doc.name}
            </a>
          </li>
        ))}
      </ul>
    );
  };

  if (notFound) {
    return (
      <div className="p-10 text-center text-red-600">
        <h1 className="text-xl font-bold">❌ Processo não encontrado</h1>
        <p>Verifique o link ou retorne ao painel.</p>
      </div>
    );
  }

  if (!processo) {
    return (
      <div className="p-10 text-center text-gray-500">
        <div className="animate-spin w-6 h-6 border-4 border-current border-t-transparent rounded-full text-blue-600" />
        <p className="mt-2">Carregando processo...</p>
      </div>
    );
  }

  return (
    <main className="px-6 py-10 bg-[#f8fafc]">
      <div className="max-w-[1024px] mx-auto space-y-8">
        <button
          onClick={() => router.push("/painel/meus-processos")}
          className="inline-flex items-center text-sm text-blue-600 hover:underline"
        >
          ← Voltar para Meus Processos
        </button>

        <h1 className="text-2xl font-bold text-gray-900">📄 Detalhes do Processo</h1>

        {/* 🏗️ Objeto */}
        <div className="bg-gradient-to-br from-white to-[#f0f4ff] rounded-2xl shadow-md p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div><strong className="text-gray-700">Empreendimento:</strong><p>{processo.nomeEmpreendimento || "—"}</p></div>
          <div><strong className="text-gray-700">Endereço:</strong><p>{processo.enderecoObjeto || "—"}</p></div>
          <div><strong className="text-gray-700">Latitude:</strong><p>{processo.latitude || "—"}</p></div>
          <div><strong className="text-gray-700">Longitude:</strong><p>{processo.longitude || "—"}</p></div>
          <div><strong className="text-gray-700">Tipologia:</strong><p>{processo.tipologia || "—"}</p></div>
          <div><strong className="text-gray-700">Material:</strong><p>{processo.material || "—"}</p></div>
          <div><strong className="text-gray-700">Situação da Obra:</strong><p>{processo.situacaoObra || "—"}</p></div>
          <div><strong className="text-gray-700">Altura:</strong><p>{typeof processo.altura === "number" ? `${processo.altura} m` : "—"}</p></div>
          <div><strong className="text-gray-700">Data Início:</strong><p>{processo.dataInicioObra || "—"}</p></div>
          <div><strong className="text-gray-700">Data Término:</strong><p>{processo.dataFimObra || "—"}</p></div>
          <div><strong className="text-gray-700">Equip. Temporários?</strong><p>{processo.equipamentosTemporarios ? "Sim" : "Não"}</p></div>
          <div className="md:col-span-2"><strong className="text-gray-700">Detalhes dos Equipamentos:</strong><p>{processo.detalhesEquipamentos || "—"}</p></div>
        </div>

        {/* 👤 Proprietário */}
        <div className="bg-gradient-to-br from-white to-[#f8faff] rounded-2xl shadow-md p-8 space-y-1">
          <h2 className="text-lg font-semibold mb-3">👤 Dados do Proprietário</h2>
          <p><strong className="text-gray-700">Nome:</strong> {processo.nomeProprietario || "—"}</p>
          <p><strong className="text-gray-700">CPF/CNPJ:</strong> {processo.cpfCnpj || "—"}</p>
          <p><strong className="text-gray-700">Endereço:</strong> {processo.enderecoProprietario || "—"}</p>
          <p><strong className="text-gray-700">Telefone:</strong> {processo.telefoneProprietario || "—"}</p>
          <p><strong className="text-gray-700">Email:</strong> {processo.emailProprietario || "—"}</p>
        </div>

        {/* 📎 Arquivos Etapa 1 */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <strong className="text-gray-800">Levantamento topográfico (.dwg):</strong>
            {renderArquivos(processo.levantamentoTopografico)}
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <strong className="text-gray-800">Implantação do projeto (.dwg):</strong>
            {renderArquivos(processo.implantacaoProjeto)}
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <strong className="text-gray-800">Elevação ou corte do projeto (.dwg):</strong>
            {renderArquivos(processo.elevacaoCorteProjeto)}
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <strong className="text-gray-800">Imagens do terreno:</strong>
            {renderArquivos(processo.imagensTerreno)}
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <strong className="text-gray-800">Arquivos complementares:</strong>
            {renderArquivos(processo.arquivosComplementares)}
          </div>
        </div>

        {/* 📎 Arquivos Contratuais */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow p-6">
            <strong className="text-gray-800">Contrato Social:</strong>
            {renderArquivos(processo.contratoSocial)}
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <strong className="text-gray-800">Termo de Outorga:</strong>
            {renderArquivos(processo.termoOutorga)}
          </div>
        </div>

        {/* 📌 Status e Data */}
        <div className="text-sm text-gray-600 bg-white rounded-xl shadow p-6">
          <p><strong>Status do Processo:</strong> {processo.statusProcesso || "—"}</p>
          <p><strong>Data de Envio:</strong> {processo.createdAt ? new Date(processo.createdAt).toLocaleDateString("pt-BR") : "—"}</p>
        </div>
      </div>
    </main>
  );
}
