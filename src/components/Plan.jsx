import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
    <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjAxNzcyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=735&q=80" alt="" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1568179576330-bf2e6e4a30fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1520483725102-a4daafec9a73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnxjWDBZRGFXeTQ0d3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=735&q=80" alt="" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" alt="" />
    </div>

    <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Ayo, Rencanakan Perjalanan Anda Selanjutnya</h3>
        <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing .</p>
        <p className='pb-6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam, architecto repudiandae quibusdam quas eaque iure vitae doloremque earum voluptatem ratione! Magni perspiciatis sequi error excepturi, nobis sed ipsa totam laudantium.</p>
    <div>
        <button className='border-black mr-4 hover:shadow-xl m-2'>Pelajari Lebih Lanjut</button>
        <button className='bg-black text-white border-black m-2 hover:shadow-xl'>Pesan Tempat Tujuanmu</button>
    </div>
    </div>
    </div>
  )
}

export default Plan