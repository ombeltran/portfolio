// src/components/Navbar.jsx
import { navItems } from "../data/listNavBar";


export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#0B0F19]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4">
        <a href="#hero" className="text-lg font-semibold text-white">
          Oscar Beltran
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-400 transition hover:text-emerald-400"
            >
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-xl bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:scale-105 md:inline-block"
        >
          Let’s connect
        </a>
      </nav>
    </header>
  );
}