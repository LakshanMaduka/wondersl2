import React from 'react'
import { MdReadMore } from "react-icons/md";

interface Props {
    className: string;
    name: string;
}
function ExploreButton({className,name}:Props) {
  return (
    <button className={`border-2 border-darkblue font-semibold ${className} text-darkblue p-3  rounded-lg flex items-center hover:bg-lightblue hover:text-white '`}>{name}<span className='text-3xl ml-1'><MdReadMore/></span></button>
  )
}

export default ExploreButton