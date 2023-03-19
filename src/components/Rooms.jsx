import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] lg:h-[700px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4 sm:h-[1200px]'>
        <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
            <h3 className='text-2xl font-bold'>Ruang interior yang sangat elegan</h3>
        <p className='pt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, dolore itaque quibusdam libero vitae saepe.</p>
        </div>
        <div className='grid grid-cols-2 col-span-2 gap-2'>
            <img className='object-cover w-full h-full' src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <img className='row-span-2 object-cover w-full h-full'src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
            <img className='object-cover w-full h-full' src="https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
    </div>
  )
}

export default Rooms