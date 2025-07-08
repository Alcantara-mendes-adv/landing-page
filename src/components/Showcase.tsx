import Image from "next/image";
import React from "react";

export default function Showcase() {
  return (
    <section className="bg-[#0f1f11] text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="relative h-64 md:h-80 mb-16 flex justify-center items-center gap-4">
          {/* Desktop */}
          <div className="w-96 h-56 bg-[#1a3a1d] rounded-xl border-4 border-[#2a4a2d] p-2 hidden md:block">
            <div className="relative w-full h-full bg-[#0a1a0d] rounded-md overflow-hidden">
              <Image
                src="/img-desktop.png"
                alt="Demonstração da plataforma em um desktop"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          {/* Celular */}
          <div className="w-48 h-80 bg-[#1a3a1d] rounded-3xl border-4 border-[#2a4a2d] p-2">
            <div className="w-full h-full bg-[#0a1a0d] rounded-2xl"></div>
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto">
          TUDO O QUE VOCÊ PRECISA NA PALMA DA SUA MÃO
        </h2>
        <button className="bg-[var(--color-primary)] hover:opacity-90 text-[var(--color-primary-foreground)] font-bold py-3 px-8 rounded-md transition-opacity">
          CLIQUE AQUI
        </button>
      </div>
    </section>
  );
}
