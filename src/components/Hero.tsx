import React from "react";

export default function Hero() {
  return (
    <section className="bg-[var(--color-background)] text-[var(--color-text-primary)] py-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-16 items-center px-4">
        {/* Lado Esquerdo: Texto Principal */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[var(--color-text-primary)]">
            Transforme seu processo de participação em licitações com a nossa
            solução completa e ágil, potencializando o faturamento.
          </h1>
          <p className="text-lg text-[var(--color-text-secondary)]">
            Diariamente, captamos mais de 95% das licitações. Em média, são
            monitorados 37 mil órgãos em todo Brasil.
          </p>
        </div>

        {/* Lado Direito: Formulário de Cadastro */}
        <div className="bg-[var(--color-card)] p-8 rounded-lg shadow-lg border border-gray-200">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-[var(--color-text-primary)]">
              CONCLUA O CADASTRO E GARANTA O SEU ACESSO TOTALMENTE GRATUITO
            </h2>
            <p className="text-sm text-[var(--color-text-secondary)]">
              Aproveite esta cortesia exclusiva por 7 dias.
            </p>
          </div>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="cnpj"
                className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1"
              >
                Insira o seu CNPJ
              </label>
              <input
                type="text"
                id="cnpj"
                name="cnpj"
                placeholder="Digite seu CNPJ"
                className="w-full bg-white border border-gray-300 rounded-md py-3 px-4 text-[var(--color-text-primary)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[var(--color-primary)] hover:opacity-90 text-[var(--color-primary-foreground)] font-bold py-3 px-4 rounded-md transition-opacity"
            >
              PRÓXIMO
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
