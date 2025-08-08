import type { NextApiRequest, NextApiResponse } from "next";
import { HumanMessage } from "@langchain/core/messages";
import { ChatOllama } from "@langchain/community/chat_models/ollama";
import axios from "axios";

const STRAPI_API = "http://localhost:1337/api/posts?populate=*";

// Fonte interna: ICA 11-408/2021
const manualInterno = [
  { title: "ICA 11-408 - Bloco 1", content: "A ICA 11-408 regula objetos projetados no espaço aéreo que possam afetar negativamente a segurança e a regularidade das operações aéreas no Brasil. Essa instrução normativa define critérios, procedimentos e responsabilidades para avaliação de viabilidade de construções, torres, guindastes, antenas e outras estruturas." },
  { title: "ICA 11-408 - Bloco 2", content: "Qualquer objeto fixo, móvel, permanente ou temporário que ultrapasse limites verticais estabelecidos, ou que se localize em áreas críticas próximas a aeródromos, deve ser submetido à análise do COMAER através do SysAGA (Sistema AGA)." },
  { title: "ICA 11-408 - Bloco 3", content: "A ausência dessa análise, quando obrigatória, pode resultar em sanções administrativas e riscos à operação aérea. O responsável técnico pelo projeto é quem deve providenciar a submissão da análise." },
  { title: "ICA 11-408 - Bloco 4", content: "A avaliação considera o Plano Básico de Zona de Proteção de Aeródromo (PBZPA), incluindo elevações máximas permitidas em diferentes zonas, zonas de segurança e planos inclinados em torno da pista." },
  { title: "ICA 11-408 - Bloco 5", content: "O processo pode resultar em três desfechos principais: (1) Declaração de Inexigibilidade, (2) Anuência Prévia ou (3) Indeferimento da construção. Apenas após a aprovação o objeto poderá ser implementado legalmente." },
];

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método não permitido" });
  }

  const question = req.body.question;
  if (!question) {
    return res.status(400).json({ error: "Pergunta ausente" });
  }

  try {
    let blogDocs: { title: string; content: string }[] = [];

    try {
      const { data } = await axios.get(STRAPI_API);
      blogDocs = (data?.data || []).map((post: any) => {
        const attrs = post.attributes || {};
        return {
          title: attrs.title || "Sem título",
          content: extractText(attrs.content || []),
        };
      }).filter((a: { title: string; content: string }) => !!a.content) || [];
    } catch (err) {
      console.warn("⚠️ Erro ao acessar Strapi. Continuando apenas com base local.");
    }

    const allDocs = [...blogDocs, ...manualInterno];
    const texts = allDocs.map((a) => `${a.title}\n\n${a.content}`);

    const model = new ChatOllama({
      baseUrl: "http://localhost:11434",
      model: "gemma:2b",
    });

    const prompt = new HumanMessage(
      `Responda à pergunta a seguir com base no conteúdo abaixo, se aplicável.
Se não houver relação, responda como especialista em OPEA com base no conhecimento técnico:

--- MATERIAL DE REFERÊNCIA ---
${texts.join("\n\n------------------------\n\n")}

--- FIM ---

Pergunta: ${question}`
    );

    const response = await model.call([prompt]);

    return res.status(200).json({ answer: response.content });
  } catch (err: any) {
    console.error("Erro no chat-smartopea:", err);
    return res.status(500).json({ error: "Erro ao buscar resposta." });
  }
}

function extractText(contentBlocks: any): string {
  if (!contentBlocks) return "";
  if (typeof contentBlocks === "string") return contentBlocks;
  if (Array.isArray(contentBlocks)) {
    return contentBlocks
      .map((block) => block?.children?.map((child: any) => child.text).join(" ") || "")
      .join("\n\n");
  }
  return "";
}
