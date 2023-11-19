import React from 'react'
import { Logo } from '../assets'
import { motion } from "framer-motion"
import { listItems } from '../constants/index'

const Header = () => {

  const Header = {
    hidden: {opacity:0 , y:-100},
    show: { opacity:1, y:0, },
  }

  return (
    <motion.nav>
    <motion.nav variants={Header} initial="hidden" animate="show" transition={{duration: 0.2, delay: 0.1}} className="font-[Montserrat] w-full lg:px-[80px] md:px-[50px] md:py-[12px] px-4 py-6 lg:py-[20px] md:flex md:justify-between md:items-center">
        <div className='flex gap-1 md:gap-2 items-center'>
          <img src={Logo} alt="" />
          <span className='font-semibold md:font-bold text-lg md:text-xl'>Logo</span>
        </div>
        <ul className='font-semibold lg:gap-12 md:font-bold hidden md:text-lg text-base md:flex md:items-center py-8 md:py-0  space-y-6 md:space-y-0 text-center md:justify-between md:gap-6'>
          {listItems}
        </ul>
        <button className='text-white mx-48 hidden md:flex md:mx-0 bg-black hover:bg-white hover:border-2 font-bold hover:font-bold ease-in-out delay-200  hover:border-black hover:text-black text-[16px] px-[20px] py-[7px] rounded-sm md:rounded-lg md:px-[34px] md:py-[14px] z-20'>Connexion</button>
    </motion.nav>
    </motion.nav>
  )
}

export default Header