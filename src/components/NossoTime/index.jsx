import iana from "../../assets/Iana.jpg";
import joao from "../../assets/Joao.jpg";
import marcos from "../../assets/marcos.jpeg";
import murielly from "../../assets/murielly.jpeg";
import jean from "../../assets/jean.jpeg";
import lucimara from "../../assets/lucimara.jpeg";
import priscila from "../../assets/priscila.jpeg";

export function NossoTime() {
  return (
    <div className="md:px-24 px-8 py-32 lg:py-32 space-y-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center text-verde">
        Conheça nosso time
      </h2>
      <div
        data-aos="fade-down"
        data-aos-delay="300"
        data-aos-once="true"
        className="flex flex-col items-center gap-8 justify-center"
      >
        <div className="lg:w-full lg:px-24 flex-wrap lg:flex-nowrap justify-center text-center lg:text-start flex items-center gap-8 text-xl">
          <img className="w-72 cursor-pointer" src={iana} alt="Foto de Ianna" />
          <p>
            Ianna Santana Souza é Engenharia Florestal, mestre em Estudos Rurais
            e doutoranda em Produção Vegetal. Trabalha com consultoria ambiental
            há 12 anos nas áreas de licenciamento ambiental, gestão ambiental,
            gerenciamento de resíduos sólidos, recuperação de áreas degradadas e
            produção em sistemas sustentáveis.
          </p>
        </div>
        <div className="lg:w-full lg:px-24 flex-wrap lg:flex-nowrap justify-center text-center lg:text-start flex items-center gap-8 text-xl">
          <img className="w-72 cursor-pointer" src={joao} alt="Foto de Jõao" />
          <p>
            João Rafael é graduado em Administração de Empresas, pós-graduado em
            Gestão Ambiental, com vasta experiência na administração de empresas
            de várias modalidades. Há 4 anos vem atuando como consultor
            ambiental na área de regularização ambiental, licenciamentos,
            georreferenciamento de imóveis rurais, elaboração de laudos de
            avaliação e topografia.
          </p>
        </div>
        <div className="lg:w-full lg:px-24 flex-wrap lg:flex-nowrap justify-center text-center lg:text-start flex items-center gap-8 text-xl">
          <img
            className="w-72 cursor-pointer"
            src={marcos}
            alt="Foto de Marcos"
          />
          <p>
            Marcos Vinícius Pacheco é graduado em Ciências Humanas e Geografia,
            mestre em Estudos Rurais, atua na área da educação de geociências,
            educação ambiental e patrimonial há 9 anos, e vem atuando nos
            últimos 4 anos na área de consultoria ambiental, em especial com
            gestão ambiental de obras e processos de regularização ambiental.
          </p>
        </div>
        <div className="lg:w-full lg:px-24 flex-wrap lg:flex-nowrap justify-center text-center lg:text-start flex items-center gap-8 text-xl">
          <img className="w-72 cursor-pointer" src={jean} alt="Foto de Jean" />
          <p>
            Jean-Paul Dardot é Engenheiro Ambiental, com mestrado na área de
            educação e doutorando em planejamento ambiental e energético. Tem
            vasta experiência com licenciamento e supervisão ambiental de
            empreendimentos de grande porte do setor energético, minerário,
            rodoviário e industrial.
          </p>
        </div>
        <div className="lg:w-full lg:px-24 flex-wrap lg:flex-nowrap justify-center text-center lg:text-start flex items-center gap-8 text-xl">
          <img
            className="w-72 cursor-pointer"
            src={murielly}
            alt="Foto de Murielly"
          />
          <p>
            Murielly Alves Coimbra é graduada em Ciências Biológicas, mestranda
            em Zoologia e tem ampla experiência na elaboração e execução de
            estudos faunísticos como Resgate, Inventário e Monitoramento.
          </p>
        </div>
        <div className="lg:w-full lg:px-24 flex-wrap lg:flex-nowrap justify-center text-center lg:text-start flex items-center gap-8 text-xl">
          <img
            className="w-72 cursor-pointer"
            src={lucimara}
            alt="Foto de Licimara"
          />
          <p>
            Lucimara Nazaré Silva Botelho Martins é graduada em Química com
            doutorado em Agroquímica e técnica em meio ambiente. Atua hoje na
            Sertões com educação ambiental, gerenciamento resíduos sólidos,
            gestão ambiental e inventário florestal para processos de
            regularização ambiental.
          </p>
        </div>
        <div className="lg:w-full lg:px-24 flex-wrap lg:flex-nowrap justify-center text-center lg:text-start flex items-center gap-8 text-xl">
          <img
            className="w-72 cursor-pointer"
            src={priscila}
            alt="Foto de Licimara"
          />
          <p>
            Priscila Fernandes de Souza é Engenharia Florestal, com doutorado em Recursos Genéticos Vegetais. Atualmente atua na área de licenciamento ambiental, principalmente em processos de regularização para a supressão da flora.
          </p>
        </div>
      </div>
    </div>
  );
}
