import { NextRequest, NextResponse } from "next/server";
import qs from "qs";

const STRAPI_API_URL = process.env.STRAPI_API_URL ?? "http://localhost:1337/api";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function GET(
  req: NextRequest,
  context: { params: { documentId: string } }
) {
  const documentId = context.params?.documentId;

  if (!documentId) {
    return NextResponse.json({ data: null, error: "documentId ausente" }, { status: 400 });
  }

  const query = qs.stringify({
    filters: {
      documentId: {
        $eq: documentId,
      },
    },
    populate: "*",
  }, {
    encodeValuesOnly: true,
  });

  try {
    const res = await fetch(`${STRAPI_API_URL}/processos?${query}`, {
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
    });

    const contentType = res.headers.get("content-type");
    if (!res.ok || !contentType?.includes("application/json")) {
      const erroTexto = await res.text();
      console.error("❌ Erro Strapi:", erroTexto);
      return NextResponse.json({ data: null, error: "Erro ao buscar processo", detalhes: erroTexto }, { status: 500 });
    }

    const data = await res.json();

    if (!data?.data?.length) {
      return NextResponse.json({ data: null }, { status: 404 });
    }

    return NextResponse.json({ data: data.data[0] });
  } catch (err) {
    console.error("❌ Erro inesperado:", err);
    return NextResponse.json({ data: null, error: "Erro inesperado" }, { status: 500 });
  }
}
