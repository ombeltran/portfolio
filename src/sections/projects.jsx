import { projects } from "../data/listProjects";

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
            <article
              key={project.title}
              className="group overflow-hidden rounded-3xl border border-gray-800 bg-[#111827] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/50"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-7">
                <span className="text-sm font-medium text-emerald-400">
                  {project.category}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-400">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}