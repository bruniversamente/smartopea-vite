import { memo } from "react";

interface CampoSelectProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  children: React.ReactNode;
}

const CampoSelect = memo(({ name, value, onChange, label, children }: CampoSelectProps) => (
  <label className="block mb-4">
    {label && <span className="block mb-1 font-medium">{label}</span>}
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 border border-gray-300 rounded"
    >
      {children}
    </select>
  </label>
));

export default CampoSelect;
