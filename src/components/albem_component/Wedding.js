/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { weddingData } from './data/WeddingData'
import Image from 'next/image';

export const Wedding = () => {

  return (
    <>
        {weddingData.map(wed =>(
            <div key={wed.id}>
                <h2 className='flex flex-col items-center my-2 text-4xl'>{wed.title}</h2>
                <div class="grid grid-cols-4 gap-4">
                <div><Image src={wed.album_image}  width={16} height={9} layout="responsive"/></div>
                <div><Image src={wed.album_image}  width={16} height={9} layout="responsive"/></div>
                <div><Image src={wed.album_image}  width={16} height={9} layout="responsive"/></div>
                <div><Image src={wed.album_image}  width={16} height={9} layout="responsive"/></div>
                </div>
                
            </div>
        ))}
    </>
  )
}
