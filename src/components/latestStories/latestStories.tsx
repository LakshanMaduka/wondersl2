import React from 'react'
import TopCard from './TopCard/TopCard'
import SmallCard from './SmallCard/SmallCard'

function LatestStories() {
  return (
    <div className=''>
        <div className='text-darkblue justify-center items-center w-full flex text-4xl uppercase font-semibold line p-10'>Latest Stories</div>
        <TopCard/>
        <div className='mx-24 grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-2 justify-between mt-5'>
        <SmallCard/>
        <SmallCard/>
        <SmallCard/></div>
        
    </div>
  )
}

export default LatestStories