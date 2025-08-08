// 📄 src/app/api/login/route.ts

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    const response = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        identifier: email, // pode ser email ou username
        password: password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return new NextResponse("E-mail ou senha incorretos", { status: 401 });
    }

    return NextResponse.json({
      jwt: data.jwt,
      user: {
        id: data.user.id,
        username: data.user.username,
        email: data.user.email,
      },
    });
  } catch (error) {
    console.error("Erro ao autenticar:", error);
    return new NextResponse("Erro interno no servidor", { status: 500 });
  }
}
