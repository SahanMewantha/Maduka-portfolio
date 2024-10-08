import React from 'react'
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import  {FacebookIcon, InstagramIcon, MoonIcon, SunIcon, TiktokIcon, XIcon, YoutubeIcon  } from './Icons';
import { motion } from 'framer-motion';
import useThemeSwitcher from './hooks/useThemeSwitcher';
import { useState } from 'react';

const CustomLink =({href,title,className=''})=>{
    const router =useRouter();
    
    return(
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`inline-block h-[1px] bg-dark absolute left-0  -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath===href ? 'w-full' : 'w-0'}
            dark:bg-light
            `}>&nbsp;
            </span>
        </Link>
    )
}

const CustomMobileLink =({href,title,className='',toggle})=>{
    const router =useRouter();

    const handleClick =()=>{
        toggle();
        router.push(href);
    }
    
    return(
        <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
            {title}
            <span className={`inline-block h-[1px] bg-light absolute left-0  -bottom-0.5
            group-hover:w-full transition-[width] ease duration-300
            ${router.asPath===href ? 'w-full' : 'w-0'}
            dark:bg-dark
            `}>&nbsp;
            </span>
        </button>
    )
}


const Navbar = () => {

    const [mode,setMode]=useThemeSwitcher();
    const[isOpen,setIsOpen]=useState(false);

    const handleClick= ()=>{
        setIsOpen(!isOpen)
    }

  return (
    <header 
    className='relative flex items-center justify-between w-full px-32 py-8 font-medium dark:text-light lg:px-16 md:px-12 sm:px-8'>

    <button className='flex-col items-center justify-center hidden lg:flex' onClick={handleClick}>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm  ${isOpen ? '-rotate-45 -translate-y-1' :'translate-y-0.5'}`}></span>
    </button>

    <div className="flex items-center justify-between w-full lg:hidden">
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

        <button onClick={()=> setMode(mode==="light" ? "dark" : "light")} 
        className={`ml-8 flex items-center justify-center rounded-full p-1
            ${mode==="light" ? "bg-dark text-light" : "bg-light text-dark"}
            `}
        >

            {
                mode==="dark" ? 
                <SunIcon className={"fill-dark"}/>
                :<MoonIcon className={"fill-light"}/>
            }
        </button>

    </nav>

    </div>


   {
    isOpen ?

    <div className="min-w-[70vw] w-full flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
    <nav className="flex flex-col items-center justify-center">
        <CustomMobileLink href="/" title="Home" className='' toggle={handleClick}/>
        <CustomMobileLink href="/about" title="About" className='' toggle={handleClick}/> 
        <CustomMobileLink href="/portfolio" title="Portfolio" className='' toggle={handleClick}/>
        <CustomMobileLink href="/contact" title="Contact" className='' toggle={handleClick}/>
    </nav>
    <nav className='flex flex-wrap items-center justify-center mt-2'>
        <motion.a href="https://x.com" tabIndex={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mr-4 sm:mx-2"><XIcon></XIcon></motion.a>
        
        <motion.a href="https://youtube.com" tabIndex={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-4 sm:mx-2"><YoutubeIcon/></motion.a>
        
        <motion.a href="https://instergram.com" tabIndex={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-4 sm:mx-2"> <InstagramIcon/></motion.a>
        
        <motion.a href="https://tiktok.com" tabIndex={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 mx-4 sm:mx-2"> <TiktokIcon/></motion.a>
        
        <motion.a href="https://facebook.com" tabIndex={"_blank"}
        whileHover={{y:-2}}
        whileTap={{scale:0.9}}
        className="w-6 ml-4 sm:mx-2"><FacebookIcon/> </motion.a>

        <button onClick={()=> setMode(mode==="light" ? "dark" : "light")} 
        className={`ml-8 flex items-center justify-center rounded-full p-1
            ${mode==="light" ? "bg-dark text-light" : "bg-light text-dark"}
            `}
        >

            {
                mode==="dark" ? 
                <SunIcon className={"fill-dark"}/>
                :<MoonIcon className={"fill-light"}/>
            }
        </button>

    </nav>

    </div>

    
    :null
   }


    <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
    </div>

    </header>
    
  )
}
export default Navbar;