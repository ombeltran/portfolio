import { useEffect, useState } from "react";
import { demoProjects } from "../data/listDemo";

export default function Hero() {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) =>
        prev === demoProjects.length - 1 ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const project = demoProjects[currentProject];

  return (
    <section
      id="hero"
      className="min-h-screen bg-[#0B0F19] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Component */}
          <div>
            <span className="text-emerald-400 text-sm tracking-[0.3em] uppercase">
              Supply Chain • Quality Systems • Analytics
            </span>

            <h1 className="mt-6 text-5xl md:text-7xl font-bold leading-tight">
              Building data-driven solutions
              <span className="block text-emerald-400">for manufacturing</span>
              and operations.
            </h1>

            <p className="mt-8 text-xl text-gray-400 max-w-xl">
              Industrial Engineer with experience in supply chain, quality
              systems, business analytics and custom software solutions.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-emerald-500 rounded-xl font-medium hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="/Oscar_Beltran_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-gray-700 rounded-xl font-medium hover:bg-white/5 transition"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>

          {/* Right Component */}
          <div>
            <div className="rounded-3xl overflow-hidden border border-gray-800 bg-[#111827] shadow-2xl">
              <div className="p-4 border-b border-gray-800">
                <h3 className="text-xl font-bold">{project.title}</h3>

                <p className="text-sm text-gray-400">{project.tech}</p>
              </div>

              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-[450px] 
                  ${
                    project.Mobile
                      ? "object-contain bg-black"
                      : "object-cover "
                  }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
