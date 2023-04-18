import zap from '../../assets/zap.svg'

export function Orcamento() {
  return (
    <section
      id="Orcamento"
      className="md:px-32 px-4 w-full py-12 space-y-12 flex flex-col items-center lg:flex-row justify-between bg-marromclaro"
    >
      <h2 className="text-5xl font-bold text-center lg:text-start text-white lg:w-1/2">
        Isso é tudo! <br /> Agora chegou o momento de nos contratar.
      </h2>
      <a
        className="w-24 hover:scale-110 duration-300"
        href="#"
      >
        <img src={zap} alt="" />
      </a>
    </section>
  );
}
