// components/ConsentimentoLGPD.tsx
"use client";
import Link from "next/link";

export default function ConsentimentoLGPD() {
  return (
    <div className="mt-4">
      <label className="flex items-start gap-2 text-sm text-gray-700">
        <input
          type="checkbox"
          required
          className="mt-1"
        />
        <span>
          Li e aceito a{" "}
          <Link href="/politica-de-privacidade" className="underline text-blue-700 hover:text-blue-800">
            Política de Privacidade
          </Link>{" "}
          e os{" "}
          <Link href="/termos-de-uso" className="underline text-blue-700 hover:text-blue-800">
            Termos de Uso
          </Link>.
        </span>
      </label>
    </div>
  );
}
