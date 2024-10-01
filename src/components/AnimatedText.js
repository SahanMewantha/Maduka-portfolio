import React from 'react'


const AnimatedText = ({text,className=""}) => {
  return (
    <div className='flex items-center justify-center w-full py-2 mx-auto overflow-hidden text-center'>
      <h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}>
        {
          text.split(" ").map((word, index)=>
          <span key={word+'-'+index} className='inline-block'>
            {word}&nbsp;
          </span>
        )
        }
      </h1>
    </div>
  )
}
export default AnimatedText;