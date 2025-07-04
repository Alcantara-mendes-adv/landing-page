import React from "react";

export default function Showcase() {
  return (
    <section className="bg-[#111] text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Placeholders para os celulares */}
        <div className="relative h-64 md:h-80 mb-16 flex justify-center items-end">
          {/* Celular 1 */}
          <div className="w-48 h-80 bg-gray-800 rounded-3xl border-4 border-gray-700 p-2 transform -rotate-12 origin-bottom-right">
            <div className="w-full h-full bg-black rounded-2xl"></div>
          </div>
          {/* Celular 2 */}
          <div className="absolute w-48 h-80 bg-gray-800 rounded-3xl border-4 border-gray-700 p-2 transform rotate-6 origin-bottom-left">
            <div className="w-full h-full bg-black rounded-2xl"></div>
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
