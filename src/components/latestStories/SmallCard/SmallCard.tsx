
import smImage from '../../../../public/img/garadiella.jpg'
import { MdLocationPin } from "react-icons/md";
import ReadMoreButton from '@/components/Buttons/ReadMoreButton';
import Image from "next/image"
function SmallCard() {
  return (
    <div className=' p-3 shadow-lg rounded-lg flex-wrap'>
    <Image src={smImage} alt='topimage' className='rounded-xl h-[250px] w-full object-cover float-left' />
        <div className='mt-3'>

        <h2 className='font-semibold text-xl mt-2'>Garandi Ella</h2>
        
        <div className='text-xl flex items-center '><MdLocationPin /><span className='text-sm '>Distance From Colombo: <span className='font-bold'>174 km</span></span></div>
        <div ><ReadMoreButton/></div>
     </div>
    </div>
  )
}

export default SmallCard
// lg:w-60  xl:w-80  2xl:w-96