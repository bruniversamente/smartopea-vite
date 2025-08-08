"use client";

import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollTabs from "./components/ScrollTabs";
import HeroSmartOPEA from "./components/HeroSmartOPEA";
import ClientesParceiros from "./components/ClientesParceiros";
import CasosSucesso from "./components/CasosSucesso";
import ProblemaOPEA from "./components/ProblemaOPEA";
import Planos from "./components/Planos";
import BlogHome from "./components/BlogHome";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="bg-white text-black font-sans pt-24">
        {/* Hero */}
        <HeroSmartOPEA />

        {/* Problema / Dor comum */}
<ProblemaOPEA />

        {/* Como Funciona */}
        <ScrollTabs />

        {/* Como Funciona */}
        <Planos />

        {/* Clientes que confiam */}
        <ClientesParceiros />

        {/* Casos de Sucesso */}
        <CasosSucesso />

        {/* Seção de Blog */}
        <BlogHome />

      </main>
      <Footer />
    </>
  );
}
