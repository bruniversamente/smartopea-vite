import Section from "../../components/layout/Section";
import {"Container"} from "../../components/layout/Containers";

export default function Page() {
  return (
    <Section className="pt-20">
      <Container>
        <h1 className="text-3xl font-semibold mb-4">Notificações</h1>
        <p className="text-neutral-600">Conteúdo em breve.</p>
      </Container>
    </Section>
  );
}
