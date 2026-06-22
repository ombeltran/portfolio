export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0F172A]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <span className="text-emerald-400 uppercase tracking-[0.3em] text-sm">
            About Me
          </span>

          <h2 className="mt-4 text-5xl font-bold">
            Bridging Operations, Analytics and Technology
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-semibold mb-8">
              Professional Profile
            </h3>

            <div className="space-y-4 text-gray-300">
              <div>Industrial Engineer</div>

              <div>Master's Degree in Engineering</div>

              <div>10+ Years Industry Experience</div>

              <div>Manufacturing Operations</div>

              <div>Supply Chain & Planning</div>

              <div>Quality Systems</div>

              <div>Data Analytics</div>
            </div>
          </div>

          <div className="text-gray-300 text-lg leading-relaxed">
            <p>
              I am an Industrial Engineer with experience in manufacturing,
              quality systems, supply chain operations and data analytics.
            </p>

            <p className="mt-6">
              Throughout my career, I have worked on process improvement, KPI
              tracking, quality control and operational performance.
            </p>

            <p className="mt-6">
              In recent years, I have expanded my skill set by developing
              dashboards, automation workflows, desktop applications and
              internal business platforms that help teams improve visibility,
              efficiency and decision-making.
            </p>

            <p className="mt-6">
              My unique strength is combining operational knowledge with
              technical implementation to solve real business problems.
            </p>
          </div>
        </div>

        {/* KPI cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8 text-center">
            <div className="text-5xl font-bold text-emerald-400">10+</div>

            <div className="mt-3 text-gray-400">Years Experience</div>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8 text-center">
            <div className="text-5xl font-bold text-emerald-400">5+</div>

            <div className="mt-3 text-gray-400">Applications Built</div>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8 text-center">
            <div className="text-5xl font-bold text-emerald-400">10+</div>

            <div className="mt-3 text-gray-400">Dashboards Created</div>
          </div>

          <div className="rounded-3xl border border-gray-800 bg-[#111827] p-8 text-center">
            <div className="text-5xl font-bold text-emerald-400">100%</div>

            <div className="mt-3 text-gray-400">Business Focused</div>
          </div>
        </div>
      </div>
    </section>
  );
}
