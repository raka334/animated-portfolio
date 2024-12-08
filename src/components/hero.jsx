import React from 'react'
import { motion } from 'motion/react'

export default function Hero() {
  return (
    <motion.div 
    initial={{ x: "100%" }}
    animate={{ x: "calc(100vw - 80%)" }}
    transition={{duration:1 }}
    className='text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold '>
      Hey meet Jyotirmoy
    </motion.div>

  )
}

