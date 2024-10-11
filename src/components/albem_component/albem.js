import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Albem({albem_data}) {

    const CustomLink =({href,title,className=''})=>{
        const router =useRouter();
        
        return(
            <Link href={href} target={'_blank'} className={`${className}`}>
                {title} 
            </Link>
        )
    }

    if(albem_data.id % 2 == 0) {
        return (
            <>
                <div className='item_row'>
                    <Image
                        src={albem_data.albem_image} // Path to your image
                        alt="Description of the image"
                        width={500} // Width of the image
                        height={300} // Height of the image
                        quality={75} // Optional: adjust image quality (default is 75)
                        className='albem_intro_image_left'
                    />
                    <div className='albem_intro_dis_card_right'>
                        <span className='details'>
                            <p className='albem_title dark:text-light'>
                                {albem_data.title}
                            </p>
                            <br></br>
                            <p className='albem_title_details dark:text-light'>
                                {albem_data.description}
                            </p>
                            <br></br>
                            <center>
                                <CustomLink href={{pathname:'/portfolio_albem_gallery', query:{'albemType':albem_data.query}}} title={albem_data.title} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-blue-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"/>                                   
                            </center>
                        </span>
                    </div>
                </div>
                <br></br>
            </>
        )
    }
    else {
        return (
            <>
                <div className='item_row'>
                    <div className='albem_intro_dis_card_left'>
                        <span className='details'>
                            <p className='albem_title dark:text-light'>
                                {albem_data.title}
                            </p>
                            <br></br>
                            <p className='albem_title_details dark:text-light'>
                                {albem_data.description}
                            </p>
                            <br></br>
                            <center>
                                <CustomLink href={{pathname:'/portfolio_albem_gallery', query:{'albemType':albem_data.query}}} title={albem_data.title} className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-blue-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"/>    
                            </center>
                        </span>
                    </div>
                    <Image
                        src={albem_data.albem_image} // Path to your image
                        alt="Description of the image"
                        width={500} // Width of the image
                        height={300} // Height of the image
                        quality={75} // Optional: adjust image quality (default is 75)
                        className='albem_intro_image_right'
                    />
                </div>
                <br></br>
            </>
        )
    }
}