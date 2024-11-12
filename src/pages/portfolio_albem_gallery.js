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
import { preWeddingData } from '@/components/albem_component/data/preWeddingData';
import { weddingData } from '@/components/albem_component/data/WeddingData';

export default function PortfolioAlbumGallery() {

    const router = useRouter();

    const [selectedAlbem, setSelectedAlbem] = useState([]);

    useEffect(() => {
        // Log router.query only once it's defined
        if (router.isReady) {

            switch (router.query.albumType) {

                case "wedding":
                    setSelectedAlbem(weddingData);
                    break;
                case "engagement":
                    setSelectedAlbem(engagementData);
                    break;
                case "pre-wedding":
                    setSelectedAlbem(preWeddingData);
                    break;
                case "after-Session":
                    setSelectedAlbem(afterSessionData);
                    break;
                case "bridal-portraits":
                    setSelectedAlbem(brideData);
                    break;
                default:
                    setSelectedAlbem(eventData);
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
                        <main className='flex items-center w-full min-h-screen text-dark dark:text-light '>


                            <Wedding sendSelectedAlbemData = {selectedAlbem}/>
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