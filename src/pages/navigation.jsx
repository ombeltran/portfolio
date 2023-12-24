import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { optionsNavBar } from "./listNavigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import logoImage from "../sources/images/logoOscarBeltran.png";

export function Navigation() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);

  const handleMenuOpen = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (index) => {
    setActiveLink(index);
    setMenuOpen(true);
  };

  useEffect(() => {
    setMenuOpen(true);
    const path = window.location.pathname;
    const index = optionsNavBar.findIndex((option) => option.path === path);
    if (index !== -1) {
      setActiveLink(index);
    }
  }, []);

  return (
    <nav className="fixed w-screen h-16 overflow-hidden flex items-center justify-between bg-zinc-800
    shadow-zinc-700/60 shadow-lg z-50">
      <div>
        <Link to={"/"}>
          <img
            src={logoImage}
            alt="logo"
            className="rounded-full ml-12 h-[60px]"
          />
        </Link>
      </div>

      <input type="checkbox" id="menu" className="peer hidden" />
      <label
        htmlFor="menu"
        className="z-50 pr-12"
        onClick={handleMenuOpen}
      >
        {isMenuOpen ? (
          <GiHamburgerMenu className="flex text-2xl font-semibold cursor-pointer md:hidden" />
        ) : (
          <FaTimes className="flex text-2xl font-semibold cursor-pointer md:hidden" />
        )}
      </label>

      <div
        className={`fixed w-full md:ml-60 inset-0 bg-gradient-to-br from-white/70 to-black/70
            ${isMenuOpen ? "-translate-x-full" : "peer-checked:translate-x-0 "}
            md:static md:translate-x-0 md:bg-none`}
      >
        <ul
          className={`absolute inset-x-0 top-20 p-12 bg-zinc-800 w-[90%] mx-auto rounded-2xl h-max
            text-center grid gap-8 md:gap-14 text-[22px] font-semibold shadow-2xl
            md:w-max md:bg-transparent md:p-0 md:grid-flow-col md:static `}
        >
          {optionsNavBar.map(({ path, name }, index) => (
            <li
              key={path}
              className={`pb-1 transition-colors duration-75  
              ${activeLink === index ? "border-b-2 w-24 mx-auto border-red-800"
                  : "hover:text-blue-800 hover:scale-105 hover:border-b-2 hover:w-24 hover:mx-auto hover:border-red-800"}`}
            >
              <Link to={path} onClick={() => handleLinkClick(index)}>
                {name}
              </Link>
            </li>
          ))}

          <button className="md:h-full rounded-3xl md:w-auto w-48 px-12 md:px-4 mx-auto bg-red-800 
          text-2xl hover:scale-[110%]">
            <Link to="/pdf" onClick={() => {
              // setMenuOpen(false)
              handleMenuOpen()
              setActiveLink(false)
            }}>
              Resumen
            </Link>
          </button>

        </ul>
      </div>

    </nav>
  );
}
