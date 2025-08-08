export default function TableOfContents({items=["Introdução","Exigência","Processo","Prazos"]}:{items?:string[]}){
  return (
    <nav className="sticky top-24 hidden lg:block text-sm">
      <div className="font-medium mb-2">Neste artigo</div>
      <ul className="space-y-1">
        {items.map((i)=>(<li key={i}><a href={"#"+i.toLowerCase()} className="text-neutral-600 hover:underline">{i}</a></li>))}
      </ul>
    </nav>
  );
}
