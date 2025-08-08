import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

interface Documento {
  id: number;
  name: string;
  url: string;
}

interface Processo {
  id?: number;
  documentId?: string;
  nomeEmpreendimento?: string;
  enderecoObjeto?: string;
  altura?: number;
  tipologia?: string;
  material?: string;
  situacaoObra?: string;
  detalhesEquipamento?: string;
  statusProcesso?: string;
  createdAt?: string;
  nomeProprietario?: string;
  cpfCnpj?: string;
  enderecoProprietario?: string;
  telefoneProprietario?: string;
  emailProprietario?: string;
  contratoSocial?: Documento | Documento[];
  termoOutorga?: Documento | Documento[];
}

export default function ProcessoDetalhe() {
  const { documentId } = useParams();
  const [processo, setProcesso] = useState<Processo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: trocar por fetch real no Strapi usando documentId
    // Mock simulado apenas para compilar/rodar sem erros
    const mock: Processo = {
      id: 1,
      documentId,
      nomeEmpreendimento: "Torre Sul",
      enderecoObjeto: "Av. Brasil, 1000",
      altura: 85,
      tipologia: "Edifício",
      material: "Concreto",
      situacaoObra: "Projeto",
      detalhesEquipamento: "Grua temporária durante 6 meses",
      statusProcesso: "Em análise",
      createdAt: "2025-08-01",
      nomeProprietario: "ACME Inc.",
      cpfCnpj: "12.345.678/0001-90",
      enderecoProprietario: "Rua X, 123",
      telefoneProprietario: "(41) 99999-0000",
      emailProprietario: "contato@acme.com",
      contratoSocial: { id: 10, name: "ContratoSocial.pdf", url: "/uploads/ContratoSocial.pdf" },
      termoOutorga: { id: 20, name: "TermoOutorga.pdf", url: "/uploads/TermoOutorga.pdf" },
    };
    setTimeout(() => { setProcesso(mock); setLoading(false); }, 300);
  }, [documentId]);

  if (loading) return <div>Carregando…</div>;
  if (!processo) return <div>Processo não encontrado.</div>;

  function renderDocs(doc?: Documento | Documento[]) {
    if (!doc) return <span className="text-gray-500">—</span>;
    const docs = Array.isArray(doc) ? doc : [doc];
    return (
      <ul className="list-disc pl-5">
        {docs.map(d => (
          <li key={d.id}>
            <a className="text-blue-600 hover:underline" href={d.url} target="_blank" rel="noreferrer">
              {d.name}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <section className="space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">
          {processo.nomeEmpreendimento} <span className="text-gray-500 text-base">({processo.documentId})</span>
        </h1>
        <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-sm">
          {processo.statusProcesso}
        </span>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <h2 className="text-lg font-medium">Dados do Projeto</h2>
          <div><span className="text-gray-600">Endereço:</span> {processo.enderecoObjeto}</div>
          <div><span className="text-gray-600">Altura:</span> {processo.altura} m</div>
          <div><span className="text-gray-600">Tipologia:</span> {processo.tipologia}</div>
          <div><span className="text-gray-600">Material:</span> {processo.material}</div>
          <div><span className="text-gray-600">Situação:</span> {processo.situacaoObra}</div>
          <div><span className="text-gray-600">Criado em:</span> {processo.createdAt}</div>
        </div>

        <div className="space-y-3">
          <h2 className="text-lg font-medium">Proprietário</h2>
          <div><span className="text-gray-600">Nome:</span> {processo.nomeProprietario}</div>
          <div><span className="text-gray-600">CPF/CNPJ:</span> {processo.cpfCnpj}</div>
          <div><span className="text-gray-600">Endereço:</span> {processo.enderecoProprietario}</div>
          <div><span className="text-gray-600">Telefone:</span> {processo.telefoneProprietario}</div>
          <div><span className="text-gray-600">E-mail:</span> {processo.emailProprietario}</div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-lg font-medium">Detalhes</h2>
        <p className="text-gray-700 whitespace-pre-wrap">{processo.detalhesEquipamento}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-medium">Contrato Social</h3>
          {renderDocs(processo.contratoSocial)}
        </div>
        <div>
          <h3 className="font-medium">Termo de Outorga</h3>
          {renderDocs(processo.termoOutorga)}
        </div>
      </div>
    </section>
  );
}
