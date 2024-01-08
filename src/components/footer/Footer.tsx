import React from 'react'
import Logo from '../NavBar/Logo'
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className='h-[150px] bg-darkblue flex'>
      <div className='justify-center items-center flex'>
        <Logo />
      </div>
      <div className='justify-center items-center flex w-full text-white'>
         <p className=''>Follow US</p>
         <div className='text-white flex'>
          <IoLogoYoutube/>
          <FaFacebookSquare/>
          <AiFillInstagram />
          <FaTwitterSquare/>
         </div>
      </div>
    </div>
  )
}

export default Footer