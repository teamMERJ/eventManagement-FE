import { FacebookIcon, InstagramIcon, SparkleIcon, TwitterIcon } from "lucide-react"

const Footer = () => {
  return (
    <div className="flex justify-between w-full bg-gradient-to-r from-purple-400 to-orange-300 px-32 py-10 border-t-4">

      <div className="flex gap-4 text-gray-600">
        <SparkleIcon />
      <span><a href="">Events</a></span>
      <span><a href="">contact</a></span>
      <span></span>
      </div>
      <div className="flex gap-4 text-gray-600">
        <a href=""><FacebookIcon /></a>
        <a href=""><TwitterIcon /></a>
        <a href=""><InstagramIcon /></a>
      </div>
      
    </div>
  )
}

export default Footer