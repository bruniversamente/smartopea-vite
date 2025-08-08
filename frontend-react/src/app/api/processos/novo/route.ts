import { NextResponse } from "next/server";
import { nanoid } from "nanoid";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  const STRAPI_API_URL = process.env.STRAPI_API_URL;
  const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

  if (!STRAPI_API_URL || !STRAPI_API_TOKEN) {
    return new NextResponse("Variáveis de ambiente ausentes", { status: 500 });
  }

  try {
    const form = await req.formData();

    const fields: Record<string, string> = {};
    let contratoFile: File | null = null;
    let outorgaFile: File | null = null;

    for (const [key, value] of form.entries()) {
      if (value instanceof File) {
        if (key === "contratoSocial") contratoFile = value;
        if (key === "termoOutorga") outorgaFile = value;
      } else {
        fields[key] = value;
      }
    }

    // ✅ Corrigir nomes de campos
    if ("email" in fields) {
      fields["emailCliente"] = fields["email"];
      delete fields["email"];
    }

    if ("detalhesEquipamentos" in fields) {
      fields["detalhesEquipamento"] = fields["detalhesEquipamentos"];
      delete fields["detalhesEquipamentos"];
    }

    fields["documentId"] = nanoid();

    // 📁 Upload de arquivos para o Strapi
    const uploadFile = async (file: File) => {
      const data = new FormData();
      data.append("files", file);

      const res = await fetch(`${STRAPI_API_URL}/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
        body: data,
      });

      if (!res.ok) {
        const msg = await res.text();
        console.error("❌ Erro no upload:", msg);
        throw new Error("Erro ao fazer upload");
      }

      const json = await res.json();
      return json[0]?.id;
    };

    const contratoId = contratoFile ? await uploadFile(contratoFile) : null;
    const outorgaId = outorgaFile ? await uploadFile(outorgaFile) : null;

    const payload = {
      data: {
        ...fields,
        contratoSocial: contratoId,
        termoOutorga: outorgaId,
        statusProcesso: "Cadastro Recebido",
      },
    };

    console.log("📦 Enviando payload para Strapi:", JSON.stringify(payload, null, 2));

    const res = await fetch(`${STRAPI_API_URL}/processos`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text(); // captura erro mesmo se não for JSON
      console.error("❌ Erro no envio:", text);
      return new NextResponse("Erro ao enviar dados ao Strapi", { status: 500 });
    }

    const json = await res.json();
    return NextResponse.json(json);
  } catch (err) {
    console.error("❌ Erro interno:", err);
    return new NextResponse("Erro interno ao salvar processo", { status: 500 });
  }
}
