
// eslint-disable-next-line no-unused-vars

import Explore from "../../../../public/assets/svg/Explore"
import Slider2 from "../slider/Slider2"

function BodyHome() {
  return (
    <div className="absolute top-20  w-full">
        
       <div className="flex  h-88vh ">
        <div className="w-full   flex flex-col items-center  justify-center ">
            <div className="  text-center text-white text-7xl font-darkblow">WELCOME TO <br />BEAUTIFUL SRI LANKA</div>
            <div className="h-11 w-36 duration-200 flex items-center cursor-pointer justify-center bg-white/5 rounded-md border-2 border-white tracking-widest backdrop-filter backdrop-blur-lg mt-10 text-center text-white text-xl hover:border-lightblue hover:text-lightblue ">
                EXPLORE <span> <Explore/> </span>
            </div>
        </div>
        <div className=" mr-20 my-20 flex items-center justify-center">
          <Slider2 />
        </div>
       </div>
       
    </div>
    
  )
}

export default BodyHome