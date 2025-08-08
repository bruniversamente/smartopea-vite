import { motion, AnimatePresence } from "framer-motion";

export default function HeaderDropdown({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, height: 0, clipPath: "inset(100% 0% 0% 0%)" }}
        animate={{ opacity: 1, height: "auto", clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.6, ease: [0.65, 0, 0.35, 1], when: "beforeChildren", staggerChildren: 0.03, delayChildren: 0.05 } }}
        exit={{ opacity: 0, height: 0, clipPath: "inset(100% 0% 0% 0%)", transition: { duration: 0.45 } }}
        className="absolute inset-x-0 top-16 bg-white/80 backdrop-blur border-b shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <a className="p-4 rounded-lg bg-neutral-50 hover:bg-neutral-100" href="/solucoes/viabilidade">Estudo de Viabilidade</a>
          <a className="p-4 rounded-lg bg-neutral-50 hover:bg-neutral-100" href="/solucoes/aprovacao">Aprovação OPEA</a>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
