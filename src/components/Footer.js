import React from 'react'
import Layout from './Layout';
import Link from 'next/link';
import { data } from 'autoprefixer';

const Footer = () => {
  return (
    <footer className='w-full text-lg font-medium text-left border-t-2 border-solid border-dark dark:border-light sm:text-base'>
        <Layout className='flex items-center justify-between py-8 dark:text-light lg:flex-col lg-py-6 '>
            <span>{new Date().getFullYear()}&copy;All Rights Reserved.</span>
            <div className="flex items-center lg:py-2">
            Capture With<span className="px-1 text-2xl">📸</span>
            <Link href="/">Ceylon Enhance</Link>
            </div>
            
            <Link href="/">Say Hello</Link>
        </Layout>
    </footer>
  )
}
export default Footer;