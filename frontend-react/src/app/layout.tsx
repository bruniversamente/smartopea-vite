import type { Metadata } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "./globals.css";

import ChatWidget from "./components/ChatWidget";
import { DropdownProvider } from "./components/DropdownContext"; // ✅ ajuste o caminho se necessário

export const metadata: Metadata = {
  title: "smartOPEA",
  description: "Aprovação aeronáutica simplificada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="font-sans antialiased bg-white text-black min-h-screen flex flex-col">
        <DropdownProvider>
          {children}
          <ChatWidget />
        </DropdownProvider>
      </body>
    </html>
  );
}
