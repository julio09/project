import React from 'react'
import {Trano,Trano2,Trano3,Trano4} from '../assets'

const Affiche = () => {
  return (
    <>
    <div className='font-[Montserrat] px-[124px] py-[80px] flex flex-col gap-[80px] items-center'>
      <section className='gap-[24px] self-stretch items-center flex flex-col'>
      <h3 className='uppercase text-bluesky text-[24px] leading-normal font-bold'>Lorem ipsum dolor sit</h3>
      <p className='self-stretch text-center text-[40px] font-semibold '>Sed laoreet netus malesuada eget cras</p>
      </section>
      <section className='grid grid-cols-4 items-center gap-[14px] justify-end '>

        <div className="rounded-[14px]">
        <img src={Trano} alt='' />
        </div>

        <div className="rounded-[14px]">
          <img src={Trano2} alt='' />
        </div>



        <div className="rounded-[14px]">
        <img src={Trano3} alt='' />
        </div>


        <div className="rounded-[14px]">
        <img src={Trano4} alt='' />
        </div>

      </section>
    </div>
    </>
  )
}

export default Affiche