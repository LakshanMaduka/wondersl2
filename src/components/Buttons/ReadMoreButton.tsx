import React from 'react'
import { MdReadMore } from "react-icons/md";
function ReadMoreButton() {
  return (
    <button className='border-2 border-darkblue font-semibold text-darkblue p-1  mt-3 rounded-lg flex items-center hover:bg-lightblue hover:text-white '>Read More<span className='text-3xl ml-1'><MdReadMore/></span></button>
  )
}

export default ReadMoreButton