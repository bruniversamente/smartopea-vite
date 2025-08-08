"use client";

import { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LoadScript, Libraries } from "@react-google-maps/api";
import EnderecoAutocompleteGoogle from "../../components/EnderecoAutocompleteGoogle";
import CampoTexto from "../../components/CampoTexto";
import CampoSelect from "../../components/CampoSelect";
import CampoTextarea from "../../components/CampoTextarea";
import CampoFile from "../../components/CampoFile";

interface FormFields {
  email: string;
  nomeEmpreendimento: string;
  enderecoObjeto: string;
  telefoneObjeto: string;
  tipologia: string;
  material: string;
  situacaoObra: string;
  dataInicioObra: string;
  dataFimObra: string;
  equipamentosTemporarios: boolean;
  detalhesEquipamentos: string;
  nomeProprietario: string;
  cpfCnpj: string;
  enderecoProprietario: string;
  telefoneProprietario: string;
  emailProprietario: string;
  contratoSocial: File | null;
  termoOutorga: File | null;
  latitude?: string;
  longitude?: string;
  levantamentoTopografico: File | null;
  implantacaoProjeto: File | null;
  elevacaoProjeto: File | null;
  imagensTerreno: File | null;
  arquivosComplementares: File | null;
}

export default function CadastroOPEAForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [tipoDocumento, setTipoDocumento] = useState<"cpf" | "cnpj">("cpf");

  const [formData, setFormData] = useState<FormFields>({
    email: "",
    nomeEmpreendimento: "",
    enderecoObjeto: "",
    telefoneObjeto: "",
    tipologia: "",
    material: "",
    situacaoObra: "",
    dataInicioObra: "",
    dataFimObra: "",
    equipamentosTemporarios: false,
    detalhesEquipamentos: "",
    nomeProprietario: "",
    cpfCnpj: "",
    enderecoProprietario: "",
    telefoneProprietario: "",
    emailProprietario: "",
    contratoSocial: null,
    termoOutorga: null,
    latitude: "",
    longitude: "",
    levantamentoTopografico: null,
    implantacaoProjeto: null,
    elevacaoProjeto: null,
    imagensTerreno: null,
    arquivosComplementares: null,
  });

  const googleLibraries: Libraries = useMemo(() => ["places"], []);

  useEffect(() => {
    const email = localStorage.getItem("email");
    if (email) setFormData((prev) => ({ ...prev, email }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const name = target.name as keyof FormFields;
    let value =
      target.type === "checkbox"
        ? (target as HTMLInputElement).checked
        : target.type === "file"
        ? (target as HTMLInputElement).files?.[0] || null
        : target.value;

    const onlyDigits = (str: string) => str.replace(/\D/g, "");

    if (name === "cpfCnpj") {
      const digits = onlyDigits(String(value));
      if (tipoDocumento === "cpf") {
        value = digits.slice(0, 11)
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d)/, "$1.$2")
          .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      } else {
        value = digits.slice(0, 14)
          .replace(/^(\d{2})(\d)/, "$1.$2")
          .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
          .replace(/\.(\d{3})(\d)/, ".$1/$2")
          .replace(/(\d{4})(\d)/, "$1-$2");
      }
    }

    if (name === "telefoneObjeto" || name === "telefoneProprietario") {
      const digits = onlyDigits(String(value));
      value = digits.slice(0, 11)
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const data = new FormData();
      for (const key in formData) {
        const value = formData[key as keyof FormFields];
        if (value !== null && value !== undefined) {
          data.append(key, value as any);
        }
      }

      const res = await fetch("/api/processos/novo", {
        method: "POST",
        body: data,
      });

      if (!res.ok) {
        console.error("Erro ao enviar:", await res.text());
        alert("Erro ao enviar o cadastro. Tente novamente.");
        setLoading(false);
        return;
      }

      const json = await res.json();
      console.log("✅ Enviado com sucesso:", json);
      router.push("/painel/meus-processos");
    } catch (err) {
      console.error("Erro inesperado:", err);
      alert("Erro inesperado ao enviar cadastro.");
      setLoading(false);
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDxvOo0hijPKnpYjabrIzxgdZ21w0kZjBY" libraries={googleLibraries}>
      <main className="min-h-screen bg-[#f8fafc] px-6 py-12">
        <div className="max-w-[1024px] mx-auto bg-gradient-to-br from-white to-[#f0f4ff] shadow-md rounded-2xl p-10 space-y-6">
          <h1 className="text-2xl font-bold text-gray-900">📋 Cadastro de OPEA — Etapa {step}/4</h1>

          {step === 1 && (
            <>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">📍 Dados do Objeto</h2>
              <CampoTexto name="nomeEmpreendimento" value={formData.nomeEmpreendimento} onChange={handleChange} label="Nome do Empreendimento" placeholder="Ex: Residencial Aurora" />
              <label className="block mb-4">
                <span className="block mb-1 font-medium">Endereço completo da obra</span>
                <EnderecoAutocompleteGoogle onSelecionado={(info) => setFormData((prev) => ({ ...prev, enderecoObjeto: info.endereco }))} />
              </label>
              <CampoTexto name="telefoneObjeto" value={formData.telefoneObjeto} onChange={handleChange} label="Telefone" placeholder="(41) 99999-0000" inputMode="numeric" pattern="[0-9]*" />
              <CampoTexto name="tipologia" value={formData.tipologia} onChange={handleChange} label="Tipologia" placeholder="Ex: Edifício Comercial" />
              <CampoTexto name="material" value={formData.material} onChange={handleChange} label="Material" placeholder="Ex: Concreto Armado" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CampoTexto name="latitude" value={formData.latitude || ""} onChange={handleChange} label="Latitude (opcional)" placeholder="-25.4284" />
                <CampoTexto name="longitude" value={formData.longitude || ""} onChange={handleChange} label="Longitude (opcional)" placeholder="-49.2733" />
              </div>

              <CampoFile name="levantamentoTopografico" onChange={handleChange} label="📁 Levantamento topográfico do terreno (.dwg)" />
              <CampoFile name="implantacaoProjeto" onChange={handleChange} label="📁 Implantação do projeto (.dwg)" />
              <CampoFile name="elevacaoProjeto" onChange={handleChange} label="📁 Elevação ou corte do projeto (.dwg)" />
              <CampoFile name="imagensTerreno" onChange={handleChange} label="📁 Imagens do terreno" />
              <CampoFile name="arquivosComplementares" onChange={handleChange} label="📁 Arquivos complementares" />
            </>
          )}

          {step === 2 && (
  <>
    <h2 className="text-lg font-semibold text-gray-800 mb-3">🏗️ Implantação da Obra</h2>

    <CampoSelect
      name="situacaoObra"
      value={formData.situacaoObra}
      onChange={handleChange}
      label="Situação da Obra"
    >
      <option value="">Selecione...</option>
      <option value="Não Iniciada">Não Iniciada</option>
      <option value="Em Andamento">Em Andamento</option>
      <option value="Concluída">Concluída</option>
    </CampoSelect>

    <CampoTexto
      name="dataInicioObra"
      value={formData.dataInicioObra}
      onChange={handleChange}
      label="Data de Início da Obra"
      type="date"
    />
    <CampoTexto
      name="dataFimObra"
      value={formData.dataFimObra}
      onChange={handleChange}
      label="Data de Término da Obra"
      type="date"
    />

    <CampoSelect
      name="equipamentosTemporarios"
      value={formData.equipamentosTemporarios ? "sim" : "nao"}
      onChange={(e) =>
        setFormData((prev) => ({
          ...prev,
          equipamentosTemporarios: e.target.value === "sim",
        }))
      }
      label="Equipamentos Temporários?"
    >
      <option value="nao">Não</option>
      <option value="sim">Sim</option>
    </CampoSelect>

    {formData.equipamentosTemporarios && (
      <CampoTextarea
        name="detalhesEquipamentos"
        value={formData.detalhesEquipamentos}
        onChange={handleChange}
        label="Detalhes dos Equipamentos"
        placeholder="Ex: Guindaste com 30m de altura para içamento de materiais"
      />
    )}
  </>
)}

          {step === 3 && (
            <>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">👤 Dados do Interessado</h2>
              <div className="mb-4">
                <span className="block font-medium mb-1">Tipo de Documento</span>
                <label className="mr-4">
                  <input type="radio" name="tipoDocumento" value="cpf" checked={tipoDocumento === "cpf"} onChange={() => { setTipoDocumento("cpf"); setFormData((prev) => ({ ...prev, cpfCnpj: "" })); }} /> CPF
                </label>
                <label>
                  <input type="radio" name="tipoDocumento" value="cnpj" checked={tipoDocumento === "cnpj"} onChange={() => { setTipoDocumento("cnpj"); setFormData((prev) => ({ ...prev, cpfCnpj: "" })); }} /> CNPJ
                </label>
              </div>
              <CampoTexto name="cpfCnpj" value={formData.cpfCnpj} onChange={handleChange} label={tipoDocumento === "cnpj" ? "CNPJ" : "CPF"} placeholder={tipoDocumento === "cnpj" ? "00.000.000/0001-00" : "000.000.000-00"} inputMode="numeric" pattern="[0-9]*" />
              <CampoTexto name="nomeProprietario" value={formData.nomeProprietario} onChange={handleChange} label={tipoDocumento === "cnpj" ? "Razão Social" : "Nome do Proprietário"} placeholder={tipoDocumento === "cnpj" ? "Ex: Empresa XYZ LTDA" : "Ex: João da Silva"} />
              <label className="block mb-4">
                <span className="block mb-1 font-medium">Endereço do Proprietário</span>
                <EnderecoAutocompleteGoogle onSelecionado={(info) => setFormData((prev) => ({ ...prev, enderecoProprietario: info.endereco }))} />
              </label>
              <CampoTexto name="telefoneProprietario" value={formData.telefoneProprietario} onChange={handleChange} label="Telefone do Proprietário" placeholder="(41) 98888-0000" inputMode="numeric" pattern="[0-9]*" />
              <CampoTexto name="emailProprietario" value={formData.emailProprietario} onChange={handleChange} label="E-mail do Proprietário" placeholder="Ex: joao@email.com" />
              <CampoFile name="contratoSocial" onChange={handleChange} label="Cópia do Contrato Social" />
              <CampoFile name="termoOutorga" onChange={handleChange} label="Termo de Outorga de Poderes" />
            </>
          )}

          {step === 4 && (
            <>
              <h2 className="text-lg font-semibold text-gray-800 mb-3">📬 Confirmação</h2>
              <p className="text-gray-600 text-sm mb-4">
                Ao enviar este cadastro, a equipe smartOPEA dará andamento à análise técnica. Você poderá acompanhar em{" "}
                <Link href="/painel/meus-processos" className="text-blue-600 underline">Meus Processos</Link>.
              </p>
            </>
          )}

           {/* Botões de navegação */}
          <div className="flex justify-between items-center mt-8">
            {step > 1 && (
              <button onClick={() => setStep(step - 1)} className="text-blue-700 hover:underline text-sm font-medium" disabled={loading}>
                ← Voltar
              </button>
            )}
            {step < 4 ? (
              <button onClick={() => setStep(step + 1)} className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl text-sm font-semibold shadow transition" disabled={loading}>
                Próximo →
              </button>
            ) : (
              <button onClick={handleSubmit} className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl text-sm font-semibold shadow transition" disabled={loading}>
                {loading ? "Enviando..." : "Enviar Cadastro"}
              </button>
            )}
          </div>
        </div>
      </main>
    </LoadScript>
  );
}