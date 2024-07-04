import { SparkleIcon } from "lucide-react"
import { merjLogo } from "../assets"

const Navbar = () => {
  return (

      <div className="flex justify-between items-center bg-gradient-to-r from-purple-200 to-orange-100 w-full px-10 py-5">
        {/* <div className=""><SparkleIcon /></div> */}
        <div className="shrink-0"><img class="h-10 w-10 object-cover rounded-full" src={merjLogo} alt="" /></div>
        <div className="flex gap-x-8 font-semibold ">
          {/* <span>date</span> */}
          <span><a href="/events">Events</a></span>
          <span><a href="/events/create">Create Event</a></span>
          <span><a href="">Log In</a></span>
          <button><a href="">Sign Up</a></button>
        </div>

      </div>

  )
}

export default Navbar