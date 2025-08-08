export default function ConsentimentoLGPD({checked, onChange}:{checked:boolean; onChange:(v:boolean)=>void}){
  return (
    <label className="flex items-start gap-2 text-sm">
      <input type="checkbox" checked={checked} onChange={(e)=>onChange(e.target.checked)} className="mt-1"/>
      <span>Concordo com o tratamento dos meus dados conforme a <a className="underline" href="/politica-de-privacidade">Política de Privacidade</a>.</span>
    </label>
  );
}
