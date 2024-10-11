import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { banner_img_url } from './banenr_image_url';
import Image from 'next/image';

export default function BannerImageSweeper() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        
      >
        {
          banner_img_url.map(item =>
           <SwiperSlide key={item.id}>
            <Image
              src={item.url} // Path to your image
              alt="Description of the image"
              width={800} // Width of the image
              height={450} // Height of the image
              quality={75} // Optional: adjust image quality (default is 75)
              className='swiper_slide_img '
            />
          </SwiperSlide>)
}
      </Swiper>
    </>
  );
}