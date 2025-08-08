import { useId } from "react";

// Placeholder control para dev local; troque depois por Google Places Autocomplete.
export default function EnderecoAutocompleteGoogle({label, placeholder="Digite o endereço"}:{label:string; placeholder?:string}){
  const id = useId();
  return (
    <label htmlFor={id} className="grid gap-1">
      <span className="text-sm text-neutral-700">{label}</span>
      <input id={id} placeholder={placeholder} className="rounded-lg border px-3 py-2" />
      <span className="text-xs text-neutral-500">* Autocomplete real será integrado via Google Places na próxima etapa.</span>
    </label>
  );
}
