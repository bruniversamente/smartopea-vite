// src/app/api/criar-cliente/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email } = await req.json();

  if (!name || !email) {
    return new NextResponse("Nome e e-mail são obrigatórios", { status: 400 });
  }

  // Gera uma senha provisória segura
  const password = Math.random().toString(36).slice(-10) + "@A1";

  const STRAPI_URL = process.env.STRAPI_API_URL || "http://localhost:1337/api";

  try {
    const registerRes = await fetch(`${STRAPI_URL}/auth/local/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: name,
        email,
        password,
      }),
    });

    if (!registerRes.ok) {
      const errorText = await registerRes.text();
      return new NextResponse(errorText || "Erro ao registrar", { status: 500 });
    }

    // Aqui você pode integrar com EmailJS ou qualquer serviço para enviar a senha
    console.log("Usuário criado:", email);
    console.log("Senha provisória:", password);

    return NextResponse.json({
      status: "ok",
      email,
      password, // ⚠️ Só para teste. Em produção, não envie a senha na resposta
    });
  } catch (err) {
    return new NextResponse("Erro inesperado no cadastro", { status: 500 });
  }
}
