import Image from 'next/image'
import React from 'react'
import ella from '../../../../public/img/garadiella.jpg'
import SocialMediaShare from '@/components/SocialMediaComp/SocialMediaShare'
import SmallCard from '@/components/latestStories/SmallCard/SmallCard'

function page() {
  return (
    <div className='mt-12 mx-10 md:mx-32'>
        <div className='text-3xl font-semibold mb-3'>Title</div>
        <div className='text-md text-ash'>Published on: <span>2024-01-14</span></div>
        <div className='text-md text-ash'>By Lakshan Maduka</div>
       <div className='mt-3 grid md:grid-cols-4 md:grid-rows-3 h-[500px] gap-7'> 
       <Image className='  rounded-lg h-[500px] md:h-full object-cover md:col-span-3 md:row-span-3' alt='content' src={ella}/>
       <Image className=' hidden md:inline-block rounded-lg h-full object-cover ' alt='content' src={ella}/>
       <Image className='hidden md:inline-block rounded-lg h-full object-cover ' alt='content' src={ella}/>
       <Image className='hidden md:inline-block rounded-lg h-full object-cover ' alt='content' src={ella}/>
       
       </div>
      
     <div className='my-10 font-serif text-justify'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et blanditiis ducimus reiciendis sunt at commodi, alias ea? Natus quidem rem consectetur dicta accusamus, voluptate cupiditate aut, doloribus placeat suscipit beatae odio tempore? Quaerat maxime consequatur velit ipsam nostrum officia provident minus suscipit! Iure, odit officiis quia numquam enim soluta in dolor laborum aspernatur, unde esse corrupti? Distinctio voluptatibus, natus nam cum autem ipsa illo excepturi eligendi ullam earum repellat laudantium cupiditate enim. Impedit id eveniet maxime beatae, aliquid odio laboriosam magni voluptatem? Earum dignissimos dolore ducimus rem, ratione doloribus soluta accusamus quod nihil laboriosam, iure placeat nesciunt ea ab laborum cumque sint consectetur deserunt atque dicta! Quod aliquam quos, saepe eveniet minus dolorem accusamus recusandae explicabo, eius atque tenetur minima quisquam animi rerum reiciendis voluptates molestias? Libero, dolores? Voluptatibus nihil quaerat ullam delectus sunt recusandae commodi dolorem molestiae eius velit vero consequuntur nam, porro numquam fugiat voluptates, quisquam similique, ipsum minima et quibusdam nulla. Incidunt pariatur repellendus placeat voluptas quos, repudiandae, natus dolore officiis fugit quaerat dolorem doloribus, voluptatem iure odit vitae eum cum. Nihil consequuntur dolor sed aspernatur similique, perferendis beatae. Repellat voluptatibus assumenda recusandae eius illum officiis architecto? </div>
   <div><SocialMediaShare/></div>
   <div>
    <div className='text-3xl uppercase font-bold mb-10'>Read This Next</div>
    <div className='grid xl:grid-cols-3  md:grid-cols-2 gap-5 mb-10'>
     <SmallCard/>
     <SmallCard/>
     <SmallCard/>
    </div>
   </div>
   
    </div>
  )
}

export default page