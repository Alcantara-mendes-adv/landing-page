import React from "react";

const audienceItems = [
  {
    number: "01",
    description:
      "Para empresas Inexperientes em licitações e para aquelas que estão iniciando no mercado.",
  },
  {
    number: "02",
    description:
      "Empresários que querem um novo canal de vendas neste mercado promissor de licitações.",
  },
  {
    number: "03",
    description:
      "Analistas e consultores que não querem perder nenhuma oportunidade de seus clientes.",
  },
];

export default function Audience() {
  return (
    <section className="bg-[var(--color-card)] py-20">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl md:text-2xl font-bold text-[var(--color-primary)] mb-18">
          PARA QUEM É ESSA PLATAFORMA?
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-12">
          {audienceItems.map((item) => (
            <div key={item.number} className="relative">
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-7xl font-bold text-gray-200 -z-0">
                {item.number}
              </span>
              <p className="relative z-10 text-lg text-[var(--color-text-secondary)] pt-12">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
