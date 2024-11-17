import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from "framer-motion";


const Album = ({album_data}) => {

    const CustomLink =({href,title,className=''})=>{
        const router =useRouter();
        return(
            <Link href={href} target={'_blank'} className={`${className}`}>
                {title} 
            </Link>
        )
    }
  if(album_data.id%2 == 0){
    return (
        <>
            
            <div class="grid grid-cols-2 gap-4 my-24  w-full border border-solid border-dark rounded-3xl justify-between items-center shadow-2xl bg-light dark:bg-dark p-12 relative">
            
                    <motion.div className='mb-5'
                    whileHover={{ scale: 1.2 }} 
                    whileTap={{ scale: 0.8 }}>
                        
                        <Link href={{pathname:'/portfolio_albem_gallery', query:{'albumType':album_data.query}}}>
                            <Image src={album_data.album_image} className='overflow-hidden rounded-lg'
                            alt="Description of the image"
                            width={500} // Width of the image
                            height={300}/>
                            
                        </Link>
                        
                    </motion.div>

                    <div className='mb-5'>
                        <div className='album_intro_dis_card_right'>
                            <span className='details'>
                                
                            <p className='flex flex-col items-start my-2 text-4xl font-bold underline-offset-2 albem_title dark:text-light hover:underline'>
                                {album_data.title}
                            </p>
                            <br></br>
                            <p className='my-2 overflow-hidden font-medium dark:text-light text-ellipsis'>
                                {album_data.description}
                            </p>
                            <br></br>
                            <center>
                                <CustomLink href={{pathname:'/portfolio_albem_gallery', query:{'albumType':album_data.query}}} title={album_data.title} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"/>                                   
                            </center>
                            </span>
                        </div>
                    </div>  
            </div>
        
                
                <br></br>
        </>
      )
      
  }else{
    return(
        <>

            <div class="grid grid-cols-2 gap-4 my-10  w-full border border-solid border-dark rounded-3xl justify-between items-center shadow-2xl bg-light dark:bg-dark p-12 relative">
                <div className='ml-5 mr-6'>
                <div className='album_intro_dis_card_left'>
                        <span className='details'>
                            <p className='flex flex-col items-start my-2 text-4xl font-bold underline-offset-2 albem_title dark:text-light hover:underline'>
                                {album_data.title}
                            </p>
                            
                            <br></br>
                            <p className='my-2 overflow-hidden font-medium dark:text-light text-ellipsis'>
                                {album_data.description}
                            </p>
                            <br></br>
                            <center>
                                <CustomLink href={{pathname:'/portfolio_albem_gallery', query:{'albumType':album_data.query}}} title={album_data.title} className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark dark:text-dark  dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"/>    
                            </center>
                        </span>
                    </div>
                </div>

                <motion.div className='ml-10'
                whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
                <Link href={{pathname:'/portfolio_albem_gallery', query:{'albumType':album_data.query}}}>
                <Image
                        src={album_data.album_image} // Path to your image
                        alt="Description of the image"
                        width={500} // Width of the image
                        height={300} // Height of the image
                    />
                </Link>
                
                    
                </motion.div>
                
            </div>
        </>
    )
  } 
  
}
export default Album;
