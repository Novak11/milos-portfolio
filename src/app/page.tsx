import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Awards } from "@/components/sections/Awards";
import { Portfolio } from "@/components/sections/Portfolio";
import { Skills } from "@/components/sections/Skills";
import { Experience } from "@/components/sections/Experience";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Awards />
      <Portfolio />
      <Skills />
      <Experience />
      <Clients />
      <Contact />
    </>
  );
}
