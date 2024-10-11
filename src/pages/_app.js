import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import '@/styles/globals.css'
import { Montserrat,Cinzel } from 'next/font/google'
import Head from 'next/head'
import portfolio_page_style from '../styles/customCss.css'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const montserrat = Montserrat({
  subsets:['latin'],
  variable:"--font-mont"
})

const cinzel=Cinzel({
  subsets:['latin'],
  variable:'--font-cinzel'
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.variable} ${cinzel.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </main>
    </>

    
  )
}
