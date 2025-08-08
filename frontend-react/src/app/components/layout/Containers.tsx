// src/components/layout/Containers.tsx

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

// 🌤️ Fundo padrão da Apple: cinza claro #f5f5f7
const defaultBg = "bg-[#f5f5f7]";

// 📦 Container para cards (como blog, portfolio, painel geral)
export const ContainerCard = ({ children, className = "" }: ContainerProps) => (
  <div className={`max-w-[1040px] px-6 mx-auto ${defaultBg} ${className}`}>{children}</div>
);

// 📖 Container para textos longos (blog post, termos, contato)
export const ContainerTexto = ({ children, className = "" }: ContainerProps) => (
  <div className={`max-w-[736px] px-6 mx-auto ${defaultBg} ${className}`}>{children}</div>
);

// 🧭 Container para páginas institucionais (serviços, sobre)
export const ContainerWide = ({ children, className = "" }: ContainerProps) => (
  <div className={`max-w-[1200px] px-8 mx-auto ${defaultBg} ${className}`}>{children}</div>
);

// 🧮 Container para formulários centrados (ex: simulador, formulário multi-etapas)
export const ContainerForm = ({ children, className = "" }: ContainerProps) => (
  <div className={`max-w-[800px] px-4 mx-auto ${defaultBg} ${className}`}>{children}</div>
);

// 🌐 Container full (sem limite de largura, apenas padding horizontal)
export const ContainerFull = ({ children, className = "" }: ContainerProps) => (
  <div className={`w-full px-5 ${defaultBg} ${className}`}>{children}</div>
);
