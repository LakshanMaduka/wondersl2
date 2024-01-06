import React from 'react'
import Image from "next/image"
import topImage from '../../../../public/img/sigiriya.jpg'
import { MdLocationPin } from "react-icons/md";
import ReadMoreButton from '@/components/Buttons/ReadMoreButton';

function TopCard() {
  return (
    

  <div className=' h-80  flex mx-24 b p-3 shadow-lg rounded-lg overflow-hidden'>
    <Image src={topImage} alt='topimage' className='rounded-xl h-full w-[500px] object-cover' />
        <div className='ml-5'>

        <h2 className='font-semibold text-3xl'>Sigiriya</h2>
        <p className='mb-3 mt-1 w-full text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta, pariatur repudiandae iusto numquam eius, eum ratione nam excepturi facere, animi sint cum nobis. Dolorum asperiores esse culpa doloremque nemo!Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dicta, pariatur repudiandae iusto numquam eius, eum ratione nam excepturi facere, animi sint cum nobis. Dolorum asperiores esse culpa doloremque nemo!</p>
        <div className='text-3xl flex items-center'><MdLocationPin/><span className='text-sm '>Distance From Colombo: <span className='font-bold'>174 km</span></span></div>
        <div ><ReadMoreButton/></div>
   </div>
    </div>
    



  )
}

export default TopCard