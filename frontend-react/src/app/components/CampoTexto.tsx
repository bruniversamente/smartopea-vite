import { memo, InputHTMLAttributes } from "react";

interface CampoTextoProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const CampoTexto = memo(({ name, value, onChange, placeholder, label, type = "text", ...rest }: CampoTextoProps) => (
  <label className="block mb-4">
    {label && <span className="block mb-1 font-medium">{label}</span>}
    <input
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded"
      type={type}
      {...rest}
    />
  </label>
));

export default CampoTexto;
