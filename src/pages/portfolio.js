import Head from 'next/head';
import Album from '../components/albem_component/Album';
import { data } from '../components/albem_component/data/album_data';
import { TransitionEffect } from '@/components/TransitionEffect';

export default function Portfolio() {

    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name='description' content=''/>
            </Head>
            <TransitionEffect/>
            <main className='portfolio_page_layout'>
                {
                    data.map(ele => <Album key={ele.id} album_data={ele}></Album>)
                }
            </main>
        </>
    )
}