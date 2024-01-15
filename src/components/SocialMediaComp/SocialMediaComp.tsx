import React from 'react'
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
import Link from 'next/link';
interface textColors{
    color:string
}
function SocialMediaComp({color}:textColors) {
  return (
    <div className={`flex ${color}`}>
          <div className='h-10 w-10 items-center justify-center flex'><IoLogoYoutube className = "hover:text-xl hover:text-lightblue"/></div>
          <div className='h-10 w-10 items-center justify-center flex'> <FaFacebookSquare className = "hover:text-xl hover:text-lightblue"/> </div>
          <div className='h-10 w-10 items-center justify-center flex'> <AiFillInstagram className = "hover:text-xl hover:text-lightblue"/></div>
          <div className='h-10 w-10 items-center justify-center flex'> <FaTwitterSquare className = "hover:text-xl hover:text-lightblue"/></div>
         </div>
  )
}

export default SocialMediaComp