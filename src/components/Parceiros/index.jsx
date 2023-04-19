import logo from '../../assets/logo.png'
import logo1 from '../../assets/logos/logo1.png'
import logo2 from '../../assets/logos/logo2.png'
import logo3 from '../../assets/logos/logo3.png'
import logo4 from '../../assets/logos/logo4.png'
import logo5 from '../../assets/logos/logo5.png'
import logo6 from '../../assets/logos/logo6.png'


export function Parceiros(){
  return(
    <section 
    id='Parceiros' 
    className="md:px-24 text-center py-12 md:pt-32 space-y-12 flex flex-col items-center">
      <h2 className='text-4xl font-bold text-verde'>Alguns dos nossos parceiros</h2>
      <div 
      data-aos="fade-up"
      data-aos-delay="300"  
      className='w-2/3 flex justify-center items-center gap-8 flex-wrap'>
        <a href="#" className='hover:scale-110 duration-300'>
          <img className='h-28' src={logo1} alt="" />
        </a>
        <a href="#" className='hover:scale-110 duration-300'>
          <img className='h-20' src={logo2} alt="" />
        </a>
        <a href="#" className='hover:scale-110 duration-300'>
          <img className='h-20' src={logo3} alt="" />
        </a>
        <a href="#" className='hover:scale-110 duration-300'>
          <img className='h-24' src={logo4} alt="" />
        </a>
        <a href="#" className='hover:scale-110 duration-300'>
          <img className='h-16' src={logo5} alt="" />
        </a>
        <a href="#" className='hover:scale-110 duration-300'>
          <img className='h-20' src={logo6} alt="" />
        </a>
      </div>
    </section>
  )
}