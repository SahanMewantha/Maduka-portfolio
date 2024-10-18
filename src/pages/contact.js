import Image from 'next/image';
import React from 'react'
import photo from "../../public/image_albems/Untitled design (1).png"
import Layout from '@/components/Layout';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';

const contact = () => {
  return (
    <>
        <Head>
            <title>Contact us</title>
            <meta name='description' content=''/>
        </Head>
        <main className='flex flex-col items-center justify-center w-full mt-4 dark:text-light'>
            <Layout className='pt-6 sm:pt-8 sm:mt-32 xs:mt-16 md:mt-16 lg:mt-16'>
              
            <AnimatedText text="Contact Us" className='text-dark font-normal font-cinzel lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 dark:text-light'/>
            
            <div>
              <Image src={photo} className='w-full h-full mt-5 blur-sm'></Image>
            </div>
            <div className='flex flex-col items-center pt-10'>
              <h2 className='pt-5 text-4xl font-bold text-'>Get In Touch</h2>
              <p className='!text-center pt-5 text-lg'>We are more than ready to capture your days with live,</p>
              <p className='!text-center text-lg'>we always value your moments as the best moments of us !!</p>
            </div>

            <div class="grid grid-cols-3 mt-10"> 
              <div class='h-52 text-center  text-md text-dark rounded-xl w-72 opacity-75  bg-zinc-400 dark:text-light  '>
                <h2 className='my-10 text-2xl text-bold'>WhatsApp Us</h2>
                <h1 className='mt-24'>077 12 34 567</h1>
              </div>

              <div class='h-52 text-center text-md text-dark rounded-xl w-72 opacity-75  bg-zinc-400 dark:text-light '>
                <h2 className='my-10 text-2xl text-bold'>Call Us</h2>
                <h1 className='mt-24'>077 12 34 567</h1>
              </div>

              <div class='h-52 text-center bg-zinc-400 text-md text-dark rounded-xl w-72 opacity-75 dark:text-light '>
                <h2 className='my-10 text-2xl text-bold'>Email Us</h2>
                <h1 className='mt-24'>abcexample@Gmail.com</h1>
              </div>
              
            </div>              
            </Layout>
        </main>     
    </>  
    
  )
  
}
export default contact;

