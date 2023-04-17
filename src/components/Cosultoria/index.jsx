import planta from '../../assets/planta.jpg'

export function Consultoria(){
  return(
    <div className='lg:px-24 px-8 py-12 flex flex-col gap-8 lg:flex-row justify-around items-center text-center lg:text-start'>
      <img className='w-96 rounded-md shadow-lg shadow-black cursor-pointer' src={planta} alt="" />
      <div className='md:w-1/2 space-y-8'>
        <h2 className='text-4xl font-bold text-verde'>Consultoria ambiental</h2>
        <p className='text-2xl'>São diversas as normas ambientais do país e para que sua empresa não sofra penalidades é preciso que suas atividades estejam de acordo com elas, nós elaboramos todos os tipos de estudos e documentação para que você continue com suas atividades. Você não precisa se preocupar com as questões ambientais, isso nós fazemos pelo seu negócio.</p>
      </div>
    </div>
  )
}