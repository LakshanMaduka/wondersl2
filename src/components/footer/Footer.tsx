import React from 'react'
import Logo from '../NavBar/Logo'
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import Link from 'next/link';
import SocialMediaComp from '../SocialMediaComp/SocialMediaComp';

function Footer() {
  return (
    <div className='h-[150px] bg-darkblue flex'>
      <div className='justify-center items-center hidden sm:flex'>
        <Logo  />
      </div>
      <div className='justify-center items-center  w-full h-full text-white grid grid-rows-3 justify-items-center'>
         <p className=''>Follow US</p>
         <SocialMediaComp color='text-white'/>
         <Link href={"https://lakshanmaduka.netlify.app/"} className='sm:text-md text-sm text-center'>Copyright © 2024 Lakshan Maduka. All Rights reserved.</Link>
      </div>
    </div>
  )
}

export default Footer