import valor from '../../assets/equipe.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
AOS.init();

export function NossoValor(){
  return (
    <div data-aos="fade-right"
    data-aos-delay="300" className="lg:px-24 px-8 py-12 flex gap-12 justify-around flex-col-reverse lg:flex-row items-center text-center lg:text-start">
      <img 
      className="lg:w-1/3 sm:w-1/2 rounded-md shadow-lg shadow-black cursor-pointer" 
      src={valor} alt="" />
      <div 
      className="space-y-8 lg:w-1/2">
        <h2 className="text-5xl font-bold text-verde">Em que acreditamos</h2>
        <p className="text-2xl">
         <strong>Missão:</strong> Permitir que os empreendimentos trabalhem alinhados com as
          legislações ambientas vigentes para que possam se desenvolver sem riscos
          ambientais, econômicos e sociais! <br />
         <strong>Visão:</strong> Resolver questões ambientais
          dos empreendimentos com integridade, honestidade e transparência! <br />
         <strong>Valores:</strong> Integridade, Honestidade, Amor pelo que faz, Ética,
          Responsabilidade Ambiental Sustentabilidade, Equilíbrio, Transparência
        </p>
      </div>
    </div>
  );
}