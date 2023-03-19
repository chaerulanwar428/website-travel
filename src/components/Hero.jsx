import React from 'react'

export const Hero = () => {
  return (
    <div className='w-full h-screen'>
        <img className="top-0 left-0 w-full h-screen object-cover" src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg" alt="" />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
            <p>Trip Lombok</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Pantai dan Resort yang sangat Menenangkan</h1>
            <p className='my-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est illo, culpa sunt nemo nulla eaque ducimus iusto eveniet eos similique?</p>
            <button className='bg-white text-black'>Pesan Sekarang</button>
            </div>
        </div>
    </div>
  )
}


export default Hero