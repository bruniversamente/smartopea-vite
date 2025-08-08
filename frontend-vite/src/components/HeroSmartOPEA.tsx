import { Container } from "./layout/Containers";
import ButtonApple1 from "./ButtonApple1";
import { Link } from "react-router-dom";

export default function HeroSmartOPEA(){
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white to-neutral-50 border-b">
      <Container>
        <h1 className="text-4xl font-semibold tracking-tight">Aprovação Aeronáutica Inteligente</h1>
        <p className="text-neutral-600 mt-3 max-w-2xl">Simule, protocole e acompanhe seu processo OPEA com transparência e velocidade.</p>
        <div className="mt-6 flex gap-3">
          <Link to="/simulador"><ButtonApple1>Simular agora</ButtonApple1></Link>
          <Link to="/solucoes" className="rounded-full border px-6 py-2">Conhecer soluções</Link>
        </div>
      </Container>
    </div>
  );
}
