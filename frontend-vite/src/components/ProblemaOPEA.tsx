export default function ProblemaOPEA(){
  const bullets = [
    "Embargos por altura acima do permitido",
    "Retrabalho por falta de pré-análise",
    "Atrasos por documentação incompleta",
  ];
  return (
    <ul className="grid gap-2 list-disc pl-6 text-neutral-700">
      {bullets.map((b)=>(<li key={b}>{b}</li>))}
    </ul>
  );
}
