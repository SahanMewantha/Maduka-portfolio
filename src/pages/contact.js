import Image from 'next/image';
import React from 'react'
import photo from "../../public/image_albems/Untitled design (1).png"
import Layout from '@/components/Layout';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import { MailIcon, TelephoneIcon, WhatsAppIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import { TransitionEffect } from '@/components/TransitionEffect';

const contact = () => {
  return (
    <>
        <Head>
            <title>Contact us</title>
            <meta name='description' content=''/>
        </Head>
        <TransitionEffect/>
        <main className='flex-col items-center justify-center w-full mt-4 sm:flex dark:text-light'>
            <Layout className='pt-6 sm:pt-8 sm:mt-32 xs:mt-16 md:mt-16 lg:mt-16'>
              
            <AnimatedText text="Contact Us" className='text-dark font-normal font-cinzel lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8 dark:text-light'/>
            
            <div>
              <Image src={photo} className='w-full h-full mt-5 shadow-2xl blur-sm box-shadow shadow-cyan-500'></Image>
            </div>
            <div className='flex flex-col items-center pt-10'>
              <h2 className='pt-5 text-4xl font-bold text-'>Get In Touch</h2>
              <p className='!text-center pt-5 text-lg'>We are more than ready to capture your days with live,</p>
              <p className='!text-center text-lg'>we always value your moments as the best moments of us</p>
            </div>

            <div class="grid grid-cols-3 mt-10 sm:grid-cols-1"> 
              <div class='xs:flex sm:flex h-52 text-center  text-md text-dark rounded-xl w-72 opacity-75  bg-zinc-400 dark:text-light box-shadow shadow-2xl  hover:shadow-green-600 sm:h-28 sm:w-full sm:mb-5 md:mr-3 md:h-60 md:w-48'>
              
                  <WhatsAppIcon className={' h-1/6 w-1/6 mx-28 mt-6 sm:h-1/2 sm:w-1/2 sm:ml-1 xs:h-1/2 xs:w-36 xs:ml-4' }/>
                  <div className='sm:mr-36 xs:text-sm xs:mr-5'>
                    <h2 class='mt-5 text-2xl text-bold sm:mb-0 sm:truncate  '>WhatsApp Us !</h2>
                    <h1 class='mt-5 mb-12  sm:mt-0'>077-1234567</h1>
                  </div>
                
              </div>

              <div class='xs:flex sm:flex h-52 text-center text-md text-dark rounded-xl w-72 opacity-75 bg-zinc-400 dark:text-light box-shadow shadow-2xl hover:shadow-orange-600 sm:h-28 sm:w-full sm:mb-5 md:mr-3 md:h-60 md:w-48' >
                
                  <TelephoneIcon className={'h-1/6 w-1/6 mx-28 mt-6 sm:h-1/2 sm:w-1/2 sm:ml-1 xs:h-1/2 xs:w-1/2 xs:ml-1'}/>
            
                  <div className='sm:mr-40 xs:text-sm xs:mr-10'>
                    <h2 class='mt-5 text-2xl text-bold sm:mb-0 sm:truncate'>Contact Us</h2>
                    <h1 class='mt-5 mb-12 sm:mt-0'>077-1234567</h1>
                  </div>
                
              </div>

              <div class='xs:flex sm:flex h-52 text-center bg-zinc-400 text-md text-dark rounded-xl w-72 opacity-75 dark:text-light box-shadow shadow-2xl hover:shadow-red-600 sm:h-28 sm:w-full sm:mb-5 md:h-60 md:w-48'>
              <MailIcon className={'h-1/6 w-1/6 mx-28 mt-6 sm:h-1/2 sm:w-1/2 sm:ml-1 xs:h-1/2 xs:w-1/2 xs:ml-1'}/>
                <div className='sm:mr-40 xs:text-sm xs:mr-10'>
                  <h2 className='mt-5 text-2xl text-bold'>Mail Us</h2>
                  <h1 className='mt-5 mb-12'>ABCex@gmail.com</h1>
                </div>
                 
              </div>
              
            </div>              
            </Layout>
        </main>     
    </>  
    
  )
  
}
export default contact;

