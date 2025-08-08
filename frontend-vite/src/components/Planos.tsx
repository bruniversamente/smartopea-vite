export default function Planos(){
  const planos = [
    {nome:"Self-service", preco:"R$ —", desc:"Pré-análise e instruções automáticas."},
    {nome:"Assistido", preco:"R$ —", desc:"Suporte técnico e submissão assistida."},
    {nome:"Enterprise", preco:"Sob consulta", desc:"Multi-projetos, integrações e atendimento dedicado."},
  ];
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {planos.map((p)=>(
        <div key={p.nome} className="rounded-2xl border bg-white p-6">
          <div className="text-sm text-neutral-500">{p.nome}</div>
          <div className="text-2xl font-semibold mt-1">{p.preco}</div>
          <p className="text-neutral-600 mt-2 text-sm">{p.desc}</p>
          <button className="mt-4 rounded-full bg-[#0071e3] text-white px-4 py-1.5">Quero este</button>
        </div>
      ))}
    </div>
  );
}
