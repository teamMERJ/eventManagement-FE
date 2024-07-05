import {
  CalendarDaysIcon,
  HeartIcon,
  MapPinIcon,
  TicketIcon,
} from "@heroicons/react/24/outline";

// EventMgtCard component
const EventMgtCard = ({
  flier,
  eventName,
  date,
  price,
  location,
  onUpdate,
  onDelete,
  handleClick,
}) => {
  return (
    <div
      className="flex flex-col relative rounded-xl shadow-current overflow-hidden bg-white"
      onClick={handleClick}
    >
      <div className="relative h-[200px] rounded-xl">
        <img
          src={flier}
          alt=""
          className="w-full h-[200px] object-fill rounded-xl"
        />
        <div className="h-[27px] w-[27px] bg-white absolute top-2 right-2 rounded-[20px] flex justify-center items-center">
          <HeartIcon className="size-[15px]" />
        </div>
      </div>
      <div className="h-fit flex flex-col gap-y-4 justify-end bg-opacity-100 text-black p-5 w-full">
        <h3 className="text-lg font-semibold">{eventName}</h3>
        <div className="flex gap-x-2">
          <CalendarDaysIcon
            className="size-[20px] text-purple-400"
            strokeWidth={2}
          />
          <p className="text-sm">{date}</p>
        </div>
        <div className="flex gap-x-2">
          <TicketIcon className="size-[20px] text-purple-400" strokeWidth={2} />
          <p className="text-sm">{price}</p>
        </div>
        <div className="flex gap-x-2">
          <MapPinIcon
            className="size-[20px] text-purple-400"
            strokeWidth={2}
          />
          <p className="text-sm">{location}</p>
        </div>
        <div className="flex gap-x-2 mt-2">
          <button
            className="bg-[#EBEEF1] text-white px-4 py-2 rounded-md hover:bg-[#C185F9]"
            onClick={(e) => {
              e.stopPropagation();
              onUpdate();
            }}
          >
            Update
          </button>
          <button
            className="bg-[#EBEEF1] text-white px-4 py-2 rounded-md hover:bg-[#FCB976]"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventMgtCard;
