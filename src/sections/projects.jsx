import { projects } from "../data/listProjects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0B0F19] py-32 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-emerald-400">
            Featured Projects
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Practical solutions for real business operations.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            A selection of internal platforms, dashboards, automation tools, and
            applications built around quality, manufacturing, analytics, and
            operational visibility.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}