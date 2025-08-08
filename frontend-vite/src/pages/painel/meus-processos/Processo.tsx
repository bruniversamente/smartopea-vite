import { useParams } from "react-router-dom";
import Section from "../../../components/layout/Section";
import { Container } from "../../../components/layout/Containers";
export default function ProcessoDetalhe(){
  const { documentId } = useParams();
  return (
    <Section className="pt-20">
      <Container>
        <h1 className="text-3xl font-semibold mb-4">Processo {documentId}</h1>
        <p className="text-neutral-600">Detalhes do processo em breve.</p>
      </Container>
    </Section>
  );
}
