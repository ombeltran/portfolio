import { Routes, Route } from "react-router-dom";
import { Navigation } from "./pages/navigation";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Skills from "./pages/skills.jsx";
import Education from "./pages/education.jsx";
import Resume from "./pages/resume.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  return (
    <div className="text-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
