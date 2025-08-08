// components/CardApple.tsx

import React from "react";

interface CardAppleProps {
  children: React.ReactNode;
  className?: string;
}

export default function CardApple({ children, className = "" }: CardAppleProps) {
  return (
    <div
      className={`rounded-[18px] bg-white shadow-[2px_4px_12px_rgba(0,0,0,0.08)] 
        hover:shadow-[4px_8px_24px_rgba(0,0,0,0.12)] 
        transition-all duration-300 ease-[cubic-bezier(0,0,0.5,1)] ${className}`}
    >
      {children}
    </div>
  );
}
