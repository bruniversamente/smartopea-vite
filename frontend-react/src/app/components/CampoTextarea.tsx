import { memo } from "react";

interface CampoTextareaProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  label?: string;
  placeholder?: string;
}

const CampoTextarea = memo(({ name, value, onChange, label, placeholder }: CampoTextareaProps) => (
  <label className="block mb-4">
    {label && <span className="block mb-1 font-medium">{label}</span>}
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 border border-gray-300 rounded"
    />
  </label>
));

export default CampoTextarea;
