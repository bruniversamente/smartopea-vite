import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function TermosDeUso() {
  return (
    <>
      <Head>
        <title>Termos de Uso | smartOPEA</title>
        <meta name="description" content="Termos de uso da plataforma smartOPEA, em conformidade com a LGPD." />
      </Head>
      <Header />
      <main className="bg-white text-gray-800 font-sans">
        <div className="max-w-[1280px] mx-auto px-6 py-20 text-justify">
          <h1 className="text-3xl font-bold mb-6">Termos de Uso</h1>
          <p className="mb-4">
            Ao utilizar a plataforma smartOPEA, você concorda com os seguintes termos e condições. Recomendamos a leitura atenta deste documento antes de utilizar nossos serviços.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">1. Aceitação dos Termos</h2>
          <p className="mb-4">
            O uso da plataforma implica no aceite pleno destes Termos de Uso e da Política de Privacidade. Caso não concorde, não utilize o serviço.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">2. Finalidade do Serviço</h2>
          <p className="mb-4">
            A smartOPEA oferece ferramentas para análise prévia, submissão e acompanhamento de processos relacionados à aprovação aeronáutica de construções, conforme diretrizes do COMAER.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">3. Proteção de Dados Pessoais (LGPD)</h2>
          <p className="mb-4">
            Os dados coletados são utilizados exclusivamente para a prestação dos serviços contratados, respeitando os princípios da LGPD. O usuário pode solicitar a exclusão ou correção de seus dados a qualquer momento.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">4. Responsabilidades</h2>
          <p className="mb-4">
            A smartOPEA não se responsabiliza por decisões tomadas com base em análises preliminares fornecidas sem revisão técnica. É dever do usuário fornecer dados verídicos.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">5. Alterações nos Termos</h2>
          <p className="mb-4">
            Reservamo-nos o direito de alterar estes termos a qualquer momento. Recomendamos revisá-los periodicamente.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-2">6. Contato</h2>
          <p>
            Dúvidas sobre os termos devem ser enviadas para: atendimento@smartopea.com
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
