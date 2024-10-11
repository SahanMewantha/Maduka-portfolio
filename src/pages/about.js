import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, {useRef,useEffect} from 'react';
import Image from 'next/image';
import profilePic from '../../public/images/profile/image.png';
import { useInView, useMotionValue, useSpring } from 'framer-motion';





const AnimatedNumbers = ({value})=>{
    const ref = useRef(null);
    
    const motionValue= useMotionValue(0);
    const springValue= useSpring(motionValue,{duration:3000});
    const isInView= useInView(ref);

    useEffect(()=>{
        if(isInView){
            motionValue.set(value);
        }
    },[isInView, value, motionValue])
    
    useEffect(()=>{
        springValue.on("change",(latest)=>{
            if(ref.current && latest.toFixed(0)<=value){
                ref.current.textContent=latest.toFixed(0);
            }
        })
    },[springValue,value])

    return <span ref={ref}></span>
} 


const about = () => {
  return (
    <>
        <Head>
            <title>About Page</title>
            <meta name='description' content=''/>
        </Head>
        <main className='flex flex-col items-center justify-center w-full mt-4 dark:text-light'>
            <Layout className='pt-16 sm:pt-8 sm:mt-32 xs:mt-16 md:mt-16 lg:mt-16'>
                <AnimatedText text="Ceylon Enhance" className='mb-16 font-normal font-cinzel lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold text-dark/75 dark:text-light'>Madhuka Vishwa, </h2>
                        <center>
                            <h2 className='mb-4 text-lg font-bold text-dark/75 dark:text-light'>
                                Your visual storyteller!...
                            </h2>
                            <p className='my-4 font-medium'>
                                I believe that every photo has a story to tell, and I take pride in creating images that reflect the unique personalities of my subjects. Whether it’s the laughter of a child, the warmth of a family embrace, or the beauty of a breathtaking landscape, my goal is to freeze those fleeting moments in time.
                            </p>
                            <p className='font-medium'>
                                Join me on this visual journey as we create timeless art together.
                            </p>
                            <p className='font-medium'>
                                Let’s capture your story!
                            </p>
                        </center>
                    </div>

                    <div className='relative col-span-3 p-8 border-2 border-solid border-dark bg-light rounded-2xl h-max dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                        <Image src={profilePic} alt='ce' className='w-full h-auto rounded-2xl'
                            priority 
                            size="(max-width:768px)100vw,
                            (max-width:1200px)50vw,33vw"
                        /> 
                    </div>
                    
                    <div className='flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>
                               <AnimatedNumbers value={50} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={60} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>project completed</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center xl:items-center'>
                            <span className='inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={4} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light xl:text-center md:text-lg sm:text-base xs:text-sm'>years experience</h2>
                        </div>
                    </div>
                    
                </div>
            </Layout>
            
        </main>
    </>
  )
}
export default about;