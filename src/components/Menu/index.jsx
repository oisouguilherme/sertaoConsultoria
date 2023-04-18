import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Nav = () => {
  let Links = [
    { name: "Inicio", link: "Main" },
    { name: "Serviços", link: "Servicos" },
    { name: "Parceiros", link: "Parceiros" },
    { name: "Contato", link: "Orcamento" },
  ];
  let [open, setOpen] = useState(false);
  return (
    <div className="shadow-md w-full fixed z-10 top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7 lg:px-24">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center 
      text-gray-800"
        >
          <img className="sm:h-20 h-14" src={logo} alt="logo da empresa" />
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          <a name={open ? "close" : "menu"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </a>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-15 " : "top-[-480px]"
          }`}
        >
          {Links.map((link) => (
            <li
              key={link.name}
              className="md:ml-8 text-xl md:my-0 my-7 text-verde hover:scale-110 hover:text-verdeclaro font-bold cursor-pointer duration-300"
            >
              <Link smooth={true} duration={500} to={link.link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Nav;
