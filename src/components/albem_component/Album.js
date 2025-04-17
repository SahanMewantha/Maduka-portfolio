import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { motion } from "framer-motion";

const Album = ({ album_data }) => {
  const CustomLink = ({ href, title, className = '' }) => {
    const router = useRouter();
    return (
      <Link href={href} className={`${className}`}>
        {title}
      </Link>
    );
  };

  return (
    <div className="w-full p-4 my-8">
      <motion.div 
        className="relative overflow-hidden rounded-2xl shadow-xl"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Link href={{ pathname: '/portfolio_albem_gallery', query: { 'albumType': album_data.query } }}>
          <Image
            src={album_data.album_image}
            className="object-cover w-full transition-transform duration-300 hover:scale-110"
            alt="Album Image"
            width={1200}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="absolute bottom-0 w-full p-6">
              <h2 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl">
                {album_data.title}
              </h2>
              <CustomLink
                href={{ pathname: '/portfolio_albem_gallery', query: { 'albumType': album_data.query } }}
                title="View Gallery"
                className="inline-block px-6 py-2 text-sm font-semibold transition-colors duration-200 border-2 border-white rounded-lg text-light hover:bg-white hover:text-dark md:text-base"
              />
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default Album;