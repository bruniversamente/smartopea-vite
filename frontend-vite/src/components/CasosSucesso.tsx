export default function CasosSucesso(){
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {Array.from({length:3}).map((_,i)=>(
        <article key={i} className="rounded-xl border bg-white p-4">
          <div className="text-xs text-neutral-500">Case</div>
          <h3 className="font-semibold mt-1">Projeto {i+1}</h3>
          <p className="text-sm text-neutral-600 mt-1">Resumo do caso de sucesso com resultado mensurável.</p>
        </article>
      ))}
    </div>
  );
}
