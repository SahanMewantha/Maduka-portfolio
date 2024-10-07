import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink href="/" className='flex items-center justify-center w-24 h-24 mx-5 text-sm font-normal text-center border-2 border-solid rounded-full font-cinzel border-dark bg-light text-dark dark:bg-dark dark:border-light dark:text-light'
        whileHover={{
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition:{duration:1,repeat:Infinity}
        }}>
        CEYLON
        ENHANCE
        </MotionLink>
    </div>
  )
}
export default Logo;