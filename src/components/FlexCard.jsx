import React from 'react'
import {Home} from '../assets'

const FlexCard = () => {
  return (
    <>
    <section className='font-[Montserrat] w-full md:flex flex-col md:flex-row items-start md:mt-20 bg-[#F0F0F0] gap-[40px] py-[80px] px-[124px] '>
      <div className='relative px-[48px] py-[5px] gap-[10px] md:items-start self-stretch flex-1 '>
        <img src={Home} alt='' className='hidden md:flex md:absolute md:-bottom-20 -left-[124px] md:w-[844px] md:h-[800px] object-cover '/>
      </div>
      <div className='flex flex-col items-center md:items-start gap-[24px] flex-1'>
        <p className='uppercase text-[15px] leading-normal font-bold text-[#0C83C7] '>Lorem ipsum dolor sit</p>
        <div className='grid md:grid-cols-2 items-start gap-[24px] self-stretch'>
          <div className='bg-white self-stretch  px-6 pt-4 pb-8 md:h-[348px] md:pt-[28px] md:px-[28px] md:pb-[90px] items-start gap-[24px] rounded-[14px] flex flex-col '>
            <div className='items-center justify-center flex px-3 py-2 rounded-[14px] bg-[#FFF0CC] '>
              <span className='text-[#FFB200] leading-normal font-semibold md:text-[28px]'>01.</span>
            </div>
            <p className='self-stretch text-black text-[14px] md:text-[22px] font-bold leading-normal uppercase'>
            Id enim nulla vitae 
            <br />vitae.
            </p>
            <p className='self-stretch text-[#404040] font-light leading-normal text-sm md:text-[16px] '>
            Blandit convallis ultrices lacus sed lacus scelerisque eu cursus pellentesque. 
            </p>
          </div>



          <div className='bg-white md:h-[348px] md:pt-[28px] md:px-[28px] px-6 pt-4 pb-8 md:pb-[65px] items-start gap-[24px] rounded-[14px] flex flex-col '>
            <div className='items-center justify-center flex px-3 py-2 rounded-[14px] bg-[#FFDDD6] '>
              <span className='text-[#F44236] leading-normal font-semibold md:text-[28px]'>02.</span>
            </div>
            <p className='self-stretch text-black text-[14px] md:text-[22px] font-bold leading-normal uppercase'>
            Cras lacus dignissim consequat id nam. 
            </p>
            <p className='self-stretch text-[#404040] font-light leading-normal text-sm md:text-[16px] '>
            Ultrices sed hendrerit tellus
            <br /> ullamcorper sit sed tempor ultrices
            <br /> habitasse. 
            </p>
          </div>




          <div className='bg-white md:h-[348px] md:pt-[28px] md:px-[28px] px-6 pt-4 pb-8 md:pb-[65px] items-start gap-[24px] rounded-[14px] flex flex-col '>
            <div className='items-center justify-center flex px-3 py-2 rounded-[14px] bg-[#DBEFDC] '>
              <span className='text-[#4CB050] leading-normal font-semibold md:text-[28px]'>03.</span>
            </div>
            <p className='self-stretch text-black text-[14px] md:text-[22px] font-bold leading-normal uppercase'>
            Enim molestie est ut in mauris in molestie. 
            </p>
            <p className='self-stretch text-[#404040] font-light leading-normal text-sm md:text-[16px] '>
            Lectus scelerisque tristique 
            <br /> interdum vulputate amet risus 
            <br />consectetur viverra tellus. 
            </p>
          </div>



          <div className='bg-white md:h-[348px] md:pt-[28px] md:px-[28px] px-6 pt-4 pb-8 md:pb-[65px] items-start gap-[24px] rounded-[14px] flex flex-col '>
            <div className='items-center justify-center flex px-3 py-2 rounded-[14px] bg-[#EBD4EF] '>
              <span className='text-[#9C28B1] leading-normal font-semibold md:text-[28px]'>04.</span>
            </div>
            <p className='self-stretch text-black text-[14px] md:text-[22px] font-bold leading-normal uppercase'>
            Vestibulum ac venenatis 
            </p>
            <p className='self-stretch text-[#404040] font-light leading-normal text-sm md:text-[16px]'>
            Quam sit nibh sit turpis mollis platea. Massa vitae eget enim at ullamcorper morbi tempus gravida sem.  
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default FlexCard