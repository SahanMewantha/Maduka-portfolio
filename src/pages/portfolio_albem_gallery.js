import Head from 'next/head';
import { useRouter } from 'next/router';
import HireMe from '../components/HireMe';
import Layout from '@/components/Layout';
import { Wedding } from '@/components/albem_component/Wedding';

export default function PortfolioAlbumGallery() {

    const router = useRouter();
    const { albumType } = router.query;
    return (
        <>
            <Head>
                <title>Album Gallery/{albumType}</title>
                <meta name='description' content=''/>
            </Head>
            <main className='flex items-center w-full min-h-screen text-dark dark:text-light '>
                <Wedding/>
                <HireMe/>
            
            </main>
        </>
    )
}