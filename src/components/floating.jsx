import React from 'react'
import { motion } from 'motion/react'
import { useState } from 'react'


export default function Float() {
  const [isFlipped , setisFlipped] =useState(false);
  return (
    <>
    <div className='p-10 card-contain perspective-[1000px]'  onClick={()=>setisFlipped((state)=>!state)}>
    <motion.div className='card relative w-[336px] h-[576px] [transform-style:preserve-3d]' 
    initial={false}
    animate={{
      rotateY: isFlipped ? 180 : 0, 
    }}
    transition={{
      duration: 0.8,
      ease: "easeInOut",
    }}
    
    >
    <motion.div className='front p-4 absolute [backface-visibility:hidden] border-2 w-[336px] h-[576px] border-black rounded-[36px] bg-purple-400' >
        <img className='w-[288px] h-[288px] object-cover '  src='cute-img.png'/>
        <p className='text-[24px] p-[10px]'>Cute prick</p> 
        <p className='px-[10px] py-[5px] text-[18px]'>Ratings</p>
    </motion.div>
    <motion.div className='back p-4 absolute [backface-visibility:hidden] [transform:rotateY(180deg)] border-2 w-[336px] h-[576px] border-black rounded-[36px]  overflow-y-auto  [scrollbar-width: none] scrollbar-hide ' >
        <p className='p-[10px]'>Page</p>
        <p className='p-[10px]'>Size</p> 
        <p className='p-[10px]'>about</p>
        <p className='p-[10px]'>Page</p>
        <p className='p-[10px]'>Size</p> 
        <p className='p-[10px]'>about</p><p className='p-[10px]'>Page</p>
        <p className='p-[10px]'>Size</p> 
        <p className='p-[10px]'>about</p><p className='p-[10px]'>Page</p>
        <p className='p-[10px]'>Size</p> 
        <p className='p-[10px]'>about</p><p className='p-[10px]'>Page</p>
        <p className='p-[10px]'>Size</p> 
        <p className='p-[10px]'>about</p><p className='p-[10px]'>Page</p>
        <p className='p-[10px]'>Size</p> 
        <p className='p-[10px]'>about</p><p className='p-[10px]'>Page</p>
        <p className='p-[10px]'>Size</p> 
        <p className='p-[10px]'>about</p><p className='p-[10px]'>Page</p>
        <p className='p-[10px]'>Size</p> 
        <p className='p-[10px]'>about</p><p className='p-[10px]'>Page</p>
        <p className='p-[10px]'>Size</p> 
        <p className='p-[10px]'>about</p><p className='p-[10px]'>Page</p>
        <p className='p-[10px]'>Size</p> 
        <p className='p-[10px]'>about</p><p className='p-[10px]'>Page</p>
        <p className='p-[10px]'>Size</p> 
        <p className='p-[10px]'>about</p><p className='p-[10px]'>Page</p>
        <p className='p-[10px]'>Size</p> 
        <p className='p-[10px]'>about</p>
    </motion.div>
    </motion.div>
    </div>
        
    </>
  )
}
