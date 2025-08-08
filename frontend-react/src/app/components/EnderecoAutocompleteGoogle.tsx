"use client";

import { useState, useRef } from "react";
import { Autocomplete } from "@react-google-maps/api";

type Props = {
  onSelecionado: (info: { lat: number; lng: number; endereco: string }) => void;
  label?: string;
  placeholder?: string;
};

export default function EnderecoAutocompleteGoogle({
  onSelecionado,
  label,
  placeholder = "Ex: Rua Itupava, 1411, Curitiba",
}: Props) {
  const [endereco, setEndereco] = useState("");
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const onLoad = (autocomplete: google.maps.places.Autocomplete) => {
    autocompleteRef.current = autocomplete;
  };

  const onPlaceChanged = () => {
    const place = autocompleteRef.current?.getPlace();
    if (!place?.geometry?.location) return;

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();
    const enderecoFormatado = place.formatted_address || endereco;

    setEndereco(enderecoFormatado);
    onSelecionado({ lat, lng, endereco: enderecoFormatado });
  };

  return (
    <div className="relative">
      {label && (
        <label className="block mb-2 font-medium">{label}</label>
      )}
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
        <input
          type="text"
          value={endereco}
          onChange={(e) => setEndereco(e.target.value)}
          placeholder={placeholder}
          className="w-full p-2 border border-gray-300 rounded"
        />
      </Autocomplete>
    </div>
  );
}
