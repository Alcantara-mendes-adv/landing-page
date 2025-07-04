import React from "react";

const features = [
  {
    title: "Gerenciador de Licitações",
  },
  {
    title: "Robô de Lances Automáticos",
  },
  {
    title: "Chat Pregoeiro dos principais portais do Brasil",
  },
  {
    title: "Análise de Mercado",
  },
  {
    title: "Análise de Concorrentes",
  },
  {
    title: "Checklist no Gerenciador de Licitações",
  },
];

export default function Features() {
  return (
    <section className="bg-[var(--color-background)] py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-16">
          Confira as oportunidades de automações que você terá na sua operação
        </h2>
        <div className="grid md:grid-cols-3 gap-x-8 gap-y-12 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center">
              <div className="w-20 h-20 mb-4 bg-[var(--color-card)] rounded-full flex items-center justify-center">
                {/* Placeholder para o ícone */}
                <div className="w-10 h-10 bg-gray-300 rounded-md"></div>
              </div>
              <p className="text-lg text-[var(--color-text-secondary)]">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
        <button className="bg-[var(--color-primary)] hover:opacity-90 text-[var(--color-primary-foreground)] font-bold py-3 px-8 rounded-md transition-opacity">
          Garanta Agora
        </button>
      </div>
    </section>
  );
}
