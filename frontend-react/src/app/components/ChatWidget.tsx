"use client";

import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { AnimatePresence, motion } from "framer-motion";
import { useDropdown } from "./DropdownContext"; // <– novo

export default function ChatWidget() {
  const { isOpen: dropdownOpen } = useDropdown(); // <– escuta estado global
  const [isOpen, setIsOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [messages, setMessages] = useState([
    { from: "bot", text: "👋 Olá! Como podemos te ajudar?" },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const dismissHint = () => {
    setShowHint(false);
  };

  const handlePredefinedQuestion = async (question: string) => {
    const userMessage = { from: "user", text: question };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post("/api/chat-smartopea", { question });
      const botReply = response.data?.answer || "Desculpe, não encontrei uma resposta relevante.";
      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Erro ao buscar resposta. Tente novamente mais tarde." },
      ]);
    }
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { from: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post("/api/chat-smartopea", { question: input });
      const botReply = response.data?.answer || "Desculpe, não encontrei uma resposta relevante.";
      setMessages((prev) => [...prev, { from: "bot", text: botReply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "Erro ao buscar resposta. Tente novamente mais tarde." },
      ]);
    }
  };

  const shouldHide = dropdownOpen;

  return (
    <>
      {showHint && (
        <div
          className={`fixed bottom-20 right-20 max-w-xs bg-blue-600 text-white text-sm px-4 py-3 rounded-xl shadow-lg z-40 flex items-start gap-3 transition-opacity duration-200 ${
            shouldHide ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <span>Olá! Como podemos te ajudar?</span>
          <button
            onClick={dismissHint}
            className="text-white hover:text-gray-100 text-sm leading-none mt-0.5"
            aria-label="Fechar dica"
          >
            ×
          </button>
        </div>
      )}

      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 bg-white hover:bg-gray-100 w-14 h-14 rounded-full shadow-lg flex items-center justify-center z-40 group transition-opacity duration-200 ${
          shouldHide ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        aria-label="Abrir chat"
      >
        <img
          src="/images/chat-icon-airplane.png"
          alt="Chat smartOPEA"
          className="w-full h-full object-contain group-hover:brightness-90 transition duration-200"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="chatbox"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`fixed bottom-20 right-6 w-[360px] bg-white border border-gray-300 rounded-lg shadow-xl flex flex-col z-40 overflow-hidden transition-opacity duration-200 ${
              shouldHide ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <div className="px-4 py-3 border-b bg-white">
              <p className="font-semibold mb-2">smartOPEA Chat</p>
              <div className="flex items-start gap-2">
                <span className="text-gray-800">👋 Olá! Como podemos te ajudar?</span>
              </div>
            </div>

            <div className="border-b divide-y">
              <button
                onClick={() => handlePredefinedQuestion("Preciso de ajuda com suporte")}
                className="w-full text-left px-4 py-3 text-sm bg-gray-100 hover:bg-gray-200 flex items-center justify-between"
              >
                <span>Preciso de ajuda com suporte</span>
                <span className="text-blue-600">↗</span>
              </button>
              <button
                onClick={() => handlePredefinedQuestion("Tenho uma pergunta sobre planos")}
                className="w-full text-left px-4 py-3 text-sm bg-gray-100 hover:bg-gray-200 flex items-center justify-between"
              >
                <span>Tenho uma pergunta sobre planos</span>
                <span className="text-blue-600">↗</span>
              </button>
              <button
                onClick={() => handlePredefinedQuestion("Estou procurando por outra coisa")}
                className="w-full text-left px-4 py-3 text-sm bg-gray-100 hover:bg-gray-200 flex items-center justify-between"
              >
                <span>Estou procurando por outra coisa</span>
                <span className="text-blue-600">↗</span>
              </button>
            </div>

            <div className="flex-1 p-3 space-y-2 overflow-y-auto max-h-96 bg-white">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`text-sm px-3 py-2 rounded-md max-w-[75%] ${
                    msg.from === "bot" ? "bg-gray-100 self-start" : "bg-blue-100 self-end"
                  }`}
                >
                  {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex p-3 border-t gap-2 bg-white">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                className="flex-1 border rounded px-3 py-2 text-sm"
                placeholder="Digite sua mensagem..."
              />
              <button
                onClick={sendMessage}
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
              >
                Enviar
              </button>
            </div>

            <div className="text-[11px] text-gray-500 px-4 py-2 border-t bg-gray-50">
              Ao continuar, você concorda com nossa política de privacidade.
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
