"use client";

import Image from "next/image";

const logos = [
  { src: "/logos/ccr.png", alt: "CCR" },
  { src: "/logos/cyrela.png", alt: "Cyrela" },
  { src: "/logos/votorantim.png", alt: "Votorantim" },
  { src: "/logos/cpfl.png", alt: "CPFL Energia" },
  { src: "/logos/unimed.png", alt: "Unimed" },
  { src: "/logos/mrv.png", alt: "MRV" },
];

export default function ClientesParceiros() {
  return (
    <section className="py-20 bg-[#f8fafc] text-center border-t" style={{ borderColor: "#e5e5e5" }}>
      <div className="max-w-[1280px] mx-auto px-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-10">
          Confiado por equipes líderes no Brasil
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={140}
                height={60}
                className="mx-auto h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
