import React from 'react'
import Link from 'next/link';
import Logo from './Logo';

const CustomLink =({href,title,className=''})=>{
    return(
        <Link href={href} className={`${className} relative`}>
            {title}
            <span className='inline-block h-[1px] w-full bg-dark absolute left-0  -bottom-0.5'>
                &nbsp;
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
        <CustomLink href="/projects" title="Projects" className='mx-4'/>
        <CustomLink href="/contact" title="Contact" className='ml-4'/>
    </nav>
    <nav>
        <Link href="/" tabIndex={"_blank"}>FaceBook |</Link>
        <Link href="/" tabIndex={"_blank"}>YouTube |</Link>
        <Link href="/" tabIndex={"_blank"}>Instagram |</Link>
        <Link href="/" tabIndex={"_blank"}>TikTok |</Link>
        <Link href="/" tabIndex={"_blank"}>X </Link>
    </nav>
    <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo/>
    </div>

    </header>
    
  )
}
export default Navbar;