import ambiente from '../../../assets/ambiente.svg'

export function CardService({text}){
  return (
    <div className="w-full sm:w-96 h-32 bg-verdeclaro rounded-xl font-medium px-8 flex items-center gap-4 cursor-pointer shadow-lg shadow-black overflow-hidden">
      <img src={ambiente} className='w-14 h-14' alt="" />
      <p className='text-2xl'>{text}</p>
    </div>
  );
}