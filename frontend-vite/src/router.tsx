import { createBrowserRouter } from "react-router-dom";
import SiteLayout from "./layout/SiteLayout";
import PainelLayout from "./layout/PainelLayout";

// Site pages
import Home from "./pages/Home";
import Simulador from "./pages/Simulador";
import BlogIndex from "./pages/blog/Index";
import BlogSlug from "./pages/blog/Slug";
import CasosIndex from "./pages/casosdesucesso/Index";
import CasoSlug from "./pages/casosdesucesso/Slug";
import Contato from "./pages/contato/Index";
import Login from "./pages/login/Index";
import Sobre from "./pages/sobre/Index";
import SobreAdachi from "./pages/sobre/Adachi";
import SobreAdoniran from "./pages/sobre/Adoniran";
import Solucoes from "./pages/solucoes/Index";
import SolucoesAprovacao from "./pages/solucoes/Aprovacao";
import SolucoesViabilidade from "./pages/solucoes/Viabilidade";
import PoliticaPrivacidade from "./pages/politica-de-privacidade/Index";
import TermosDeUso from "./pages/termos-de-uso/Index";
import NotFound from "./pages/NotFound";

// Painel pages
import PainelHome from "./pages/painel/Index";
import PainelFormulario from "./pages/painel/formulario/Index";
import PainelProcessos from "./pages/painel/meus-processos/Index";
import PainelProcessoDetalhe from "./pages/painel/meus-processos/Processo";
import PainelNotificacoes from "./pages/painel/notificacoes/Index";
import PainelPerfil from "./pages/painel/perfil/Index";

export const router = createBrowserRouter([
  {
    element: <SiteLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/simulador", element: <Simulador /> },
      { path: "/blog", element: <BlogIndex /> },
      { path: "/blog/:slug", element: <BlogSlug /> },
      { path: "/casosdesucesso", element: <CasosIndex /> },
      { path: "/casosdesucesso/:slug", element: <CasoSlug /> },
      { path: "/contato", element: <Contato /> },
      { path: "/login", element: <Login /> },
      { path: "/sobre", element: <Sobre /> },
      { path: "/sobre/adachi", element: <SobreAdachi /> },
      { path: "/sobre/adoniran", element: <SobreAdoniran /> },
      { path: "/solucoes", element: <Solucoes /> },
      { path: "/solucoes/aprovacao", element: <SolucoesAprovacao /> },
      { path: "/solucoes/viabilidade", element: <SolucoesViabilidade /> },
      { path: "/politica-de-privacidade", element: <PoliticaPrivacidade /> },
      { path: "/termos-de-uso", element: <TermosDeUso /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/painel",
    element: <PainelLayout />,
    children: [
      { index: true, element: <PainelHome /> },
      { path: "formulario", element: <PainelFormulario /> },
      { path: "meus-processos", element: <PainelProcessos /> },
      { path: "meus-processos/:documentId", element: <PainelProcessoDetalhe /> },
      { path: "notificacoes", element: <PainelNotificacoes /> },
      { path: "perfil", element: <PainelPerfil /> },
    ],
  },
]);
