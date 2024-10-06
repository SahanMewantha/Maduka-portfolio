import React from 'react'
import Layout from './Layout';
import Link from 'next/link';
import { data } from 'autoprefixer';

const Footer = () => {
  return (
    <footer className='w-full text-lg font-medium text-left border-t-2 border-solid border-dark '>
        <Layout className='flex items-center justify-between py-8'>
            <span>{new Date().getFullYear()}&copy;All Rights Reserved.</span>
            <div className="flex items-center">
            Capture With<span className="px-1 text-2xl">📸</span>
            <Link href="/">Ceylone Enhance</Link>
            </div>
            
            <Link href="/">Say Hello</Link>
        </Layout>
    </footer>
  )
}
export default Footer;