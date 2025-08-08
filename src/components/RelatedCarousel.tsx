import AppleArrowButton from "./AppleArrowButton";
export default function RelatedCarousel(){
  return (
    <div className="relative">
      <div className="grid grid-flow-col auto-cols-[minmax(280px,1fr)] gap-4 overflow-x-auto pb-2">
        {Array.from({length:8}).map((_,i)=>(
          <a key={i} href={`/blog/post-${i+1}`} className="block rounded-xl border bg-white p-4 min-h-28">Artigo relacionado {i+1}</a>
        ))}
      </div>
      <div className="hidden md:block absolute -left-4 top-1/2 -translate-y-1/2">
        <AppleArrowButton direction="left" onClick={()=>{ const scroller = document.querySelector('[data-rel]'); scroller?.scrollBy({left:-300, behavior:"smooth"}); }} />
      </div>
      <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2">
        <AppleArrowButton direction="right" onClick={()=>{ const scroller = document.querySelector('[data-rel]'); scroller?.scrollBy({left:300, behavior:"smooth"}); }} />
      </div>
    </div>
  );
}
