import logo from '../../assets/logo.png'
export function Parceiros(){
  return(
    <section id='Parceiros' className="md:px-24 text-center py-12 md:pt-32 space-y-12 flex flex-col items-center">
      <h2 className='text-4xl font-bold text-verde'>Alguns dos nossos parceiros</h2>
      <div className='w-2/3 flex justify-center gap-8 flex-wrap'>
        <a href="#">
          <img className='h-20' src={logo} alt="" />
        </a>
        <a href="#">
          <img className='h-20' src={logo} alt="" />
        </a>
        <a href="#">
          <img className='h-20' src={logo} alt="" />
        </a>
        <a href="#">
          <img className='h-20' src={logo} alt="" />
        </a>
        <a href="#">
          <img className='h-20' src={logo} alt="" />
        </a>
        <a href="#">
          <img className='h-20' src={logo} alt="" />
        </a>
        <a href="#">
          <img className='h-20' src={logo} alt="" />
        </a>
        <a href="#">
          <img className='h-20' src={logo} alt="" />
        </a>
      </div>
    </section>
  )
}