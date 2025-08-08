import { SelectHTMLAttributes, ReactNode } from "react";
export default function CampoSelect({ label, children, className="", ...props }:{label:string; children:ReactNode} & SelectHTMLAttributes<HTMLSelectElement>){
  return (
    <label className={`grid gap-1 ${className}`}>
      <span className="text-sm text-neutral-700">{label}</span>
      <select {...props} className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500">
        {children}
      </select>
    </label>
  );
}
