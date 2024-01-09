import AboutUs from '@/components/AboutUs/AboutUs'
import Hero from '@/components/Hero/Hero'
import LatestStories from '@/components/latestStories/latestStories'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Hero />
      <LatestStories />
      <AboutUs />
    </>
    
  )
}
