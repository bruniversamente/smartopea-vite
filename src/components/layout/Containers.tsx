import { ReactNode } from "react";

export function Container({ children, className = "" }: {children: ReactNode; className?: string;}) {
  return <div className={`max-w-7xl mx-auto px-6 ${className}`}>{children}</div>;
}

export function ContainerWide({ children, className = "" }: {children: ReactNode; className?: string;}) {
  return <div className={`max-w-[1400px] mx-auto px-6 ${className}`}>{children}</div>;
}
