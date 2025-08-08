import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeaderDropdownBlog() {
  return (
    <motion.div
      initial={{ opacity: 0, clipPath: "inset(100% 0% 0% 0%)" }}
      animate={{ opacity: 1, clipPath: "inset(0% 0% 0% 0%)", transition:{ duration:0.6, ease:[0.65,0,0.35,1], when:"beforeChildren", staggerChildren:0.03, delayChildren:0.05 } }}
      exit={{ opacity: 0 }}
      className="absolute inset-x-0 top-16 bg-white/80 backdrop-blur border-b shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({length:8}).map((_,i)=>(
            <Link key={i} to={`/blog/post-${i+1}`} className="block p-4 rounded-lg bg-neutral-50 hover:bg-neutral-100 min-h-24">
              <div className="font-medium">Título do artigo {i+1}</div>
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
