import React from 'react'

const VellMainPhoto = () => {
  return (
    <div className='mt-[150px] relative'>
        <img src="images/main-photo.jpg" alt="main-photo" className='h-[260px] sm:h-full object-cover' />
        <div className='absolute right-0 top-0 w-full xl:w-6/12 h-full flex flex-col justify-center items-center z-10 text-white'>
            <p className='font-[500]'>PHOTOGRAPHY</p>
            <h1 className='text-center font-500 font-serif text-3xl leading-[50px]'>What your November 2022 <br /> looked like</h1>
            <p className='font-[500] mt-[1.5rem]'>20 February 2023</p>
        </div>
    </div>
  )
}

export default VellMainPhoto