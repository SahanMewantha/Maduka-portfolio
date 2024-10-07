import React from 'react'
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import  {FacebookIcon, InstagramIcon, TiktokIcon, XIcon, YoutubeIcon  } from './Icons';
import { motion } from 'framer-motion';

const CustomLink =({href,title,className=''})=>{
    const router =useRouter();
    
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`inline-block h-[1px] bg-dark absolute left-0  -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath===href ? 'w-full' : 'w-0'}
            `}>&nbsp;
            </span>
        </Link>
    )
}

const Navbar = () => {
  return (
    <header 
    className='flex items-center justify-between w-full px-32 py-8 font-medium'>
    <nav>
        <CustomLink href="/" title="Home" className='mr-4'/>
        <CustomLink href="/about" title="About" className='mx-4'/> 
        <CustomLink href="/portfolio" title="Portfolio" className='mx-4'/>
        <CustomLink href="/contact" title="Contact" className='ml-4'/>
    </nav>
    <nav className='flex flex-wrap items-center justify-center'>
        <motion.a href="https://x.com" tabIndex={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mr-4"><XIcon></XIcon></motion.a>
        
        <motion.a href="https://youtube.com" tabIndex={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-4"><YoutubeIcon/></motion.a>
        
        <motion.a href="https://instergram.com" tabIndex={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-4"> <InstagramIcon/></motion.a>
        
        <motion.a href="https://tiktok.com" tabIndex={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-4"> <TiktokIcon/></motion.a>
        
        <motion.a href="https://facebook.com" tabIndex={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 ml-4"><FacebookIcon/> </motion.a>
    </nav>
    <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
    </div>

    </header>
    
  )
}
export default Navbar;