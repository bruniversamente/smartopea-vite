import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrollTop = el.scrollTop || document.body.scrollTop;
      const height = (el.scrollHeight - el.clientHeight) || 1;
      setPct(Math.min(100, Math.round((scrollTop / height) * 100)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1.5 bg-gray-200/60 z-40">
      <div className="h-full bg-blue-600 transition-all" style={{ width: `${pct}%` }} />
    </div>
  );
}
