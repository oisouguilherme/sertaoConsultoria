import valor from "../../assets/equipe.jpeg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

export function NossoValor() {
  return (
    <div className="lg:px-24 px-8 py-12 flex gap-12 justify-around flex-col-reverse lg:flex-row items-center text-center lg:text-start">
      <img
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-once="true"
        className="md:w-1/2 cursor-pointer"
        src={valor}
        alt=""
      />
      <div className="space-y-8 lg:w-1/2">
        <h2 className="text-4xl font-bold text-verde">Em que acreditamos</h2>
        <p
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="300"
          className="text-2xl"
        >
          <strong>Missão:</strong> Assegurar aos empreendedores o uso adequado dos recursos naturais, a conservação e a recuperação dos ecossistemas, contribuindo para a sustentabilidade do desenvolvimento.<br />
          <strong>Visão:</strong> Ser reconhecida no mercado como uma empresa inovadora, que respeita a legislação ambiental com foco na sustentabilidade, imbuída em proporcionar boas condições de trabalho para seus colaboradores e integração social nas comunidades onde será inserida.<br />
          <strong>Valores:</strong> Comprometimento, melhoria contínua, inovação, integridade, ética, transparência, eficácia, respeito ao meio ambiente, valorização e capacitação do elemento humano.
        </p>
      </div>
    </div>
  );
}
