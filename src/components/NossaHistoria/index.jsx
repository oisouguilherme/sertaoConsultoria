import fotocasal from '../../assets/fotocasal.jpg'

export function NossaHistoria(){
  return (
    <section id='NossaHist' className="lg:px-24 px-8 py-12 flex flex-col lg:flex-row gap-4 justify-around items-center text-center lg:text-start">
      <div className="md:w-1/2 space-y-8">
        <h2 className="text-4xl font-bold text-verde">Nossa história</h2>
        <p className="text-2xl">
          Em Ianna e João Rafael decidiram juntos usar o conhecimento que
          acumularam ao longo dos anos para tender diversa empresas para fundar
          a Serão Consultoria. Juntos, somam mais de 14 anos de trabalhos
          realizados na área ambiental. No início o projeto era ambicioso;
          atender empresas de diversos seguimentos e tamanhos para que pudessem
          atender a legislação ambiental. Não acreditavam apenas em cumprimento
          de normas, e sim o atendimento delas como parte importante no processo
          para que as empresas atendidas se tornassem mais sólidas, fortes e
          referência no mercado em que atuam. Hoje, centenas de empresas já
          foram atendidas pela Sertão e obedecem a legislação ambiental. A
          legislação ambiental tem mudado com frequência devido a pressão
          social, estudos e órgãos ambientais, mas nós da Sertão Consultoria
          estamos atentos e a frente de qualquer mudança. Deste modo, nossos
          clientes recebem de forma rápida todas as atualizações necessárias.
        </p>
      </div>
      <img className="w-96 rounded-md shadow-lg shadow-black cursor-pointer" src={fotocasal} alt="" />
    </section>
  );
}