import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Head from 'next/head';
import React, {useRef,useEffect} from 'react';
import Image from 'next/image';
import profilePic from '../../public/images/profile/developer-pic-2.jpg';
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
        <main className='flex flex-col items-center justify-center w-full mt-4 '>
            <Layout className='pt-16'>
                <AnimatedText text="Ceylon Enhance" className='mb-16 font-normal font-cinzel'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='flex flex-col items-start justify-start col-span-3'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-medium'>
                            Hi, CodeBucks, a web developer and UI/UX designer with a passion for creating beautiful, functional, 
                            and user-centered digital experiences. With 4 years of experience in the field. I am always looking for 
                            new and innovative ways to bring my visions to life.
                        </p>
                        <p className='my-4 font-medium'>
                            I believe that design is about more than just making things look pretty about solving problems and 
                            creating intuitive, enjoyable experiences for users. 
                        </p>
                        <p className='font-medium'>
                            Whether  working on a website, mobile app, or 
                            other digital product, I bring my commitment to design excellence and user-centered thinking to 
                            every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.
                        </p>
                    </div>

                    <div className='relative col-span-3 p-8 border-2 border-solid border-dark bg-light rounded-2xl h-max'>
                        <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark' />
                        <Image src={profilePic} alt='ce' className='w-full h-auto rounded-2xl'/> 
                    </div>
                    
                    <div className='flex flex-col items-end justify-between col-span-2'>
                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block font-bold text-7xl'>
                               <AnimatedNumbers value={50} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>satisfied clients</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block font-bold text-7xl'>
                            <AnimatedNumbers value={60} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>project completed</h2>
                        </div>

                        <div className='flex flex-col items-end justify-center'>
                            <span className='inline-block font-bold text-7xl'>
                            <AnimatedNumbers value={4} />+
                            </span>
                            <h2 className='text-xl font-medium capitalize text-dark/75'>years experience</h2>
                        </div>
                    </div>
                    
                </div>
            </Layout>
            
        </main>
    </>
  )
}
export default about;