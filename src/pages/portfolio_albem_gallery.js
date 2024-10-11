import Head from 'next/head';
import { useRouter } from 'next/router';
import HireMe from '../components/HireMe';
import Layout from '@/components/Layout';

export default function PortfolioAlbemGallery() {

    const router = useRouter();
    const { albemType } = router.query;
    return (
        <>
            <Head>
                <title>Albem Gallery/{albemType}</title>
                <meta name='description' content=''/>
            </Head>
            <main className='flex items-center w-full min-h-screen text-dark dark:text-light '>
                 <Layout>
                    <center>
                        <h1>content</h1>
                    </center>
                 </Layout>
                <HireMe/>
            </main>
        </>
    )
}