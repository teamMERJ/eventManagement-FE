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
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Events = () => {
  // Define a state to store events
  const [events, setEvents] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  // Define a function to fetch events
  const getEvents = async () => {
    setIsLoading(true);
    const response = await axios.get(
      "https://eventmanagement-be.onrender.com/events"
    );
    console.log(response);
    console.log(response.data[0].date)
    if (response.status === 200) {
      setEvents(response.data);
    } else {
      setEvents([]);
    }
    setIsLoading(false);
  };

  // Get event by running the function to fetch events
  useEffect(() => {
    getEvents();
  }, []);

 const formatDate = (eventDate) => {
  const date = new Date(eventDate)
  return date
 }

 console.log('huhuh', formatDate('2024-09-22T00:00:00.000Z'))



  return (
    <div className="bg-[rgba(231,234,238,0.83)]">
      <EventHero />

      <div className="px-10 py-10">
      <div className="flex justify-center items-center py-10 px-20 font-sans text-5xl font-medium">Discover Events</div>
        <div className="flex justify-center">
          <EventSearchBar />
        </div>

        {isloading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-3 gap-10 px-10">
            {events.map((event) => (
              <EventCard
                flier={`https://savefiles.org/${event.flier}?shareable_link=287`}
                eventName={event.name}
                date={event.date}
                price={event.price}
                location={event.location}
                handleClick={() => navigate(`/events/details/${event.id}`)}
              />
            ))}
            {/* <EventCard
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
            /> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Events;
