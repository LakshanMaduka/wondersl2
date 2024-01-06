'use client'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './style2.css';
import image1 from "../../../../public/img/sigiriya.jpg";
import image2 from "../../../../public/img/matara.jpg";
import image3 from "../../../../public/img/temple.jpg";
import image4 from "../../../../public/img/garadiella.jpg";
import image5 from "../../../../public/img/galle.jpg";
// import required modules
import { EffectCoverflow, Pagination ,Autoplay } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
       autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
        
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'2'}
        coverflowEffect={{
          rotate: 10,
          stretch: 7,
          depth: 600,
          modifier: 1,
          slideShadows: true,
          scale:1
        }
        
    }loop={true}
        
        pagination={true}
        modules={[EffectCoverflow, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='border-2  border-white hover:border-lightblue rounded-lg'>
        <Image src={image1} className='object-cover  h-full  rounded-lg ' alt='image1'/>
        </SwiperSlide>
        <SwiperSlide className='border-2 border-white hover:border-lightblue rounded-lg'>
        <Image src={image2} className='object-cover rounded-lg h-full  ' alt='image1'/>
        </SwiperSlide>
        <SwiperSlide className='border-2 border-white hover:border-lightblue rounded-lg'>
        <Image src={image3} className='object-cover rounded-lg h-full  ' alt='image1'/>
        </SwiperSlide>
        <SwiperSlide className='border-2 border-white hover:border-lightblue rounded-lg'>
        <Image src={image4} className='object-cover rounded-lg h-full  ' alt='image1'/>
        </SwiperSlide>
        <SwiperSlide className='border-2 border-white hover:border-lightblue rounded-lg'>
        <Image src={image5} className='object-cover rounded-lg h-full  ' alt='image1'/>
        </SwiperSlide>
       
       
      </Swiper>
    </>
  );
}