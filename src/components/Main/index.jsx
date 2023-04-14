import "./Main.css";

export function Main() {
  return (
    <div className="bg-image w-full p-24 flex flex-col items-center gap-24">
      <h1 className="text-verde font-black text-5xl text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda illo
        nisi dolorum accusamus sequi voluptatum fuga alias voluptate repudiandae
        est corrupti ratione
      </h1>
      <a 
        className="text-2xl bg-verdeclaro text-white hover:scale-110 duration-300 shadow-lg shadow-white py-4 rounded-lg font-bold w-80 text-center" 
        href="#">
        Conheça mais
      </a>
    </div>
  );
}
