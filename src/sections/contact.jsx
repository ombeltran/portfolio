import { contactLinks } from "../data/listContact";
import { FaFilePdf } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0F172A] py-32 text-white">
      <div className="mx-auto max-w-7xl px-8">
        <div className="rounded-3xl border border-gray-800 bg-[#111827] p-10 md:p-16">
          <span className="text-sm uppercase tracking-[0.3em] text-emerald-400">
            Contact
          </span>

          <div className="mt-6 grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl font-bold md:text-6xl">Let’s connect.</h2>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-400">
                I am open to opportunities in supply chain, quality systems,
                manufacturing analytics, business analysis, and data-driven
                operational roles.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {contactLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? "_self" : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-gray-800 bg-white/5 px-6 py-4 text-lg font-medium text-gray-200 transition hover:border-emerald-500/50 hover:bg-emerald-500/10 hover:text-emerald-400"
                >
                  <link.icon className="text-2xl" />

                  <div>
                    <div>{link.label}</div>

                    {link.label === "Email" && (
                      <div className="text-sm text-gray-400">
                        ombeltranduk@gmail.com
                      </div>
                    )}
                  </div>
                </a>
              ))}

              <a
                href="/Oscar_Beltran_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-6 py-4 text-lg font-semibold text-white transition hover:scale-[1.02]"
              >
                <FaFilePdf className="text-xl" />

                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-10 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Oscar Beltran. Built with React and
          Tailwind CSS.
        </footer>
      </div>
    </section>
  );
}
