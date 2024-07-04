import { Link } from "react-router-dom";
import { CalendarDaysIcon, HeartIcon, MapPinIcon, TicketIcon } from "@heroicons/react/24/outline";

// DO  THE MAPPING HERE

// THINGS TO BE DONE
// MAKE SEARCH BAR WORK
// DO FILTER BY DATE (datefiltercomponent)
// EVENT DETAILS PAGE

// Alternatively
const EventCard = ({ flier, eventName, date, price, location , handleClick}) => {
  return (
    <div className="flex flex-col relative rounded-[10px] shadow-current overflow-hidden " onClick={handleClick}>
      <div className="relative h-2/3">
        <Link>
          <img src={flier} alt="" className="w-full h-[300px] object-cover" />
          <div className="h-[27px] w-[23px] bg-white absolute top-2 right-2 rounded-[20px] flex justify-center items-center ">
            <HeartIcon className="size-[15px]" />
          </div>
        </Link>
      </div>
      <div className="absolute h-1/3 inset-x-0 bottom-0 flex flex-col justify-end bg-white bg-opacity-100 text-black">
        <div className="px-4 pb-2">
          <div className="flex ">
            <Link><h3 className="text-lg font-semibold ">{eventName}</h3></Link>
          </div>
          <div className="flex ">
            <CalendarDaysIcon className="size-[20px]"/>
            <p className="text-sm"> {date}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between px-8">
          <div className="flex ">
            <TicketIcon className="size-[20px]" />
            <p className="text-sm">{price}</p>
          </div>
          <div className="flex">
            <MapPinIcon className="size-[20px]" />{" "}
            <p className="text-sm">{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
