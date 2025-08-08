import { memo } from "react";

interface CampoFileProps {
  name: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CampoFile = memo(({ name, label, onChange }: CampoFileProps) => (
  <label className="block mb-4">
    {label && <span className="block mb-1 font-medium">{label}</span>}
    <input
      type="file"
      name={name}
      onChange={onChange}
      className="block w-full text-sm
        file:mr-4 file:py-2 file:px-4
        file:rounded file:border-0
        file:text-sm file:font-semibold
        file:bg-blue-50 file:text-blue-700
        hover:file:bg-blue-100"
    />
  </label>
));

export default CampoFile;
