import { Container } from "./layout/Containers";

const logos = ["/logos/ccr.png","/logos/cpfl.png","/logos/cyrela.png","/logos/mrv.png","/logos/unimed.png","/logos/votorantim.png"];

export default function ClientesParceiros(){
  return (
    <div className="border-y bg-neutral-50">
      <Container className="py-8">
        <div className="text-center text-sm text-neutral-500 mb-4">Algumas empresas atendidas</div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
          {logos.map((src,i)=>(<img key={i} src={src} alt="logo parceiro" className="h-8 object-contain mx-auto" loading="lazy" />))}
        </div>
      </Container>
    </div>
  );
}
