import logo from "../../assets/logo.png";

export function Header() {
  return (
    <div className="justify-between items-center px-24 py-6 hidden lg:flex">
      <img className="h-20" src={logo} alt="logo da empresa" />
      <ul className="flex space-x-8 text-xl font-bold">
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
