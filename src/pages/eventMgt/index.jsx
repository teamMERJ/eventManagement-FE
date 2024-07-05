import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import EventMgtCard from "../events/components/eventMgtCard";
import EventMgtHero from "./eventMgtHero";

const EventsMgt = () => {
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

  return (
    <div className="bg-[rgba(231,234,238,0.83)]">
      <EventMgtHero />

      <div className="px-10 py-10">
      <div className="flex justify-center items-center py-10 px-20 font-sans text-5xl font-medium">Update Events</div>
        {isloading ? (
          <div>Loading...</div>
        ) : (
          <div className="grid grid-cols-3 gap-10 px-10">
            {events.map((event) => (
              <EventMgtCard
                flier={`https://savefiles.org/${event.flier}?shareable_link=287`}
                eventName={event.name}
                date={event.date}
                price={event.price}
                location={event.location}
                handleClick={() => navigate(`/events/details/${event.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventsMgt;
