import block from '../../assets/block.png'

export function NossaHistoria(){
  return(
    <div  className='px-24 py-12 flex justify-around items-center'>
      <div className='w-1/2 space-y-8'>
        <h2 className='text-4xl font-bold text-verde'>Nossa história</h2>
        <p className='text-2xl'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione facere mollitia, explicabo minima cupiditate necessitatibus, nobis laudantium nihil veniam eum exercitationem quasi? Aut inventore, saepe consequuntur nemo reprehenderit molestias praesentium.</p>
      </div>
      <img className='w-96' src={block} alt="" />
    </div>
  )
}