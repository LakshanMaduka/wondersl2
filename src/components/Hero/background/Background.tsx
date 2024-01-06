import Image from "next/image"
import bg from "../../../../public/assets/bg.jpg"

function BackgroundImage() {
  return (
    <div className="w-full absolute z-0" >
    <Image src={bg}  alt="background" className="  opacity-50 top-0 left-0 w-full h-full  object-cover absolute"/>
    {/* <img src= {imgbg} className="  opacity-50 top-0 left-0 w-full h-screen object-cover absolute"  alt="Background"/>  */}
    <div className="w-full h-screen bg-black z-0 "></div>
   </div>
  )
}

export default BackgroundImage