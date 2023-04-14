import logo from '../../assets/logo.png'
export function Parceiros(){
  return(
    <div className="px-24 py-12 space-y-12 flex flex-col items-center">
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
    </div>
  )
}