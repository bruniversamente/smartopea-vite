import { TextareaHTMLAttributes } from "react";
export default function CampoTextarea({ label, className="", ...props }:{label:string} & TextareaHTMLAttributes<HTMLTextAreaElement>){
  return (
    <label className={`grid gap-1 ${className}`}>
      <span className="text-sm text-neutral-700">{label}</span>
      <textarea {...props} className="rounded-lg border px-3 py-2 min-h-28 outline-none focus:ring-2 focus:ring-blue-500" />
    </label>
  );
}
