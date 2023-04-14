import logo from '../../assets/logo.png'

export function Header(){
  return (
    <div className=" bg-black flex justify-between items-center text-white px-24 py-4">
      <img className="h-28" src={logo} alt="logo da empresa" />
      <ul className='flex space-x-8 text-xl font-bold'>
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">História</a>
        </li>
        <li>
          <a href="#">Parceiros</a>
        </li>
      </ul>
    </div>
  );
}