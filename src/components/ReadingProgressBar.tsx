import { useEffect, useState } from "react";

export default function ReadingProgressBar(){
  const [progress, setProgress] = useState(0);
  useEffect(()=>{
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight;
      const p = Math.min(100, Math.max(0, (window.scrollY / total) * 100));
      setProgress(p);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  },[]);
  return <div className="fixed top-0 left-0 h-1 bg-blue-600 z-50" style={{width: progress + "%"}} />;
}
