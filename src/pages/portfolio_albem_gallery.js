import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import HireMe from '../components/HireMe';
import Layout from '@/components/Layout';
import Wedding from '@/components/albem_component/Wedding';

// importing data
import { afterSessionData } from '@/components/albem_component/data/afterSessionData';
import { brideData } from '@/components/albem_component/data/brideData';
import { engagementData } from '@/components/albem_component/data/engagementData';
import { eventData } from '@/components/albem_component/data/eventData';
import { preWeddingData } from '@/components/albem_component/data/graduationData';
import { weddingData } from '@/components/albem_component/data/weddingData';
import { motion, useScroll, useSpring } from "framer-motion";
import { TransitionEffect } from '@/components/TransitionEffect';

export default function PortfolioAlbumGallery() {

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    const router = useRouter();

    const [selectedAlbem, setSelectedAlbem] = useState([]);

    useEffect(() => {
        // Log router.query only once it's defined
        if (router.isReady) {

            switch (router.query.albumType) {

                case "wedding":
                    setSelectedAlbem(weddingData);
                    break;
                case "Event":
                    setSelectedAlbem(eventData);
                    break;
                case "Graduation":
                    setSelectedAlbem(preWeddingData);
                    break;
                
            }
        }
      }, [router.isReady, router.query.albumType]);

    
      
    // console.log(selectedAlbem)

    return (
        <>
            
            {
                router.query.albumType ? (
                    
                    <>
                        <Head>
                            <title>Album Gallery/{router.query.albumType}</title>
                            <meta name='description' content=''/>
                        </Head>
                        <TransitionEffect/>
                        <main className='flex items-center w-full min-h-screen text-dark dark:text-light '>

                            <Wedding sendSelectedAlbemData = {selectedAlbem}/>
                            <motion.div className="absolute progress-bar" style={{ scaleX }} />
                        <HireMe/>
                        
                        </main>
                    </>
                ):(
                    <h1>Loading effects</h1>
                )
            }
        </>
    )
}