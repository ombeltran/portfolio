import { Routes, Route } from "react-router-dom";
import { Navigation } from "./pages/navigation";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Projects from "./pages/projects.jsx";
import Contact from "./pages/contact.jsx";

function App() {
  return (
    <div className="text-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home /> } />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
