import Hero from "@/components/Hero";
import Audience from "@/components/Audience";
import Showcase from "@/components/Showcase";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Audience />
      <Showcase />
      <Features />
      <Partners />
      <Footer />
      {/* Nossos componentes da landing page serão adicionados aqui */}
    </main>
  );
}
