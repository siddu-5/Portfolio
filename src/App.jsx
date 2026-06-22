import Navbar from "./components/Navbar/Navbar";
import Hero from "./sections/Hero/Hero";
function App() {
  return (
    <>
      <Navbar />

      <section id="home" className="h-screen" className="h-screen flex justify-center items-center bg-[#030712]">
        Home
      </section>

      <section id="about" className="h-screen" className="h-screen flex justify-center items-center bg-[#111827]">
        About
      </section>

      <section id="skills" className="h-screen" className="h-screen flex justify-center items-center bg-[#030712]">
        Skills
      </section>

      <section id="projects" className="h-screen" className="h-screen flex justify-center items-center bg-[#111827]">
        Projects
      </section>

      <section id="experience" className="h-screen" className="h-screen flex justify-center items-center bg-[#030712]">
        Experience
      </section>

      <section id="contact" className="h-screen" className="h-screen flex justify-center items-center bg-[#111827]">
        Contact
      </section>
      <Hero />
    </>
  );
}

export default App;