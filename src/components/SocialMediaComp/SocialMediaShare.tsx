import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitterSquare } from "react-icons/fa";
function SocialMediaShare() {
  return (
    <div className='grid grid-cols-3 gap-10 mb-10 '>
        <div className='h-[50px] flex justify-center items-center text-xl border-2 rounded-lg hover:text-lightblue cursor-pointer'>
            <FaFacebookSquare/> <span className='uppercase pl-3 text-sm'> Share</span>
        </div>
        <div className='h-[50px] flex justify-center items-center text-xl border-2 rounded-lg hover:text-lightblue cursor-pointer'><AiFillInstagram  /> <span className='uppercase pl-2 text-sm'> Share</span></div>
        <div className='h-[50px] flex justify-center items-center text-xl border-2 rounded-lg hover:text-lightblue cursor-pointer'><FaTwitterSquare/> <span className='uppercase pl-2 text-sm'> Tweet</span></div>
    </div>
  )
}

export default SocialMediaShare