import iana from '../../assets/Iana.jpg'
import joao from '../../assets/Joao.jpg'
import marcos from '../../assets/marcos.jpeg'
import murielly from '../../assets/murielly.jpeg'
import jean from '../../assets/jean.jpeg'

export function NossoTime(){
  return (
    <div className="md:px-24 px-8 py-32 lg:py-32 space-y-12 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-center text-verde">Conheça nosso time</h2>
      <div 
      data-aos="fade-down"
      data-aos-delay="300"
      data-aos-once="true"
      className="flex flex-col items-center gap-8 justify-center">
        <div 
        className="lg:w-full lg:px-24 flex-wrap lg:flex-nowrap justify-center text-center lg:text-start flex items-center gap-8 text-xl">
          <img className='w-72 cursor-pointer' src={iana} alt="" />
          <p>
            Ianna Santana, formada em engenharia florestal, mestre em Estudos
            Rurais doutoranda em Produção Vegetal. É consultora em regularização
            ambiental, licenciamentos, recuperação de áreas degradadas, plantios
            em sistemas agroflorestais e gestão ambiental há 10 anos.
          </p>
        </div>
        <div className="lg:w-full lg:px-24 flex-wrap lg:flex-nowrap justify-center text-center lg:text-start flex items-center gap-8 text-xl">
          <img className='w-72 cursor-pointer' src={joao} alt="" />
          <p >
            João Rafael é formado em administração de empresas, pós graduado em
            Gestão Ambiental. Consultor ambiental na área de regularização
            ambiental e licenciamentos há 4 anos.
          </p>
        </div>
        <div className="lg:w-full lg:px-24 flex-wrap lg:flex-nowrap justify-center text-center lg:text-start flex items-center gap-8 text-xl">
          <img className='w-72 cursor-pointer' src={marcos} alt="" />
          <p >
          Marcos Vinícius Pacheco, formado em Ciências Humanas e Geografia, e mestre em Estudos Rurais. Atua na área da educação de geociências, educação Ambiental e patrimonial há nove anos, e vem atuando nos últimos quatro anos na área de consultoria ambiental.
          </p>
        </div>
        <div className="lg:w-full lg:px-24 flex-wrap lg:flex-nowrap justify-center text-center lg:text-start flex items-center gap-8 text-xl">
          <img className='w-72 cursor-pointer' src={jean} alt="" />
          <p >
          Jean-Paul Dardot é Engenheiro Ambiental, com mestrado na área de educação e doutorando em planejamento ambiental e energético. Tem vasta experiência com licenciamento e supervisão ambiental de empreendimentos de grande porte do setor energético, minerário, rodoviário e industrial.
          </p>
        </div>
        <div className="lg:w-full lg:px-24 flex-wrap lg:flex-nowrap justify-center text-center lg:text-start flex items-center gap-8 text-xl">
          <img className='w-72 cursor-pointer' src={murielly} alt="" />
          <p >
          Murielly Alves Coimbra, Possui graduação em Ciências Biológicas é mestranda no Programa de Zoologia da Universidade de Brasília. Atua na Consultoria Ambiental desde 2016, com a elaboração e execução de estudos faunísticos como Resgate, Inventário e Monitoramento da Fauna.
          </p>
        </div>
      </div>
    </div>
  );
}