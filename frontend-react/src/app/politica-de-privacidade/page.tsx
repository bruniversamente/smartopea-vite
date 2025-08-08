import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function PoliticaPrivacidade() {
  return (
    <>
      <Head>
        <title>Política de Privacidade | smartOPEA</title>
        <meta name="description" content="Veja como a smartOPEA lida com seus dados e garante sua privacidade." />
      </Head>
      <Header />
      <main className="bg-white text-gray-800 font-sans">
        <div className="max-w-[1280px] mx-auto px-6 py-20 text-justify">
          <h1 className="text-3xl font-bold mb-6">Política de Privacidade</h1>
          <p className="mb-4">
            A sua privacidade é importante para nós. Esta política descreve como coletamos, usamos e protegemos as informações fornecidas pelos usuários da plataforma smartOPEA.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Coleta de Informações</h2>
          <p className="mb-4">
            Podemos coletar informações pessoais como nome, e-mail, telefone e dados de localização fornecidos por você ao utilizar nossos serviços ou preencher formulários.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Uso das Informações</h2>
          <p className="mb-4">
            Utilizamos suas informações para fornecer e melhorar nossos serviços, enviar comunicações relevantes e responder suas solicitações.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Compartilhamento</h2>
          <p className="mb-4">
            Não compartilhamos suas informações com terceiros, exceto quando necessário para a operação do serviço ou por obrigações legais.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Segurança</h2>
          <p className="mb-4">
            Implementamos medidas técnicas e organizacionais para proteger seus dados contra acesso não autorizado.
          </p>
          <h2 className="text-xl font-semibold mt-8 mb-2">Contato</h2>
          <p>
            Em caso de dúvidas, entre em contato pelo e-mail: atendimento@smartopea.com
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
