import Navbar from "./components/navBar";

import Hero from "./sections/hero";
import About from "./sections/about";
import Projects from "./sections/projects";
import Experience from "./sections/experience";
import Skills from "./sections/skills";
import Contact from "./sections/contact";

function App() {
  return (
    <div className="bg-[#0B0F19] text-white">
      <Navbar />

      <Hero />

      <About />

      <Projects />

      <Experience />

      <Skills />

      <Contact />
    </div>
  );
}

export default App;