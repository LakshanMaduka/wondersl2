import Image from "next/image"
import bg from "../../../public/assets/bg.jpg"
import BackgroundImage from "./background/Background"
import BodyHome from "./Body/BodyHome"


function Hero() {
  return (
    <div className="h-screen w-full relative rounded-b-2xl">
        <BackgroundImage/>
        <BodyHome/>
    </div>
  )
}

export default Hero