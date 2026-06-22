import { skillGroups } from "../data/listSkills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#0B0F19] py-32 text-white"
    >
      <div className="mx-auto max-w-7xl px-8">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm uppercase tracking-[0.3em] text-emerald-400">
            Skills
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-6xl">
            Combining business knowledge with technical execution.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            My experience spans operations, quality, analytics,
            and software development, allowing me to bridge
            business needs with practical technology solutions.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="
                rounded-3xl
                border
                border-gray-800
                bg-[#111827]
                p-8
                transition
                hover:border-emerald-500/40
              "
            >
              <h3 className="mb-6 text-2xl font-bold">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border
                      border-white/10
                      bg-white/5
                      px-4
                      py-2
                      text-sm
                      text-gray-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}