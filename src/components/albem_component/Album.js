import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

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
            
            <div className="grid grid-cols-2 gap-4 my-24  w-full border border-solid border-dark rounded-3xl justify-between items-center shadow-2xl bg-light dark:bg-dark p-12 relative dark:border-light">
                <div className='absolute top-0 -right-3 -z-20 w-[102%] h-[100%]: rounded-[2.5rem] bg-dark dark:bg-light' />
            
                    <div className='mb-5'>
                        <Link href={{pathname:'/portfolio_albem_gallery', query:{'albumType':album_data.query}}}>
                            <Image src={album_data.album_image} className='overflow-hidden bg-indigo-500 rounded-lg shadow-lg opacity-75 shadow-indigo-500/50'
                            alt="Description of the image"
                            width={500} // Width of the image
                            height={300}/>
                            
                        </Link>
                        
                    </div>

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

            <div class="grid grid-cols-2 gap-4 my-10  w-full border border-solid border-dark rounded-3xl justify-between items-center shadow-2xl bg-light dark:bg-dark p-12 relative dark:border-light">
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

                <div className='ml-10'>
                <Link href={{pathname:'/portfolio_albem_gallery', query:{'albumType':album_data.query}}}>
                <Image className='overflow-hidden bg-indigo-500 rounded-lg shadow-lg opacity-75 shadow-indigo-500/50'
                        src={album_data.album_image} // Path to your image
                        alt="Description of the image"
                        width={500} // Width of the image
                        height={300} // Height of the image
                    />
                </Link>
                
                    
                </div>
                
            </div>
        </>
    )
  } 
  
}
export default Album;
