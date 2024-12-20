import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from "framer-motion";

const Album = ({ album_data }) => {
  const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter();
    return (
      <Link href={href} target={'_blank'} className={`${className}`}>
        {title}
      </Link>
    );
  };

  if (album_data.id % 2 === 0) {
    return (
      <div className="flex flex-col items-center w-full gap-4 p-4 my-8 border border-solid shadow-2xl lg:grid lg:grid-cols-2 border-dark rounded-3xl bg-light dark:bg-dark md:p-8 lg:p-12">
        {/* Image Section */}
        <motion.div
          className="w-full max-w-md mx-auto lg:mx-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={{ pathname: '/portfolio_albem_gallery', query: { 'albumType': album_data.query } }}>
            <Image
              src={album_data.album_image}
              className="object-cover w-full h-auto rounded-lg"
              alt="Album Image"
              width={500}
              height={300}
            />
          </Link>
        </motion.div>

        {/* Text Section */}
        <div className="text-center lg:text-left">
          <p className="text-xl font-bold md:text-2xl lg:text-4xl underline-offset-2 albem_title dark:text-light hover:underline">
            {album_data.title}
          </p>
          <p className="mt-4 text-sm font-medium md:text-base dark:text-light">
            {album_data.description}
          </p>
          <div className="mt-6">
            <CustomLink
              href={{ pathname: '/portfolio_albem_gallery', query: { 'albumType': album_data.query } }}
              title={album_data.title}
              className="flex items-center justify-center p-2 px-4 text-sm font-semibold border-2 border-transparent rounded-lg bg-dark text-light md:px-6 md:text-lg hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
            />
          </div>
        </div>
      </div>
    );
  } else {
    return (
        <div className="flex flex-col items-center w-full gap-4 p-4 my-8 border border-solid shadow-2xl lg:grid lg:grid-cols-2 border-dark rounded-3xl bg-light dark:bg-dark md:p-8 lg:p-12">
        {/* Image Section */}
        <motion.div
          className="w-full max-w-md mx-auto lg:mx-0"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href={{ pathname: '/portfolio_albem_gallery', query: { 'albumType': album_data.query } }}>
            <Image
              src={album_data.album_image}
              className="object-cover w-full h-auto rounded-lg"
              alt="Album Image"
              width={500}
              height={300}
            />
          </Link>
        </motion.div>

        {/* Text Section */}
        <div className="text-center lg:text-left">
          <p className="text-xl font-bold md:text-2xl lg:text-4xl underline-offset-2 albem_title dark:text-light hover:underline">
            {album_data.title}
          </p>
          <p className="mt-4 text-sm font-medium md:text-base dark:text-light">
            {album_data.description}
          </p>
          <div className="mt-6">
            <CustomLink
              href={{ pathname: '/portfolio_albem_gallery', query: { 'albumType': album_data.query } }}
              title={album_data.title}
              className="flex items-center justify-center p-2 px-4 text-sm font-semibold border-2 border-transparent rounded-lg bg-dark text-light md:px-6 md:text-lg hover:bg-light hover:text-dark hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default Album;
