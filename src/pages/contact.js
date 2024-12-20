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
            <div className="flex flex-col items-center justify-center min-h-screen p-8 text-gray-900 dark:text-white">
      {/* Page Header */}
      <div className="mb-12 text-center">
        <h1 className="text-6xl font-bold tracking-wide font-cinzel">Contact Us</h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col items-center space-y-8 md:flex-row md:space-y-0 md:space-x-12">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
           <Image src={photo} alt='ce' className='w-full h-auto rounded-2xl'
                                      priority 
                                      size="(max-width:768px)100vw,
                                      (max-width:1200px)50vw,33vw"
            /> 
        </div>

        {/* Contact Details Section */}
        <div className="w-full md:w-1/2">
          <ul className="space-y-6">
            {/* Email */}
            <li className="flex items-center space-x-4">
              <MailIcon className="w-5 h-5 " />
              <div>
                <h3 className="text-lg font-semibold">Stay in the know</h3>
                <p className="text-gray-500">cylonenhance@gmail.com</p>
              </div>
            </li>

            {/* Phone */}
            <li className="flex items-center space-x-4">
              <TelephoneIcon className="w-5 h-5 " />
              <div>
                <h3 className="text-lg font-semibold">Stay in the know</h3>
                <p className="text-gray-500">+94 077 123 4561</p>
              </div>
            </li>

            {/* WhatsApp */}
            <li className="flex items-center space-x-4">
              <WhatsAppIcon className="w-5 h-5 "/>
              <div>
                <h3 className="text-lg font-semibold">Chat with us</h3>
                <p className="text-gray-500">077 123 4561</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>  
                        
            </Layout>
        </main>     
    </>  
    
  )
  
}
export default contact;

