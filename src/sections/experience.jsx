import { experience } from "../data/listExperience";

export default function Experience() {
  return (
    <section id="experience" className="bg-[#0F172A] py-32 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-emerald-400">
            Experience
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            A career built at the intersection of operations and technology.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            My professional path combines engineering, supply chain,
            manufacturing, quality systems, analytics, and software development.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 top-0 hidden h-full w-px bg-gray-800 md:block" />

          <div className="space-y-8">
            {experience.map((item, index) => (
              <div key={item.title} className="relative md:pl-16">
                <div className="absolute left-0 top-2 hidden h-8 w-8 items-center justify-center rounded-full border border-emerald-400 bg-[#0F172A] text-sm font-bold text-emerald-400 md:flex">
                  {index + 1}
                </div>

                <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8 transition hover:border-emerald-500/50">
                  <h3 className="text-2xl font-bold">{item.title}</h3>

                  <p className="mt-4 max-w-3xl leading-relaxed text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}