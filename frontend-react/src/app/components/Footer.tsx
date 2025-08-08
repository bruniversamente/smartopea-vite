import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] text-[12px] text-[rgba(0,0,0,0.56)]">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Linha superior */}
        <div className="h-px bg-gray-300"></div>

        {/* Conteúdo do rodapé */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-12">
          {/* Coluna 1 */}
          <div>
            <h4 className="text-[13px] font-medium text-[rgba(0,0,0,0.72)] mb-3">smartOPEA</h4>
            <ul className="space-y-2 leading-tight">
              <li><Link href="/simulador" className="hover:underline">Simulador</Link></li>
              <li><Link href="/painel" className="hover:underline">Acompanhar Processo</Link></li>
              <li><Link href="/contato" className="hover:underline">Fale Conosco</Link></li>
            </ul>
          </div>

          {/* Coluna 2 */}
          <div>
            <h4 className="text-[13px] font-medium text-[rgba(0,0,0,0.72)] mb-3">Soluções</h4>
            <ul className="space-y-2 leading-tight">
              <li><Link href="/servicos/viabilidade" className="hover:underline">Estudo de Viabilidade</Link></li>
              <li><Link href="/servicos/aprovacao" className="hover:underline">Aprovação OPEA</Link></li>
            </ul>
          </div>

          {/* Coluna 3 */}
          <div>
            <h4 className="text-[13px] font-medium text-[rgba(0,0,0,0.72)] mb-3">Conteúdo</h4>
            <ul className="space-y-2 leading-tight">
              <li><Link href="/blog" className="hover:underline">Blog</Link></li>
              <li><Link href="/portfolio" className="hover:underline">Projetos Aprovados</Link></li>
              <li><Link href="/faq" className="hover:underline">Dúvidas Frequentes</Link></li>
            </ul>
          </div>

          {/* Coluna 4 */}
          <div>
            <h4 className="text-[13px] font-medium text-[rgba(0,0,0,0.72)] mb-3">Sobre</h4>
            <ul className="space-y-2 leading-tight">
              <li><Link href="/sobre" className="hover:underline">Sobre nós</Link></li>
              <li><a href="https://www.easyaga.com" target="_blank" rel="noopener noreferrer" className="hover:underline">EasyAGA Group</a></li>
            </ul>
          </div>

          {/* Coluna 5 */}
          <div>
            <h4 className="text-[13px] font-medium text-[rgba(0,0,0,0.72)] mb-3">Legal</h4>
            <ul className="space-y-2 leading-tight">
              <li><Link href="/politica-de-privacidade" className="hover:underline">Privacidade</Link></li>
              <li><Link href="/termos-de-uso" className="hover:underline">Termos de Uso</Link></li>
            </ul>
          </div>

          {/* Coluna 6 */}
          <div>
            <h4 className="text-[13px] font-medium text-[rgba(0,0,0,0.72)] mb-3">Contato</h4>
            <ul className="space-y-2 leading-tight">
              <li><a href="mailto:contato@smartopea.com" className="hover:underline">contato@smartopea.com</a></li>
              <li><a href="https://wa.me/5541999990367" target="_blank" rel="noopener noreferrer" className="hover:underline">WhatsApp</a></li>
              <li><a href="#" className="hover:underline">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        {/* Linha inferior */}
        <div className="h-px bg-gray-300"></div>

        {/* Subfooter */}
        <div className="text-center py-6 text-[11px] text-[rgba(0,0,0,0.48)]">
          &copy; {new Date().getFullYear()} smartOPEA — Uma empresa do grupo EasyAGA. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
