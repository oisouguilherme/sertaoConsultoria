import { Link } from "react-scroll";
import "./Main.css";
import video from '../../assets/video.mp4'
export function Main() {
  return (
    <section id="Main" className=" bg-image w-full md:p-44 p-12 flex flex-col items-center gap-24 relative ">
      <video 
      className="absolute top-0 h-full w-full object-cover hidden md:flex"
      src={video} 
      autoPlay
      muted
      loop />
      <h1 className="text-white font-black text-6xl text-center z-10">
        Deixe sua empresa dentro da legislação ambiental e cresça sem riscos!
      </h1>
    </section>
  );
}
