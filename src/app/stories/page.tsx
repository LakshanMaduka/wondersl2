import ExploreButton from '@/components/Buttons/ExploreButton'
import TextCard from '@/components/TextCard/TextCard'
import TopCard from '@/components/latestStories/TopCard/TopCard'
import React from 'react'

function Page() {
  return (
    <div className=''>
      <div className=''>
        <h1 className='text-3xl ml-24 my-10 uppercase font-semibold text-darkblue'>Stories</h1>
      <div className='grid  md:grid-cols-2 lg:grid-cols-3 gap-5 md:mx-24 mx-5'>
      <TextCard/>
      <TextCard/>
      <TextCard/>
      <TextCard/>
      <TextCard/>
      <TextCard/>
      </div>
      <div className='w-full flex justify-center items-center'><ExploreButton className='m-10 ' name='More Stories'/></div>
      </div>
    </div>
  )
}

export default Page