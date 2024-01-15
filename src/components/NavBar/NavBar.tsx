import Link from 'next/link'
import React from 'react'
import Logo from './Logo'
import {FiMenu} from 'react-icons/fi'
export interface links {
  name: string
  link:string
}
interface objArray{
navArray:links[]
}
function NavBar({navArray}:objArray) {

    // var links = [
    //     {name:"HOME",link:"/"},
    //     {name:"STORIES",link:"/stories"},
    //     {name:"HOTELS",link:"/hotels"},
    //     {name:"ABOUT US",link:"#about"}
    //   ]
      return (
        <div className=" absolute  z-10 w-full justify-between">
           <div className=" flex    w-full items-center ">
            <Logo/>
            <div className="w-2/5"></div>
              <div className=" flex-grow mr-5">
              <ul className="md:flex  hidden   text-white justify-between">
             {navArray.map((item,index)=> <Link key={index} href= {item.link} className="w-32 cursor-pointer duration-200 h-10 text-center tracking-widest hover:border-2 text-lg inline-block px-2 py-1 rounded-md hover:backdrop-filter hover:backdrop-blur-lg hover:bg-white/10 hover:border-lightblue hover:text-lightblue" >{item.name}</Link>)}
              </ul>
              </div>
              <div className='md:hidden flex text-white pr-10 text-2xl'>
              <FiMenu />
            </div>
           </div>
           
    
        </div>
      )
  
}

export default NavBar