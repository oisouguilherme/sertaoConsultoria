import fotocasal from "../../assets/fotocasal.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init();

export function NossaHistoria() {
  return (
    <section
      id="NossaHist"
      className="lg:px-24 px-8 py-32 flex flex-col lg:flex-row gap-4 justify-around items-center text-center lg:text-start"
    >
      <div className="md:w-1/2 space-y-8">
        <h2 className="text-4xl font-bold text-verde">Nossa história</h2>
        <p
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-delay="300"
          className="text-2xl"
        >
          Ianna e João Rafael decidiram juntos usar o conhecimento que acumularam ao longo dos anos para atender diversas empresas e fundar a Sertão Consultoria. Juntos, somam mais de 14 anos de trabalhos realizados na área ambiental. No início o projeto era ambicioso; atender empresas de diversos seguimentos e tamanhos para que pudessem estar em conformidade com a legislação ambiental. Não acreditamos apenas em cumprimento de normas, e sim o atendimento delas como parte importante no processo para que as empresas atendidas se tornassem mais sólidas, fortes e referência no mercado em que atuam. Hoje, várias empresas foram atendidas pela Sertão e obedecem a legislação ambiental para crescem sem risco.
        </p>
      </div>
      <img
        data-aos="fade-left"
        data-aos-delay="300"
        data-aos-once="true"
        className="w-96 cursor-pointer"
        src={fotocasal}
        alt=""
      />
    </section>
  );
}
