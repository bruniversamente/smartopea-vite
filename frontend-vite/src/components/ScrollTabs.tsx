import { useState } from "react";
export default function ScrollTabs({tabs=["Resumo","Detalhes","FAQ"]}:{tabs?:string[]}){
  const [active, setActive] = useState(0);
  return (
    <div className="border-b flex gap-4 overflow-x-auto">
      {tabs.map((t,i)=>(
        <button key={t} onClick={()=>setActive(i)} className={`py-2 ${active===i?"border-b-2 border-blue-600 font-medium": "text-neutral-600"}`}>{t}</button>
      ))}
    </div>
  );
}
