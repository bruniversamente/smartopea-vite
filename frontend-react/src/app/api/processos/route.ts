import { NextResponse } from "next/server";
import qs from "qs";

const STRAPI_API_URL = process.env.STRAPI_API_URL ?? "http://localhost:1337/api";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email ausente" }, { status: 400 });
  }

  const query = qs.stringify({
    filters: {
      emailCliente: {
        $eq: email,
      },
    },
    sort: ["createdAt:desc"],
    populate: "*",
  }, { encodeValuesOnly: true });

  try {
    const res = await fetch(
      `${STRAPI_API_URL}/processos?${query}`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        },
      }
    );

    const contentType = res.headers.get("content-type");
    if (!res.ok || !contentType?.includes("application/json")) {
      const erroTexto = await res.text();
      console.error("❌ Erro Strapi:", erroTexto);
      return NextResponse.json(
        { error: "Erro ao buscar processos", detalhes: erroTexto },
        { status: 500 }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    console.error("❌ Erro inesperado:", err);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
