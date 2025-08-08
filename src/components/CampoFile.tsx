import { InputHTMLAttributes } from "react";
export default function CampoFile({ label, className="", ...props }:{label:string} & InputHTMLAttributes<HTMLInputElement>){
  return (
    <label className={`grid gap-1 ${className}`}>
      <span className="text-sm text-neutral-700">{label}</span>
      <input type="file" {...props} className="block text-sm file:mr-3 file:rounded-lg file:border file:px-3 file:py-2 file:bg-white file:hover:bg-neutral-50"/>
    </label>
  );
}
