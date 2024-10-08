import React from 'react'
import { motion, stagger } from 'framer-motion';

const quote={
  initial:{
    opacity:1,
  },
  animate:{
    opacity:1,
    transition:{
      delay:0.5,
      staggerChildren:0.08,
    }
  }
}

const singelWord={
  initial:{
    opacity:0,
    y:10,
  },
  animate:{
    opacity:1,
    y:10,
    transition:{
      duration:1
    }
  }
}

const AnimatedText = ({text,className=""}) => {
  return (
    <div className='flex items-center justify-center w-full py-2 mx-auto overflow-hidden text-center sm:py-1'>
      <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl 
      dark:text-light
      ${className}`}
      variants={quote}
      initial="initial"
      animate="animate"
      >
        
        {
          text.split(" ").map((word, index)=>
          <motion.span key={word+'-'+index} className='inline-block'
          variants={singelWord}
          >
            
            {word}&nbsp;
          </motion.span>
        )
        }
      </motion.h1>
    </div>
  )
}
export default AnimatedText;