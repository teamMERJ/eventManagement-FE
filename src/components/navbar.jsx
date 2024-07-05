import { SparkleIcon } from "lucide-react"
import { merjLogo } from "../assets"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
const Navbar = () => {

  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (

      <div className="flex justify-between items-center bg-gradient-to-r from-purple-200 to-orange-100 w-full px-10 py-5">
        {/* <div className=""><SparkleIcon /></div> */}
        <div className="shrink-0"><Link to="/"><img class="h-10 w-10 object-cover rounded-full" src={merjLogo} alt="" /></Link></div>
        <div className="flex gap-x-8 font-semibold text-gray-800">
          <span>{currentTime}</span>
          <span className=" hover:text-purple-600 transition duration-300"><Link to="/events">EVENTS</Link></span>
          <span className=" hover:text-purple-600 transition duration-300"><Link to="/events/create">CREATE EVENT</Link></span>
        </div>

      </div>

  )
}

export default Navbar