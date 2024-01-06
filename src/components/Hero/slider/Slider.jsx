

'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// import required modules

import { EffectCards ,Autoplay,Pagination, Navigation } from 'swiper/modules';
import image1 from "../../../../public/img/sigiriya.jpg";
import image2 from "../../../../public/img/matara.jpg";
import image3 from "../../../../public/img/temple.jpg";
import image4 from "../../../../public/img/garadiella.jpg";

export default function Slider() {
  return (
    <>
     
     <Swiper
        effect={'cards'}
        grabCursor={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
       
        modules={[EffectCards,Autoplay,Pagination, Navigation]}
        className="mySwiper"
        
      >
        <SwiperSlide className='border-2 border-lightblue'><Image src={image1} className='object-cover rounded-lg h-full  ' alt='image1'/></SwiperSlide>
        <SwiperSlide className='border-2 border-lightblue'><Image src={image2} alt='image1' className='object-cover rounded-lg h-full  ' /></SwiperSlide>
        <SwiperSlide className='border-2 border-lightblue'><Image src={image3} alt='image1'className='object-cover rounded-lg h-full  ' /></SwiperSlide>
        <SwiperSlide className='border-2 border-lightblue'><Image src={image4} alt='image1'className='object-cover rounded-lg h-full  ' /></SwiperSlide>
        
      </Swiper>
    
    </>
  );
}








