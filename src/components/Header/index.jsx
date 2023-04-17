import logo from "../../assets/logo.png";

export function Header() {
  return (
    <div className="justify-between items-center px-4 sm:px-24 py-6 flex">
      <img className="sm:h-20 h-14" src={logo} alt="logo da empresa" />
      <div className="lg:hidden">
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
      </div>
      <ul className="hidden lg:flex space-x-8 text-xl font-bold">
        <li className="hover:scale-110 duration-300 hover:text-verde">
          <a href="#">Inicio</a>
        </li>
        <li className="hover:scale-110 duration-300 hover:text-verde">
          <a href="#">Serviços</a>
        </li>
        <li className="hover:scale-110 duration-300 hover:text-verde">
          <a href="#">Parceiros</a>
        </li>
        <li className="hover:scale-110 duration-300 hover:text-verde">
          <a href="#">Contato</a>
        </li>
      </ul>
    </div>
  );
}
