import { Link } from "react-scroll";
import "./Main.css";
import video from '../../assets/video.webm'
export function Main() {
  return (
    <section id="Main" className="w-full md:p-44 p-12 flex flex-col items-center gap-24 relative ">
      <video 
      className="absolute top-0 h-full w-full object-cover"
      src={video} 
      autoPlay
      muted
      loop />
      <h1 className="text-white font-black text-6xl text-center z-10">
        Deixe sua empresa dentro da legislação ambiental e cresça sem riscos!
      </h1>
      <Link 
        smooth={true} 
        duration={500}
        className="text-2xl bg-verdeclaro text-white hover:scale-110 duration-300 shadow-lg shadow-white py-4 rounded-lg font-bold sm:w-80 text-center w-full cursor-pointer z-10" 
        to="NossaHist">
        Conheça mais
      </Link>
    </section>
  );
}
