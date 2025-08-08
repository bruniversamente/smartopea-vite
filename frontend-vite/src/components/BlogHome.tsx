import { Link } from "react-router-dom";
export default function BlogHome(){
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {Array.from({length:6}).map((_,i)=>(
        <article key={i} className="rounded-xl border bg-white p-4">
          <div className="text-xs text-neutral-500">Artigo</div>
          <h3 className="font-semibold mt-1">Como evitar rejeição por altura #{i+1}</h3>
          <p className="text-sm text-neutral-600 mt-1">Dicas práticas para não errar no gabarito aeronáutico.</p>
          <Link className="text-blue-600 text-sm mt-2 inline-block" to={`/blog/post-${i+1}`}>Ler</Link>
        </article>
      ))}
    </div>
  );
}
