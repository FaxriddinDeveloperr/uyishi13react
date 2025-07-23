import React from 'react'
import Vidio from '../../assets/Video.png'

const Hero = () => {
  return (
    <div className='bg-[#151719] px-4'>
      <div className='text-white text-center pt-20'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold leading-tight'>
          Landing template for startups
        </h1>
        <p className='mt-4 text-sm sm:text-base'>
          Our landing page template works on all devices, so you only have to <br className='hidden sm:block' />
          set it up once, and get beautiful results forever.
        </p>

        <div className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-10'>
          <button className='bg-[#5D5DFF] w-[167px] h-[48px]'>Start free trial</button>
          <button className='bg-[#33363A] w-[149px] h-[48px]'>Learn more</button>
        </div>
      </div>

      <div className='container mx-auto mt-[67px]'>
        <img className='mx-auto w-full max-w-[900px] px-2' src={Vidio} alt="Video" />
      </div>
    </div>
  )
}

export default Hero
