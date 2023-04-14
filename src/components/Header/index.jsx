import logo from "../../assets/logo.png";

export function Header() {
  return (
    <div className=" flex justify-between items-center px-24 py-6">
      <img className="h-20" src={logo} alt="logo da empresa" />
      <ul className="flex space-x-8 text-xl font-bold">
        <li className="hover:scale-110 duration-300 hover:text-verde">
          <a href="#">Inicio</a>
        </li>
        <li className="hover:scale-110 duration-300 hover:text-verde">
          <a href="#">Sobre Nós</a>
        </li>
        <li className="hover:scale-110 duration-300 hover:text-verde">
          <a href="#">Parceiros</a>
        </li>
        <li className="hover:scale-110 duration-300 hover:text-verde">
          <a href="#">Fale conosco</a>
        </li>
      </ul>
    </div>
  );
}
