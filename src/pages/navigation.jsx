import React, { useState } from "react";
import { optionsNavBar } from "./listNavigation";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

export function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(true);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="h-20 overflow-hidden flex items-center justify-between bg-zinc-800
    shadow-zinc-700/60 shadow-lg">
      <div>
        <h2 className="text-2xl pl-12 font-bold">Oscar Beltran</h2>
      </div>

      <input type="checkbox" id="menu" className="peer hidden" />
      <label htmlFor="menu" className="hidden peer-checked:block z-50 pr-12" onClick={handleMenuOpen}>
        {<GiHamburgerMenu className="flex text-2xl font-semibold cursor-pointer md:hidden" />}
      </label>
      <label htmlFor="menu" className="peer-checked:hidden z-50 pr-12" onClick={handleMenuOpen}>
        {<FaTimes className="flex text-2xl font-semibold cursor-pointer md:hidden" />}
      </label>

      <div
        className={`fixed pr-12 pt-1 inset-0 bg-gradient-to-br from-white/70 to-black/70
            ${isMenuOpen ? "translate-x-full" : "peer-checked:translate-x-0"}
            md:static md:translate-x-0 md:bg-none`}
      >
        <ul
          className={`absolute inset-x-0 top-24 p-12 bg-zinc-800 w-[90%] mx-auto rounded-2xl h-max
            text-center grid gap-6 text-[22px] font-semibold shadow-zinc-950 shadow-2xl
            md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static`}
        >
          {optionsNavBar.map(({ path, name }) => (
            <li key={path} className="hover:text-blue-800 hover:scale-125">
              <Link to={path} onClick={handleMenuOpen}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
