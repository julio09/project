import React from 'react'
import { GLS, HeroK, RMP, alibaba, building } from '../assets'

const Hero = () => {
  return (
    <>
    <section className='font-[Montserrat] md:relative items-center justify-centers md:flex md:w-full pt-10 md:pt-[124px]'>
      <div className='flex flex-col px-8 md:pl-[124px] mb-[45px] gap-[80px]'>
        <div className='flex flex-col items-center gap-[40px]'>
        <p className='line-clamp-3 md:text-left text-[45px] leading-[94px] text-center font-bold md:text-[86px]'>Mi adipiscing cursus facilisis ullamcorper.</p>
        <p className='text-[#404040] line-clamp-4 md:line-clamp-3 text-center font-normal leading-[28px] md:text-[18px]'>Eget consequat hac diam tincidunt parturient nulla maecenas.
        Egestas duis morbi viverra ac amet. Augue lacus non nisi pulvinar arcu.</p>
      </div>
      <div className='self-stretch space-x-2  flex  p-[6px] bg-[#F2F7FB] justify-between items-center'>
      <input className='focus:outline-none self-stretch placeholder:text-[#404040] text-[#0B83C6] pl-[24px] placeholder:leading-normal placeholder:font-extralight placeholder:mx-2 bg-transparent' placeholder='Votre adresse email' />
      <button className='text-white self-stretch text-xsm md:text-[16px] px-[34px] hover:text-[#0B83C6] ease-in-out delay-75 hover:border-[#0B83C6] hover:bg-white hover:border  py-[14px] items-center rounded-[6px] bg-[#0B83C6]'>Lorem ipsum</button>
      </div>
      <div className='flex flex-col gap-[24px] items-start'>
        <p className='md:text-[18px] text-sm font-normal text-[#404040] leading-normal'>Lorem ipsum dolor sit</p>
        <div className='flex items-center gap-[40px]'>
          <img className='w-[85px] md:w-[100px] h-[40px] md:h-[54px] object-contain' alt='' src={building}/>
          <img className='w-[85px] md:w-[100px] h-[40px] md:h-[54px] object-contain' alt='' src={RMP}/>
          <img className='w-[85px] md:w-[100px] h-[40px] md:h-[54px] object-contain' alt='' src={alibaba}/>
          <img className='w-[85px] md:w-[100px] h-[40px] md:h-[54px] object-contain' alt='' src={GLS}/>
        </div>
      </div>
      </div>
      <img className='"md:w-[875px] md:h-[748px]' src={HeroK} alt=''/>
      </section>
    </>
  )
}

export default Hero