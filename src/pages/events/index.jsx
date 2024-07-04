import { Search } from "lucide-react";
import {
  eventEightImg,
  eventElevenImg,
  eventFiveImg,
  eventFourImg,
  eventNineImg,
  eventOneImg,
  eventSevenImg,
  eventSixImg,
  eventTenImg,
  eventThreeImg,
  eventTwelveImg,
  eventTwoImg,
} from "../../assets/events";
import EventCard from "./components/eventCard";
import EventHero from "./components/eventHero";
import EventSearchBar from "./components/eventSearchBar";
import EventDateFilter from "./components/eventDateFilter";

const Events = () => {
  return (
    <div className="bg-[rgba(231,234,238,0.83)]">
      <EventHero />

      <div className="px-10 py-10">
        <div className="flex justify-center">
          <div className="w-1/2">
          <label htmlFor="search" className="sr-only">
            Search
          </label>
          <div className="flex items-center">
            <span>
              <Search className="text-black h-6 w-6" />
            </span>
            <input
              id="search"
              placeholder="search for an event name, location, price"
              type="text"
              name="search"
              className="pl-10 pr-4 border rounded-lg text-black border-gray-300 focus:outline-none "
            />
          </div>
          </div>
          <EventSearchBar/>
          <div className="w-1/2">
          <EventDateFilter />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-5 px-10">
          <EventCard
            flier={eventOneImg}
            eventName={"Coding Competition"}
            date="05/07/2024"
            price="FREE"
            location="MEST Africa, East-Legon"
          />
          <EventCard
            flier={eventTwoImg}
            eventName={"GROW Web Program-Web Development BootCamp"}
            date="04/08/2024"
            price="FREE"
            location="MEST Africa, East-Legon"
          />
          <EventCard
            flier={eventThreeImg}
            eventName={"Hector Weds Esther"}
            date="29/05/24"
            price="By Invitation"
            location="ICGC, Christ-Temple"
          />
          <EventCard
            flier={eventFourImg}
            eventName={"Experience 2024"}
            date="25/09/2024"
            price="GHS 250.00"
            location="Accra Conference Center"
          />
          <EventCard
            flier={eventFiveImg}
            eventName={"Vacation Tour"}
            date="24/07/2024"
            price="GHS 1,000.00"
            location="Volta-Region"
          />
          <EventCard
            flier={eventSixImg}
            eventName={"Homowo"}
            date="29/05/24"
            price="Free"
            location="Teshie"
          />
          <EventCard
            flier={eventSevenImg}
            eventName={"Business Webinar"}
            date="29/05/24"
            price="FREE"
            location="Zoom"
          />
          <EventCard
            flier={eventEightImg}
            eventName={"Cocktail Party"}
            date="19/07/2024"
            price="GHS 200.00"
            location="Pot Belly, East-Legon"
          />
          <EventCard
            flier={eventNineImg}
            eventName={"Movie Event"}
            date="29/05/24"
            price="GHS 200.00"
            location="Silverbird Cinema, Accra"
          />
          <EventCard
            flier={eventTenImg}
            eventName={"Children's Dayout"}
            date="18/07/2024"
            price="GHS 350.00"
            location="Playing Ground"
          />
          <EventCard
            flier={eventElevenImg}
            eventName={"Music Event"}
            date="29/05/24"
            price="free"
            location="Makola"
          />
          <EventCard
            flier={eventTwelveImg}
            eventName={"Dinner Event"}
            date="16/08/2024"
            price="GHS 350.0"
            location="MEST Africa, East-Legon"
          />
        </div>
      </div>
    </div>
  );
};

export default Events;
