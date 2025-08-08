import { useEffect, useState } from "react";
import { useLocation, useNavigate, Outlet } from "react-router-dom";
import {
  FaHome,
  FaFileAlt,
  FaFolderOpen,
  FaBell,
  FaUser,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function PainelLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [nome, setNome] = useState("cliente");

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (email) {
      fetch(`http://localhost:1337/api/simulacaos?filters[email][$eq]=${email}`)
        .then((res) => res.json())
        .then((data) => {
          const nomeCliente = data?.data?.[0]?.attributes?.nome || "cliente";
          setNome(nomeCliente);
        });
    }
  }, []);

  const menuItems = [
    { label: "Painel Geral", icon: <FaHome />, path: "/painel" },
    { label: "Novo Processo", icon: <FaFileAlt />, path: "/painel/formulario" },
    { label: "Meus Processos", icon: <FaFolderOpen />, path: "/painel/meus-processos" },
    { label: "Notificações", icon: <FaBell />, path: "/painel/notificacoes" },
    { label: "Perfil", icon: <FaUser />, path: "/painel/perfil" },
  ];

  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-br from-white to-[#f1f5f9] shadow-md px-6 py-6 rounded-tr-2xl rounded-br-2xl">
        {/* Logo */}
        <div className="mb-4">
          <a
            href="https://smartopea.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition"
          >
            <img
              src="/images/logo-smartopea.png"
              alt="smartOPEA"
              width={168}
              height={38}
              className="-translate-y-[1px]"
            />
          </a>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-[6px] text-sm font-medium mt-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`flex items-center gap-3 px-4 py-[10px] rounded-xl transition-colors duration-200 text-left ${
                  isActive
                    ? "bg-gradient-to-r from-[#1e3a8a]/10 via-[#2563eb]/10 to-[#38bdf8]/10 text-blue-700 font-semibold"
                    : "text-gray-700 hover:text-blue-500"
                }`}
              >
                {item.icon} {item.label}
              </button>
            );
          })}
        </nav>

        {/* Sair */}
        <button
          onClick={() => {
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            navigate("/login");
          }}
          className="text-red-500 text-sm mt-10 hover:underline"
        >
          Sair
        </button>
      </aside>

      {/* Conteúdo principal */}
      <main className="flex-1 p-10">
        {pathname === "/painel" && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <h1 className="text-3xl font-semibold text-gray-800">Olá, {nome}!</h1>
            <p className="text-gray-600 mt-1">
              Bem-vindo ao seu painel de acompanhamento smartOPEA.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </main>
    </div>
  );
}
