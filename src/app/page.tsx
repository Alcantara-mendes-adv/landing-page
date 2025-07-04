import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main>
      <Hero />
      <Audience />
      <Showcase />
      <Features />
      {/* Nossos componentes da landing page serão adicionados aqui */}
    </main>
  );
}
