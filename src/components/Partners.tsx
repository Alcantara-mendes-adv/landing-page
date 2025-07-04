import React from "react";

// Lista de parceiros para exibição. Idealmente, isso viria com os caminhos dos logos.
const partners = [
  "Compras.gov.br",
  "Licitar Digital",
  "BLL",
  "Portal de Compras Públicas",
  "Licitanet",
  "Comprasnet",
  "Compras MG",
  "Sesc",
  "FIEB",
  "BBMNET",
  "Portal de Compras Lic",
  "FIESC",
  "Prefeitura de Barueri",
  "Prefeitura de Piracicaba",
  "FIEMG",
  "Prefeitura de São José",
  "Sest Senat",
  "Senai Cetiqt",
  "Itaipu Binacional",
  "Prefeitura de Florianópolis",
  "FIEMS Firjan",
  "Portal de Licitações",
  "Banrisul",
  "Famesp",
];

export default function Partners() {
  return (
    <section className="bg-[var(--color-card)] py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-12">
          Monitoramento de Chat do Pregoeiro disponível em:
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-10 items-center">
          {partners.map((partner) => (
            <div
              key={partner}
              className="h-16 flex items-center justify-center"
            >
              {/* Placeholder para o logo */}
              <div className="w-full h-10 bg-gray-300 rounded-md flex items-center justify-center text-xs text-gray-500 p-2">
                {partner}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
