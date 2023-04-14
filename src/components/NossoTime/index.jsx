import perfil from '../../assets/perfil.png'

export function NossoTime(){
  return(
    <div className="px-24 py-12 space-y-12 flex flex-col items-center">
      <h2 className='text-4xl font-bold text-verde'>Conheça nosso time</h2>
      <div className='flex flex-wrap gap-4 justify-center'>
        <img className='h-56 rounded-md cursor-pointer' src={perfil} alt="" />
        <img className='h-56 rounded-md cursor-pointer' src={perfil} alt="" />
        <img className='h-56 rounded-md cursor-pointer' src={perfil} alt="" />
        <img className='h-56 rounded-md cursor-pointer' src={perfil} alt="" />
        <img className='h-56 rounded-md cursor-pointer' src={perfil} alt="" />
      </div>
    </div>
  )
}