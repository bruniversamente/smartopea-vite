import { createContext, useContext, useState, ReactNode } from "react";
type Ctx = { isOpen: boolean; setOpen: (v:boolean)=>void };
const C = createContext<Ctx | null>(null);
export function DropdownProvider({children}:{children:ReactNode}){
  const [isOpen, setOpen] = useState(false);
  return <C.Provider value={{isOpen,setOpen}}>{children}</C.Provider>;
}
export function useDropdown(){
  const ctx = useContext(C);
  if(!ctx) throw new Error("useDropdown deve ser usado dentro de <DropdownProvider>");
  return ctx;
}
