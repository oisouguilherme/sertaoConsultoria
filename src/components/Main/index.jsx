import { Link } from "react-scroll";
import "./Main.css";

export function Main() {
  return (
    <section id="Main" className="bg-image w-full md:p-32 p-12 flex flex-col items-center gap-24">
      <h1 className="text-white font-black text-6xl text-center">
        Deixe sua empresa dentro da legislação ambiental e cresça sem riscos!
      </h1>
      <Link 
        smooth={true} 
        duration={500}
        className="text-2xl bg-verdeclaro text-white hover:scale-110 duration-300 shadow-lg shadow-white py-4 rounded-lg font-bold sm:w-80 text-center w-full cursor-pointer" 
        to="NossaHist">
        Conheça mais
      </Link>
    </section>
  );
}
