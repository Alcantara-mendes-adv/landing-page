import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0f1f11] text-white py-16">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="flex justify-center mb-8">
          <Image
            src="/logo-alcantara-mendes.png"
            alt="Logo Alcantara Mendes Licitações"
            width={150}
            height={50}
            className="h-auto" // Mantém a proporção da imagem
          />
        </div>
        <p className="text-gray-400 mb-4">
          Nós nos dedicamos a facilitar o acesso dos empresários ao mercado de
          licitações públicas, promovendo uma parceria sólida e benéfica com o
          governo.
        </p>
        <p className="text-gray-400">
          Nosso compromisso é entender profundamente as necessidades dos nossos
          clientes e oferecer soluções inovadoras, utilizando tecnologia de
          última geração e contando com a expertise de uma equipe altamente
          qualificada e multidisciplinar. Mais de 10 Anos no mercado de
          licitações.
        </p>
      </div>
    </footer>
  );
}
