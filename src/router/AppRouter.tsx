// src/router/AppRouter.tsx
import Home from "../pages/home";
import BlogIndex from "../pages/blog";
import BlogPost from "../pages/blog/slug";
import CasosIndex from "../pages/casosdesucesso";
import CasoSlug from "../pages/casosdesucesso/slug";
import Sobre from "../pages/sobre";
import Solucoes from "../pages/solucoes";
import SolucaoViabilidade from "../pages/solucoes/viabilidade";
import SolucaoAprovacao from "../pages/solucoes/aprovacao";
import PoliticaPriv from "../pages/politica-de-privacidade";
import TermosUso from "../pages/termos-de-uso";
import Login from "../pages/login";
import PainelHome from "../pages/painel";
import PainelFormulario from "../pages/painel/formulario";
import MeusProcessos from "../pages/painel/meus-processos";
import ProcessoDetalhe from "../pages/painel/meus-processos/ProcessoDetalhe"; // este pode ficar PascalCase se o arquivo é assim


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/blog", element: <BlogIndex /> },
  { path: "/blog/:slug", element: <BlogPost /> },
  { path: "/casosdesucesso", element: <CasosIndex /> },
  { path: "/casosdesucesso/:slug", element: <CasoSlug /> },
  { path: "/sobre", element: <Sobre /> },
  { path: "/solucoes", element: <Solucoes /> },
  { path: "/solucoes/viabilidade", element: <SolucaoViabilidade /> },
  { path: "/solucoes/aprovacao", element: <SolucaoAprovacao /> },
  { path: "/politica-de-privacidade", element: <PoliticaPriv /> },
  { path: "/termos-de-uso", element: <TermosUso /> },
  { path: "/login", element: <Login /> },
  { path: "/painel", element: <PainelHome /> },
  { path: "/painel/formulario", element: <PainelFormulario /> },
  { path: "/painel/meus-processos", element: <MeusProcessos /> },
  { path: "/painel/meus-processos/:documentId", element: <ProcessoDetalhe /> },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
