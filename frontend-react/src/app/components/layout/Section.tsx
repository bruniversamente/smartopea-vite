// src/components/layout/Section.tsx
import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  variant?: "white" | "light" | "blue" | "dark";
  className?: string;
}

const variantClasses = {
  white: "bg-white",
  light: "bg-[#f9fafb]",
  blue: "bg-[#f0f4ff]",
  dark: "bg-[#171717] text-white",
};

export default function Section({
  children,
  variant = "white",
  className = "",
}: SectionProps) {
  const bg = variantClasses[variant] ?? "bg-white";
  
  return (
    <div className="relative">
      {/* Fundo que ocupa toda a largura da página */}
      <div 
        className={`absolute inset-x-0 top-0 bottom-0 ${bg}`}
        style={{ 
          marginLeft: 'calc(-50vw + 50%)',
          marginRight: 'calc(-50vw + 50%)',
          width: '100vw'
        }}
      />
      
      {/* Conteúdo centralizado com fundo transparente para todos os descendentes */}
      <div className={`relative ${className} [&>*]:bg-transparent [&>*]:bg-none`}>
        {children}
      </div>
    </div>
  );
}