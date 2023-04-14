import block from '../../assets/block.png'

export function Consultoria(){
  return(
    <div className='px-24 py-12 flex justify-around items-center'>
      <img className='w-96' src={block} alt="" />
      <div className='w-1/2 space-y-8'>
        <h2 className='text-4xl font-bold'>Consultoria ambiental</h2>
        <p className='text-2xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam temporibus odio unde excepturi perspiciatis, beatae alias eos odit vero necessitatibus veniam placeat fugiat delectus, dolorum sint tempora aliquam ipsa molestias.</p>
      </div>
    </div>
  )
}