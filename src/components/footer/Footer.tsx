import React from 'react'
import Logo from '../NavBar/Logo'
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import Link from 'next/link';

function Footer() {
  return (
    <div className='h-[150px] bg-darkblue flex'>
      <div className='justify-center items-center hidden sm:flex'>
        <Logo  />
      </div>
      <div className='justify-center items-center  w-full h-full text-white grid grid-rows-3 justify-items-center'>
         <p className=''>Follow US</p>
         <div className='text-white  flex   '>
          <div className='h-10 w-10 items-center justify-center flex'><IoLogoYoutube className = "hover:text-xl hover:text-lightblue"/></div>
          <div className='h-10 w-10 items-center justify-center flex'> <FaFacebookSquare className = "hover:text-xl hover:text-lightblue"/> </div>
          <div className='h-10 w-10 items-center justify-center flex'> <AiFillInstagram className = "hover:text-xl hover:text-lightblue"/></div>
          <div className='h-10 w-10 items-center justify-center flex'> <FaTwitterSquare className = "hover:text-xl hover:text-lightblue"/></div>
         </div>
         <Link href={"https://lakshanmaduka.netlify.app/"} className='sm:text-md text-sm text-center'>Copyright © 2024 Lakshan Maduka. All Rights reserved.</Link>
      </div>
    </div>
  )
}

export default Footer