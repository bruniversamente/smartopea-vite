import { ReactNode } from "react";
export default function CardApple({title, description, children}:{title:string; description?:string; children?:ReactNode}){
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow transition-shadow">
      <h3 className="text-lg font-semibold">{title}</h3>
      {description && <p className="text-neutral-600 mt-1">{description}</p>}
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
