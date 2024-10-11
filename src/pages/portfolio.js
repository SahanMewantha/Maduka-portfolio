import Head from 'next/head';
import Albem from '../components/albem_component/albem';
import { data } from '../components/albem_component/albem_data';

export default function Portfolio() {

    return (
        <>
            <Head>
                <title>Portfolio</title>
                <meta name='description' content=''/>
            </Head>
            <main className='portfolio_page_layout'>
                {
                    data.map(ele => <Albem key={ele.id} albem_data={ele}></Albem>)
                }
            </main>
        </>
    )
}