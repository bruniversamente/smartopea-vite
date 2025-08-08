import { InputHTMLAttributes } from "react";
export default function CampoTexto({ label, className="", ...props }:{label:string} & InputHTMLAttributes<HTMLInputElement>){
  return (
    <label className={`grid gap-1 ${className}`}>
      <span className="text-sm text-neutral-700">{label}</span>
      <input {...props} className="rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500" />
    </label>
  );
}
