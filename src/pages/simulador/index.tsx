import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import EnderecoAutocompleteGoogle from "../components/EnderecoAutocompleteGoogle";
import { LoadScript } from "@react-google-maps/api";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";

export default function Simulador() {
  const [alturaProjeto, setAlturaProjeto] = useState<number | null>(null);
  const [coordenadas, setCoordenadas] = useState<{ lat: number; lng: number } | null>(null);
  const [endereco, setEndereco] = useState<string | null>(null);
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState("");
  const [resultado, setResultado] = useState<string | null>(null);

  const handleSimular = async () => {
    if (!coordenadas || alturaProjeto === null || !email || !endereco || !nome) {
      setResultado("Por favor, preencha todos os campos para continuar.");
      return;
    }

    await fetch(`/api/gabarito?lat=${coordenadas.lat}&lon=${coordenadas.lng}`);

    await fetch(`${import.meta.env.VITE_STRAPI_URL || "http://localhost:1337"}/api/simulacaos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: {
          nome,
          email,
          endereco,
          latitude: coordenadas.lat,
          longitude: coordenadas.lng,
          altura: alturaProjeto,
        },
      }),
    });

    try {
      const response = await emailjs.send(
        "service_x0x3ref",
        "template_a66h6yh",
        { email, endereco, altura: alturaProjeto, nome },
        "c5627R7pxhS_kUt51"
      );

      console.log("Resposta do EmailJS:", response);
      setResultado(
        `📩 Parecer técnico enviado com sucesso para ${email}!\n\nVerifique sua caixa de entrada nos próximos minutos.`
      );
    } catch (error: any) {
      console.error("Erro ao enviar e-mail:", error?.text || error);
      setResultado("❌ Ocorreu um erro ao enviar o e-mail. Verifique os dados e tente novamente.");
    }
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDxvOo0hijPKnpYjabrIzxgdZ21w0kZjBY" libraries={["places"]}>
      <Header />
      <main className="max-w-[1280px] mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Descubra se seu projeto precisa de aprovação</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          Faça uma simulação gratuita e receba um parecer técnico por e-mail.
        </p>

        <div className="bg-gradient-to-br from-[#f1f5f9] to-[#e0f2fe] p-10 rounded-2xl shadow-xl space-y-6">
          <div>
            <label className="block mb-2 font-medium text-gray-800">Seu nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
              placeholder="Digite seu nome"
            />
          </div>

          <div>
            <span className="block mb-2 font-medium text-gray-800">Endereço completo da área do projeto</span>
            <EnderecoAutocompleteGoogle
              onSelecionado={(info) => {
                setCoordenadas({ lat: info.lat, lng: info.lng });
                setEndereco(info.endereco);
              }}
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-800">Altura da estrutura (em metros)</label>
            <input
              type="number"
              value={alturaProjeto !== null ? String(alturaProjeto) : ""}
              onChange={(e) => {
                const valor = e.target.value;
                setAlturaProjeto(valor === "" ? null : parseFloat(valor));
              }}
              className="w-full px-4 py-2 border border-gray-300 text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
              placeholder="Ex: 38"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-gray-800">Seu e-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 text-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder:text-gray-500"
              placeholder="nome@exemplo.com"
              required
            />
          </div>

          <button
            onClick={handleSimular}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-700 transition w-full sm:w-max"
          >
            Receba uma avaliação
          </button>

          <AnimatePresence>
            {resultado && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="mt-6 p-4 bg-white border border-gray-200 rounded-lg text-sm whitespace-pre-line text-gray-800 shadow"
              >
                {resultado}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </LoadScript>
  );
}
