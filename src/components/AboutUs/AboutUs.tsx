import Image from 'next/image'
import React from 'react'
import AboutImg from '../../../public/img/Travel1.jpg'

function AboutUs() {
  return (
    <div className=''>
        <div className='text-darkblue justify-center items-center w-full flex text-4xl uppercase font-semibold line '>ABOUT US</div>
        
       <div className='grid md:grid-cols-[300px,auto] mt-10  md:mx-24 mb-10'>
         <div className='hidden md:flex'><Image className='h-full object-cover bg-left rounded-lg' src={AboutImg} alt=''/></div>
         
         <div className='p-8 text-justify '><h2 className='text-xl font-semibold'>Discovering Sri Lanka Through My Lens</h2>
      
         <p className='pt-4'>{`Hey there, fellow wanderers! I'm Lakshan Maduka, the avid explorer behind WonderSL. Welcome to my corner of the internet where I share the magic and beauty of Sri Lanka through my eyes.`}</p>
         
         {/* <h4 className='text-xl font-semibold'>A Little About Me</h4> */}
         <p className='pt-4'>{`I'm not just a traveler; I'm a storyteller on a mission to unravel the hidden gems and untold tales of Sri Lanka. My journey isn't just about visiting places; it's about capturing moments, savoring flavors, and connecting with the heart and soul of this enchanting island.`}</p>
         {/* <h4 className='text-xl font-semibold'>What Drives Me</h4> */}
         
         {/* <h4 className='text-xl font-semibold'>My Travel Philosophy</h4> */}
         <p className='pt-4'>Life is short, and the world is vast. I live by the mantra of collecting memories, not things. Through my lens, I aim to inspire you to embark on your own adventures, discover new horizons, and appreciate the beauty that surrounds us.</p>
         
         <p className='pt-4'>{`Let's swap stories, share recommendations, and build a community of travel enthusiasts.`}</p>
         </div>
       </div>
    </div>
  )
}

export default AboutUs