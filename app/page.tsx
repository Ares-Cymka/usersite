import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ShaderBackground from "@/components/ShaderBackground";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <ShaderBackground />
      <div className="relative z-[1]">
        <Nav />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Achievements />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
