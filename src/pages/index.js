import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from "../../public/images/profile/developer-pic-1.png"
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className='flex items-center w-full min-h-screen text-dark'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={profilePic} alt='CodeBucks' className='w-full h-auto'/>
            </div>
            <div className='flex flex-col items-center self-center w-1/2'>
              <AnimatedText text="Capture moments, create memories." className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>A passionate photographer dedicated to capturing the essence of life's precious moments.
                With a keen eye for detail and a love for storytelling, I strive to create timeless images that evoke emotion and inspire wonder
              </p>
              <div className='flex items-center self-start mt-2'>
                <Link href='#' target={'_blank'}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark'
                download={true}>Resume <LinkArrow className={"w-6 ml-1"}/></Link>
                <Link href='#' target={'_blank'}
                className='ml-4 text-lg font-medium underline capitalize text-dark'>Contact</Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}