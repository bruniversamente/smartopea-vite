// src/app/api/mensagem/route.ts

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const res = await fetch("http://localhost:1337/api/mensagens", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: body }),
    });

    const text = await res.text(); // <-- pega resposta bruta para debug

    if (!res.ok) {
      console.error("Erro do Strapi:", res.status, text);
      return new Response("Erro do Strapi: " + text, { status: 500 });
    }

    return new Response("Mensagem enviada com sucesso", { status: 200 });
  } catch (err: any) {
    console.error("Erro no route.ts:", err);
    return new Response("Erro interno do servidor", { status: 500 });
  }
}
